import React, { useState, useEffect } from "react";

function App() {
  const [color, setColor] = useState("white");
  const [theme, setTheme] = useState("light");

  const colorList = ["green", "red", "yellow", "purple", "blue", "cyan", "teal"];

  return (
    <div className="w-full h-screen transition-colors duration-700" style={{ backgroundColor: color }}>
      {/* Navbar */}
      <nav className="bg-black dark:bg-gray-900 border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

          {/* Logo/Title */}
          <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              Background Changer
            </span>
          </a>

          {/* Buttons */}
          <div className="flex gap-2 flex-wrap items-center">
            {/* Color buttons */}
            {colorList.map((value, index) => (
              <button
                key={index}
                onClick={() => setColor(value)}
                className={`px-4 py-2 text-white rounded transition duration-300  bg-${value}-500 hover:bg-${value}-600`}>{value[0].toUpperCase() + value.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default App;
