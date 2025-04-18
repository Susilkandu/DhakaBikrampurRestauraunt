import React from 'react'
import { Link } from 'react-router'

export default function Footer() {
  return (
      <div className="fixed bottom-0 left-0 w-full bg-white backdrop-blur-md border-t border-gray-700 flex justify-around items-center py-3 z-50 md:hidden">
        <Link to="/" className="flex flex-col justify-center items-center text-center text-black text-xl hover:text-yellow-300 transition">
          <i className="bi bi-house-door-fill"></i>
          <span className='text-[0.7rem]'>Home</span>
        </Link>
        <Link to="/#Menu" className="flex flex-col justify-center items-center text-center text-black text-xl hover:text-yellow-300 transition">
          <i className="bi bi-list-ul"></i>
          <span className='text-[0.7rem]'>Menu</span>
        </Link>
        <Link to="/Order" className="flex flex-col justify-center items-center text-center text-black text-xl hover:text-yellow-300 transition">
          <i className="bi bi-cart-fill"></i>
          <span className='text-[0.7rem]'>Order</span>
        </Link>
        <Link to="/TrackOrder" className="flex flex-col justify-center items-center text-center text-black text-xl hover:text-yellow-300 transition">
          <i className="bi bi-geo-alt-fill"></i>
          <span className='text-[0.7rem]'>Track Order</span>
        </Link>
        <Link to="/Contact" className="flex flex-col justify-center items-center text-center text-black text-xl hover:text-yellow-300 transition">
          <i className="bi bi-telephone-fill"></i>
          <span className='text-[0.7rem]'>Contact</span>
        </Link>
      </div>
  )
}
