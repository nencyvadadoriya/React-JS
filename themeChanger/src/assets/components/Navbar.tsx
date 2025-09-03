type NavbarProps = {
  theme: string;
  ToggleTheme: () => void;
};

function Navbar({ theme, ToggleTheme }: NavbarProps) {
  return (
    <>
      {/*  Navbar */}
      <nav className="bg-white border-gray-200 dark:bg-gray-900 shadow-md sticky top-0 z-50">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Logo"
            />
            <span className="self-center text-2xl font-bold whitespace-nowrap dark:text-white">
              Theme Changer
            </span>
          </a>

          {/* Menu */}
          <div className="hidden w-full md:block md:w-auto">
            <ul
              className="font-medium flex flex-col p-4 md:p-0 mt-4 border 
              border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 
              rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 
              md:dark:bg-gray-900 dark:border-gray-700 items-center"
            >
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-blue-700 md:p-0 dark:text-white hover:text-blue-500 transition"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="block py-2 px-3 text-gray-900 md:p-0 dark:text-white hover:text-blue-500 transition"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="block py-2 px-3 text-gray-900 md:p-0 dark:text-white hover:text-blue-500 transition"
                >
                  Services
                </a>
              </li>

              {/* Theme Toggle */}
              <li>
                <button
                  type="button"
                  onClick={ToggleTheme}
                  className="ml-3 p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-xl"
                >
                  {theme === "light" ? "🌙" : "☀️"}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/*  Banner */}
      <section
        className={`${theme === "light" ? "bg-gray-100" : "bg-gray-900"
          } transition-colors duration-500 min-h-screen flex items-center`}>
        <div className="px-4 mx-auto max-w-screen-xl text-center py-20 lg:py-32">
          <h1
            className={`mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl ${theme === "light" ? "text-gray-900" : "text-white"
              }`}
          >
            Welcome to Theme Changer App 🌗
          </h1>
          <p className={`mb-8 text-lg font-normal lg:text-xl sm:px-16 lg:px-48 ${theme === "light" ? "text-gray-700" : "text-gray-300"
              }`}>
            Switch between Light & Dark mode with a single click and enjoy a
            modern, responsive UI designed for speed and performance.
          </p>

          {/* Buttons */}
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4 mb-10">
            <a
              href="#"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300"
            >
              Get Started 🚀
            </a>
            <a
              href="#about"
              className={`inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center rounded-lg border ${theme === "light"
                  ? "text-gray-900 border-gray-300 hover:bg-gray-200 focus:ring-gray-100"
                  : "text-white border-gray-600 hover:bg-gray-700 hover:border-gray-700 focus:ring-gray-800"
                }`}
            >
              Learn More ℹ️
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <div
              className={`p-6 rounded-xl shadow-md ${theme === "light" ? "bg-white" : "bg-gray-800"
                }`}
            >
              <h3
                className={`text-2xl font-bold mb-3 ${theme === "light" ? "text-gray-900" : "text-white"
                  }`}
              >
                ⚡ Lightning Fast
              </h3>
              <p
                className={`mb-4 ${theme === "light" ? "text-gray-600" : "text-gray-300"
                  }`}
              >
                Our app loads instantly and works smoothly even on slower
                devices. Optimized for maximum performance.
              </p>
              <a
                href="#"
                className="text-blue-600 hover:underline font-medium"
              >
                Learn more →
              </a>
            </div>
            <div
              className={`p-6 rounded-xl shadow-md ${theme === "light" ? "bg-white" : "bg-gray-800"
                }`}
            >
              <h3
                className={`text-2xl font-bold mb-3 ${theme === "light" ? "text-gray-900" : "text-white"
                  }`}
              >
                🎨 Modern Design
              </h3>
              <p
                className={`mb-4 ${theme === "light" ? "text-gray-600" : "text-gray-300"
                  }`}
              >
                Built with clean layouts, responsive elements, and smooth
                transitions to enhance user experience.
              </p>
              <a
                href="#"
                className="text-blue-600 hover:underline font-medium"
              >
                Explore features →
              </a>
            </div>
            <div
              className={`p-6 rounded-xl shadow-md ${theme === "light" ? "bg-white" : "bg-gray-800"
                }`}
            >
              <h3
                className={`text-2xl font-bold mb-3 ${theme === "light" ? "text-gray-900" : "text-white"
                  }`}
              >
                🔒 Secure & Reliable
              </h3>
              <p
                className={`mb-4 ${theme === "light" ? "text-gray-600" : "text-gray-300"
                  }`}
              >
                Security is our top priority. Your data is always safe with
                industry best practices.
              </p>
              <a
                href="#"
                className="text-blue-600 hover:underline font-medium"
              >
                Read security guide →
              </a>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

export default Navbar;
