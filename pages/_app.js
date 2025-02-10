import "../styles/globals.css";
import { useEffect, useState } from "react";
import { analyseProduct } from "../utils/geminiService";
import SustainabilityAnalysis from "../components/SustainabilityAnalysis";
import SustainabilityLoading from "../components/SustainabilityLoading";
import ErrorMessage from "../components/ErrorMessage";
import { db } from "../utils/firebase";
import { collection, getDocs } from "firebase/firestore";
import SustainableAlternatives from "../components/SustainableAlternatives";
import SustainableAlternativesSkeleton from "../components/SustainableAlternativesSkeleton";

function App({ Component, pageProps }) {
  const [analysis, setAnalysis] = useState(null);
  const [sustainableAlternatives, setSustainableAlternatives] = useState([]);
  const [isAlternativesLoading, setIsAlternativesLoading] = useState(false);
  const [pageTitle, setPageTitle] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const SUPPORTED_SITES = [
    "amazon.com",
    "amazon.in",
    "flipkart.com",
    "myntra.com",
    "ajio.com",
  ];

  const isSupportedSite = (url) => {
    return SUPPORTED_SITES.some((site) => url.includes(site));
  };

  const getSustainableAlternatives = async (analysisResult) => {
    try {
      console.log("Analysis result received:", analysisResult);

      if (!db) {
        console.error("Firestore database not initialized");
        return [];
      }

      const ecoProductsRef = collection(db, "eco-products");
      const querySnapshot = await getDocs(ecoProductsRef);

      if (querySnapshot.empty) {
        console.log("No documents found in eco-products collection");
        return [];
      }

      const isProductMatch = (product, analysisResult) => {
        if (!analysisResult?.title) {
          console.log("No analysis title provided");
          return false;
        }

        const pageTitle = (analysisResult.title || "").toLowerCase().trim();
        console.log("Checking page title:", pageTitle);

        if (!product.tags || !Array.isArray(product.tags)) {
          console.log(
            "Product has no valid tags array:",
            product.product?.name
          );
          return false;
        }

        const match = product.tags.some((tag) => {
          if (!tag) return false;
          const normalizedTag = tag.toLowerCase().trim();
          const found = pageTitle.includes(normalizedTag);

          if (found) {
            console.log("Match found:", {
              pageTitle,
              tag: normalizedTag,
              productName: product.product?.name,
            });
          }
          return found;
        });

        return match;
      };

      const firstDoc = querySnapshot.docs[0]?.data();
      console.log("First document data:", {
        name: firstDoc?.product?.name,
        tags: firstDoc?.tags,
        category: firstDoc?.product?.category,
      });

      const alternatives = querySnapshot.docs
        .map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            certification: data.certification || [],
            companyHead: data["company-head"] || {},
            product: data.product || {},
            tags: data.tags || [],
          };
        })
        .filter((product) => isProductMatch(product, analysisResult));

      console.log("Matching results:", {
        totalProducts: querySnapshot.docs.length,
        matchingProducts: alternatives.length,
        matches: alternatives.map((a) => ({
          name: a.product.name,
          category: a.product.category,
          tags: a.tags,
        })),
      });

      return alternatives;
    } catch (error) {
      console.error("Error in getSustainableAlternatives:", {
        name: error.name,
        message: error.message,
        code: error.code,
        stack: error.stack,
      });
      setError("database");
      return [];
    }
  };

  useEffect(() => {
    const getCurrentTab = async () => {
      try {
        setLoading(true);
        setError(null);
        setIsAlternativesLoading(true);

        const tabs = await chrome.tabs.query({
          active: true,
          currentWindow: true,
        });

        if (!tabs?.[0]) {
          setError("notab");
          return;
        }

        const tab = tabs[0];
        setPageTitle(tab.title || tab.url);

        if (!isSupportedSite(tab.url)) {
          setError("unsupported");
          return;
        }

        const productData = {
          title: tab.title,
          url: tab.url,
        };

        const result = await analyseProduct(productData);
        setAnalysis(result);

        const alternatives = await getSustainableAlternatives(productData);
        console.log("Found alternatives:", alternatives);

        setSustainableAlternatives(alternatives);
      } catch (error) {
        console.error("Error in getCurrentTab:", error);
        setError(error.message);
      } finally {
        setLoading(false);
        setIsAlternativesLoading(false);
      }
    };

    getCurrentTab();
  }, []);

  return (
    <div>
      {loading ? (
        <SustainabilityLoading />
      ) : error ? (
        <ErrorMessage error={error} supportedSites={SUPPORTED_SITES} />
      ) : (
        <>
          <SustainabilityAnalysis analysis={analysis} />
          {isAlternativesLoading ? (
            <SustainableAlternativesSkeleton />
          ) : (
            <SustainableAlternatives alternatives={sustainableAlternatives} />
          )}
        </>
      )}
    </div>
  );
}
export default App;
