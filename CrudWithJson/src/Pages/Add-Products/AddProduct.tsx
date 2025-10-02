import { useState } from "react";
import { ProductApi } from "../../service/productApl";
import { ToastContainer, toast } from "react-toastify";
import { FaTag, FaDollarSign, FaBoxes, FaImage, FaMagic } from "react-icons/fa";
import { AiOutlineMobile, AiOutlineSkin } from "react-icons/ai";
import { GiClothes, GiGamepad } from "react-icons/gi";
import { MdHome, MdSportsSoccer, MdMenuBook } from "react-icons/md";

interface Category {
  name: string;
  icon: JSX.Element;
}

const categories: Category[] = [
  { name: "All", icon: <FaMagic /> },
  { name: "Electronics", icon: <AiOutlineMobile /> },
  { name: "Fashion", icon: <GiClothes /> },
  { name: "Home", icon: <MdHome /> },
  { name: "Sports", icon: <MdSportsSoccer /> },
  { name: "Books", icon: <MdMenuBook /> },
  { name: "Gaming", icon: <GiGamepad /> },
  { name: "Beauty", icon: <AiOutlineSkin /> },
];

export default function AddProduct() {
  const [formData, setFormData] = useState({
    id: Math.floor(Math.random() * 10000).toString(),
    name: "",
    category: "",
    price: "",
    stock: "",
    image: "",
    desc: "",
  });

  const [errors, setErrors] = useState<any>({});

  const handleFormData = (event: any) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors: any = {};
    if (!formData.name.trim()) newErrors.name = "Product name is required";
    if (!formData.category) newErrors.category = "Please select a category";
    if (!formData.price) newErrors.price = "Price must be greater than 0";
    if (!formData.stock) newErrors.stock = "Stock cannot be negative";
    if (!formData.image.trim()) newErrors.image = "Image URL is required";
    if (!formData.desc.trim()) newErrors.desc = "Product description is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const HandleSubmitForm = async (event: any) => {
    event.preventDefault();
    if (!validateForm()) return;

    const status = await ProductApi.AddProductData(formData);
    if (status) {
      toast.success("Product added successfully!");
      setFormData({
        id: Math.floor(Math.random() * 10000).toString(),
        name: "",
        category: "",
        price: "",
        stock: "",
        image: "",
        desc: "",
      });
      setErrors({});
    } else {
      toast.error("Failed to add product!");
    }
  };

  return (
      <div className="h-screen flex items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-6xl bg-white shadow-2xl rounded-3xl p-10 md:p-12 border border-cyan-200">
          <h2 className="text-4xl font-extrabold mb-10 text-center text-gray-800">
            Add New Product
          </h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-10" onSubmit={HandleSubmitForm}>
            {/* Left Column */}
            <div className="space-y-6">
              {/* Product Name */}
              <div>
                <label className="text-gray-700 font-medium mb-2 block">Product Name</label>
                <div className="flex items-center border rounded-xl px-4 py-2 ">
                  <FaTag className="text-cyan-600 mr-3" />
                  <input
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleFormData}
                    placeholder="Product Name"
                    className="w-full outline-none p-2 bg-transparent"
                  />
                </div>
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              {/* Description */}
              <div>
                <label className="text-gray-700 font-medium mb-2 block">Product Description</label>
                <textarea
                  name="desc"
                  value={formData.desc}
                  onChange={handleFormData}
                  placeholder="Enter product description"
                  rows={6}
                  className="w-full border rounded-xl p-4 "
                />
                {errors.desc && <p className="text-red-500 text-sm mt-1">{errors.desc}</p>}
              </div>

              {/* Stock */}
              <div>
                <label className="text-gray-700 font-medium mb-2 block">Stock / Quantity</label>
                <div className="flex items-center border rounded-xl px-4 py-2 ">
                  <FaBoxes className="text-cyan-600 mr-3" />
                  <input
                    name="stock"
                    type="number"
                    value={formData.stock}
                    onChange={handleFormData}
                    placeholder="Stock / Quantity"
                    className="w-full outline-none p-2 bg-transparent"
                  />
                </div>
                {errors.stock && <p className="text-red-500 text-sm mt-1">{errors.stock}</p>}
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6 flex flex-col justify-between">
              {/* Price */}
              <div>
                <label className="text-gray-700 font-medium mb-2 block">Product Price</label>
                <div className="flex items-center border rounded-xl px-4 py-2">
                  <FaDollarSign className="text-cyan-600 mr-3" />
                  <input
                    name="price"
                    type="number"
                    value={formData.price}
                    onChange={handleFormData}
                    placeholder="Product Price"
                    className="w-full outline-none p-2 bg-transparent"
                  />
                </div>
                {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price}</p>}
              </div>

              {/* Category */}
              <div>
                <label className="text-gray-700 font-medium mb-2 block">Category</label>
                <div className="flex items-center border rounded-xl px-4 py-2 ">
                  <FaTag className="text-cyan-600 mr-3" />
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleFormData}
                    className="w-full outline-none p-2 bg-transparent cursor-pointer"
                  >
                    <option value="" disabled>
                      -- Select Category --
                    </option>
                    {categories.map((cat) => (
                      <option key={cat.name} value={cat.name}>
                        {cat.icon} {cat.name}
                      </option>
                    ))}
                  </select>
                </div>
                {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category}</p>}
              </div>

              {/* Image URL */}
              <div>
                <label className="text-gray-700 font-medium mb-2 block">Image URL</label>
                <div className="flex items-center border rounded-xl px-4 py-2 ">
                  <FaImage className="text-cyan-600 mr-3" />
                  <input
                    type="text"
                    name="image"
                    value={formData.image}
                    onChange={handleFormData}
                    placeholder="Product Image URL"
                    className="w-full outline-none p-2 bg-transparent"
                  />
                </div>
                {errors.image && <p className="text-red-500 text-sm mt-1">{errors.image}</p>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="mt-auto w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition shadow-lg transform hover:scale-105"
              >
                Add Product
              </button>
            </div>
          </form>
        </div>
      <ToastContainer />
    </div>
  );
}
