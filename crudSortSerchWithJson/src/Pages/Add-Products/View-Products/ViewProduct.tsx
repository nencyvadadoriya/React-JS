import { useLoaderData, useNavigate } from "react-router";
import { ProductApi } from "../../../service/productApl";
import { useEffect, useState } from "react";
import { AiOutlineEdit, AiOutlineDelete, AiOutlineSearch } from "react-icons/ai";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

export default function ViewProduct() {
  const data = useLoaderData();
  const [allProducts, setAllProduct] = useState(data || []);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("az");
  const [maxAndMinPrice, setMaxAndMinPrice] = useState<number[]>([0, 0]);
  const [price, setPrice] = useState<number>(0);
  const navigate = useNavigate();

  interface ProductType {
    id: string;
    name: string;
    category: string;
    price: string;
    stock: string;
    image: string;
    desc: string;
  }

  // Delete Product
  const deleteProduct = async (product: ProductType) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: `Do you want to delete "${product.name}"?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No",
    });

    if (result.isConfirmed) {
      if (await ProductApi.deleteProduct(product.id)) {
        setAllProduct(await ProductApi.fetchAllProduct());
        Swal.fire("Deleted!", "Product has been deleted.", "success");
      } else {
        Swal.fire("Error!", "Deletion failed.", "error");
      }
    }
  };

  // Compute min and max price
  useEffect(() => {
    if (allProducts.length > 0) {
      const prices = allProducts.map((p: any) => Number(p.price));
      const max = Math.max(...prices);
      const min = Math.min(...prices);
      setMaxAndMinPrice([min, max]);
      setPrice(min);
    }
  }, [allProducts]);

  // Filter and sort products
  const filteredProducts = allProducts
    .filter((product: any) => {
      const searchData =
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.category.toLowerCase().includes(search.toLowerCase()) ||
        product.id.includes(search);
      const priceData = Number(product.price) >= price;
      return searchData && priceData;
    })
    .sort((a: any, b: any) =>
      sort === "az" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
    );

  return (
    <div className="min-h-screen px-6 py-10 font-sans bg-gray-50">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-2">📦 View Products</h2>
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <span className="text-sm text-gray-600">₹{price || maxAndMinPrice[0]}</span>
            <input
              type="range"
              min={maxAndMinPrice[0]}
              max={maxAndMinPrice[1]}
              value={price || maxAndMinPrice[0]}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="w-full sm:w-64 h-2 bg-purple-200 rounded-lg cursor-pointer accent-purple-600"
            />
            <span className="text-sm text-gray-600">₹{maxAndMinPrice[1]}</span>
          </div>

          {/* Search & Sort */}
          <div className="flex border border-gray-300 rounded-lg overflow-hidden shadow-sm bg-white">
            <select
              onChange={(e) => setSort(e.target.value)}
              className="px-3 py-2 text-sm outline-none bg-gray-50"
            >
              <option value="az">A-Z</option>
              <option value="za">Z-A</option>
            </select>
            <input
              type="text"
              placeholder="Search by name or category..."
              onChange={(e) => setSearch(e.target.value)}
              className="px-4 py-2 outline-none w-64 text-sm"
            />
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-3 flex items-center justify-center transition-colors">
              <AiOutlineSearch size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Product Table */}
      <div className="overflow-x-auto shadow-lg rounded-2xl bg-white">
        <table className="min-w-full divide-y divide-gray-200 text-gray-700">
          <thead className="bg-gradient-to-r from-purple-600 to-purple-500 text-white">
            <tr>
              <th className="py-3 px-4 text-left text-sm font-medium">#</th>
              <th className="py-3 px-4 text-left text-sm font-medium">ID</th>
              <th className="py-3 px-4 text-left text-sm font-medium">Image</th>
              <th className="py-3 px-4 text-left text-sm font-medium">Name</th>
              <th className="py-3 px-4 text-left text-sm font-medium">Category</th>
              <th className="py-3 px-4 text-left text-sm font-medium">Price</th>
              <th className="py-3 px-4 text-left text-sm font-medium">Stock</th>
              <th className="py-3 px-4 text-left text-sm font-medium">Description</th>
              <th className="py-3 px-4 text-center text-sm font-medium">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {filteredProducts.length === 0 ? (
              <tr>
                <td colSpan={9} className="text-center py-8 text-gray-400 text-sm">
                  No products found.
                </td>
              </tr>
            ) : (
              filteredProducts.map((product: ProductType, index: number) => (
                <tr
                  key={product.id}
                  className="hover:bg-purple-50 transition-colors duration-200"
                >
                  <td className="py-3 px-4 text-sm">{index + 1}</td>
                  <td className="py-3 px-4 text-xs font-mono text-gray-500">{product.id}</td>
                  <td className="py-3 px-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-16 h-16 object-cover rounded-xl shadow-sm border"
                    />
                  </td>
                  <td className="py-3 px-4 font-semibold text-gray-800">{product.name}</td>
                  <td className="py-3 px-4 text-sm">{product.category}</td>
                  <td className="py-3 px-4 font-bold text-purple-600">₹{product.price}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        Number(product.stock) > 0
                          ? "bg-green-500 text-white"
                          : "bg-red-500 text-white"
                      }`}
                    >
                      {product.stock} in stock
                    </span>
                  </td>
                  <td className="py-3 px-4 text-xs text-gray-600 max-w-xs truncate">{product.desc}</td>
                  <td className="py-3 px-4 text-center flex justify-center space-x-2">
                    <button
                      onClick={() => navigate(`/editProduct/${product.id}`)}
                      className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg flex items-center justify-center shadow-sm"
                      title="Edit"
                    >
                      <AiOutlineEdit size={18} />
                    </button>
                    <button
                      onClick={() => deleteProduct(product)}
                      className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg flex items-center justify-center shadow-sm"
                      title="Delete"
                    >
                      <AiOutlineDelete size={18} />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
