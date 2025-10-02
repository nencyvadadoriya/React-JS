// src/pages/NotFound.tsx
import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-cyan-50 via-blue-50 to-white">
      <h1 className="text-9xl font-extrabold text-blue-800">404</h1>
      <p className="text-3xl font-semibold mt-4 text-blue-600">
        Oops! Page not found
      </p>
      <p className="mt-2 text-center text-blue-500 max-w-md">
        The page you are looking for might have been removed or is temporarily unavailable.
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition-colors"
      >
        Go Back Home
      </Link>
    </div>
  );
}
