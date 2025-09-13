export default function Footer() {
  return (
    <footer className="bg-[#fdfaf6] dark:bg-gray-900 border-t border-gray-200">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-8 lg:py-10">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0 md:w-1/3">
            <a href="/" className="flex items-center mb-4">
              <span className="self-center text-3xl font-serif text-[#b78a6e] font-semibold whitespace-nowrap">
                Fleur
              </span>
            </a>
            <p className="text-gray-600 font-sans text-sm">
              Premium dried flower arrangements that last. Custom bouquets and occasion flowers for every memorable moment.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-[#333333] uppercase">
                Company
              </h2>
              <ul className="text-gray-600 font-sans font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Services
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-sm font-semibold text-[#333333] uppercase">
                Follow us
              </h2>
              <ul className="text-gray-600 font-sans font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Facebook
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-sm font-semibold text-[#333333] uppercase">
                Legal
              </h2>
              <ul className="text-gray-600 font-sans font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-300 sm:mx-auto lg:my-8" />

        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center">
            © 2023{" "}
            <a href="/" className="hover:underline">
              Fleur™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}