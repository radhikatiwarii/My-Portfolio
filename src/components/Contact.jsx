function Contact() {
  const socials = [
    {
      href: "https://www.linkedin.com/in/radhika-tiwari2480/",
      label: "Let's Connect",
      sub: "on LinkedIn",
      color: "rgb(10, 102, 194)",
      gradient: "from-[#0A66C2] to-[#0077B5]",
      icon: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></>,
    },
    {
      href: "https://instagram.com/radhika_tiwari2480",
      label: "Instagram",
      sub: "@radhikatiwari",
      color: "rgb(228, 64, 95)",
      gradient: "from-[#833AB4] via-[#E4405F] to-[#FCAF45]",
      icon: <><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></>,
    },
    {
      href: "https://github.com/radhikatiwarii",
      label: "Github",
      sub: "@radhikatiwari",
      color: "rgb(255, 255, 255)",
      gradient: "from-[#333] to-[#24292e]",
      icon: <><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></>,
    },
  ];

  return (
    <section id="Contact" className="py-10">
      <div className="text-center lg:mt-[5%] mt-10 mb-2 sm:px-0 px-[5%]">
        <h2 className="inline-block text-3xl md:text-5xl font-bold text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
          Contact Me
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-2">
          Got a question? Send me a message, and I'll get back to you soon.
        </p>
      </div>

      <div className="h-auto py-10 flex items-center justify-center px-[5%] md:px-0">
        <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-3 py-3 md:p-10 md:py-8 shadow-2xl">
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl p-5 py-10 sm:p-10 transition-all duration-300">

            <div className="flex justify-between items-start mb-8">
              <div>
                <h2 className="text-4xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
                  Get in Touch
                </h2>
                <p className="text-gray-400">Have something to discuss? Send me a message and let's talk.</p>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#6366f1] opacity-50">
                <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />
                <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" /><line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
              </svg>
            </div>

            <form className="space-y-6">
              {[
                { type: "text", placeholder: "Your Name", icon: <><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></> },
                { type: "email", placeholder: "Your Email", icon: <><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></> },
              ].map(({ type, placeholder, icon }) => (
                <div key={placeholder} className="relative group">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute left-4 top-4 text-gray-400 group-focus-within:text-[#6366f1] transition-colors">
                    {icon}
                  </svg>
                  <input type={type} placeholder={placeholder}
                    className="w-full p-4 pl-12 bg-white/10 rounded-xl border border-white/20 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-[#6366f1]/30 transition-all duration-300 hover:border-[#6366f1]/30" />
                </div>
              ))}

              <div className="relative group">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute left-4 top-4 text-gray-400 group-focus-within:text-[#6366f1] transition-colors">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                <textarea placeholder="Your Message" rows="5"
                  className="w-full resize-none p-4 pl-12 bg-white/10 rounded-xl border border-white/20 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-[#6366f1]/30 transition-all duration-300 hover:border-[#6366f1]/30 h-[9.9rem]">
                </textarea>
              </div>

              <button type="submit" className="w-full bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#6366f1]/20 flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
                  <path d="m21.854 2.147-10.94 10.939" />
                </svg>
                Send Message
              </button>
            </form>

            {/* Social Links */}
            <div className="mt-10 pt-6 border-t border-white/10">
              <div className="w-full bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-6 py-8 backdrop-blur-xl">
                <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                  <span className="inline-block w-8 h-1 bg-indigo-500 rounded-full"></span>
                  Connect With Me
                </h3>
                <div className="flex flex-col gap-4">
                  {socials.map(({ href, label, sub, color, gradient, icon }) => (
                    <a key={href} href={href} target="_blank" rel="noopener noreferrer"
                      className="group relative flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-500">
                      <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-r ${gradient}`}></div>
                      <div className="relative flex items-center gap-4">
                        <div className="relative flex items-center justify-center">
                          <div className="absolute inset-0 opacity-20 rounded-md transition-all duration-500 group-hover:scale-110 group-hover:opacity-30" style={{ backgroundColor: color }}></div>
                          <div className="relative p-2 rounded-md">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-all duration-500 group-hover:scale-105" style={{ color }}>
                              {icon}
                            </svg>
                          </div>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-lg font-bold text-gray-200 tracking-tight leading-none group-hover:text-white transition-colors duration-300">{label}</span>
                          <span className="text-sm text-gray-400">{sub}</span>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <footer>
        <center>
          <hr className="my-3 border-gray-400 opacity-15 sm:mx-auto lg:my-6" />
          <span className="block text-sm pb-4 text-gray-500 text-center">© 2025 Radhika Tiwari - All Rights Reserved.</span>
        </center>
      </footer>
    </section>
  );
}

export default Contact;
