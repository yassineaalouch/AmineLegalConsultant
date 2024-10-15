import React, { useState } from 'react';

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl ml-4 font-bold">
          <a href="#">Amine</a>
        </div>
        <ul className={`md:flex  mx-auto space-x-6 ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
          <li>
            <a href="#home" className="hover:text-yellow-500">Home</a>
          </li>
          <li>
            <a href="#experiences" className="hover:text-yellow-500">Experiences</a>
          </li>
          <li>
            <a href="#services" className="hover:text-yellow-500">Services</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-yellow-500">Contact me</a>
          </li>
        </ul>
        <div className="md:hidden">
          <button 
            onClick={toggleMenu}
            className="text-2xl focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
