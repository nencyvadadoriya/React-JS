export default function Shop() {
  return (
    <section className="w-full bg-[#F5EFE9] py-20">
      {/* Heading */}
      <div className="text-center mb-16 w-full">
        <p className="text-sm uppercase tracking-wider text-[#b78a6e] font-semibold mt-10">
          Find Your Perfect Bouquet
        </p>
        <h2 className="text-4xl font-serif text-[#333333] mt-3">
          See What's Popular
        </h2>
      </div>

      {/* product cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6">

        {/* Card 1 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
          <img
            src="https://images.pexels.com/photos/6958755/pexels-photo-6958755.jpeg"
            alt="Dried flower bouquet"
            className="w-full h-64 object-cover"
          />
          <div className="p-4 flex justify-between items-center text-gray-600 text-sm">
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-[#b78a6e]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
              <span>555 LIKES</span>
            </div>
            <div className="flex items-center space-x-1 cursor-pointer">
              <span>SHARE</span>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
          <img
            src="https://images.pexels.com/photos/4210313/pexels-photo-4210313.jpeg"
            alt="Dried palm leaves"
            className="w-full h-64 object-cover"
          />
          <div className="p-4 flex justify-between items-center text-gray-600 text-sm">
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-[#b78a6e]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
              <span>489 LIKES</span>
            </div>
            <div className="flex items-center space-x-1 cursor-pointer">
              <span>SHARE</span>
            </div>
          </div>
        </div>
        
        {/* Card 3 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
          <img
            src="https://images.pexels.com/photos/6794905/pexels-photo-6794905.jpeg?cs=srgb&dl=pexels-karolina-grabowska-6794905.jpg&fm=jpg"
            alt="Single dried stem"
            className="w-full h-64 object-cover"
          />
          <div className="p-4 flex justify-between items-center text-gray-600 text-sm">
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-[#b78a6e]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
              <span>612 LIKES</span>
            </div>
            <div className="flex items-center space-x-1 cursor-pointer">
              <span>SHARE</span>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
          <img
            src="https://images.pexels.com/photos/6794690/pexels-photo-6794690.jpeg?cs=srgb&dl=pexels-karolina-grabowska-6794690.jpg&fm=jpg"
            alt="Small dried bouquet"
            className="w-full h-64 object-cover"
          />
          <div className="p-4 flex justify-between items-center text-gray-600 text-sm">
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-[#b78a6e]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
              <span>420 LIKES</span>
            </div>
            <div className="flex items-center space-x-1 cursor-pointer">
              <span>SHARE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
