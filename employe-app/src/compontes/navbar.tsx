import Logo from "../assets/logo.png"
function NavbarPage(props: any) {
  return (
    <div className="relative min-h-screen bg-gradient-to-r from-purple-900 via-blue-900 to-cyan-700">
      
      <nav className="absolute top-0 left-0 w-full z-50 bg-transparent">
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <img
          src={Logo}
          alt="Logo"
          className="h-20 w-auto"
        />

        {/* Navbar Links */}
        <ul className="hidden md:flex space-x-8 text-white font-medium">
          <li>
            <a href="#" className="hover:text-blue-300 transition duration-300">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-300 transition duration-300">
              Employee Registration
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-300 transition duration-300">
              Employee Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-300 transition duration-300">
              Admin Dashboard
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            ☰
          </button>
        </div>
      </div>
    </nav>

      {/* Hero Section (navbar overlap karega iske upar) */}
      <section className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 pt-32">
        
        {/* Left Side */}
        <div className="md:w-1/2 text-white space-y-6">
          <h1 className="text-5xl font-bold leading-tight">
            Employee <br /> Management <br /> System
          </h1>
          <p className="text-gray-300 text-lg">
            Employee management is the process by which employers ensure
            workers perform their jobs to the best of their abilities so as to
            achieve business goals. It typically entails building and
            maintaining healthy relationships with employees, as well as
            monitoring their daily labor and measuring progress. In this way,
            employers can identify opportunities for improvement and recognize
            achievements.
          </p>
          <button
            type="submit"
            onClick={() => {
              props.setShowForm(!props.showForm);
            }}
            className="relative inline-flex items-center justify-center px-6 py-2 
              text-sm font-medium text-gray-900 rounded-lg 
              bg-gradient-to-br from-purple-500 to-pink-500 
              hover:text-white focus:ring-4 focus:outline-none focus:ring-purple-200"
          >
            {(!props.showForm) ? "Show" : "Hide"} Employee Form
          </button>
        </div>

        {/* Right Side */}
        <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
          <div className="max-w-md bg-white rounded-xl shadow-lg p-5">
            <h3 className="text-center text-lg font-semibold mb-4">
              A Case study of Foundation Polytechnic, Ikot Ekpene
            </h3>
            <img
              src="https://intel-cs.com/wp-content/uploads/2024/09/servizio-azienda-consulenza.jpg"
              alt="Case Study"
              className="rounded-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default NavbarPage;
