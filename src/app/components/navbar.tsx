import React from 'react'
import Link from 'next/link'

import { AiOutlineCloudDownload } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className='bg-gradient-to-r from-blue-500 to-cyan-500 z-50 shadow-lg shadow-cyan-500 sticky top-2'>
    <header className="text-white body-font">
      <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <img src="/Images/2600831.png" alt="name" width="100" height="100" className='w-14' />
          <span className="ml-3 text-xl">Abdul Sattar</span>
        </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/" className="mr-5 hover:text-cyan-300">Home</Link>
            <Link href="#about" className="mr-5 hover:text-cyan-300">About</Link>
            <Link href="#project" className="mr-5 hover:text-cyan-300">Projects</Link>
            <Link href="#skills" className="mr-5 hover:text-cyan-300">Skills</Link>
            <Link href="#contact" className="mr-5 hover:text-cyan-300">Contact</Link>
          </nav>
          <a href="/Resume.pdf" download="Resume" aria-label="Download Resume">
            <button className="inline-flex items-center bg-blue-600 border-0 py-1 px-3 focus:outline-none hover:bg-cyan-500 rounded text-base mt-4 md:mt-0">
              Download CV
              <AiOutlineCloudDownload className='text-xl ml-2' />
            </button>
          </a>
        </div>
      </header>
    </div>
  )
}

export default Navbar;
