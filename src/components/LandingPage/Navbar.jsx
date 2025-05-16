import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from 'react-router-dom';

// Navbar component for landing page
// Includes nav links on the left and login/signup buttons on the right

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="shadow-md bg-bg w-full px-6 py-5 flex items-center justify-between relative z-50">

      {/* Left side: Hamburger menu or desktop nav */}
      <div className="flex items-center gap-6">
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="sm:hidden text-2xl text-[#333]"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop nav links */}
        <ul className="hidden sm:flex gap-6 lg:gap-10 text-sm lg:text-base">
          <a className="cursor-pointer" href="/">Home</a>
          <a className="cursor-pointer" href="/library">Feed Library</a>
          <a className="cursor-pointer" href="/diet">Diet</a>
          <a className="cursor-pointer" href="/outputs">Outputs</a>
        </ul>
      </div>

      {/* Right side: Login and Sign-up buttons */}
       <div className="flex items-center gap-3 ">
        <Link to="/login"> 
          <button className="btn bg-[#3f554a]">Login</button>
        </Link>
        <Link to="/signup"> 
          <button className="btn bg-[#34565e]">Sign up</button>
        </Link>
      </div>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full bg-bg px-6 py-4 flex flex-col gap-4 shadow-md sm:hidden z-50"
          >
            <a className="cursor-pointer">Home</a>
            <a className="cursor-pointer">Feed Library</a>
            <a className="cursor-pointer">Diet</a>
            <a className="cursor-pointer">Outputs</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
