'use client'

import { useState } from 'react';
import Link from 'next/link';
import { DiYii } from 'react-icons/di';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
const Navbar = () => {
  const router = useRouter()

  const [isMobileNavOpen, setMobileNavOpen] = useState(false);


  const handleToggleMobileNav = () => {
    setMobileNavOpen(!isMobileNavOpen);
  };
  const logouthandler =async()=> {
    try {
      toast.success('logout successfully')
      router.push('/login')
      
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <>
      <header className=" flex px-2 items-center justify-between py-5 md:px-6 lg:px-8">
        <div className="flex items-center">
          <a className="flex items-center">
            <DiYii size={32} />
          </a>
        </div>
        {/* Mobile Navigation Toggle */}
        <button
          onClick={handleToggleMobileNav}
          className="lg:hidden focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <nav
          className={`${
            isMobileNavOpen ? 'flex' : 'hidden'
          } lg:flex gap-6 flex-col lg:flex-row lg:items-center justify-around`}
        >
          <Link href="/">Home</Link>
          <Link href="/dashboard">About</Link>
          <Link href="#">Services</Link>
          <Link href="#">Contact</Link>
          <Link href="#"></Link>
        </nav>

        {/* Mobile Navigation Buttons */}
        <div className="hidden space-x-3 lg:block">
          <button
            type="button"
            className="px-4 py-2 font-medium text-sm outline outline-1 rounded-lg bg-white-300 active:bg-gray-300"
          >
            <Link href="/login">Login</Link>
          </button>
          <button
            type="button"
            className="px-4 py-2 outline font-medium text-sm outline-1 rounded-lg bg-gray-300 active:bg-gray-400"
          >
            <Link href="/signup">Signup</Link>
          </button>
          
          <button onClick={logouthandler}
            type="button"
            className="px-4 py-2 outline font-medium text-sm outline-1 rounded-lg bg-gray-300 active:bg-gray-400"
          >
            logout
          </button>        </div>
      </header>
    </>
  );
};

export default Navbar;
