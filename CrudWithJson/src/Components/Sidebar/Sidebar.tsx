import { FiHome, FiPlusCircle, FiEye, FiShoppingCart, FiList, FiMail, FiCreditCard } from "react-icons/fi";
import { Link } from "react-router";

export default function Sidebar() {
  const menuItems = [
    { name: "Dashboard", path: "/", icon: FiHome },
    { name: "Add Product", path: "/addProduct", icon: FiPlusCircle },
    { name: "View Product", path: "/viewProduct", icon: FiEye },
    { name: "Add To Card", path: "/addToCard", icon: FiShoppingCart },
    { name: "List", path: "/list", icon: FiList },
    { name: "Email", path: "/email", icon: FiMail },
    { name: "Checkout", path: "/checkout", icon: FiCreditCard },
  ];

  return (
    <div className="w-64 min-h-screen p-8 hidden lg:block">
      <div className="fixed top-0 left-0 h-[100vh] w-60 p-6 bg-purple-700 text-white transform translate-z-0">
        <div className="text-2xl font-extrabold mb-8 mt-2">
          E-commerce
        </div>

        <nav className="space-y-3">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="flex items-center space-x-3 p-3 rounded-xl hover:bg-white/10 text-indigo-100 transition-colors duration-200"
            >
              <item.icon className="w-5 h-5" />
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
