import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-gray-800">
            ShopEase
          </Link>
          
          {/* Search Bar */}
          <div className="flex-1 max-w-xs mx-4">
            <input 
              type="text" 
              placeholder="Search products..." 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none"
            />
          </div>
          
          {/* Cart Icon */}
          <button className="p-2 text-gray-800">
            🛒 Cart (0)
          </button>
        </div>
      </div>
    </nav>
  );
}