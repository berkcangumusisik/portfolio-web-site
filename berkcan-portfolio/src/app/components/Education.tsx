import { FaUniversity, FaGraduationCap, FaUsers } from "react-icons/fa";
import { MdSchool } from "react-icons/md";
import { SiGoogleclassroom } from "react-icons/si";

const education = [
  {
    degree: "Yüksek Lisans",
    status: "Devam Ediyor",
    field: "Bilgisayar ve Öğretim Teknolojileri Eğitimi",
    school: "Gazi Üniversitesi",
    location: "Ankara, Türkiye",
    date: "Ağustos 2024 - Devam Ediyor",
    gpa: "Devam Ediyor",
    description: "Eğitim teknolojileri ve yazılım geliştirme alanlarında derinlemesine araştırma yapıyorum.",
    icon: <FaUniversity className="w-7 h-7 text-blue-600" />,
  },
  {
    degree: "Lisans",
    status: "Mezun",
    field: "Bilgisayar ve Öğretim Teknolojileri Öğretmenliği",
    school: "Gazi Üniversitesi",
    location: "Ankara, Türkiye",
    date: "Ağustos 2019 - Haziran 2023",
    gpa: "3.64/4.00",
    description: "Bölüm birincisi olarak mezun oldum. Bilgisayar bilimleri ve eğitim teknolojileri alanlarında kapsamlı eğitim aldım.",
    icon: <FaGraduationCap className="w-7 h-7 text-purple-600" />,
  },
];

const communities = [
  {
    role: "Core Team Member",
    org: "Developer Students Club Gazi",
    date: "Eylül 2020 - Nisan 2022",
    achievements: [
      "DSC Gazi'nin sosyal medya hesaplarını yönettim",
      "Kampları için problem setleri hazırladım",
      "IoT1929 Arduino ve Robotik kampında eğitmen olarak görev aldım"
    ],
    icon: <FaUsers className="w-6 h-6 text-pink-500" />,
  },
];

export default function Education() {
  return (
    <section id="education" className="relative w-full min-h-[60vh] flex flex-col items-center justify-center py-20 px-4 bg-white/80 dark:bg-zinc-900/80 overflow-hidden">
      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4 text-center drop-shadow-lg">
          Eğitim Hayatım
        </h2>
        <p className="text-lg text-gray-700 dark:text-zinc-200 mb-10 text-center max-w-2xl">
          Akademik geçmişim, sertifikalarım ve eğitim faaliyetlerim
        </p>
        <div className="flex flex-col gap-10 w-full">
          {education.map((edu, idx) => (
            <div key={idx} className="bg-white/90 dark:bg-zinc-900/90 rounded-2xl shadow-xl p-8 flex flex-col md:flex-row md:items-center gap-6 md:gap-10 border border-zinc-100 dark:border-zinc-800">
              <div className="flex-shrink-0 flex items-center justify-center mb-4 md:mb-0">
                {edu.icon}
              </div>
              <div className="flex-1 flex flex-col gap-1">
                <h3 className="text-xl font-bold text-blue-700 dark:text-blue-300 mb-1">{edu.degree} <span className="text-sm font-semibold text-zinc-500 dark:text-zinc-400 ml-2">{edu.status}</span></h3>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="font-semibold text-zinc-700 dark:text-zinc-200">{edu.field}</span>
                  <span className="text-xs px-2 py-1 rounded bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 font-semibold">{edu.school}</span>
                  <span className="text-xs px-2 py-1 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 font-semibold">{edu.location}</span>
                  <span className="text-xs px-2 py-1 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 font-semibold">{edu.date}</span>
                  <span className="text-xs px-2 py-1 rounded bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 font-semibold">GPA: {edu.gpa}</span>
                </div>
                <p className="text-zinc-700 dark:text-zinc-200 mb-2">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
        <h3 className="text-2xl font-bold mt-14 mb-6 text-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">Topluluk Faaliyetleri</h3>
        <div className="flex flex-col gap-8 w-full">
          {communities.map((com, idx) => (
            <div key={idx} className="bg-white/90 dark:bg-zinc-900/90 rounded-2xl shadow p-6 flex flex-col md:flex-row md:items-center gap-4 md:gap-8 border border-zinc-100 dark:border-zinc-800">
              <div className="flex-shrink-0 flex items-center justify-center mb-2 md:mb-0">
                {com.icon}
              </div>
              <div className="flex-1 flex flex-col gap-1">
                <h4 className="text-lg font-bold text-blue-700 dark:text-blue-300 mb-1">{com.role}</h4>
                <span className="font-semibold text-zinc-700 dark:text-zinc-200 mb-1">{com.org}</span>
                <span className="text-xs px-2 py-1 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 font-semibold mb-2">{com.date}</span>
                <ul className="list-disc pl-6 text-zinc-700 dark:text-zinc-200 space-y-1">
                  {com.achievements.map((ach, i) => (
                    <li key={i}>{ach}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 