function EmployeePortal() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-100 relative">
      {/* Navbar */}
      <nav className="w-full bg-white/80 backdrop-blur-lg shadow-md fixed top-0 left-0 z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Logo" className="h-10 w-10" />
            <span className="text-xl md:text-2xl font-bold text-blue-700">
              EmployePortal
            </span>
          </div>

          {/* navbar */}
          <ul className="hidden md:flex space-x-8 font-medium text-gray-700">
            <li><a href="#" className="hover:text-blue-600">Home</a></li>
            <li><a href="#" className="hover:text-blue-600">Dashboard</a></li>
            <li><a href="#" className="hover:text-blue-600">Employees</a></li>
            <li><a href="#" className="hover:text-blue-600">Admin</a></li>
          </ul>

          {/* toggle */}
          <div className="md:hidden">
            <button className="text-2xl text-gray-700">☰</button>
          </div>
        </div>
      </nav>

      {/* Banner  */}
      <section className="flex flex-col md:flex-row items-center justify-between flex-1 max-w-7xl mx-auto px-6 pt-28 md:pt-36 gap-12">

        {/* content */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Empower Your <span className="text-blue-700">Team</span> Efficiently
          </h1>

          <p className="text-gray-600 text-lg">
            A complete Employee Management System to register, track and
            monitor your workforce efficiently. Focus on growth while
            we simplify employee operations for you.
          </p>
          <div className="space-x-4">
            <button className="px-8 py-3 bg-blue-700 text-white rounded-xl shadow-lg hover:bg-blue-800 transition">
              Get Started
            </button>
            <button className="px-8 py-3 border border-blue-700 text-blue-700 rounded-xl hover:bg-blue-50 transition">
              Learn More
            </button>
          </div>
        </div>

        {/* image  */}
        <div className="w-1/2">
          <img src="https://static.vecteezy.com/system/resources/previews/008/627/770/original/company-employees-planning-task-and-brainstorming-flat-illustration-cartoon-people-sharing-ideas-and-meeting-flat-design-modern-illustration-vector.jpg"
            alt="Employees" className="rounded-xl" />
        </div>
      </section>
    </div>
  )
}

export default EmployeePortal;
