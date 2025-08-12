import React, { useState } from "react";

function App() {
  const [color, setColor] = useState("white");
  const colorList = ["green", "red", "yellow", "purple", "blue", "cyan", "teal"]

  return (
    <div className="w-full h-screen transition-colors duration-700" style={{ backgroundColor: color }}>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://icon-library.com/images/change-icon-png/change-icon-png-19.jpg" className="h-8" alt="Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Background Change</span>
          </a>

          <div className="flex gap-2 flex-wrap">
            {colorList.map((value, index) =>
              <button key={index} onClick={() => setColor(value)} className={`px-4 py-2 text-white bg-${value}-500 hover:bg-${value}-600 rounded`}>{value}</button>
            )}
          </div>
        </div>
      </nav >
    </div >
  );
}

export default App;
