import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white px-6 py-4 shadow-md">
      <div className="flex items-center justify-between">
        <div className="font-bold text-xl">Logo</div>
        {/* Hamburger button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {/* Links for medium+ screens */}
        <div className="hidden md:flex space-x-10">
          <Link to="/" className="hover:underline font-semibold">
            Home
          </Link>
          <Link to="/officers" className="hover:underline font-semibold">
            Officers
          </Link>
          <Link to="/projects" className="hover:underline font-semibold">
            Projects
          </Link>
          <Link to="/education" className="hover:underline font-semibold">
            Education
          </Link>
          <Link to="/calendar" className="hover:underline font-semibold">
            Calendar
          </Link>
          <Link to="/about" className="hover:underline font-semibold">
            About
          </Link>
        </div>
      </div>
      {/* Mobile menu */}
      {open && (
        <div className="flex flex-col space-y-2 mt-2 md:hidden">
          <Link
            to="/"
            className="hover:underline font-semibold"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/officers"
            className="hover:underline font-semibold"
            onClick={() => setOpen(false)}
          >
            Officers
          </Link>
          <Link
            to="/projects"
            className="hover:underline font-semibold"
            onClick={() => setOpen(false)}
          >
            Projects
          </Link>
          <Link
            to="/education"
            className="hover:underline font-semibold"
            onClick={() => setOpen(false)}
          >
            Education
          </Link>
          <Link
            to="/calendar"
            className="hover:underline font-semibold"
            onClick={() => setOpen(false)}
          >
            Calendar
          </Link>
          <Link
            to="/about"
            className="hover:underline font-semibold"
            onClick={() => setOpen(false)}
          >
            About
          </Link>
        </div>
      )}
    </nav>
  );
}
