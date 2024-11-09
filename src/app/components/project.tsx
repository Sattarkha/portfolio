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
          <div className="flex flex-wrap mt-[1rem]">
  {/* Project 1 */}
  <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
    <div className="flex relative">
      <Image
        alt="Dynamic Resume Builder"
        className="absolute inset-0 w-full h-full object-cover object-center"
        src="/dynamicresume.jpg"  // Updated path
        width={400}
        height={400}
      />
      <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
        <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
          Dynamic Resume Builder
        </h2>
        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
          Dynamic Resume Project
        </h1>
        <p className="leading-relaxed line-clamp-6">
          A web application that allows users to generate and share dynamic resumes using TypeScript, HTML, and CSS. Includes PDF download and shareable link.
        </p>
        <Link target='_blank' href="https://vercel.com/sattarkhas-projects/milestone5/DfCMCdcsxHQaXAFA7fjHCQ3VZNo8">
          <p className="leading-relaxed text-blue-500">
            View Project..
          </p>
        </Link>
      </div>
    </div>
  </div>

  {/* Project 2 */}
  <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
    <div className="flex relative">
      <Image
        alt="Simple Calculator"
        className="absolute inset-0 w-full h-full object-cover object-center"
        src="/calculatortype.jpg"  // Updated path
        width={400}
        height={400}
      />
      <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
        <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
          Simple Calculator Project
        </h2>
        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
          Simple Calculator
        </h1>
        <p className="leading-relaxed line-clamp-6">
          A Simple Calculator built using Inquirer in TypeScript that simulates simple calculations like addition, subtraction, multiplication, and division.
        </p>
        <Link target="_blank" href="https://github.com/Sattarkha/project-simple-calculator">
          <p className="leading-relaxed text-blue-500">
            View Project..
          </p>
        </Link>
      </div>
    </div>
  </div>

  {/* Project 3 */}
  <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
    <div className="flex relative">
      <Image
        alt="ATM Project"
        className="absolute inset-0 w-full h-full object-cover object-center"
        src="/atmm.webp"  // Updated path
        width={400}
        height={400}
      />
      <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
        <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
          ATM Project
        </h2>
        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
          ATM Transactions
        </h1>
        <p className="leading-relaxed line-clamp-5">
          ATM Project with all features including fast cash, receipt, new user addition, fund transfer, withdrawal, and adding amount.
        </p><br />
        <Link target='_blank' href="https://github.com/Sattarkha/atm-machine">
          <p className="leading-relaxed text-blue-500">
            View Project..
          </p>
        </Link>
      </div>
    </div>
  </div>

  {/* Project 4 */}
  <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
    <div className="flex relative">
      <Image
        alt="Countdown Timer Project"
        className="absolute inset-0 w-full h-full object-cover object-center"
        src="/clipboard.png"  // Updated path
        width={400}
        height={400}
      />
      <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
        <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
          Countdown Timer Project
        </h2>
        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
          Countdown Timer
        </h1>
        <p className="leading-relaxed line-clamp-4">
          A responsive countdown timer built with Next.js, allowing users to track time in real-time for events or tasks.
        </p>
        <Link target='_blank' href="https://countdown-timer-black.vercel.app/">
          <p className="leading-relaxed text-blue-500">
            View Project..
          </p>
        </Link>
      </div>
    </div>
  </div>

  {/* Project 5 */}
  <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
    <div className="flex relative">
      <Image
        alt="CLI Number Guessing Project"
        className="absolute inset-0 w-full h-full object-cover object-center"
        src="/bi-10.webp"  // Updated path
        width={400}
        height={400}
      />
      <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
        <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
          CLI Number Guessing Project
        </h2>
        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
          CLI Number Guess
        </h1>
        <p className="leading-relaxed line-clamp-4">
          A command-line number guessing game built with TypeScript, where users try to guess a randomly generated number.
        </p>
        <Link target='_blank' href="https://github.com/Sattarkha/cli-number-guessing.git">
          <p className="leading-relaxed text-blue-500">
            View Project..
          </p>
        </Link>
      </div>
    </div>
  </div>

  {/* Project 6 */}
  <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
    <div className="flex relative">
      <Image
        alt="Typescript Inquirer Project"
        className="absolute inset-0 w-full h-full object-cover object-center"
        src="/typescript.png"  // Updated path
        width={400}
        height={400}
      />
      <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
        <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-2">
          Typescript Inquirer Project
        </h2>
        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
          Typescript Inquirer
        </h1>
        <p className="leading-relaxed line-clamp-3">
          A command-line project built with TypeScript and Inquirer.js, allowing for interactive prompts and user input handling directly in the terminal.
        </p>
        <Link target='_blank' href="https://github.com/Sattarkha/typescript.inquirer.git">
          <p className="leading-relaxed text-blue-500">
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
