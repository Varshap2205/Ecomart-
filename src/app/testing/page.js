<<<<<<< HEAD
"use client";
=======
"use client"
>>>>>>> 29874944f90eba266cb612ecbc4c576d9af4f7f9

import { getProductsByStatus, createProduct } from "@/api/products/fetch";
import { useState } from "react";
import { testProduct } from "@/api/products/testData";

export default function TestingPage() {
<<<<<<< HEAD
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  const getProductsByStatusFunction = async () => {
    try {
      const result = await getProductsByStatus("approved");
      console.log(result);
      if (result.success) {
        setProducts(result.products);
        setError(null);
      } else {
        setError(result.error);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
      setError(error.message);
    }
  };

  const createProductFunction = async () => {
    try {
      const result = await createProduct(testProduct);
      console.log(result);
      if (result.success) {
        setMessage("Product created successfully!");
        setError(null);
        getProductsByStatusFunction();
      } else {
        setError(result.error);
      }
    } catch (error) {
      console.error("Error creating product:", error);
      setError(error.message);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Testing Page</h1>
      <div className="space-x-4">
        <button
          onClick={getProductsByStatusFunction}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Fetch Approved Products
        </button>
        <button
          onClick={createProductFunction}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Create Product
        </button>
      </div>

      {message && <div className="text-green-500 mt-4">{message}</div>}

      {error && <div className="text-red-500 mt-4">Error: {error}</div>}

      {products.length > 0 && (
        <div className="mt-4">
          <h2 className="text-xl font-bold mb-2">Products:</h2>
          {products.map((product) => (
            <div key={product.id} className="border p-4 mb-2 rounded">
              <h3 className="font-bold">{product.product?.name}</h3>
              <p>Status: {product.status}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
=======
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [message, setMessage] = useState(null);

    const getProductsByStatusFunction = async () => {
        try {
            const result = await getProductsByStatus('approved');
            console.log(result);
            if (result.success) {
                setProducts(result.products);
                setError(null);
            } else {
                setError(result.error);
            }
        } catch (error) {
            console.error("Error fetching products:", error);
            setError(error.message);
        }
    }

    const createProductFunction = async () => {
        try {
            const result = await createProduct(testProduct);
            console.log(result);
            if (result.success) {
                setMessage("Product created successfully!");
                setError(null);
                // Refresh the product list
                getProductsByStatusFunction();
            } else {
                setError(result.error);
            }
        } catch (error) {
            console.error("Error creating product:", error);
            setError(error.message);
        }
    }

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Testing Page</h1>
            <div className="space-x-4">
                <button 
                    onClick={getProductsByStatusFunction}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Fetch Approved Products
                </button>
                <button 
                    onClick={createProductFunction}
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                >
                    Create Product
                </button>
            </div>

            {message && (
                <div className="text-green-500 mt-4">
                    {message}
                </div>
            )}

            {error && (
                <div className="text-red-500 mt-4">
                    Error: {error}
                </div>
            )}

            {products.length > 0 && (
                <div className="mt-4">
                    <h2 className="text-xl font-bold mb-2">Products:</h2>
                    {products.map(product => (
                        <div key={product.id} className="border p-4 mb-2 rounded">
                            <h3 className="font-bold">{product.product?.name}</h3>
                            <p>Status: {product.status}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
>>>>>>> 29874944f90eba266cb612ecbc4c576d9af4f7f9
}
