import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Project = () => {
  return (
    <div id='project'>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
        My Projects
      </h1>
      
    </div>
    <div className="flex flex-wrap  mt-[1rem]">
      {/*projects*/}
      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../Public/dynamicresume.jpg")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              Dynamic Resume Builder 
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Dynamic Resume project
            </h1>
            <p className="leading-relaxed">
              A web application that allows users to generate and share dynamic resume using Typescript,HTML, and CSS.Includes PDF download and shareable
            </p>
            <Link target='_blank' href={"https://vercel.com/sattarkhas-projects/milestone5/DfCMCdcsxHQaXAFA7fjHCQ3VZNo8"}>
            <p className="leading-relaxed  text-blue-500">
              View Project..
            </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../Public/calculatortype.jpg")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              Simple Calculator Project 
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Simple calculator
            </h1>
            <p className="leading-relaxed line-clamp-6">
              A Simple Calculator built with using inquirer in Typescript that simulates an simple calculation like balance Addition ,Subtraction,multiplication and division.
            </p>
            <Link target="_blank" href={"https://github.com/Sattarkha/project-simple-calculator"}>
            <p className="leading-relaxed  text-blue-500">
              View Project..
            </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../Public/atmm.webp")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              ATM Project 
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              ATM Transections
            </h1>
            <p className="leading-relaxed line-clamp-4">
            Atm Project With all features of atm including fastcash , Reciept , new user add , funds transfer , withdraw , add amount  
            </p><br /> <br />
            <Link target='_blank' href={"https://github.com/Sattarkha/atm-machine"}>
            <p className="leading-relaxed  text-blue-500">
              View Project..
            </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../Public/clipboard.png")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              Countdown Timer Project 
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Countdown-Timer
            </h1>
            <p className="leading-relaxed line-clamp-4">
            A responsive countdown timer built with Next.js, allowing users to track time in real-time for events or tasks. This project highlights dynamic state management and a user-friendly interface
            </p><br /> <br />
            <Link target='_blank' href={"https://countdown-timer-black.vercel.app/"}>
            <p className="leading-relaxed  text-blue-500">
              View Project..
            </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../Public/bi-10.webp")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              CLI Number Guessing Project 
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              CLI Number Guess
            </h1>
            <p className="leading-relaxed line-clamp-4">
            A command-line number guessing game built with TypeScript, where users try to guess a randomly generated number within a range.
            </p><br /> <br />
            <Link target='_blank' href={"https://github.com/Sattarkha/cli-number-guessing.git"}>
            <p className="leading-relaxed  text-blue-500">
              View Project..
            </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../Public/typescript.png")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              Typescript Inquirer Project 
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Typescript Inquirer
            </h1>
            <p className="leading-relaxed line-clamp-4">
            A command-line project built with TypeScript and Inquirer.js, allowing for interactive prompts and user input handling directly in the terminal.
            </p><br /> <br />
            <Link target='_blank' href={"https://github.com/Sattarkha/typescript.inquirer.git"}>
            <p className="leading-relaxed  text-blue-500">
              View Project..
            </p>
            </Link>
          </div>
        </div>
      </div>
    
    </div>
  </div>
</section>

    </div>
  )
}

export default Project
