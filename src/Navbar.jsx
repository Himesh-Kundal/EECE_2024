import React from 'react';
import './Navbar.css';  // Optional for custom styles

const Navbar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2>Your Name</h2>
      </div>
      <ul className="navbar-links">
        <li><button onClick={() => scrollToSection('home')}>Home</button></li>
        <li><button onClick={() => scrollToSection('semester1')}>Semester 1</button></li>
        <li><button onClick={() => scrollToSection('semester2')}>Semester 2</button></li>
        <li><button onClick={() => scrollToSection('semester3')}>Semester 3</button></li>
        <li><button onClick={() => scrollToSection('semester4')}>Semester 4</button></li>
        <li><button onClick={() => scrollToSection('semester5')}>Semester 5</button></li>
        <li><button onClick={() => scrollToSection('semester6')}>Semester 6</button></li>
        <li><button onClick={() => scrollToSection('semester7')}>Semester 7</button></li>
        <li><button onClick={() => scrollToSection('semester8')}>Semester 8</button></li>
        <li><button onClick={() => scrollToSection('feedback')}>Feedback</button></li>
        <li><button onClick={() => scrollToSection('about')}>About</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
