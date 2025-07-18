import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="z-20 w-full bg-white/80 dark:bg-zinc-900/80 border-t border-zinc-200 dark:border-zinc-800 py-6 px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-zinc-700 dark:text-zinc-300 text-sm mt-8 relative">
      <div className="flex items-center gap-2">
        <span>&copy; {new Date().getFullYear()} Berkcan Gümüşışık</span>
        <span className="hidden md:inline">|</span>
        <span className="italic">AI destekli geliştirme ile hazırlandı</span>
      </div>
      <div className="flex items-center gap-4">
        <a href="https://github.com/berkcangumusisik" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
          <FaGithub className="w-5 h-5" />
        </a>
        <a href="https://www.linkedin.com/in/berkcan-gumusisik/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
          <FaLinkedin className="w-5 h-5" />
        </a>
      </div>
    </footer>
  );
} 