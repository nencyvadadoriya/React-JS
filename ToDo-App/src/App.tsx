import Sidebar from "./Components/Sidebar/Sidebar";
import Dashboard from "./Components/Dashboard/Dashboard";

function App() {
  return (
    <div className="flex h-screen">
      <Sidebar/>
      <div className="w-full ">
        <Dashboard   />
      </div>
    </div>
  );
}

export default App;
