import { FaReact, FaRobot, FaCode } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

export default function AboutMe() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center z-10 px-4 bg-white/80 dark:bg-zinc-900/80 transition-colors duration-300">
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center py-16 px-6 rounded-2xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6 text-center drop-shadow-lg">
          Benim Hikayem
        </h1>
        <span className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 dark:from-blue-900 dark:via-purple-900 dark:to-pink-900 text-blue-700 dark:text-blue-300 font-semibold text-base mb-6 shadow text-center">
          Teknoloji Tutkusu ile Başlayan Yolculuk
        </span>
        <p className="text-zinc-700 dark:text-zinc-200 text-lg md:text-xl max-w-3xl mb-8 leading-relaxed text-center mx-auto">
          Kodlama yolculuğuma frontend geliştirme ile başladım. Güzel kullanıcı arayüzleri ve etkileşimli deneyimler oluşturmayı öğrendikten sonra, zamanla full-stack geliştirici olarak ilerlemeye devam ediyorum.<br /><br />
          Bugün AI destekli geliştirme süreçleri konusunda tutkulu bir geliştiriciyim. Cursor, Claude, Windsurf ve Lovable gibi son teknoloji araçları kullanarak geliştirme süreçlerimi hızlandırıyor ve daha akıllı uygulamalar inşa ediyorum.
        </p>
        <div className="w-full flex flex-col items-center gap-8">
          <h2 className="text-2xl font-bold mb-2 text-center">Tutkularım</h2>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold text-sm shadow">Yeni Teknolojiler</span>
            <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold text-sm shadow">Açık Kaynak</span>
            <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold text-sm shadow">AI Araçları</span>
            <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-yellow-400 to-pink-500 text-white font-semibold text-sm shadow">Performans</span>
            <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-400 to-green-500 text-white font-semibold text-sm shadow">Kullanıcı Deneyimi</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
            <div className="flex flex-col items-center justify-center bg-white/70 dark:bg-zinc-800/70 rounded-xl p-6 md:p-8 shadow hover:scale-105 hover:shadow-xl transition-transform duration-200 text-center min-h-[200px]">
              <FaRobot className="w-8 h-8 mb-2 text-green-500 dark:text-green-300" />
              <span className="text-lg md:text-xl font-bold mb-1">AI Destekli Geliştirme</span>
              <p className="text-gray-700 dark:text-zinc-200 text-center text-sm md:text-base">Cursor, Claude, Windsurf ve Lovable gibi araçlarla geliştirme süreçlerimi hızlandırıyorum.</p>
            </div>
            <div className="flex flex-col items-center justify-center bg-white/70 dark:bg-zinc-800/70 rounded-xl p-6 md:p-8 shadow hover:scale-105 hover:shadow-xl transition-transform duration-200 text-center min-h-[200px]">
              <FaCode className="w-8 h-8 mb-2 text-blue-600 dark:text-blue-300" />
              <span className="text-lg md:text-xl font-bold mb-1">Full Stack Uzmanlığı</span>
              <p className="text-gray-700 dark:text-zinc-200 text-center text-sm md:text-base">Frontend&apos;de React, backend&apos;de .NET Core kullanarak tam kapsamlı yazılım çözümleri üretiyorum.</p>
            </div>
            <div className="flex flex-col items-center justify-center bg-white/70 dark:bg-zinc-800/70 rounded-xl p-6 md:p-8 shadow hover:scale-105 hover:shadow-xl transition-transform duration-200 text-center min-h-[200px]">
              <FaReact className="w-8 h-8 mb-2 text-blue-500" />
              <span className="text-lg md:text-xl font-bold mb-1">Modern Teknolojiler</span>
              <p className="text-gray-700 dark:text-zinc-200 text-center text-sm md:text-base">Next.js, Tailwind CSS, PostgreSQL, Flutter - her zaman en güncel teknolojileri kullanıyorum.</p>
            </div>
            <div className="flex flex-col items-center justify-center bg-white/70 dark:bg-zinc-800/70 rounded-xl p-6 md:p-8 shadow hover:scale-105 hover:shadow-xl transition-transform duration-200 text-center min-h-[200px]">
              <SiNextdotjs className="w-8 h-8 mb-2 text-zinc-800 dark:text-white" />
              <span className="text-lg md:text-xl font-bold mb-1">Performans Odaklı</span>
              <p className="text-gray-700 dark:text-zinc-200 text-center text-sm md:text-base">Hızlı, ölçeklenebilir ve kullanıcı dostu uygulamalar geliştir&apos;meye odaklanıyorum.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 