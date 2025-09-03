// App.tsx
import { useEffect, useState } from "react";
import Navbar from "./assets/components/Navbar";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme( (theme === "light" ? "dark" : "light"));
  };

  return (
    <div  className="w-full min-h-screen"  style={{ backgroundColor: theme === "light" ? "white" : "black" }}>
      <Navbar theme={theme} ToggleTheme={toggleTheme} />
    </div>
  );
}

export default App;
