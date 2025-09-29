import { Outlet } from "react-router";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  return (
    <div className="h-screen w-full flex">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <main className="flex-grow  overflow-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default App;
