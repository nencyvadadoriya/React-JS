export default function ServicesSection() {
  return (
    <section className="w-full bg-[#F5EFE9] py-20 pt-32">
      <div className="text-center mb-7 w-full">
        <h2 className="text-4xl font-serif text-[#333333]">
          Our Services
        </h2>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center md:gap-10 px-6">
        {/* Card 1: Custom Bouquets */}
        <div className="w-full md:w-1/3 p-4 flex flex-col items-center text-center">
          <div className="relative w-full h-64 rounded-t-full overflow-hidden mb-4">
            <div className="absolute top-0 left-0 w-full h-full transform scale-x-[1.2] rounded-t-full overflow-hidden">
              <img
                src="https://images.pexels.com/photos/4207780/pexels-photo-4207780.jpeg"
                alt="Custom Bouquets"
                className="w-full h-full object-cover rounded-t-full"
              />
            </div>
          </div>
          <div className="bg-[#fdfaf6] p-8 -mt-8 rounded-b-2xl w-full">
            <h3 className="text-xl font-medium text-[#333333]">
              Custom Bouquets
            </h3>
            <p className="text-sm text-gray-600 mt-2 max-w-sm">
              Work with our talented florists to create a one-of-a-kind bouquet based on the color palette, style and flowers you desire.
            </p>
            <button className="mt-4 text-xs font-semibold text-[#b78a6e] border-b border-[#b78a6e] pb-1">
              READ MORE
            </button>
          </div>
        </div>

        {/* Card 2: Occasion Flowers */}
        <div className="w-full md:w-1/3 p-4 flex flex-col items-center text-center">
          <div className="relative w-full h-64 rounded-t-full overflow-hidden mb-4">
            <div className="absolute top-0 left-0 w-full h-full transform scale-x-[1.2] rounded-t-full overflow-hidden">
              <img
                src="https://images.pexels.com/photos/6805391/pexels-photo-6805391.jpeg"
                alt="Occasion Flowers"
                className="w-full h-full object-cover rounded-t-full"
              />
            </div>
          </div>
          <div className="bg-[#fdfaf6] p-8 -mt-8 rounded-b-2xl w-full">
            <h3 className="text-xl font-medium text-[#333333]">
              Occasion Flowers
            </h3>
            <p className="text-sm text-gray-600 mt-2 max-w-sm">
              Get the perfect bouquet for your special day. From birthdays to anniversaries, our flowers make every event memorable.
            </p>
            <button className="mt-4 text-xs font-semibold text-[#b78a6e] border-b border-[#b78a6e] pb-1">
              READ MORE
            </button>
          </div>
        </div>

        {/* Card 3: Premade Bouquets */}
        <div className="w-full md:w-1/3 p-4 flex flex-col items-center text-center">
          <div className="relative w-full h-64 rounded-t-full overflow-hidden mb-4">
            <div className="absolute top-0 left-0 w-full h-full transform scale-x-[1.2] rounded-t-full overflow-hidden">
              <img
                src="https://images.pexels.com/photos/6805421/pexels-photo-6805421.jpeg"
                alt="Premade Bouquets"
                className="w-full h-full object-cover rounded-t-full"
              />
            </div>
          </div>
          <div className="bg-[#fdfaf6] p-8 -mt-8 rounded-b-2xl w-full">
            <h3 className="text-xl font-medium text-[#333333]">
              Premade Bouquets
            </h3>
            <p className="text-sm text-gray-600 mt-2 max-w-sm">
              The best bouquets are the ones you can grab-and-go. Our premade bouquets are perfect for a quick gift or decoration.
            </p>
            <button className="mt-4 text-xs font-semibold text-[#b78a6e] border-b border-[#b78a6e] pb-1">
              READ MORE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}