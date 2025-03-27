import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function ProductGrid() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=4')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <div key={product.id} className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <img 
              src={product.image} 
              alt={product.title} 
              className="w-full h-48 object-contain p-4 bg-white"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2 truncate">{product.title}</h3>
              <p className="text-gray-800 font-bold">${product.price}</p>
              <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}