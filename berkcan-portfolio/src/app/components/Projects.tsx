import MatrixBackground from "./MatrixBackground";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs, SiDotnet, SiTailwindcss } from "react-icons/si";

const projects = [
  {
    title: "Guardpot",
    description: "Gerçek zamanlı izleme ve alarm sistemleri ile kapsamlı güvenlik yönetim platformudur.",
    tech: [
      { name: "React", icon: <FaReact className="w-4 h-4 text-blue-500" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="w-4 h-4 text-cyan-400" /> },
    ],
    demo: "#",
  },
  {
    title: "Allarmia",
    description: "Akıllı otomasyon özellikleri ile gelişmiş alarm ve bildirim sistemi",
    tech: [
      { name: "React", icon: <FaReact className="w-4 h-4 text-blue-500" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="w-4 h-4 text-cyan-400" /> },
    ],
    demo: "#",
  },
  {
    title: "Priente",
    description: "Priente Group'un ürünleri için tasarlanmıştır.",
    tech: [
      { name: "React", icon: <FaReact className="w-4 h-4 text-blue-500" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="w-4 h-4 text-cyan-400" /> },
    ],
    demo: "#",
  },
  {
    title: "Pazaryeri Converter",
    description: "Tüm pazaryerlerini tek bir platformdan kontrol edebilmek için tasarlanmıştır.",
    tech: [
      { name: "React", icon: <FaReact className="w-4 h-4 text-blue-500" /> },
      { name: "Next.js", icon: <SiNextdotjs className="w-4 h-4 text-zinc-800 dark:text-white" /> },
      { name: ".NET Core", icon: <SiDotnet className="w-4 h-4 text-blue-700" /> },
      { name: "MySQL", icon: undefined },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="w-4 h-4 text-cyan-400" /> },
    ],
    demo: "#",
  },
  {
    title: "TrendPiyasa",
    description: "Gelişmiş analitik özellikleri ve kullanıcı dostu arayüzü ile modern e-ticaret deneyimi sunan kapsamlı bir platform",
    tech: [
      { name: "Tailwind CSS", icon: <SiTailwindcss className="w-4 h-4 text-cyan-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="w-4 h-4 text-zinc-800 dark:text-white" /> },
      { name: ".NET Core", icon: <SiDotnet className="w-4 h-4 text-blue-700" /> },
      { name: "MySQL", icon: undefined },
    ],
    demo: "#",
  },
  {
    title: "Priente Security",
    description: "Gelişmiş tehdit tespit yetenekleri ile kurumsal düzeyde güvenlik çözümleri sunmaktadır.",
    tech: [
      { name: "React", icon: <FaReact className="w-4 h-4 text-blue-500" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="w-4 h-4 text-cyan-400" /> },
    ],
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative w-full min-h-[60vh] flex flex-col items-center justify-center py-20 px-4 overflow-hidden bg-white/80 dark:bg-zinc-900/80">
      {/* Matrix arka plan */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none select-none">
        <MatrixBackground />
      </div>
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-wide mb-6">
            Öne Çıkan <span className="bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent">Projelerim</span>
          </h2>
          <p className="text-xl text-gray-700 dark:text-zinc-200 max-w-3xl mx-auto">
            Son teknoloji araçlarla geliştirdiğim modern web uygulamalarının bir vitrinini keşfedin
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-pink-500 mx-auto rounded-full mt-6"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {projects.map((proj, idx) => (
            <div key={idx} className="rounded-lg border text-card-foreground shadow-sm bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border-gray-200 dark:border-gray-700 hover:border-indigo-500/50 transition-all duration-300 h-full group overflow-hidden relative flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="flex flex-col space-y-1.5 p-6 relative">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="tracking-tight text-xl font-bold text-zinc-900 dark:text-gray-100 group-hover:text-indigo-300 transition-colors">
                    {proj.title}
                  </h3>
                </div>
                <p className="text-sm text-zinc-700 dark:text-gray-300 leading-relaxed">{proj.description}</p>
              </div>
              <div className="p-6 pt-0 relative flex-1">
                <div className="flex flex-wrap gap-2">
                  {proj.tech.map((tech, i) => (
                    <span key={i} className="flex items-center gap-2 px-3 py-1.5 bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-full text-xs font-medium text-zinc-700 dark:text-zinc-100 group-hover:border-gray-500 transition-colors">
                      {tech.icon}{tech.name}
                    </span>
                  ))}
                </div>
              </div>
              <div className="items-center p-6 pt-0 flex gap-3 relative mt-auto">
                <a href={proj.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary hover:bg-primary/90 h-9 rounded-md px-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white flex-1 group/btn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
                  Canlı Demo
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-indigo-500/10 to-pink-500/10 border border-indigo-500/20 rounded-2xl p-8 mb-6">
            <div className="flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star h-6 w-6 text-yellow-400 mr-2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-gray-100">Daha Fazla Proje</h3>
            </div>
            <p className="text-zinc-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">GitHub profilimde daha fazla açık kaynak proje ve deneysel çalışmalarımı keşfedebilirsiniz. Her proje, yeni teknolojiler öğrenme ve becerilerimi geliştirme yolculuğumun bir parçası.</p>
            <a href="https://github.com/berkcangumusisik" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-background hover:bg-accent h-11 border-2 border-indigo-500 hover:border-indigo-400 text-indigo-400 hover:text-indigo-300 px-8 py-3 rounded-2xl font-semibold transition-all duration-200 transform hover:scale-105 group">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
              GitHub&apos;da Tüm Projeler
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 