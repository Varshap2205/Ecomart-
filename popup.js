// Import your React components and initialize your React app here
import React from "react";
import ReactDOM from "react-dom";
import App from "./pages/_app";

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const [tab] = await chrome.tabs.query({
      active: true,
      currentWindow: true,
    });

    const result = await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: () => {
        const title = document.title;
        const description =
          document.querySelector('meta[name="description"]')?.content ||
          "No description available";
        const isAmazonProduct =
          window.location.href.includes("amazon") &&
          window.location.href.includes("/dp/");
        const productTitle =
          document.getElementById("productTitle")?.textContent?.trim() || title;
        const price =
          document.querySelector(".a-price-whole")?.textContent ||
          "Price not found";

        return {
          title: productTitle,
          description,
          isAmazonProduct,
          price,
        };
      },
    });

    const data = result[0].result;

    // Update the DOM
    document.getElementById("pageTitle").textContent = data.isAmazonProduct
      ? "Amazon Product Details"
      : "Current Page Info";
    document.getElementById("productTitle").textContent = data.title;
    document.getElementById("description").textContent = data.description;

    if (data.isAmazonProduct) {
      document.getElementById("priceSection").style.display = "block";
      document.getElementById("price").textContent = `$${data.price}`;
    }
  } catch (error) {
    console.error("Error:", error);
    document.getElementById("productTitle").textContent =
      "Error getting page info";
    document.getElementById("description").textContent = "Please try again";
  }
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
