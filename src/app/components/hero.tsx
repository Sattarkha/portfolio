"use client";
import React from 'react';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';
import Link from 'next/link';

const Hero = () => {
  return (
    <section 
      className="text-gray-800 body-font font-bold"
      style={{
        backgroundImage: "url('https://img.freepik.com/free-vector/modern-abstract-gradient-background-with-elegant-elements-vector-illustration_361591-3825.jpg?semt=ais_hybrid')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundBlendMode: 'lighten',
      }}
    >
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            I am
            <br className="hidden lg:inline-block" />
            <Typewriter
              options={{
                strings: [
                  'Frontend Developer',
                  'UI/UX Designer',
                  'Textile Engineer',
                  'AI Learner',
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <div className='w-[100px] h-[2px] bg-blue-700'></div>
          <p className="mb-8 leading-relaxed">
            I am a student at GIAIC, pursuing a course in Artificial Intelligence, Web 3.0, & Metaverse. Passionate about technology and constantly learning new skills to stay up-to-date with the latest innovations.
          </p>
          <div className="flex justify-center">
            <Link href={"#Contact"}>
              <button className="inline-flex text-white bg-[rgb(0,201,255)] border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                Contact
              </button>
            </Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            className="object-cover object-center rounded mx-auto w-[15rem]"
            alt="hero"
            width={500}
            height={500}
            src={'/WhatsApp Image 2024-10-12 at 08.57.42_c5ee92b0.jpg'}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
