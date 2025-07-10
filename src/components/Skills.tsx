// components/Skills.tsx
import { FaReact, FaPhp, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiMysql } from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "React.js", icon: <FaReact size={32} /> },
    { name: "Next.js", icon: <SiNextdotjs size={32} /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={32} /> },
    { name: "JavaScript", icon: <FaJs size={32} /> },
    { name: "HTML5", icon: <FaHtml5 size={32} /> },
    { name: "CSS3", icon: <FaCss3Alt size={32} /> },
    { name: "PHP", icon: <FaPhp size={32} /> },
    { name: "MySQL", icon: <SiMysql size={32} /> },
  ];

  return (
    <div className="mt-20 space-y-8">
      <h2 className="text-3xl font-bold text-orange-600">🚀 My Skills</h2>
      <p className="text-gray-600 dark:text-gray-300 text-lg">
        I love working with modern tools to build responsive, clean, and fast web applications.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="group bg-white dark:bg-zinc-800 border border-orange-200 dark:border-orange-600 rounded-xl p-4 flex flex-col items-center justify-center text-center font-semibold text-orange-600 dark:text-orange-300 shadow-md hover:shadow-xl transform transition-all duration-300 hover:scale-105 hover:bg-orange-50 dark:hover:bg-orange-700"
          >
            <div className="mb-2 group-hover:animate-pulse">{skill.icon}</div>
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
