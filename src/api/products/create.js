<<<<<<< HEAD
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export const createProduct = async (productData) => {
  try {
=======
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export const createProduct = async (productData) => {
  try {
    // Prepare data for Firestore
>>>>>>> 29874944f90eba266cb612ecbc4c576d9af4f7f9
    const firestoreData = {
      "company-head": {
        "company-name": productData["company-head"]["company-name"],
        "owner-email": productData["company-head"]["owner-email"],
        "owner-name": productData["company-head"]["owner-name"],
<<<<<<< HEAD
        "phone-no": productData["company-head"]["phone-no"],
      },
      certification: productData.certification,
=======
        "phone-no": productData["company-head"]["phone-no"]
      },
      certification: productData.certification, // These are now URLs directly
>>>>>>> 29874944f90eba266cb612ecbc4c576d9af4f7f9
      product: {
        name: productData.product.name,
        category: productData.product.category,
        description: productData.product.description,
        brand: productData.product.brand,
        price: productData.product.price,
        product_link: productData.product.product_link,
<<<<<<< HEAD
        image_url: productData.product.image_url,
      },
      tags: productData.tags,
      status: "disapproved",
      createdAt: serverTimestamp(),
    };

    const collectionRef = collection(db, "eco-products");
=======
        image_url: productData.product.image_url // This is now a URL directly
      },
      tags: productData.tags,
      status: 'disapproved',
      createdAt: serverTimestamp()
    };

    // Add to Firestore
    const collectionRef = collection(db, 'eco-products');
>>>>>>> 29874944f90eba266cb612ecbc4c576d9af4f7f9
    const docRef = await addDoc(collectionRef, firestoreData);

    return {
      success: true,
      productId: docRef.id,
<<<<<<< HEAD
      message: "Product created successfully",
    };
  } catch (error) {
    console.error("Error creating product:", error);
    return {
      success: false,
      error: error.message || "Failed to create product",
    };
  }
};
=======
      message: 'Product created successfully'
    };
  } catch (error) {
    console.error('Error creating product:', error);
    return {
      success: false,
      error: error.message || 'Failed to create product'
    };
  }
}; 
>>>>>>> 29874944f90eba266cb612ecbc4c576d9af4f7f9
