import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { HiExternalLink, HiMail } from "react-icons/hi";
import { IoSparkles } from "react-icons/io5";

function Hero() {
  const socials = [
    { href: "https://github.com/radhikatiwarii", icon: <FaGithub /> },
    { href: "https://www.linkedin.com/in/radhika-tiwari2480/", icon: <FaLinkedin /> },
    { href: "https://instagram.com/radhika_tiwari2480", icon: <FaInstagram /> },
  ];

  return (
    <section id="Home" className="min-h-screen overflow-hidden">
      <div className="relative z-10">
        <div className="w-full max-w-[1440px] mx-auto px-[5%] min-h-screen flex flex-col lg:flex-row items-center justify-center md:justify-between gap-3">

          {/* LEFT */}
          <div className="w-full lg:w-1/2 space-y-6 sm:space-y-8 text-left order-1">
            <div className="space-y-4 pb-[12%] sm:pb-0 sm:space-y-6">

              {/* Badge */}
              <div className="inline-block">
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-full blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
                  <div className="relative px-3 sm:px-4 py-2 rounded-full bg-black/40 backdrop-blur-xl border border-white/10">
                    <span className="bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-transparent bg-clip-text sm:text-sm text-[0.7rem] font-medium flex items-center gap-2">
                      <IoSparkles className="sm:w-4 sm:h-4 w-3 h-3 text-blue-400" />
                      Open to Internship
                    </span>
                  </div>
                </div>
              </div>

              {/* Heading */}
              <div className="space-y-2">
                <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-7xl font-bold tracking-tight">
                  <span className="relative inline-block bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                    Frontend
                  </span>
                  <br />
                  <span className="relative inline-block mt-2 bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">
                    Developer
                  </span>
                </h1>
              </div>

              {/* Name */}
              <div className="flex items-center">
                <span className="text-xl md:text-2xl bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent font-light">
                  Hi, I'm <span className="text-white font-semibold">Radhika Tiwari</span>
                </span>
              </div>

              {/* Subtitle */}
              <p className="text-base md:text-lg text-gray-400 max-w-2xl leading-relaxed font-light">
                BCA 3rd year student passionate about building responsive and user-friendly web applications using modern frontend technologies like React and Tailwind CSS.
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-3 justify-start">
                {["React", "JavaScript", "Tailwind", "Bootstrap", "HTML", "CSS"].map((tech) => (
                  <div key={tech} className="px-4 py-2 hidden sm:block rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-sm text-gray-300 hover:bg-white/10 transition-colors">
                    {tech}
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex flex-row gap-3 w-full justify-start">
                <a href="#Portfolio" className="relative group w-[160px]">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#4f52c9] to-[#8644c5] rounded-xl opacity-50 blur-md group-hover:opacity-90 transition-all duration-700"></div>
                  <div className="relative h-11 bg-[#030014] backdrop-blur-xl rounded-lg border border-white/10 flex items-center justify-center gap-2 text-sm text-gray-200 font-medium transition-all duration-300">
                    <span>Projects</span>
                    <HiExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </a>
                <a href="#Contact" className="relative group w-[160px]">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#4f52c9] to-[#8644c5] rounded-xl opacity-50 blur-md group-hover:opacity-90 transition-all duration-700"></div>
                  <div className="relative h-11 bg-[#030014] backdrop-blur-xl rounded-lg border border-white/10 flex items-center justify-center gap-2 text-sm text-gray-200 font-medium transition-all duration-300">
                    <span>Contact</span>
                    <HiMail className="w-4 h-4 group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </a>
              </div>

              {/* Social Icons */}
              <div className="hidden sm:flex gap-4 cursor-pointer justify-start">
                {socials.map(({ href, icon }) => (
                  <a key={href} href={href} target="_blank" rel="noopener noreferrer">
                    <button className="group relative cursor-pointer p-3">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
                      <div className="relative rounded-xl bg-black/50 backdrop-blur-xl p-2 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-all duration-300">
                        <span className="text-gray-400 group-hover:text-white transition-colors text-xl">
                          {icon}
                        </span>
                      </div>
                    </button>
                  </a>
                ))}
              </div>

            </div>
          </div>

          {/* RIGHT - Glow */}
          <div className="w-full lg:w-1/2 max-w-[700px] flex items-center justify-center order-2 p-4">
            <div className="relative w-full opacity-90">
              <div className="absolute inset-0 bg-gradient-to-r from-[#6366f1]/10 to-[#a855f7]/10 rounded-3xl blur-3xl opacity-20"></div>
              <div className="w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] bg-gradient-to-r from-purple-500 to-indigo-500 blur-3xl opacity-30 rounded-full mx-auto"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
