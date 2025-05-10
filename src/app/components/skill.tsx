import React from 'react'
import { FaHtml5, FaCss3Alt, FaPython} from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiNextdotjs } from "react-icons/si";

const Skill = () => {
  return (
    <div id='skills'>
      <section className="text-gray-600 body-font bg-slate-400">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs text-blue-500 tracking-widest font-medium title-font mb-1">SKILLS</h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">My Skills</h1>
          </div>
          <div className="flex flex-wrap -m-4 -mt-[5rem]">

            {/* HTML */}
            <SkillCard icon={<FaHtml5 className="text-orange-600 text-xl" />} name="HTML" level="100%" width="100%" />

            {/* CSS */}
            <SkillCard icon={<FaCss3Alt className="text-blue-600 text-xl" />} name="CSS" level="70%" width="70%" />

            {/* Tailwind CSS */}
            <SkillCard icon={<SiTailwindcss className="text-sky-400 text-xl" />} name="TAILWIND CSS" level="95%" width="95%" />

            {/* Python */}
            <SkillCard icon={<FaPython className="text-yellow-500 text-xl" />} name="PYTHON" level="60%" width="60%" />

            {/* TypeScript */}
            <SkillCard icon={<SiTypescript className="text-blue-900 text-xl" />} name="TYPESCRIPT" level="95%" width="95%" />

            {/* Next.js */}
            <SkillCard icon={<SiNextdotjs className="text-black text-xl" />} name="NEXT.JS" level="90%" width="90%" />

          </div>
        </div>
      </section>
    </div>
  )
}

const SkillCard = ({ icon, name, level, width }: { icon: React.ReactNode, name: string, level: string, width: string }) => (
  <div className="p-4 md:w-1/3">
    <div className="flex rounded-lg h-full p-8 flex-col">
      <div className="flex items-center mb-3">
        <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-200 text-white flex-shrink-0">
          {icon}
        </div>
        <h2 className="text-gray-900 text-lg title-font font-medium">{name}</h2>
      </div>
      <div className="flex-grow">
        <div className="relative h-1 w-full bg-gray-300 rounded-xl">
          <div className="absolute h-1 bg-blue-600 rounded-xl" style={{ width }}></div>
        </div>
        <p className="font-bold text-blue-600 text-right">{level}</p>
      </div>
    </div>
  </div>
)

export default Skill
