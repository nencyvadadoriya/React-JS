import { Facebook, Twitter, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0c1234] text-white pt-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
        
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Cyber Space</h2>
          <p className="text-gray-300 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt labore et dolore magna aliqua
          </p>
          <div className="flex space-x-4">
            <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-[#e64a19] transition">
              <Facebook size={18} />
            </a>
            <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-[#e64a19] transition">
              <Twitter size={18} />
            </a>
            <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-[#e64a19] transition">
              <Linkedin size={18} />
            </a>
            <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-[#e64a19] transition">
              <Youtube size={18} />
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start gap-2">
              <MapPin size={18} className="text-[#e64a19]" />
              770 East Linden Street New York
            </li>
            <li className="flex items-center gap-2">
              <Phone size={18} className="text-[#e64a19]" /> +707 355–633–755
            </li>
            <li className="flex items-center gap-2">
              <Mail size={18} className="text-[#e64a19]" /> contact-info@example.com
            </li>
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Managed Firewall</li>
            <li>Virtual CISO</li>
            <li>Endpoint Security</li>
            <li>Networking Security</li>
            <li>Cloud Security</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Subscribe Newsletter</h3>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 rounded mb-4 text-black focus:outline-none"
          />
          <button className="bg-[#e64a19] w-full py-3 rounded font-semibold hover:bg-[#d84315] transition">
            Subscribe Now
          </button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-gray-700 py-6 text-sm text-gray-400 flex flex-col md:flex-row items-center justify-between px-6">
        <p>© 2022 – All Rights Reserved – Designed by Barakah Themes</p>
        <div className="flex space-x-6 mt-3 md:mt-0">
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}
