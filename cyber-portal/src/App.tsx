import { useEffect, useState } from "react";
import { Outlet } from "react-router";
import Navbar from "./Componets/Navbar/Navbar";
import Footer from "./Componets/Footer/Footer";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen w-screen bg-white">
        <img src="/loader.gif" alt="Loading..." className="w-20 h-20" />
      </div>
    );
  }
  return (
    <>
      <div className="min-h-screen w-full flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
