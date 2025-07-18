import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const contactLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/berkcan-gumusisik/",
    icon: <FaLinkedin className="w-5 h-5 text-blue-600" />,
    desc: "Profesyonel ağım",
  },
  {
    label: "GitHub",
    href: "https://github.com/berkcangumusisik",
    icon: <FaGithub className="w-5 h-5 text-zinc-800 dark:text-zinc-100" />,
    desc: "Kod depom",
  },
  {
    label: "E-posta",
    href: "mailto:gumusisikberkcan@gmail.com",
    icon: <FaEnvelope className="w-5 h-5 text-green-600" />,
    desc: "Direkt iletişim",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative w-full min-h-[50vh] flex flex-col items-center justify-center py-20 px-4 bg-white/80 dark:bg-zinc-900/80 overflow-hidden">
      <div className="relative z-10 w-full max-w-2xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4 text-center drop-shadow-lg">
          Hadi Konuşalım
        </h2>
        <p className="text-lg text-gray-700 dark:text-zinc-200 mb-8 text-center max-w-xl">
          Yeni bir proje üzerinde işbirliği yapmaya hazır mısınız? Birlikte harika bir şeyler inşa etmeyi konuşalım.
        </p>
        <div className="bg-white/90 dark:bg-zinc-900/90 rounded-2xl shadow-xl p-8 w-full flex flex-col gap-6 border border-zinc-100 dark:border-zinc-800">
          <h3 className="text-2xl font-bold mb-2 text-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">İletişime Geçin</h3>
          <p className="text-gray-700 dark:text-zinc-200 text-center mb-4">
            Yeni fırsatlar duymak, heyecan verici projeler üzerinde işbirliği yapmak veya sadece teknoloji ve geliştirme hakkında sohbet etmek konusunda her zaman ilgiliyim. Çekinmeden ulaşın!
          </p>
          <div className="flex flex-col items-center gap-2 mb-4">
            <span className="text-lg font-semibold text-blue-700 dark:text-blue-300">gumusisikberkcan@gmail.com</span>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-100 font-semibold shadow hover:scale-105 hover:shadow-xl transition-transform duration-200 border border-zinc-200 dark:border-zinc-700"
              >
                {link.icon}
                {link.label}
                <span className="text-xs text-zinc-500 dark:text-zinc-400 ml-1">{link.desc}</span>
              </a>
            ))}
          </div>
          <div className="flex flex-col items-center gap-2 mb-2">
            <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold text-sm shadow">Freelance Çalışmaya Açığım</span>
            <span className="text-zinc-700 dark:text-zinc-200 text-center text-sm">Şu anda freelance projeler ve danışmanlık için müsaitim. Fikirlerinizi hayata geçirmenize nasıl yardımcı olabileceğimi konuşalım.</span>
          </div>
          <div className="flex flex-col items-center gap-1 mt-4">
            <span className="text-lg font-bold text-blue-700 dark:text-blue-300">Berkcan Gümüşışık</span>
            <span className="text-zinc-700 dark:text-zinc-200 text-center text-sm">AI destekli geliştirme süreçleri konusunda uzmanlaşmış Full Stack Developer. Geleceği, her seferinde bir kod satırı ile inşa ediyorum.</span>
          </div>
        </div>
      </div>
    </section>
  );
} 