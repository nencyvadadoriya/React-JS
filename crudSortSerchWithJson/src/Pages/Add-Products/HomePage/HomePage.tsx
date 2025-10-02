import { useLoaderData, useNavigate } from "react-router";
import type { ProductType } from "../../../service/productApl";
import { useEffect, useState } from "react";
import { AiOutlineSearch, AiOutlineBell } from "react-icons/ai";
import { FaBox } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

export default function HomePage() {
  const allProduct: ProductType[] = useLoaderData();
  const navigate = useNavigate();

  const [openCard, setopenCard] = useState(false);
  const [selectProdcut, setselecteProdcut] = useState<ProductType | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [allCategory, setAllCategory] = useState<string[]>(["All"]);
  const [search, setSearch] = useState("");

  // ✅ Final Filtering Logic (Category + Search)
  const filterProduct = allProduct.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;

    const matchesSearch =
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.category.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  // ✅ Category list setup
  useEffect(() => {
    const setCategories = new Set(allProduct.map((p) => p.category));
    setAllCategory(["All", ...Array.from(setCategories)]);
  }, [allProduct]);

  return (
    <div className="flex min-h-screen font-sans">
      <main className="flex-1 p-6">
        <div className="flex flex-wrap items-center justify-between mb-6">
          <div className="flex flex-wrap gap-2">
            {allCategory.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${
                  selectedCategory === category
                    ? "bg-purple-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* 🔍 Search + Icons */}
          <div className="flex items-center space-x-4 w-full max-w-md">
            <div className="flex border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-purple-500">
              <input
                type="text"
                value={search}
                placeholder="Search by name or category..."
                onChange={(e) => setSearch(e.target.value)}
                className="px-4 py-2 outline-none w-64 text-sm"
              />
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-3 flex items-center justify-center transition-colors">
                <AiOutlineSearch size={20} />
              </button>
            </div>

            <button className="relative text-gray-600 hover:text-purple-600 transition">
              <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs rounded-full px-1">
                6
              </span>
              <AiOutlineBell size={24} />
            </button>

            <button className="text-gray-600 hover:text-purple-600 transition">
              <GiHamburgerMenu size={24} />
            </button>

            <img
              src="/owner.png"
              alt="Profile"
              className="w-10 h-10 rounded-full border-2 border-purple-400"
            />
          </div>
        </div>

        {/* 🛍 Products */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filterProduct.length > 0 ? (
            filterProduct.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="h-56 flex items-center justify-center relative p-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-contain h-full w-full"
                  />
                </div>

                <div className="p-4 flex flex-col space-y-2">
                  <h2 className="font-semibold text-gray-800 truncate">
                    {product.name}
                  </h2>
                  <p className="text-sm text-gray-500">{product.category}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-purple-600">
                      ₹{product.price}
                    </span>
                    <div className="text-xs font-medium px-2 py-0.5 rounded-full inline-flex items-center space-x-1 bg-green-100 text-green-800">
                      <FaBox className="w-3 h-3" />
                      <span>{product.stock} In Stock</span>
                    </div>
                  </div>
                  <button
                    className="mt-2 w-full py-2 rounded-lg text-white bg-purple-600 hover:bg-purple-700"
                    onClick={() => {
                      setselecteProdcut(product);
                      setopenCard(true);
                    }}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 col-span-full text-center">
              No products found 🛒
            </p>
          )}
        </div>
      </main>

      {/* 📝 Sidebar Product UI */}
      {openCard && selectProdcut && (
        <>
          <div
            className="fixed inset-0 bg-white/20 z-40"
            onClick={() => setopenCard(false)}
          ></div>

          <div className="fixed top-0 right-0 w-96 md:w-[400px] h-full bg-white/90 backdrop-blur-sm shadow-2xl z-50 p-6 overflow-y-auto transition-transform transform translate-x-0">
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white/70 to-transparent pointer-events-none"></div>

            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 text-2xl font-bold"
              onClick={() => setopenCard(false)}
            >
              ×
            </button>

            <div className="w-full h-72 mb-6">
              <img
                src={selectProdcut.image}
                alt={selectProdcut.name}
                className="w-full h-full object-contain rounded-xl shadow-lg transition-transform duration-300"
              />
            </div>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {selectProdcut.name}
              </h2>
              <p className="text-gray-500 mb-1">
                Category:{" "}
                <span className="font-medium text-gray-700">
                  {selectProdcut.category}
                </span>
              </p>
              <p className="text-gray-500 mb-1">
                Price:{" "}
                <span className="font-bold text-purple-600 text-lg">
                  ₹{selectProdcut.price}
                </span>
              </p>
              <p className="text-gray-600 mt-3">{selectProdcut.desc}</p>
            </div>
            <div className="flex flex-col space-y-3">
              <button
                className="w-full py-3 rounded-xl bg-purple-600 text-white font-semibold hover:bg-purple-700 transition"
                onClick={() =>
                  navigate("/addToCard", { state: { product: selectProdcut } })
                }
              >
                Add To Cart
              </button>

              <button
                className="w-full py-3 rounded-xl bg-gray-100 text-gray-800 font-semibold hover:bg-gray-200 transition"
                onClick={() => setopenCard(false)}
              >
                Close
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
