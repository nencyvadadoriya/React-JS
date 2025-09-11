import EmployeeForm from "./compontes/form";
import NavbarPage from "./compontes/Navbar";
import { useState } from "react";

function App() {
    const [showForm, setShowForm] = useState(false);
  return (
    <>
      <NavbarPage showForm={showForm} setShowForm={setShowForm}/>
      <EmployeeForm  showForm={showForm} setShowForm={setShowForm}/>
      
    </>
  );
}

export default App;
