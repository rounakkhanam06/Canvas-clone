
import { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Sidebar.css";
import { FaBars, FaHome, FaBook, FaCalendarAlt, FaInbox, FaQuestionCircle } from "react-icons/fa";

export default function Sidebar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      {/* Mobile Hamburger */}
      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <FaBars />
      </button>

      {/* Desktop and Tablet Menu */}
      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
        <Link to="/" className="nav-item">
          <FaHome className="icon" />
          <span className="text">Dashboard</span>
        </Link>
        <Link to="/courses/1" className="nav-item">
          <FaBook className="icon" />
          <span className="text">Courses</span>
        </Link>
        <a href="/calendar" className="nav-item">
          <FaCalendarAlt className="icon" />
          <span className="text">Calendar</span>
        </a>
        <a href="#" className="nav-item">
          <FaInbox className="icon" />
          <span className="text">Inbox</span>
        </a>
        <a href="#" className="nav-item">
          <FaQuestionCircle className="icon" />
          <span className="text">Help</span>
        </a>
      </nav>
    </header>
  );
}

