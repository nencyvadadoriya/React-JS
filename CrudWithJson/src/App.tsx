import { Outlet } from "react-router";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="h-screen w-full flex flex-col">
      <Navbar />
      <main className="flex-1 overflow-auto p-6 bg-gray-50">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
