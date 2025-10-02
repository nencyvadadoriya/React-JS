export default function AddToCartPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Add To Cart</h2>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Product Image */}
          <div className="md:w-1/2 flex items-center justify-center bg-gray-100 rounded-xl p-4">
            <div className="h-64 w-full bg-gray-200 animate-pulse rounded-xl" />
          </div>

          {/* Product Details */}
          <div className="md:w-1/2 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="h-6 w-3/4 bg-gray-200 animate-pulse rounded" />
              <div className="h-4 w-1/2 bg-gray-200 animate-pulse rounded" />
              <div className="h-6 w-1/3 bg-gray-200 animate-pulse rounded mt-2" />
              <div className="h-4 w-1/4 bg-gray-200 animate-pulse rounded mt-1" />
              <div className="h-16 w-full bg-gray-200 animate-pulse rounded mt-2" />
            </div>

            {/* Actions */}
            <div className="mt-6 flex flex-col space-y-3">
              <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700">
                Add To Cart
              </button>
              <button className="w-full bg-gray-200 text-gray-800 py-2 rounded-lg hover:bg-gray-300">
                Back to Dashboard
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
