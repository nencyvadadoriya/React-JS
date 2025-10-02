import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router";
import { ProductApi } from "../../../service/productApl";
import { routerNames } from "../../../Routes/route";
import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.min.css';

export default function EditProduct() {
    const data = useLoaderData();
    const navigator = useNavigate();
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
        setProductFormData(prve => ({
            ...prve, [name]: value
        }));
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
            navigator(routerNames.viewProduct);
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
        <div className="min-h-screen flex items-center justify-center p-6">
            <div className="w-full max-w-6xl bg-white shadow-2xl rounded-2xl p-12">
                <h2 className="text-4xl font-extrabold mb-10 text-center text-gray-800">
                    Edit Product
                </h2>

                <form className="grid grid-cols-1 md:grid-cols-2 gap-10" onSubmit={HandleSubmitForm}>
                    {/* Left Column */}
                    <div className="space-y-6">
                        <div>
                            <label className="block mb-2 font-semibold text-gray-700">
                                Product Name
                            </label>
                            <input
                                name="name"
                                type="text"
                                value={productFormData.name}
                                onChange={handleFormData}
                                placeholder="Enter product name"
                                className="w-full border border-gray-300 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block mb-2 font-semibold text-gray-700">
                                Description
                            </label>
                            <textarea
                                name="desc"
                                onChange={handleFormData}
                                value={productFormData.desc}
                                placeholder="Enter product description"
                                className="w-full border border-gray-300 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                rows={6}
                            ></textarea>
                        </div>

                        <div>
                            <label className="block mb-2 font-semibold text-gray-700">
                                Stock / Quantity
                            </label>
                            <input
                                name="stock"
                                value={productFormData.stock}
                                onChange={handleFormData}
                                type="number"
                                placeholder="Enter stock quantity"
                                className="w-full border border-gray-300 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6 flex flex-col justify-between">
                        <div>
                            <label className="block mb-2 font-semibold text-gray-700">
                                Price
                            </label>
                            <input
                                name="price"
                                value={productFormData.price}
                                onChange={handleFormData}
                                type="number"
                                placeholder="Enter product price"
                                className="w-full border border-gray-300 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block mb-2 font-semibold text-gray-700">
                                Category
                            </label>
                            <select
                                name="category"
                                value={productFormData.category}
                                onChange={handleFormData}
                                className="w-full border border-gray-300 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="" disabled>
                                    -- Select Category --
                                </option>
                                <option value="electronics">Electronics</option>
                                <option value="fashion">Fashion</option>
                                <option value="footwear">Footwear</option>
                                <option value="beauty">Beauty & Skincare</option>
                            </select>
                        </div>

                        <div>
                            <label className="block mb-2 font-semibold text-gray-700">
                                Product Image
                            </label>
                            <input
                                type="input"
                                value={productFormData.image}
                                onChange={handleFormData}
                                name="image"
                                className="w-full border border-gray-300 p-3 rounded-xl"
                            />
                        </div>

                        <div className="mt-auto">
                            <button
                                type="submit"
                                className="w-full bg-sky-600 text-white p-4 rounded-xl font-semibold hover:bg-blue-700 transition"
                            >
                                Edit Product
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
