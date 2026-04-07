import Image from "next/image";
import {
  Code2,
  ShieldAlert,
  SquareTerminal,
  Mail,
  Award,
  ExternalLink,
} from "lucide-react";
// Import data JSON yang baru saja kita buat
import data from "../data/portfolio.json";

// --- KOMPONEN IKON ---
const GithubIcon = ({
  size = 24,
  className = "",
}: {
  size?: number;
  className?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path>
  </svg>
);

const LinkedinIcon = ({
  size = 24,
  className = "",
}: {
  size?: number;
  className?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect width="4" height="12" x="2" y="9"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

// Helper untuk membaca nama ikon dari JSON dan mengubahnya menjadi komponen Lucide
const renderIcon = (iconName: string, className: string, size: number) => {
  switch (iconName) {
    case "Code2":
      return <Code2 size={size} className={className} />;
    case "ShieldAlert":
      return <ShieldAlert size={size} className={className} />;
    case "SquareTerminal":
      return <SquareTerminal size={size} className={className} />;
    default:
      return <SquareTerminal size={size} className={className} />;
  }
};

export default function Home() {
  return (
    <div className="space-y-24 sm:space-y-32">
      {/* HERO SECTION */}
      <section className="pt-16 sm:pt-24 lg:pt-32 flex flex-col-reverse md:grid md:grid-cols-12 items-center gap-10 md:gap-12">
        <div className="md:col-span-8 flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-2 leading-[1.1]">
            {data.personal.name}
          </h1>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-500 dark:text-slate-400 mb-4 sm:mb-6">
            {data.personal.role}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mb-8 sm:mb-10 leading-relaxed px-4 md:px-0">
            {data.personal.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto px-4 md:px-0">
            <a
              href="#projects"
              className="w-full sm:w-auto px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors flex justify-center items-center"
            >
              Lihat Proyek
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-6 py-3 border border-slate-300 dark:border-slate-700 hover:border-red-600 dark:hover:border-red-500 font-medium rounded-lg transition-colors flex justify-center items-center"
            >
              Hubungi Saya
            </a>
          </div>
        </div>

        <div className="md:col-span-4 flex justify-center w-full mt-4 md:mt-0">
          <div className="relative group">
            <div className="absolute -inset-1 bg-red-600 rounded-full blur-md opacity-30 group-hover:opacity-60 transition duration-500"></div>
            <Image
              src={data.personal.profilePicture}
              alt={`Foto ${data.personal.name}`}
              width={320}
              height={320}
              className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 relative rounded-full border-4 border-white dark:border-slate-950 object-cover shadow-2xl"
              priority
            />
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="scroll-mt-24 px-2 sm:px-0">
        <div className="flex items-center gap-4 mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold">Keahlian Teknis</h2>
          <div className="h-[1px] flex-1 bg-slate-200 dark:bg-slate-800"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-4 sm:gap-8">
          {data.skills.map((skill, index) => (
            <div
              key={index}
              className="p-5 sm:p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50"
            >
              <div className="flex items-center gap-3 mb-4 sm:mb-6 text-red-600 dark:text-red-500">
                {renderIcon(skill.icon, "sm:w-[28px] sm:h-[28px]", 24)}
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                  {skill.category}
                </h3>
              </div>
              <ul className="space-y-2 sm:space-y-3 font-mono text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                {skill.items.map((item, i) => (
                  <li key={i}>▹ {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="scroll-mt-24 px-2 sm:px-0">
        <div className="flex items-center gap-4 mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold">Proyek & Write-ups</h2>
          <div className="h-[1px] flex-1 bg-slate-200 dark:bg-slate-800"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
          {data.projects.map((project, index) => (
            <div
              key={index}
              className="group relative p-5 sm:p-6 flex flex-col rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-red-500/50 transition-colors bg-white/50 dark:bg-slate-900/50"
            >
              {renderIcon(project.icon, "text-slate-400 mb-3 sm:mb-4", 28)}
              <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-[10px] sm:text-xs font-mono bg-slate-100 dark:bg-slate-800 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CERTIFICATES SECTION */}
      <section id="certificates" className="scroll-mt-24 px-2 sm:px-0">
        <div className="flex items-center gap-4 mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Lisensi & Sertifikasi
          </h2>
          <div className="h-[1px] flex-1 bg-slate-200 dark:bg-slate-800"></div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {data.certificates.map((cert, index) => (
            <div
              key={index}
              className="p-5 border border-slate-200 dark:border-slate-800 rounded-xl bg-white/30 dark:bg-slate-900/30 hover:bg-white dark:hover:bg-slate-900 transition-colors group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-red-100 dark:bg-red-500/10 text-red-600 dark:text-red-500 rounded-lg shrink-0">
                  <Award size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-sm sm:text-base mb-1 text-slate-900 dark:text-white">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
                    {cert.issuer} • Diterbitkan {cert.year}
                  </p>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-medium text-red-600 dark:text-red-500 hover:underline"
                  >
                    Lihat Kredensial <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section
        id="contact"
        className="scroll-mt-24 text-center max-w-2xl mx-auto pb-16 sm:pb-20 px-4 sm:px-0"
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
          Mari Terhubung
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mb-6 sm:mb-8">
          Saya selalu terbuka untuk mendiskusikan peluang baru, proyek
          kolaborasi, atau sekadar bertukar pikiran tentang tren cybersecurity
          dan web development terbaru.
        </p>
        <div className="flex justify-center gap-4 sm:gap-6">
          <a
            href={`mailto:${data.personal.email}`}
            className="p-3 sm:p-4 bg-slate-100 dark:bg-slate-800 hover:text-red-600 dark:hover:text-red-500 rounded-full transition-colors"
          >
            <Mail size={20} className="sm:w-[24px] sm:h-[24px]" />
          </a>
          <a
            href={data.personal.github}
            target="_blank"
            rel="noreferrer"
            className="p-3 sm:p-4 bg-slate-100 dark:bg-slate-800 hover:text-red-600 dark:hover:text-red-500 rounded-full transition-colors"
          >
            <GithubIcon size={20} className="sm:w-[24px] sm:h-[24px]" />
          </a>
          <a
            href={data.personal.linkedin}
            target="_blank"
            rel="noreferrer"
            className="p-3 sm:p-4 bg-slate-100 dark:bg-slate-800 hover:text-red-600 dark:hover:text-red-500 rounded-full transition-colors"
          >
            <LinkedinIcon size={20} className="sm:w-[24px] sm:h-[24px]" />
          </a>
        </div>
      </section>
    </div>
  );
}
