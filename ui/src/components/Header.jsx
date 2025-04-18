import React, { useState} from "react";
import { Link } from "react-router";
const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Simulate user role: "visitor" | "customer" | "admin"
  const userRole = "visitor"; // Change this to test role-based UI

  return (
    <nav className="bg-orange-500 backdrop-blur text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Brand */}
          <div className="flex justify-center w-70 md:w-72 h-full ml-[-2rem] pl-4 bg-red-500 rounded-2xl overflow-hidden ">
    <img src="/dhaka_logo.png" alt="Logo" className="rounded-3xl scale-390"   />
</div>


          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 text-black">
            <Link to="/" className=" hover:font-bold transition">Home</Link>
            <Link to="/#menu" className="hover:font-bold transition">Menu</Link>
            <Link to="/Order" className="hover:font-bold transition">Order</Link>
            <Link to="/TrackOrder" className="hover:font-bold transition">Track Order</Link>
            <Link to="/Contact" className="hover:font-bold transition">Contact</Link>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex space-x-4 items-center">
            <Link to="/order" className="bg-yellow-400 text-black px-4 py-2 rounded-md font-semibold hover:bg-yellow-500 transition">
              Order Now
            </Link>

            {userRole === "visitor" ? (
              <>
                <Link to="/Login" className="border border-white px-4 py-2 rounded-md hover:bg-[#ff6f00] hover:text-white transition">
                  Login
                </Link>
                <Link to="Register" className="text-black border border-white px-4 py-2 rounded-md hover:bg-[#ff6f00] hover:text-white  transition">Register</Link>
              </>
            ) : (
              <Link to="/Dashboard" className="text-white font-medium hover:underline">
                Dashboard
              </Link>
            )}
          </div>

          {/* Mobile menu toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              className="focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col space-y-2 px-4 py-4">
          <Link to="/" className="block hover:text-yellow-300">Home</Link>
          <Link to="/#menu" className="block hover:text-yellow-300">Menu</Link>
          <Link to="/order" className="block hover:text-yellow-300">Order</Link>
          <Link to="/TrackOrder" className="block hover:text-yellow-300">Track Order</Link>
          <Link to="/contact" className="block hover:text-yellow-300">Contact</Link>
          <hr className="border-green-600 my-2" />

          <Link to="/order" className="block bg-yellow-400 text-black text-center py-2 rounded-md font-semibold hover:bg-yellow-500 transition">
            Order Now
          </Link>

          {userRole === "visitor" ? (
            <>
              <Link to="/login" className="block text-sm hover:underline">Login</Link>
              <Link to="/register" className="block text-sm hover:underline">Register</Link>
            </>
          ) : (
            <Link to="/dashboard" className="block text-sm font-medium hover:underline">Dashboard</Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Header;
