import { useState, useEffect } from 'react';
import { EyeIcon, CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline';
import { getAllProducts, getProductsByStatus } from '@/api/products/fetch';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export default function Companies() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [statusFilter, setStatusFilter] = useState('all');

  useEffect(() => {
    fetchProducts();
  }, [statusFilter]);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      let response;
      
      if (statusFilter === 'all') {
        response = await getAllProducts();
      } else {
        response = await getProductsByStatus(statusFilter);
      }

      if (response.success) {
        setProducts(response.products);
      } else {
        setError(response.error);
      }
    } catch (error) {
      setError('Failed to fetch products');
    } finally {
      setLoading(false);
    }
  };

  const toggleStatus = async (productId, currentStatus) => {
    try {
      const newStatus = currentStatus === 'approved' ? 'disapproved' : 'approved';
      const productRef = doc(db, 'eco-products', productId);
      await updateDoc(productRef, {
        status: newStatus,
        updatedAt: new Date().toISOString()
      });
      fetchProducts();
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-green-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-xl">
          <div className="text-red-500 text-xl font-semibold">Error</div>
          <p className="mt-2 text-gray-600">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="mt-2 text-sm text-gray-600">
            Monitor and manage eco-friendly products
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 mb-8">
          {console.log('All products:', products)}
          {console.log('Approved:', products.filter(p => p.status === 'approved'))}
          {console.log('Disapproved:', products.filter(p => p.status === 'disapproved'))}
          
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <dt className="text-sm font-medium text-gray-500 truncate">Total Products</dt>
              <dd className="mt-1 text-3xl font-semibold text-gray-900">
                {products.filter(p => p.status === 'approved' || p.status === 'disapproved').length}
              </dd>
            </div>
          </div>
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <dt className="text-sm font-medium text-gray-500 truncate">Approved Products</dt>
              <dd className="mt-1 text-3xl font-semibold text-green-600">
                {products.filter(p => p.status === 'approved').length}
              </dd>
            </div>
          </div>
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <dt className="text-sm font-medium text-gray-500 truncate">Pending Approval</dt>
              <dd className="mt-1 text-3xl font-semibold text-red-600">
                {products.filter(p => p.status === 'disapproved').length}
              </dd>
            </div>
          </div>
        </div>

        {/* Filter Section */}
        <div className="bg-white rounded-lg shadow mb-6 p-6">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
            <div className="w-full sm:w-auto">
              <label htmlFor="status-filter" className="block text-sm font-medium text-gray-700 mb-2">
                Filter by Status
              </label>
              <div className="relative">
                <select
                  id="status-filter"
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="block w-full sm:w-64 pl-3 pr-10 py-3 text-base text-gray-900 font-medium
                    border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 
                    focus:border-green-500 rounded-lg shadow-sm bg-white"
                >
                  <option value="all" className="text-gray-900 font-medium">All Products</option>
                  <option value="approved" className="text-gray-900 font-medium">Approved Products</option>
                  <option value="disapproved" className="text-gray-900 font-medium">Pending Approval</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                    {/* <path fillRule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" /> */}
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex space-x-2">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                  {products.filter(p => p.status === 'approved').length} Approved
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
                  {products.filter(p => p.status === 'disapproved').length} Pending
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Only show table if there are filtered results */}
        {products.length > 0 && statusFilter !== 'all' && (
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Company
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Product
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {products.map((product) => (
                  <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            {product['company-head']['company-name']}
                          </div>
                          <div className="text-sm text-gray-500">
                            {product['company-head']['owner-name']}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{product.product.name}</div>
                      <div className="text-sm text-gray-500">{product.product.category}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full 
                        ${product.status === 'approved' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'}`}>
                        {product.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex items-center space-x-4">
                        <button
                          onClick={() => setSelectedProduct(product)}
                          className="text-indigo-600 hover:text-indigo-900 transition-colors"
                          title="View Details"
                        >
                          <EyeIcon className="h-5 w-5" />
                        </button>
                        <button
                          onClick={() => toggleStatus(product.id, product.status)}
                          className={`transition-colors ${
                            product.status === 'approved' 
                              ? 'text-red-600 hover:text-red-900' 
                              : 'text-green-600 hover:text-green-900'
                          }`}
                          title={`Mark as ${product.status === 'approved' ? 'Disapproved' : 'Approved'}`}
                        >
                          {product.status === 'approved' 
                            ? <XCircleIcon className="h-5 w-5" />
                            : <CheckCircleIcon className="h-5 w-5" />
                          }
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Details Modal */}
        {selectedProduct && (
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-4 max-w-2xl w-full mx-4 shadow-2xl">
              {/* Modal Header */}
              <div className="flex justify-between items-center pb-3 mb-4 border-b border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 flex items-center">
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded-full mr-2">
                    {selectedProduct.status}
                  </span>
                  Product Details
                </h3>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="text-gray-400 hover:text-gray-500 transition-colors"
                >
                  <XCircleIcon className="h-5 w-5" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Company Information */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="text-base font-semibold text-gray-900 mb-3 flex items-center">
                    Company Information
                  </h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center bg-white p-2 rounded-lg text-sm">
                      <span className="text-gray-600">Company</span>
                      <span className="font-medium text-gray-900">{selectedProduct['company-head']['company-name']}</span>
                    </div>
                    <div className="flex justify-between items-center bg-white p-2 rounded-lg text-sm">
                      <span className="text-gray-600">Owner</span>
                      <span className="font-medium text-gray-900">{selectedProduct['company-head']['owner-name']}</span>
                    </div>
                    <div className="flex justify-between items-center bg-white p-2 rounded-lg text-sm">
                      <span className="text-gray-600">Email</span>
                      <span className="font-medium text-blue-600">{selectedProduct['company-head']['owner-email']}</span>
                    </div>
                    <div className="flex justify-between items-center bg-white p-2 rounded-lg text-sm">
                      <span className="text-gray-600">Phone</span>
                      <span className="font-medium text-gray-900">{selectedProduct['company-head']['phone-no']}</span>
                    </div>
                  </div>
                </div>

                {/* Product Information */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="text-base font-semibold text-gray-900 mb-3 flex items-center">
                    Product Information
                  </h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center bg-white p-2 rounded-lg text-sm">
                      <span className="text-gray-600">Name</span>
                      <span className="font-medium text-gray-900">{selectedProduct.product.name}</span>
                    </div>
                    <div className="flex justify-between items-center bg-white p-2 rounded-lg text-sm">
                      <span className="text-gray-600">Category</span>
                      <span className="font-medium text-gray-900">{selectedProduct.product.category}</span>
                    </div>
                    <div className="flex justify-between items-center bg-white p-2 rounded-lg text-sm">
                      <span className="text-gray-600">Brand</span>
                      <span className="font-medium text-gray-900">{selectedProduct.product.brand}</span>
                    </div>
                    <div className="flex justify-between items-center bg-white p-2 rounded-lg text-sm">
                      <span className="text-gray-600">Price</span>
                      <span className="font-medium text-green-600">₹{selectedProduct.product.price}</span>
                    </div>
                  </div>
                </div>

                {/* Certifications */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="text-base font-semibold text-gray-900 mb-3 flex items-center">
                    Certifications
                  </h4>
                  <div className="space-y-2">
                    {selectedProduct.certification.map((cert, index) => (
                      <a 
                        key={index}
                        href={cert}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center p-2 bg-white rounded-lg hover:bg-blue-50 transition-colors text-sm"
                      >
                        <span className="text-blue-600 hover:text-blue-800">
                          Certificate {index + 1}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="text-base font-semibold text-gray-900 mb-3 flex items-center">
                    Tags
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {selectedProduct.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-0.5 bg-green-100 text-green-800 text-xs font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mt-4 bg-gray-50 rounded-lg p-4">
                <h4 className="text-base font-semibold text-gray-900 mb-2 flex items-center">
                  Description
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {selectedProduct.product.description}
                </p>
              </div>

              {/* Modal Footer */}
              <div className="mt-4 flex justify-end">
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
