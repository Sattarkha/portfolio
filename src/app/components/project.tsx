'use client';
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Project = () => {
  return (
    <div id="project">
      <section className="text-gray-600 body-font">
        <div className="container px-4 sm:px-6 lg:px-8 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              My Projects
            </h1>
          </div>

          <div className="flex flex-wrap -m-4">
            {[
              {
                title: "Dynamic Resume Project",
                subtitle: "Dynamic Resume Builder",
                desc: "A web application that allows users to generate and share dynamic resumes using TypeScript, HTML, and CSS. Includes PDF download and shareable link.",
                link: "https://vercel.com/sattarkhas-projects/milestone5/9Px6cEsPYUDFJudACUf3yBSk4ZHe",
                image: "/dynamicresume.jpg",
              },
              {
                title: "Simple Calculator",
                subtitle: "Simple Calculator Project",
                desc: "A Simple Calculator built using Inquirer in TypeScript that simulates simple calculations like addition, subtraction, multiplication, and division.",
                link: "https://github.com/Sattarkha/project-simple-calculator",
                image: "/calculatortype.jpg",
              },
              {
                title: "ATM Transactions",
                subtitle: "ATM Project",
                desc: "ATM Project with all features including fast cash, receipt, new user addition, fund transfer, withdrawal, and adding amount.",
                link: "https://github.com/Sattarkha/atm-machine",
                image: "/atmm.webp",
              },
              {
                title: "Countdown Timer",
                subtitle: "Countdown Timer Project",
                desc: "A responsive countdown timer built with Next.js, allowing users to track time in real-time for events or tasks.",
                link: "https://countdown-timer-black.vercel.app/",
                image: "/clipboard.png",
              },
              {
                title: "CLI Number Guess",
                subtitle: "CLI Number Guessing Project",
                desc: "A command-line number guessing game built with TypeScript, where users try to guess a randomly generated number.",
                link: "https://github.com/Sattarkha/cli-number-guessing.git",
                image: "/bi-10.webp",
              },
              {
                title: "Typescript Inquirer",
                subtitle: "Typescript Inquirer Project",
                desc: "A command-line project built with TypeScript and Inquirer.js, allowing for interactive prompts and user input handling directly in the terminal.",
                link: "https://github.com/Sattarkha/typescript.inquirer.git",
                image: "/typescript.png",
              },
              {
                title: "Python data Encryption System",
                subtitle: "Secure Data Encryption System Project",
                desc: "Python project that encrypts and decrypts data using a secure algorithm, ensuring data confidentiality and integrity.",
                link: "https://secureassignment5-mgrdeafci6ensxxnxk6rrz.streamlit.app/",
                image: "/1709824047531.png",
              },
              {
                title: "Python Unit Converter App",
                subtitle: "Unit Converter App Project",
                desc: "A Python-based unit converter application that allows users to convert between various units of measurement, enhancing usability and accessibility.",
                link: "https://sattarkha-unit-converter-unit-converter-dskwcv.streamlit.app/",
                image: "/hq720.jpg",
              },
              {
                title: "Python Password Strength Checker App",
                subtitle: "Password Strength Checker Project",
                desc: "A Python-based password strength checker application that evaluates the strength of user-provided passwords, enhancing security awareness and practices.",
                link: "https://sattarkha-password-strength-index-ox9szp.streamlit.app/",
                image: "/password_strength_python.webp",
              },
            ].map((project, index) => (
              <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-4">
                <div className="group relative">
                  <div className="relative w-full h-[250px] sm:h-[300px] lg:h-[350px] rounded overflow-hidden">
                    <Image
                      alt={project.subtitle}
                      src={project.image}
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="absolute inset-0 bg-white bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 border-4 border-gray-200 z-10">
                    <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                      {project.subtitle}
                    </h2>
                    <h1 className="title-font text-lg font-semibold text-gray-900 mb-3">
                      {project.title}
                    </h1>
                    <p className="leading-relaxed text-sm line-clamp-5">{project.desc}</p>
                    <Link href={project.link} target="_blank">
                      <p className="mt-3 text-blue-600 hover:underline">View Project..</p>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
