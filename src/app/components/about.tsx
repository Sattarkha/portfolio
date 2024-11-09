import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div id='about'>
      <section
        className="text-gray-800 body-font font-bold"
        style={{
          backgroundImage: "url('https://img.freepik.com/free-vector/modern-abstract-gradient-background-with-elegant-elements-vector-illustration_361591-3825.jpg?semt=ais_hybrid')",
          backgroundSize: 'cover',
          backgroundPosition: 'left',
          backgroundRepeat: 'no-repeat',
          backgroundBlendMode: 'lighten',
        }}
      >
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col-reverse items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0"><br />
            {/* Update the Image src to use the correct path */}
            <Image
              className="object-cover object-center rounded mx-auto"
              alt="about"
              src="/WhatsApp Image 2024-10-12 at 08.57.42_c5ee92b0.jpg"  // Correct path for public folder
              width={400}
              height={400}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              About Me
            </h1>
            <p className="mb-5 leading-relaxed">
              A passionate web developer skilled in JavaScript, TypeScript, Next.js, and Tailwind CSS. I specialize in creating dynamic, user-friendly web applications with a strong focus on clean code and intuitive design. Explore my projects to see how I turn ideas into reality through code!
            </p>
            <div className="flex justify-center">
              <a href={'./Resume.pdf'} download={"Public/Resume.pdf"}>
                <button className="inline-flex text-white bg-[rgb(0,201,255)] border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg ">
                  View CV
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About;
