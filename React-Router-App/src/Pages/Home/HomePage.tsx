import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section
      className="relative h-screen w-full bg-cover bg-center flex items-center justify-center"
      style={{
        // Updated background image to closely match the provided design
        backgroundImage: `url("https://images.pexels.com/photos/6805518/pexels-photo-6805518.jpeg?auto=compress&cs=tinysrgb&h=627&fit=crop&w=1200")`,
      }}
    >
      {/* Overlay with the exact beige color from the banner in the image */}
      <div className="absolute inset-0 bg-[#E0D7CD]/40"></div> {/* Adjusted opacity for the right effect */}

      {/* Banner Content */}
      <div className="relative z-10 text-center px-20">
        <h1 className="text-4xl md:text-6xl font-serif text-[white] drop-shadow-sm mb-4"> {/* Darker text color */}
          Custom Dried Flower Bouquets
        </h1>
        <p className="text-lg md:text-xl text-[white] drop-shadow-sm mb-6"> {/* Darker text color */}
          Free delivery on orders over $79
        </p>
        <Link
          to="/shop"
          className="px-8 py-3 border border-[#4A4A4A] text-[white] font-medium rounded-md hover:bg-white hover:text-[#b78a6e] hover:border-[#b78a6e] transition-all duration-300"
        >
          Shop
        </Link>
      </div>
    </section>
  );
}