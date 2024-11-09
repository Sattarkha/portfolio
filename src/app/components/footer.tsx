import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import Link from 'next/link';
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='bg-blue-100'>
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <img src="/Images/2600831.png" alt="name" width="100" height="100" className='w-14' />
            <span className="ml-3 text-xl">Abdul Sattar</span>
          </a>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2024 Created by Abdul Sattar
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <Link href="https://www.linkedin.com/in/abdul-sattar-2981042a8" target="_blank">
              <FaLinkedin className='text-4xl hover:text-[#0e76a8]' />
            </Link>
            <Link href="https://web.facebook.com/profile.php?id=100013268380918" target="_blank">
              <FaFacebookSquare className='text-4xl hover:text-[#3b5998]' />
            </Link>
            <Link href="https://wa.me/+923083366991" target="_blank">
              <FaSquareWhatsapp className='text-4xl hover:text-[#65D151]' />
            </Link>
            <Link href="https://github.com/Sattarkha" target="_blank">
              <FaSquareGithub className='text-4xl hover:text-[#1F2328]' />
            </Link>
          </span>
        </div>
      </footer>
    </div>
  )
}

export default Footer
