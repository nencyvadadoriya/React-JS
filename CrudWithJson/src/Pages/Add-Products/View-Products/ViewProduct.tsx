import { useLoaderData, useNavigate } from "react-router";
import { ProductApi } from "../../../service/productApl";
import { useState } from "react";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.min.css';

export default function ViewProduct() {
  const data: ProductType[] = useLoaderData();
  const [allProducts, setAllProduct] = useState(data || []);
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

  const deleteProduct = async (product: ProductType) => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: `Do you want to delete this Product "${product.name}"?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No'
    });

    if (result.isConfirmed) {
      if (await ProductApi.deleteProduct(product.id)) {
        setAllProduct(await ProductApi.fetchAllProduct());
        Swal.fire('Deleted!', 'Product has been deleted.', 'success');
      } else {
        Swal.fire('Error!', 'Deletion failed.', 'error');
      }
    }
  };

  return (
    <div className="min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
        All Products
      </h2>

      <div className="overflow-x-auto shadow-xl rounded-2xl bg-white">
        <table className="min-w-full divide-y divide-gray-200 text-gray-700">
          <thead className="bg-purple-600 text-white">
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
            {allProducts.length === 0 ? (
              <tr>
                <td colSpan={9} className="text-center py-6 text-gray-400">
                  No products found.
                </td>
              </tr>
            ) : (
              allProducts.map((product, index) => (
                <tr
                  key={product.id}
                  className="hover:bg-purple-50 transition-colors duration-200"
                >
                  <td className="py-3 px-4">{index + 1}</td>
                  <td className="py-3 px-4">{product.id}</td>
                  <td className="py-3 px-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-16 h-16 object-cover rounded-xl"
                    />
                  </td>
                  <td className="py-3 px-4 font-semibold">{product.name}</td>
                  <td className="py-3 px-4">{product.category}</td>
                  <td className="py-3 px-4 font-bold text-purple-600">₹{product.price}</td>
                  <td className="py-3 px-4 w-30">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800"
                      }`}
                    >
                      {`${product.stock} in stock`}
                    </span>
                  </td>
                  <td className="text-sm">{product.desc}</td>
                  <td className="py-3 px-4 text-center space-x-2 flex justify-center">
                    <button
                      onClick={() => navigate(`/editProduct/${product.id}`)}
                      className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg flex items-center justify-center"
                    >
                      <AiOutlineEdit size={18} />
                    </button>
                    <button
                      onClick={() => deleteProduct(product)}
                      className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg flex items-center justify-center"
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
