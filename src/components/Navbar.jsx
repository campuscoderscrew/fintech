import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex space-x-10 shadow-md">
      <Link to="/" className="hover:underline font-semibold">Home</Link>
      <Link to="/officers" className="hover:underline font-semibold">Officers</Link>
      <Link to="/projects" className="hover:underline font-semibold">Projects</Link>
      <Link to="/education" className="hover:underline font-semibold">Education</Link>
      <Link to="/calendar" className="hover:underline font-semibold">Calendar</Link>
      <Link to="/about" className="hover:underline font-semibold">About</Link>
    </nav>
  );
}
