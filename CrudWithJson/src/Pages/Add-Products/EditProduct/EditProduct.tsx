import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router";
import { ProductApi } from "../../../service/productApl";
import { routerNames } from "../../../Routes/route";
import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.min.css';

export default function EditProduct() {
  const data = useLoaderData();
  const navigate = useNavigate();

  const [productFormData, setProductFormData] = useState({
    id: data.id,
    name: data.name,
    category: data.category,
    price: data.price,
    stock: data.stock,
    image: data.image,
    desc: data.desc
  });

  const handleFormData = (event: any) => {
    const { name, value } = event.target;
    setProductFormData(prev => ({ ...prev, [name]: value }));
 
  };

  const HandleSubmitForm = async (event: any) => {
    event.preventDefault();
    if (await ProductApi.EditProduct(data.id, productFormData)) {
      Swal.fire({
        icon: 'success',
        title: 'Updated!',
        text: `${productFormData.name} updated successfully.`,
        confirmButtonColor: '#3085d6'
      });
      navigate(routerNames.viewProduct);
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Product updation failed!',
        confirmButtonColor: '#d33'
      });
    }
  };

  return (
<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-8">
  <div className="w-full max-w-6xl bg-white/80 backdrop-blur-md shadow-2xl rounded-2xl p-14">
    <h2 className="text-4xl font-extrabold mb-12 text-center text-purple-700">
      Edit Product
    </h2>

    <form className="grid grid-cols-1 md:grid-cols-2 gap-10" onSubmit={HandleSubmitForm}>
      {/* Left Column */}
      <div className="space-y-10">
        {/* Product Name */}
        <div className="relative">
          <input
            name="name"
            type="text"
            value={productFormData.name}
            onChange={handleFormData}
            placeholder=" "
            className="w-full border border-purple-300 px-4 pt-7 pb-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white/70 backdrop-blur-sm peer text-gray-800"
          />
          <label className="absolute left-4 top-3 text-gray-500 text-sm peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base transition-all">
            Product Name
          </label>
        </div>

        {/* Description */}
        <div className="relative">
          <textarea
            name="desc"
            value={productFormData.desc}
            onChange={handleFormData}
            placeholder=" "
            rows={5}
            className="w-full border border-purple-300 px-4 pt-7 pb-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white/70 backdrop-blur-sm peer resize-none text-gray-800"
          />
          <label className="absolute left-4 top-3 text-gray-500 text-sm peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base transition-all">
            Product Description
          </label>
        </div>

        {/* Stock */}
        <div className="relative">
          <input
            name="stock"
            type="number"
            value={productFormData.stock}
            onChange={handleFormData}
            placeholder=" "
            className="w-full border border-purple-300 px-4 pt-7 pb-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white/70 backdrop-blur-sm peer text-gray-800"
          />
          <label className="absolute left-4 top-3 text-gray-500 text-sm peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base transition-all">
            Stock / Quantity
          </label>
        </div>
      </div>

      {/* Right Column */}
      <div className="space-y-8 flex flex-col justify-between">
        {/* Price */}
        <div className="relative">
          <input
            name="price"
            type="number"
            value={productFormData.price}
            onChange={handleFormData}
            placeholder=" "
            className="w-full border border-purple-300 px-4 pt-7 pb-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white/70 backdrop-blur-sm peer text-gray-800"
          />
          <label className="absolute left-4 top-3 text-gray-500 text-sm peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base transition-all">
            Price
          </label>
        </div>

        {/* Category */}
        <div className="relative">
          <select
            name="category"
            value={productFormData.category}
            onChange={handleFormData}
            className="w-full border border-purple-300 px-4 pt-6 pb-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white/70 backdrop-blur-sm text-gray-800"
          >
            <option value="" disabled>-- Select Category --</option>
            <option value="electronics">Electronics</option>
            <option value="fashion">Fashion</option>
            <option value="home">Home & Kitchen</option>
            <option value="beauty">Beauty</option>
            <option value="sports">Sports</option>
          </select>
        </div>

        {/* Image URL */}
        <div className="relative">
          <input
            type="text"
            value={productFormData.image}
            onChange={handleFormData}
            name="image"
            placeholder=" "
            className="w-full border border-purple-300 px-4 pt-7 pb-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white/70 backdrop-blur-sm peer text-gray-800"
          />
          <label className="absolute left-4 top-3 text-gray-500 text-sm peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base transition-all">
            Product Image URL
          </label>
        </div>

        {/* Image Preview */}
        {productFormData.image && (
          <div className="flex justify-center">
            <img
              src={productFormData.image}
              alt="Preview"
              className="w-48 h-48 object-cover rounded-2xl border-2 border-purple-200 shadow-lg"
            />
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-6 w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 rounded-2xl font-semibold hover:scale-105 hover:shadow-xl transition transform"
        >
          Update Product
        </button>
      </div>
    </form>
  </div>
</div>
  );
}
