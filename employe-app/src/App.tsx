import EmployeeForm from "./compontes/Form";
import NavbarPage from "./compontes/Navbar";
import { useEffect, useState } from "react";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme")|| "")

  const toggleTheme = ()=>{
    setTheme(theme=>  (theme === "light" ) ? "dark" : "light")
  }
  useEffect(()=>{
     localStorage.setItem("theme" , theme) 
  },[theme])
  return (
    <>
      <div className={`w-full h-screen transition-colors duration-500 ${theme  ==="light"  ? "bg-white text-black" : "bg-gray-900 text-white"
          }`} >
        <NavbarPage  theme={theme} toggleTheme={toggleTheme}/>
        <EmployeeForm  theme = {theme} toggleTheme={toggleTheme}/>
      </div>
    </>
  );
}

export default App;
