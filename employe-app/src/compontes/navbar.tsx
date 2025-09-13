type navbarProps = {
  theme: string,
  toggleTheme: () => void
}

function EmployeePortal({ theme, toggleTheme }: navbarProps) {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Navbar */}
      <nav className="w-full  sticky  top-0 left-0 z-50 ">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Logo" className="h-10 w-10" />
            <span className="text-xl md:text-2xl font-bold text-blue-700">
              EmployePortal
            </span>
          </div>

          {/* navbar */}
          <ul className={`hidden md:flex space-x-8 font-medium ${(theme === "light" ? "text-black" : "text-white") } items-center`}>
            <li><a href="#" className="hover:text-blue-600">Home</a></li>
            <li><a href="#" className="hover:text-blue-600">Dashboard</a></li>
            <li><a href="#" className="hover:text-blue-600">Employees</a></li>
            <li><a href="#" className="hover:text-blue-600">Admin</a></li>

            {/* Theme Toggle Button */}
            <button type="button" onClick={toggleTheme} className="ml-4 flex items-center justify-center w-11 h-11 rounded-full
             bg-gray-200 hover:bg-gray-300 text-lg shadow-md
             transition-all duration-300 ease-in-out
             dark:bg-gray-700 dark:hover:bg-gray-600
             focus:outline-none focus:ring-2 focus:ring-blue-400">
              <span className="transition-transform duration-500 ease-in-out dark:rotate-180">
                {theme == "light" ? " 🌙" : "☀️"}
              </span>
            </button>

          </ul>

          {/* toggle */}
          <div className="md:hidden">
            <button className="text-2xl text-gray-700">☰</button>
          </div>
        </div>
      </nav>
      <section
        className="flex flex-col md:flex-row items-center justify-between flex-1 
             max-w-7xl mx-auto px-6 pt-28 md:pt-36 gap-12 
            "
      >
        {/* content */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Empower Your <span className="text-blue-700 dark:text-blue-400">Team</span> Efficiently
          </h1>

          <p className={`text-lg ${(theme === "light" ? "text-black" : "text-white")}`}>
            A complete Employee Management System to register, track and
            monitor your workforce efficiently. Focus on growth while
            we simplify employee operations for you.
          </p>

          <div className="space-x-4">
            <button className="px-8 py-3 bg-blue-700 text-white rounded-xl shadow-lg hover:bg-blue-800 transition">
              Get Started
            </button>
            <button className="px-8 py-3 border border-blue-700 text-blue-700  dark:border-blue-400 dark:text-blue-400 
                         rounded-xl hover:bg-blue-50 dark:hover:bg-gray-800 transition">
              Learn More
            </button>
          </div>
        </div>

        {/* image */}
        <div className="w-1/2">
          <img
            src="https://static.vecteezy.com/system/resources/previews/008/627/770/original/company-employees-planning-task-and-brainstorming-flat-illustration-cartoon-people-sharing-ideas-and-meeting-flat-design-modern-illustration-vector.jpg"
            alt="Employees"
            className="rounded-xl"
          />
        </div>
      </section>

    </div>
  )
}

export default EmployeePortal;
