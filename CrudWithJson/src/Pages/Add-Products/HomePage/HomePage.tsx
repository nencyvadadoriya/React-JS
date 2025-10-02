import { useState } from "react";
import { AiOutlineHeart, AiOutlineClose } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import { useLoaderData } from "react-router";
import { AiOutlineMobile, AiOutlineSkin } from "react-icons/ai";
import { GiClothes, GiGamepad } from "react-icons/gi";
import { MdHome, MdSportsSoccer, MdMenuBook } from "react-icons/md";
import { FaMagic } from "react-icons/fa";
import { useNavigate } from "react-router";

interface Product {
  id: number | string;
  name: string;
  category: string;
  price: number;
  image: string;
  rating?: number;
  reviews?: number;
  desc?: string;
}

export const categories = [
  { name: "All", icon: FaMagic },
  { name: "Electronics", icon: AiOutlineMobile },
  { name: "Fashion", icon: GiClothes },
  { name: "Home", icon: MdHome },
  { name: "Sports", icon: MdSportsSoccer },
  { name: "Books", icon: MdMenuBook },
  { name: "Gaming", icon: GiGamepad },
  { name: "Beauty", icon: AiOutlineSkin },
];

export default function HomePage() {
  const allProduct: Product[] = useLoaderData();
  const navigate = useNavigate();
  const [drawerProduct, setDrawerProduct] = useState<Product | null>(null);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 relative">
      {/* Main content */}
      <main className="flex-1 overflow-y-auto px-6 py-8">
        <div className="relative overflow-hidden rounded-3xl p-8 mb-10 text-white bg-gradient-to-r from-cyan-500 to-blue-600 shadow-2xl transform hover:scale-105 transition-transform duration-500">
          <div className="absolute -top-16 -left-16 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute -bottom-16 -right-16 w-56 h-56 bg-white/10 rounded-full blur-3xl animate-pulse-slow"></div>

          <div className="relative max-w-lg text-center mx-auto">
            <h1 className="text-4xl lg:text-5xl font-extrabold mb-4 drop-shadow-lg">
              Special Offer!
            </h1>
            <p className="text-cyan-100 mb-6 text-lg lg:text-xl">
              Up to <span className="font-bold text-white">50% OFF</span> on selected items.
              <span className="block mt-2">Free shipping on orders over ₹999</span>
            </p>
            <button className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transition-transform duration-300">
              Shop Now
            </button>
          </div>
        </div>

        {/* Categories */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Shop by Category</h2>
          <div className="grid grid-cols-4 lg:grid-cols-8 gap-3 lg:gap-4">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.name}
                  className="flex flex-col items-center justify-center bg-white rounded-xl shadow-sm hover:shadow-md transition p-4 lg:p-5"
                >
                  <Icon size={28} className="mb-2 text-cyan-500" />
                  <span className="text-xs lg:text-sm text-gray-700 text-center font-medium">{cat.name}</span>
                </button>
              );
            })}
          </div>
        </section>

        {/* Products */}
        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-5">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-6">
            {allProduct.map((product) => (
              <div
                key={product.id}
                onClick={() => navigate(`/product/${product.id}`)}
                className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="relative h-56 bg-gray-100 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-red-50 transition">
                    <AiOutlineHeart size={18} className="text-gray-600" />
                  </button>
                </div>

                <div className="p-4">
                  <p className="text-xs text-cyan-600 font-semibold mb-1 uppercase tracking-wide">{product.category}</p>
                  <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">{product.name}</h3>

                  {product.rating && (
                    <div className="flex items-center mb-3">
                      <div className="flex items-center text-yellow-500 text-sm">
                        {[...Array(5)].map((_, i) => (
                          <FaStar
                            key={i}
                            size={14}
                            className={i < Math.floor(product.rating!) ? "" : "text-gray-300"}
                          />
                        ))}
                      </div>
                      <span className="ml-2 text-xs text-gray-500">({product.reviews})</span>
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <p className="text-2xl font-bold text-gray-900">₹{Number(product.price).toLocaleString()}</p>
                    <button
                      className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg font-medium transition shadow-sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        setDrawerProduct(product);
                      }}
                    >
                      Add
                    </button>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Right Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-96 bg-white shadow-2xl transform transition-transform duration-300 z-50 ${drawerProduct ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-xl font-bold text-gray-800">Product Details</h2>
          <button onClick={() => setDrawerProduct(null)} className="text-gray-600 hover:text-gray-800">
            <AiOutlineClose size={24} />
          </button>
        </div>
        {drawerProduct && (
          <div className="p-6 space-y-4 overflow-y-auto h-full">
            <img
              src={drawerProduct.image}
              alt={drawerProduct.name}
              className="w-full h-64 object-cover rounded-xl shadow-md"
            />
            <h3 className="text-lg font-bold text-gray-800">{drawerProduct.name}</h3>
            <p className="text-sm text-gray-600 font-medium">Category: {drawerProduct.category}</p>
            <p className="text-xl font-bold text-gray-900">₹{drawerProduct.price.toLocaleString()}</p>
            {drawerProduct.rating && (
              <div className="flex items-center space-x-1 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} size={16} className="text-gray-300" />
                ))}
                <span className="text-gray-500 ml-2">({drawerProduct.reviews})</span>
              </div>
            )}
            <p className="text-gray-700">{drawerProduct.desc || "No description available."}</p>
            <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-3 rounded-xl font-semibold transition shadow-lg">
              Add to Cart
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
