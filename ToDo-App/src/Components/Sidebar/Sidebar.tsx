import { 
  HomeIcon as HomeSolid, 
  ClipboardDocumentListIcon as TaskSolid, 
  ClockIcon as ClockSolid, 
  CalendarIcon as CalendarSolid, 
  Cog6ToothIcon as CogSolid, 
  ArrowRightOnRectangleIcon as LogoutSolid, 
  XMarkIcon,
  Bars3Icon,
  CheckCircleIcon as CheckSolid,
  ClockIcon as PendingSolid,
  ListBulletIcon as ListSolid,
  UserCircleIcon
} from "@heroicons/react/24/solid"; 
import { useEffect, useState } from "react";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true); 
  const [currentTheme, setCurrentTheme] = useState("bg-white"); 
  useEffect(() => {
    const savedTheme = localStorage.getItem("themeColor");
    if (savedTheme) {
      setCurrentTheme(savedTheme);
    }

    const handleStorageChange = () => {
      const updatedTheme = localStorage.getItem("themeColor");
      if (updatedTheme) {
        setCurrentTheme(updatedTheme);
      }
    };
    window.addEventListener("storage", handleStorageChange);

    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const colors = [
    { name: "Blue", value: "bg-blue-200" },
    { name: "Indigo", value: "bg-indigo-300" },
    { name: "Green", value: "bg-green-200" },
    { name: "Purple", value: "bg-purple-200" },
    { name: "Red", value: "bg-red-200" },
    { name: "Orange", value: "bg-orange-200" },
    { name: "Pink", value: "bg-pink-200" },
    { name: "Yellow", value: "bg-yellow-200" },
    { name: "Teal", value: "bg-teal-200" },
    { name: "Cyan", value: "bg-cyan-200" },
    { name: "Lime", value: "bg-lime-200" },
    { name: "Rose", value: "bg-rose-200" },
  ];
  const handleThemeChange = (newTheme) => {
    setCurrentTheme(newTheme);
    localStorage.setItem("themeColor", newTheme);
  };

  if (!isOpen) {
    return (
      <div className="w-16 bg-white text-gray-900 flex flex-col shadow-lg items-center py-4 justify-between">
        <div>
          <button onClick={() => setIsOpen(true)} className="mb-6 hover:text-blue-500">
            <Bars3Icon className="w-6 h-6" />
          </button>
          <div className="space-y-6">
            <HomeSolid className="w-7 h-7 text-blue-500 cursor-pointer" />
            <TaskSolid className="w-7 h-7 text-green-500 cursor-pointer" />
            <ClockSolid className="w-7 h-7 text-yellow-500 cursor-pointer" />
            <CalendarSolid className="w-7 h-7 text-purple-500 cursor-pointer" />
          </div>
        </div>
        <div className="space-y-6">
          <CogSolid className="w-7 h-7 text-gray-500 cursor-pointer" />
          <LogoutSolid className="w-7 h-7 text-red-600 cursor-pointer" />
        </div>
      </div>
    );
  }

  return (
    <div className="w-64 bg-white text-gray-900 flex flex-col shadow-lg relative">
      {/* Header */}
      <div className="p-6 font-extrabold text-xl tracking-wide border-b border-gray-200 flex justify-between items-center">
        <span className="text-gray-800">ToDo App</span>
        <button onClick={() => setIsOpen(false)} className="hover:text-red-500">
          <XMarkIcon className="w-6 h-6" />
        </button>
      </div>

      {/* Dashboard link */}
      <div className="p-5 border-b border-gray-200">
        <a 
          href="#" 
          className="flex items-center p-3 rounded-lg hover:bg-blue-50 font-semibold text-gray-900 transition"
        >
          <HomeSolid className="w-6 h-6 mr-3 text-blue-500" /> 
          Dashboard
        </a>
      </div>

      {/* Task status */}
      <div className="p-5 border-b border-gray-200">
        <p className="mb-3 text-sm font-semibold text-gray-600 uppercase tracking-wide">📊 Task Status</p>
        <div className="space-y-2">
          <a href="#" className="flex items-center p-3 rounded-lg hover:bg-gray-100 font-medium text-gray-800 transition">
            <ListSolid className="w-6 h-6 mr-3 text-blue-500" /> 
            All Tasks 
            <span className="ml-auto text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full">12</span>
          </a>
          <a href="#" className="flex items-center p-3 rounded-lg hover:bg-gray-100 font-medium text-gray-800 transition">
            <PendingSolid className="w-6 h-6 mr-3 text-yellow-500" /> 
            Pending 
            <span className="ml-auto text-xs bg-yellow-100 text-yellow-600 px-2 py-0.5 rounded-full">5</span>
          </a>
          <a href="#" className="flex items-center p-3 rounded-lg hover:bg-gray-100 font-medium text-gray-800 transition">
            <CheckSolid className="w-6 h-6 mr-3 text-green-500" /> 
            Completed 
            <span className="ml-auto text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded-full">7</span>
          </a>
        </div>
      </div>

      {/* Theme selector */}
      <div className="p-5 border-b border-gray-200">
        <p className="mb-3 text-sm font-semibold text-gray-600 uppercase tracking-wide">🎨 Choose Theme</p>
        <div className="flex gap-2 flex-wrap">
          {colors.map((color, index) => (
            <button
              key={index}
              onClick={() => handleThemeChange(color.value)}
              className={`w-7 h-7 rounded-full cursor-pointer ${color.value} border-2 transition-transform 
                ${currentTheme === color.value ? "ring-2 ring-offset-2 ring-gray-600" : "border-gray-300 hover:ring-2 hover:ring-offset-2 hover:ring-gray-400"}`}
            ></button>
          ))}
        </div>
      </div>

      {/* Bottom menu */}
      <div className="p-5 space-y-2">
        <a href="#" className="flex items-center p-3 rounded-lg hover:bg-gray-100 font-medium text-gray-800 transition">
          <UserCircleIcon className="w-6 h-6 mr-3 text-blue-500" /> Profile
        </a>
        <a href="#" className="flex items-center p-3 rounded-lg hover:bg-gray-100 font-medium text-gray-800 transition">
          <CogSolid className="w-6 h-6 mr-3 text-gray-500" /> Settings
        </a>
        <a href="#" className="flex items-center p-3 rounded-lg hover:bg-gray-100 font-medium text-gray-800 transition">
          <LogoutSolid className="w-6 h-6 mr-3 text-red-600" /> Log Out
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
