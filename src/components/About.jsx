import { FiCode, FiDownload, FiGlobe } from "react-icons/fi";
import { HiArrowUpRight } from "react-icons/hi2";
import { BiAward } from "react-icons/bi";

function About() {
  const stats = [
    {
      number: "5+",
      label: "Projects",
      desc: "Responsive & real-world projects",
      icon: <FiCode className="w-7 h-7 text-white" />,
    },
    {
      number: "6+",
      label: "Technologies",
      desc: "Frontend tools & frameworks",
      icon: <BiAward className="w-7 h-7 text-white" />,
    },
    {
      number: "Fresher",
      label: "Student",
      desc: "Focused on continuous learning",
      icon: <FiGlobe className="w-7 h-7 text-white" />,
    },
  ];

  return (
    <section
      id="About"
      className="py-20 text-white px-[5%] lg:px-[10%]"
    >
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
          About Me
        </h2>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto text-center space-y-6">
        {/* About Text */}
        <p className="text-base sm:text-lg lg:text-xl text-gray-400 leading-relaxed">
          Hello, I'm{" "}
          <span className="text-[#E3DDFF] font-medium">
            Radhika Tiwari
          </span>
          , a BCA 3rd year student with a strong passion for frontend
          development. I enjoy creating responsive, visually appealing,
          and user-friendly web applications using modern technologies
          like React, JavaScript, and Tailwind CSS.
          <br />
          <br />
          I started my journey with HTML and CSS and gradually moved
          towards building dynamic interfaces with React. Currently, I
          am expanding my skills by learning the MERN stack and actively
          seeking a frontend internship where I can apply my knowledge
          and grow as a developer.
          <br />
          <br />
          <span className="text-indigo-400">
            I love turning ideas into real-world web experiences.
          </span>
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
          <a
            href="/Radhika_Tiwari_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#6366f1] to-[#a855f7] hover:scale-105 transition-all duration-300 flex items-center gap-2 shadow-lg">
              <FiDownload />
              Download CV
            </button>
          </a>

          <a href="#Portfolio">
            <button className="px-6 py-3 rounded-lg border border-[#a855f7]/50 text-[#a855f7] hover:bg-[#a855f7]/10 transition-all duration-300 flex items-center gap-2">
              <FiCode />
              View Projects
            </button>
          </a>
        </div>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-6 mt-16">
        {stats.map((stat, i) => (
          <div key={i} className="group">
            <div className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:scale-105 transition-all duration-300 hover:shadow-xl">
              
              <div className="flex items-center justify-between mb-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center bg-white/10 group-hover:rotate-6 transition">
                  {stat.icon}
                </div>
                <span className="text-3xl font-bold">
                  {stat.number}
                </span>
              </div>

              <p className="text-sm uppercase text-gray-300 mb-1">
                {stat.label}
              </p>

              <div className="flex items-center justify-between">
                <p className="text-xs text-gray-400">
                  {stat.desc}
                </p>
                <HiArrowUpRight className="opacity-50 group-hover:opacity-100 transition" />
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;