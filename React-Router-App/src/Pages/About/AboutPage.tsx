export default function About() {
  return (
    <section className="w-full bg-[#fdfaf6] py-40">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 px-6">
        
        {/* Left Content */}
        <div>
          <p className="text-sm uppercase tracking-wider text-[#b78a6e] font-semibold mb-2">
            Remember Your Loved Ones
          </p>
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-6">
            Gift Ideas That Last Longer
          </h2>
          <p className="text-gray-700 mb-8 leading-relaxed">
            Who doesn’t love flowers? Whether you’re giving or receiving flowers,
            the only downside is how short-lived the happiness with a fresh bouquet of
            cut flowers can be. We are passionate about creating dried bouquets that not only
            look beautiful, but last longer. Our premium dried flower arrangements can last up to years.
          </p>
          <button className="bg-[#e8d7c5] text-black px-6 py-3 rounded-md font-medium hover:bg-[#dbc7b3] transition">
            Let’s Go
          </button>
        </div>

        {/* Right Image */}
        <div className="relative">
          <img
            src="https://images.pexels.com/photos/6805422/pexels-photo-6805422.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="Dried Flowers"
            className="w-full h-[400px] object-cover rounded-b-[200px] shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}