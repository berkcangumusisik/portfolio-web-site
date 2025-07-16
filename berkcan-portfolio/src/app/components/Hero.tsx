import profile from "../../data/profile.json";
import { FaReact, FaPython } from "react-icons/fa";
import { SiNextdotjs, SiDotnet, SiTailwindcss, SiFlutter, SiPostgresql } from "react-icons/si";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center z-10 px-4 bg-white/80 dark:bg-zinc-900/80 transition-colors duration-300">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4 text-center drop-shadow-lg">
        Merhaba, Ben {profile.name}
      </h1>
      <span className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 dark:from-blue-900 dark:via-purple-900 dark:to-pink-900 text-blue-700 dark:text-blue-300 font-semibold text-base mb-3 shadow text-center">
        {profile.title}
      </span>
      <p className="text-zinc-700 dark:text-zinc-200 text-lg md:text-xl max-w-2xl mb-6 leading-relaxed text-center">
        Modern teknolojiler ve AI araçları kullanarak etkileyici web uygulamaları geliştiren bir Full Stack Developer'ım. React, Next.js, .NET Core ve Flutter ile projeler geliştiriyor, AI destekli geliştirme süreçleriyle fark yaratıyorum.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md justify-center items-center mb-6">
        <a
          href="#projects"
          className="flex-1 text-center px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-500 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-200"
        >
          Projeleri Gör
        </a>
        <a
          href="#contact"
          className="flex-1 text-center px-8 py-3 rounded-full border-2 border-blue-500 text-blue-700 dark:text-blue-300 font-semibold bg-white/60 dark:bg-zinc-900/60 hover:bg-blue-50 dark:hover:bg-blue-950 transition-colors duration-200 shadow"
        >
          İletişime Geç
        </a>
      </div>
      <div className="flex flex-wrap gap-4 items-center justify-center mb-8">
        <FaReact className="w-8 h-8 text-blue-500" title="React" />
        <SiNextdotjs className="w-8 h-8 text-zinc-800 dark:text-white" title="Next.js" />
        <SiDotnet className="w-8 h-8 text-blue-700" title=".NET Core" />
        <SiTailwindcss className="w-8 h-8 text-cyan-400" title="Tailwind CSS" />
        <SiFlutter className="w-8 h-8 text-sky-500" title="Flutter" />
        <FaPython className="w-8 h-8 text-yellow-400" title="Python" />
        <SiPostgresql className="w-8 h-8 text-blue-900" title="PostgreSQL" />
      </div>
      <div className="absolute bottom-8 left-0 right-0 flex justify-center z-20">
        <span className="animate-bounce">
          <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </div>
    </section>
  );
} 