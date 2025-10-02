import { useLoaderData } from "react-router";
import { FaStar } from "react-icons/fa";

export default function ProductDetails() {
  const product: any = useLoaderData();

  if (!product) {
    return <p className="p-6 text-center text-gray-500">Product not found!</p>;
  }

  return (
   <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 flex items-center justify-center p-8">
  <div className="w-full max-w-4xl bg-white/80 backdrop-blur-md shadow-2xl rounded-3xl p-8 flex flex-col md:flex-row gap-8 transform hover:scale-105 transition-transform duration-300">
    <div className="flex-1 flex justify-center items-center">
      <img
        src={product.image}
        alt={product.name}
        className="w-full max-w-md h-80 md:h-[360px] object-cover rounded-2xl border-2 border-cyan-200 shadow-lg"
      />
    </div>

    {/* Right - Info */}
    <div className="flex-1 flex flex-col justify-between">
      {/* Title & Category */}
      <div>
        <h1 className="text-3xl font-extrabold text-cyan-600 mb-2">{product.name}</h1>
        <p className="text-sm font-medium text-gray-600 mb-4 uppercase tracking-wide">{product.category}</p>
      </div>

      {/* Price */}
      <div className="mb-4">
        <span className="text-2xl font-bold text-blue-600">₹{Number(product.price).toLocaleString()}</span>
      </div>

      {/* Rating */}
      {product.rating && (
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              size={18}
              className={i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"}
            />
          ))}
          {product.reviews && (
            <span className="text-gray-500 text-sm ml-2">({product.reviews} reviews)</span>
          )}
        </div>
      )}

      {/* Description */}
      {product.desc && (
        <p className="text-gray-700 mb-6 leading-relaxed">{product.desc}</p>
      )}

      {/* Action Button */}
      <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 rounded-xl font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition transform">
        Add to Cart
      </button>
    </div>
  </div>
</div>

  );
}
