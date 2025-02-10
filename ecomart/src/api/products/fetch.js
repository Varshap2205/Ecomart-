import { db } from '@/lib/firebase';
import { collection, getDocs, query, orderBy, where, addDoc, serverTimestamp } from 'firebase/firestore';

export const getAllProducts = async () => {
  try {
    const collectionRef = collection(db, 'eco-products');
    const q = query(collectionRef, orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(q);
    
    const products = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    return {
      success: true,
      products,
      message: 'Products fetched successfully'
    };
  } catch (error) {
    console.error('Error fetching products:', error);
    return {
      success: false,
      products: [],
      error: error.message || 'Failed to fetch products'
    };
  }
};

export const getProductsByStatus = async(status = 'disapproved') => {
    try {
      const collectionRef = collection(db, 'eco-products');
      const q = query(
        collectionRef, 
        where('status', '==', status)
      );
      
      const querySnapshot = await getDocs(q);
      const products = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
  
      return {
        success: true,
        products,
        message: `Products with status ${status} fetched successfully`
      };
    } catch (error) {
      console.error('Error fetching products:', error);
      return {
        success: false,
        products: [],
        error: error.message || 'Failed to fetch products'
      };
    }
};

export const createProduct = async (productData) => {
    try {
        const collectionRef = collection(db, 'eco-products');
        
        // Add timestamp to the data
        const dataToSubmit = {
            ...productData,
            createdAt: serverTimestamp()
        };
        
        const docRef = await addDoc(collectionRef, dataToSubmit);
        
        return {
            success: true,
            productId: docRef.id,
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