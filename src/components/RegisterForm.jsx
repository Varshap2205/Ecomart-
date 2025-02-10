'use client';
import { useState } from 'react';
import { createProduct } from "@/api/products/create";
import { useRouter } from 'next/navigation';
import SubmissionSuccess from "@/components/SubmissionSuccess";

export default function RegisterForm() {
  const [formData, setFormData] = useState({
<<<<<<< HEAD
=======
    // Company Head Details
>>>>>>> 29874944f90eba266cb612ecbc4c576d9af4f7f9
    companyName: '',
    ownerEmail: '',
    ownerName: '',
    phoneNo: '',
    
<<<<<<< HEAD
=======
    // Product Details
>>>>>>> 29874944f90eba266cb612ecbc4c576d9af4f7f9
    productName: '',
    category: '',
    productDescription: '',
    brandName: '',
    productImage: '',
    price: '',
    productLink: '',
    certifications: [{ id: 1, url: '', name: '' }],
    tags: []
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const router = useRouter();

<<<<<<< HEAD
=======
  // Handlers
>>>>>>> 29874944f90eba266cb612ecbc4c576d9af4f7f9
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const productData = {
        certification: formData.certifications
          .filter(cert => cert.url)
          .map(cert => cert.url),
        "company-head": {
          "company-name": formData.companyName,
          "owner-email": formData.ownerEmail,
          "owner-name": formData.ownerName,
          "phone-no": formData.phoneNo
        },
        product: {
          name: formData.productName,
          category: formData.category,
          description: formData.productDescription,
          brand: formData.brandName,
          price: formData.price,
          product_link: formData.productLink,
          image_url: formData.productImage
        },
        tags: formData.tags
      };

      const result = await createProduct(productData);

      if (result.success) {
        setSuccess(true);
        setTimeout(() => {
          router.push('/submission-success');
        }, 2000);
      } else {
        setError(result.error || 'Failed to register product');
      }
    } catch (error) {
      setError(error.message || 'An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCertificateChange = (certId, url) => {
    setFormData(prev => ({
      ...prev,
      certifications: prev.certifications.map(cert => 
        cert.id === certId 
          ? { ...cert, url: url, name: `Certificate ${certId}` }
          : cert
      )
    }));
  };

  const addCertificate = () => {
    const newId = Math.max(...formData.certifications.map(cert => cert.id)) + 1;
    setFormData(prev => ({
      ...prev,
      certifications: [...prev.certifications, { id: newId, url: '', name: '' }]
    }));
  };

  const removeCertificate = (id) => {
    if (formData.certifications.length > 1) {
      setFormData(prev => ({
        ...prev,
        certifications: prev.certifications.filter(cert => cert.id !== id)
      }));
    }
  };

  const handleTagInputKeyDown = (e) => {
    if (e.key === 'Enter' && e.target.value.trim()) {
<<<<<<< HEAD
      e.preventDefault();
=======
      e.preventDefault(); // Prevent form submission
>>>>>>> 29874944f90eba266cb612ecbc4c576d9af4f7f9
      const newTag = e.target.value.trim();
      if (!formData.tags.includes(newTag)) {
        setFormData(prev => ({
          ...prev,
          tags: [...prev.tags, newTag]
        }));
      }
<<<<<<< HEAD
      e.target.value = '';
=======
      e.target.value = ''; // Clear input after adding tag
>>>>>>> 29874944f90eba266cb612ecbc4c576d9af4f7f9
    }
  };

  const handleTagRemove = (tagToRemove) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }));
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
        <h2 className="text-3xl font-bold mb-6 text-center text-green-600">Product Registration</h2>

    {/* Company Details Section */}
    <div className="mb-8 bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4 text-gray-700">Company Details</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Company Name*</label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-gray-100"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Owner Name*</label>
              <input
                type="text"
                name="ownerName"
                value={formData.ownerName}
                onChange={handleChange}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-gray-100"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Owner Email*</label>
              <input
                type="email"
                name="ownerEmail"
                value={formData.ownerEmail}
                onChange={handleChange}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-gray-100"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Phone Number*</label>
              <input
                type="tel"
                name="phoneNo"
                value={formData.phoneNo}
                onChange={handleChange}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-gray-100"
              />
            </div>
          </div>
        </div>


                {/* Product Details Section */}
                <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-gray-700">Product Details</h3>
          <div className="grid grid-cols-2 gap-4">
            {/* Basic Product Info */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Product Name *
              </label>
              <input
                type="text"
                name="productName"
                value={formData.productName}
                onChange={handleChange}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter product name"
              />
            </div>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Category *
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">Select a category</option>
                <option value="stationery">Stationery</option>
                <option value="homeDecor">Home Decor</option>
                <option value="clothing">Clothing</option>
                <option value="electronics">Electronics</option>
                <option value="beauty">Beauty & Personal Care</option>
                <option value="food">Food & Beverages</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="mb-4 col-span-2">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Product Description *
              </label>
              <textarea
                name="productDescription"
                value={formData.productDescription}
                onChange={handleChange}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                rows="4"
                placeholder="Enter product description"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Brand Name *
              </label>
              <input
                type="text"
                name="brandName"
                value={formData.brandName}
                onChange={handleChange}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter brand name"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Price (₹) *
              </label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
                min="0"
                step="0.01"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter price"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Product Link *
              </label>
              <input
                type="url"
                name="productLink"
                value={formData.productLink}
                onChange={handleChange}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter product URL"
              />
            </div>

            {/* Product Image Upload */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Product Image *
              </label>
              <input
                type="text"
                name="productImage"
                value={formData.productImage}
                onChange={handleChange}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter product image URL"
              />
            </div>

            {/* Certificates Section */}
            <div className="col-span-2 mb-6">
              <div className="flex justify-between items-center mb-4">
                <label className="block text-gray-700 text-sm font-bold">
                  Certifications (URL) *
                </label>
                <button
                  type="button"
                  onClick={addCertificate}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700"
                >
                  Add Certificate
                </button>
              </div>

              <div className="space-y-4">
                {formData.certifications.map((cert) => (
                  <div key={cert.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span>Certificate {cert.id}</span>
                      {formData.certifications.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeCertificate(cert.id)}
                          className="text-red-600 hover:text-red-800"
                        >
                          Remove
                        </button>
                      )}
                    </div>
                    <input
                      type="url"
                      placeholder="Enter certificate URL"
                      value={cert.url}
                      onChange={(e) => handleCertificateChange(cert.id, e.target.value)}
                      required={cert.id === 1}
                      className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Tags Section */}
            <div className="col-span-2 mb-4">
  <label className="block text-gray-700 text-sm font-bold mb-2">
    Tags
  </label>
  <div className="relative">
    <input
      type="text"
      required
      placeholder="Type a tag and press Enter"
      onKeyDown={handleTagInputKeyDown}
      className="block w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
    />
  </div>
  
              {/* Selected Tags */}
              <div className="mt-2 flex flex-wrap gap-2">
    {formData.tags.map(tag => (
      <span
        key={tag}
        className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800"
      >
        {tag}
        <button
          type="button"
          onClick={() => handleTagRemove(tag)}
          className="ml-2 inline-flex items-center p-0.5 hover:bg-green-200 rounded-full"
        >
          <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </span>
    ))}
  </div>
  <p className="text-sm text-gray-500 mt-1">
    Type a tag and press Enter to add it
  </p>
</div>

        <div className="flex items-center justify-center">
          <button
            type="submit"
            disabled={loading}
            className={`
              flex items-center justify-center
              ${loading 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-green-500 hover:bg-green-700'
              }
              text-white font-bold py-3 px-6 rounded-lg 
              focus:outline-none focus:shadow-outline 
              transition-colors duration-200
              min-w-[200px]
            `}
          >
            {loading ? (
              <>
                <svg 
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24"
                >
                  <circle 
                    className="opacity-25" 
                    cx="12" 
                    cy="12" 
                    r="10" 
                    stroke="currentColor" 
                    strokeWidth="4"
                  />
                  <path 
                    className="opacity-75" 
                    fill="currentColor" 
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Registering...
              </>
            ) : (
              'Register Product'
            )}
          </button>
        </div>
        
        {/* Success Message */}
        {success && (
          <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-lg text-center">
            Product registered successfully! Redirecting...
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-lg text-center">
            {error}
          </div>
        )}
      </div>
      </form>
    </div>
  );
}