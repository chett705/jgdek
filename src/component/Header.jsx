import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IoIosCall } from "react-icons/io";
import { IoMdSearch } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { CiMenuBurger } from "react-icons/ci";
import { IoSearch, IoClose } from 'react-icons/io5'; // Added IoClose

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile menu on NavLink click
  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <nav>
      {/* Top Bar */}
      <div className='bg-blue-950 px-3 py-1 lg:px-0'>
        <div className='container flex mx-auto justify-between text-white px-8 text-[0.8rem]'>
          <div className='flex items-center'>
            <IoIosCall className='me-1' />
            <span>+855 993 443 994</span>
          </div>
          <div className='hidden lg:flex'>
            <span>Get 50% off on Selected Item &emsp; | &emsp; Shop Now</span>
          </div>
          <div>
            <select className='outline-0 me-4 bg-blue-950'>
              <option value="">EN</option>
              <option value="">KH</option>
            </select>
            <select className='outline-0 bg-blue-950'>
              <option value="">Cambodia</option>
              <option value="">Japan</option>
            </select>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className='py-4 shadow-lg px-3 lg:px-0'>
        <div className='container flex justify-between items-center text-[1.2rem]'>
          {/* Logo */}
          <div className='w-[40%] md:w-[20%] px-3'>
            <NavLink to="/" className='flex items-center'>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png"
                alt="Site Logo"
                className="h-10 w-auto"
              />
              <span className="ml-2 font-bold text-xl">T-C Accessory</span>
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden lg:w-[60%] lg:flex items-center justify-between'>
            <ul className='flex'>
              <li className='mx-6'><NavLink to="/" id='nav_bar'>Home</NavLink></li>
              <li className='mx-6'><NavLink to="/about" id='nav_bar'>About</NavLink></li>
              <li className='mx-6'><NavLink to="/sevices" id='nav_bar'>Service</NavLink></li>
              <li className='mx-6'><NavLink to="/contact" id='nav_bar'>Contact</NavLink></li>
            </ul>
            <form className='flex items-center border border-gray-300 rounded-full p-2 pe-3'>
              <input type="text" placeholder='Search...' className='border-0 px-3 outline-0' />
              <button type="submit"><IoMdSearch /></button>
            </form>
          </div>

          {/* User and Cart */}
          <div className='hidden lg:w-[20%] lg:flex items-center justify-end px-7'>
            <div className='flex items-center me-4'>
              <FaUserCircle className='me-2' />
              <NavLink to="#">Account</NavLink>
            </div>
            <div className='flex items-center me-4'>
              <FaCartShopping className='me-2' />
              <NavLink to="#">Cart</NavLink>
            </div>
          </div>

          {/* Mobile Toggle Button */}
          <button onClick={() => setIsOpen(!isOpen)} className='flex lg:hidden px-0'>
            {isOpen ? (
              <IoClose className='text-2xl' />
            ) : (
              <CiMenuBurger className='text-2xl' />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`${isOpen ? 'opacity-100 -translate-y-2 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'} duration-300 w-[90%] z-50 lg:hidden bg-white border rounded-lg mt-4 absolute left-1/2 transform -translate-x-1/2 p-4`}>
        <ul>
          <li className='text-xl border-b pb-3 mb-3'>
            <NavLink to="/" onClick={handleNavClick}>Home</NavLink>
          </li>
          <li className='text-xl border-b pb-3 mb-3'>
            <NavLink to="/about" onClick={handleNavClick}>About</NavLink>
          </li>
          <li className='text-xl border-b pb-3 mb-3'>
            <NavLink to="/sevices" onClick={handleNavClick}>Service</NavLink>
          </li>
          <li className='text-xl border-b pb-3 mb-3'>
            <NavLink to="/contact" onClick={handleNavClick}>Contact</NavLink>
          </li>
        </ul>
        <form className='flex items-center border border-gray-300 rounded-full p-2 pe-3 mt-5'>
          <input type="text" placeholder='Search...' className='w-full border-0 outline-0 px-3' />
          <button type="submit"><IoSearch /></button>
        </form>
      </div>
    </nav>
  );
}

export default Header;
