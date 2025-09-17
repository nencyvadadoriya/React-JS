import { NavLink, Link } from "react-router"

function Navbar() {
  return (
    <div className="bg-[#0b0c2a]">
      <nav className="text-white max-w-[1320px] mx-auto px-4 flex justify-between items-center h-20">
        {/* Logo */}
        <div className="text-3xl font-bold px-1">CyberSpace</div>

        {/* Nav Links */}
        <ul className="hidden md:flex gap-8 text-lg font-medium">
          <li>
            <Link to="/" className="hover:text-[#ff5722] transition">Home</Link>
          </li>
          <li>
            <NavLink to="/about" className="hover:text-[#ff5722] transition">About Us</NavLink>
          </li>
          <li>
            <NavLink to="/services" className="hover:text-[#ff5722] transition">Services</NavLink>
          </li>
          <li>
            <NavLink to="/pages" className="hover:text-[#ff5722] transition">Pages</NavLink>
          </li>
          <li>
            <NavLink to="/blog" className="hover:text-[#ff5722] transition">Blog</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="hover:text-[#ff5722] transition">Contact</NavLink>
          </li>
        </ul>

        {/* Button */}
        <NavLink to="/">
          <button className="bg-[#ff5722] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#e64a19] transition">
            Get Free Quotes
          </button>
        </NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
