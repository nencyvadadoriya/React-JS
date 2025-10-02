import { useState } from "react";
import { ProductApi } from "../../service/productApl";
import { ToastContainer, toast } from "react-toastify";
import { FaTag, FaDollarSign, FaBoxes, FaImage } from "react-icons/fa";

export default function AddProduct() {
  const [formData, setFormData] = useState({
    id: Math.floor(Math.random() * 10000).toString(),
    name: "",
    category: "",
    price: "",
    stock: "",
    image: "",
    desc: ""
  });

  const [errors, setErrors] = useState<any>({}); 

  const handleFormData = (event: any) => {
    const { name, value } = event.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors: any = {};

    if (!formData.name.trim()) newErrors.name = "Product name is required";
    if (!formData.category) newErrors.category = "Please select a category";
    if (!formData.price ) newErrors.price = "Price must be greater than 0";
    if (!formData.stock) newErrors.stock = "Stock cannot be negative";
    if (!formData.image.trim()) newErrors.image = "Image URL is required";
    if (!formData.desc.trim()) newErrors.desc = "Product description is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const HandleSumbitForm = async (event: any) => {
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
        desc: ""
      });
      setErrors({});
    } else {
      toast.error("Failed to add product!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-10">
      <div className="w-full max-w-6xl bg-white shadow-2xl rounded-2xl p-12">
        <h2 className="text-4xl font-extrabold mb-10 text-center text-gray-800">
          Add New Product
        </h2>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-10" onSubmit={HandleSumbitForm}>
          {/* Left Column */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center border rounded-xl px-4 py-2 focus-within:ring-2 focus-within:ring-purple-500 transition">
                <FaTag className="text-gray-400 mr-3" />
                <input
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleFormData}
                  placeholder="Enter product name"
                  className="w-full outline-none p-2"
                />
              </div>
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
              <div className="border rounded-xl p-3 focus-within:ring-2 focus-within:ring-purple-500 transition">
                <textarea
                  name="desc"
                  value={formData.desc}
                  onChange={handleFormData}
                  placeholder="Enter product description"
                  rows={6}
                  className="w-full outline-none resize-none"
                />
              </div>
              {errors.desc && <p className="text-red-500 text-sm mt-1">{errors.desc}</p>}
            </div>

            <div>
              <div className="flex items-center border rounded-xl px-4 py-2 focus-within:ring-2 focus-within:ring-purple-500 transition">
                <FaBoxes className="text-gray-400 mr-3" />
                <input
                  name="stock"
                  type="number"
                  value={formData.stock}
                  onChange={handleFormData}
                  placeholder="Stock / Quantity"
                  className="w-full outline-none p-2"
                />
              </div>
              {errors.stock && <p className="text-red-500 text-sm mt-1">{errors.stock}</p>}
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center border rounded-xl px-4 py-2 focus-within:ring-2 focus-within:ring-purple-500 transition">
                <FaDollarSign className="text-gray-400 mr-3" />
                <input
                  name="price"
                  type="number"
                  value={formData.price}
                  onChange={handleFormData}
                  placeholder="Enter product price"
                  className="w-full outline-none p-2"
                />
              </div>
              {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price}</p>}
            </div>

            <div>
              <div className="flex items-center border rounded-xl px-4 py-2 focus-within:ring-2 focus-within:ring-purple-500 transition">
                <FaTag className="text-gray-400 mr-3" />
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleFormData}
                  className="w-full outline-none p-2 bg-transparent"
                >
                  <option value="" disabled>-- Select Category --</option>
                  <option value="electronics">Electronics</option>
                  <option value="fashion">Fashion</option>
                  <option value="footwear">Footwear</option>
                  <option value="beauty">Beauty & Skincare</option>
                </select>
              </div>
              {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category}</p>}
            </div>

            <div>
              <div className="flex items-center border rounded-xl px-4 py-2 focus-within:ring-2 focus-within:ring-purple-500 transition">
                <FaImage className="text-gray-400 mr-3" />
                <input
                  type="text"
                  name="image"
                  value={formData.image}
                  onChange={handleFormData}
                  placeholder="Product Image URL"
                  className="w-full outline-none p-2"
                />
              </div>
              {errors.image && <p className="text-red-500 text-sm mt-1">{errors.image}</p>}
            </div>

            <button
              type="submit"
              className="mt-auto w-full bg-purple-600 text-white py-3 rounded-xl font-semibold hover:bg-purple-700 transition"
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
