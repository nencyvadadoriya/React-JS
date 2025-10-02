import { useState } from "react";
import { NavLink } from "react-router";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineHeart, AiOutlineBell, AiOutlineSearch } from "react-icons/ai";

export default function Navbar() {
  const [search, setSearch] = useState("");

  
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
      <div className="flex flex-col md:flex-row items-center justify-between px-6 py-4 space-y-3 md:space-y-0">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="bg-gradient-to-br from-cyan-400 to-blue-500 p-2 rounded-xl shadow-lg">
            <FiShoppingCart size={24} />
          </div>
          <div>
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              ShopHub
            </span>
            <p className="text-xs text-slate-400">Shopping Companion</p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-2xl w-full">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for products, brands and more..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-4 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            />
            <AiOutlineSearch className="absolute right-4 top-3 text-gray-500" size={20} />
          </div>
        </div>

        {/* Menu Links */}
        <nav className="hidden md:flex items-center space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-cyan-600 font-semibold border-b-2 border-cyan-600"
                : "text-gray-600 hover:text-cyan-500"
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/addProduct"
            className={({ isActive }) =>
              isActive
                ? "text-cyan-600 font-semibold border-b-2 border-cyan-600"
                : "text-gray-600 hover:text-cyan-500"
            }
          >
            Add Product
          </NavLink>
          <NavLink
            to="/viewProduct"
            className={({ isActive }) =>
              isActive
                ? "text-cyan-600 font-semibold border-b-2 border-cyan-600"
                : "text-gray-600 hover:text-cyan-500"
            }
          >
            View Product
          </NavLink>
           <NavLink
            to="/addtocard"
            className={({ isActive }) =>
              isActive
                ? "text-cyan-600 font-semibold border-b-2 border-cyan-600"
                : "text-gray-600 hover:text-cyan-500"
            }
          >
            Add To Card
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
