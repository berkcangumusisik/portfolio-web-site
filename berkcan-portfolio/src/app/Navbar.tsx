"use client";
import { useState } from "react";

const NAV_LINKS = [
  { label: "Hakkımda", href: "#about" },
  { label: "Yetenekler", href: "#skills" },
  { label: "Deneyim", href: "#experience" },
  { label: "Eğitim", href: "#education" },
  { label: "Projeler", href: "#projects" },
  { label: "İletişim", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 dark:bg-zinc-900/80 backdrop-blur border-b border-zinc-200 dark:border-zinc-800 shadow-sm">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3 md:py-2">
        {/* Logo */}
        <a href="#" className="font-extrabold text-xl tracking-tight text-blue-700 dark:text-blue-400 select-none">Berkcan</a>
        {/* Desktop links */}
        <div className="hidden md:flex gap-2 lg:gap-6">
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="relative px-3 py-1.5 rounded-lg text-zinc-700 dark:text-zinc-200 font-medium transition-colors duration-200 hover:bg-blue-50 dark:hover:bg-blue-950 hover:text-blue-700 dark:hover:text-blue-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              {link.label}
            </a>
          ))}
        </div>
        {/* Hamburger */}
        <button
          className="md:hidden flex items-center justify-center w-12 h-12 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Menüyü Aç"
          onClick={() => setOpen(!open)}
        >
          <span className="sr-only">Menüyü Aç</span>
          <div className="space-y-1">
            <span className={`block h-1 w-8 bg-blue-700 dark:bg-blue-400 transition-transform ${open ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block h-1 w-8 bg-blue-700 dark:bg-blue-400 transition-opacity ${open ? 'opacity-0' : ''}`}></span>
            <span className={`block h-1 w-8 bg-blue-700 dark:bg-blue-400 transition-transform ${open ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>
      </div>
      {/* Mobil menü ve overlay sadece açıkken render edilir */}
      {open && (
        <div className="fixed inset-0 z-40 flex">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setOpen(false)}
            aria-hidden={!open}
          />
          {/* Mobile menu */}
          <aside
            className="ml-auto h-full w-72 bg-white dark:bg-zinc-900 shadow-2xl z-50 flex flex-col animate-slide-in"
            aria-hidden={!open}
          >
            <div className="flex items-center justify-between px-8 py-6 border-b border-zinc-200 dark:border-zinc-800">
              <span className="font-extrabold text-2xl text-blue-700 dark:text-blue-400">Berkcan</span>
              <button
                className="w-10 h-10 flex items-center justify-center rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Menüyü Kapat"
                onClick={() => setOpen(false)}
              >
                <span className="sr-only">Menüyü Kapat</span>
                <svg className="w-8 h-8 text-blue-700 dark:text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            <nav className="flex flex-col gap-4 px-8 py-8 flex-1 justify-center">
              {NAV_LINKS.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-4 rounded-xl text-zinc-900 dark:text-white text-lg font-semibold hover:bg-blue-50 dark:hover:bg-blue-950 hover:text-blue-700 dark:hover:text-blue-400 transition-colors duration-200 text-center"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </aside>
        </div>
      )}
    </nav>
  );
}

// Tailwind animasyonunu eklemek için globals.css'e ekleyin:
// @keyframes slide-in { from { transform: translateX(100%); } to { transform: translateX(0); } }
// .animate-slide-in { animation: slide-in 0.3s cubic-bezier(0.4,0,0.2,1) both; } 