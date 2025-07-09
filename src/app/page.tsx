import Image from 'next/image'
 import { FaReact, FaPhp, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiMysql } from "react-icons/si";
import { FaGithub, FaLinkedin, FaEnvelope, FaTelegramPlane, FaFacebook } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="space-y-20 scroll-smooth">
      <section id="home" className="space-y-12">
      {/* Profile Section */}
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Profile Image */}
       <div className="w-40 h-40 md:w-56 md:h-56 relative overflow-hidden rounded-xl transition-transform duration-300 hover:scale-105">
  <Image
    src="/images/heroimg.png"
    alt="Bedasa Profile"
    fill
    className="object-cover transition-transform duration-300"
  />
</div>



        {/* Intro Text */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-orange-600">
            👋 Hi, I’m Bedasa Negash
          </h1>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 max-w-xl">
            A creative and passionate web developer from Ethiopia 🇪🇹 who enjoys crafting modern, responsive websites with great user experience.
            I code for fun, love solving real-world problems, and burn with curiosity 🔥😊.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        {[
          { number: '3+', label: 'Years of Coding' },
          { number: '5+', label: 'Projects Built' },
          { number: '5+', label: 'Tech Tools Mastered' },
        ].map((stat, i) => (
          <div
            key={i}
            className="bg-orange-100 dark:bg-orange-800 text-orange-900 dark:text-white p-6 rounded-xl shadow transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-orange-200 dark:hover:bg-orange-700"
          >
            <h2 className="text-3xl font-bold">{stat.number}</h2>
            <p className="mt-2 text-sm font-medium">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>

      {/* About Section */}
<section id="about" className="space-y-6 mt-20">
  <h2 className="text-3xl font-bold text-orange-600">🧠 About Me</h2>

  <p className="text-gray-700 dark:text-gray-300 text-lg max-w-3xl">
    I’m Bedasa, a self-driven developer who enjoys turning ideas into real-world solutions. Whether I’m building a website or learning a new language, I’m always ready to dive in and explore.
    iam based in Ethiopia and spend most of my time coding and occasionally breaking things (just to fix them better 😉).
  </p>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
    <div className="bg-orange-50 dark:bg-zinc-800 border-l-4 border-orange-500 p-4 rounded-md shadow hover:shadow-lg transition">
      <h3 className="font-semibold text-orange-600">🎓 Education</h3>
      <p className="text-gray-600 dark:text-gray-300">
         4<sup>th</sup> year Information System student at Hawassa University.
      </p>
    </div>

    <div className="bg-orange-50 dark:bg-zinc-800 border-l-4 border-orange-500 p-4 rounded-md shadow hover:shadow-lg transition">
      <h3 className="font-semibold text-orange-600">🧰 Skills Snapshot</h3>
      <p className="text-gray-600 dark:text-gray-300">
        PHP, MySQL, Next.js, HTML, CSS, JavaScript, Tailwind, React,C++
      </p>
    </div>

    <div className="bg-orange-50 dark:bg-zinc-800 border-l-4 border-orange-500 p-4 rounded-md shadow hover:shadow-lg transition">
      <h3 className="font-semibold text-orange-600">🌐 Languages</h3>
      <p className="text-gray-600 dark:text-gray-300">
        English, Amharic, Afaan Oromo, Arabic (basic)
      </p>
    </div>

    <div className="bg-orange-50 dark:bg-zinc-800 border-l-4 border-orange-500 p-4 rounded-md shadow hover:shadow-lg transition">
      <h3 className="font-semibold text-orange-600">💡 Hobbies</h3>
      <p className="text-gray-600 dark:text-gray-300">
        Coding for fun, UI design, learning tech trends, playing football, watching YouTube tutorials and movies.
      </p>
    </div>
  </div>
</section>

<section id="skills" className="mt-20 space-y-8">
  <h2 className="text-3xl font-bold text-orange-600">🚀 My Skills</h2>
  <p className="text-gray-600 dark:text-gray-300 text-lg">
    I love working with modern tools to build responsive, clean, and fast web applications.
  </p>

  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
    {[
      { name: "React.js", icon: <FaReact size={32} /> },
      { name: "Next.js", icon: <SiNextdotjs size={32} /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss size={32} /> },
      { name: "JavaScript", icon: <FaJs size={32} /> },
      { name: "HTML5", icon: <FaHtml5 size={32} /> },
      { name: "CSS3", icon: <FaCss3Alt size={32} /> },
      { name: "PHP", icon: <FaPhp size={32} /> },
      { name: "MySQL", icon: <SiMysql size={32} /> },
    ].map((skill, i) => (
      <div
        key={i}
        className="group bg-white dark:bg-zinc-800 border border-orange-200 dark:border-orange-600 rounded-xl p-4 flex flex-col items-center justify-center text-center font-semibold text-orange-600 dark:text-orange-300 shadow-md hover:shadow-xl transform transition-all duration-300 hover:scale-105 hover:bg-orange-50 dark:hover:bg-orange-700"
      >
        <div className="mb-2 group-hover:animate-pulse">{skill.icon}</div>
        <span>{skill.name}</span>
      </div>
    ))}
  </div>
</section>


     <section id="projects" className="mt-20 space-y-8">
  <h2 className="text-3xl font-bold text-orange-600">📁 Projects</h2>
  <p className="text-gray-600 dark:text-gray-300 text-lg">
    Here are some of the projects i have built recently — real, fun, and always improving!
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {[
      {
        name: "IoT Inventory System",
        image: "/images/iot.png", // replace with real path or keep it for now
        link: "https://your-iot-link.com"
      },
      {
        name: "Ekub Platform",
        image: "/images/ekub.jpg",
        link: "https://your-ekub.com"
      },
      {
         name: "E-commerce Site",
        image: "", // no image yet
        link: "https://your-ecommerce.com"
      },
      {
        name: "Personal Portfolio",
        image: "/images/portfolio.png",
        link: "https://your-portfolio.com"
      },
      {
        name: "Student Info Dashboard",
        image: "", // no image yet
        link: "https://your-stud-app.com"
      }
    ].map((project, i) => (
      <a
        key={i}
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-white dark:bg-zinc-800 rounded-xl overflow-hidden shadow hover:shadow-xl transition transform hover:-translate-y-1 hover:scale-105 duration-300"
      >
        <div className="h-48 bg-gray-100 dark:bg-zinc-700 flex items-center justify-center overflow-hidden">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.name}
              width={400}
              height={200}
              className="object-cover w-full h-full"
            />
          ) : (
            <span className="text-gray-400 dark:text-gray-500 font-semibold text-lg">
              Coming Soon
            </span>
          )}
        </div>
        <div className="p-4 text-center">
          <h3 className="text-xl font-semibold text-orange-600">
            {project.name}
          </h3>
        </div>
      </a>
    ))}
  </div>
</section>


<footer className="mt-24 border-t border-orange-300 dark:border-orange-700 pt-10 pb-6 text-center text-gray-700 dark:text-gray-300">
  <div className="flex justify-center space-x-6 mb-4">
    <a
      href="https://github.com/your-github"
      target="_blank"
      rel="noopener noreferrer"
      className="text-orange-500 hover:text-orange-700 transition duration-300 text-2xl"
    >
      <FaGithub />
    </a>

    <a
      href="https://linkedin.com/in/your-linkedin"
      target="_blank"
      rel="noopener noreferrer"
      className="text-orange-500 hover:text-orange-700 transition duration-300 text-2xl"
    >
      <FaLinkedin />
    </a>

    <a
      href="mailto:your@email.com"
      className="text-orange-500 hover:text-orange-700 transition duration-300 text-2xl"
    >
      <FaEnvelope />
    </a>

    <a
      href="https://t.me/your-telegram"
      target="_blank"
      rel="noopener noreferrer"
      className="text-orange-500 hover:text-orange-700 transition duration-300 text-2xl"
    >
      <FaTelegramPlane />
    </a>

    <a
      href="https://facebook.com/your-facebook"
      target="_blank"
      rel="noopener noreferrer"
      className="text-orange-500 hover:text-orange-700 transition duration-300 text-2xl"
    >
      <FaFacebook />
    </a>
  </div>

  <p className="text-sm">
    &copy; {new Date().getFullYear()} Bedasa Negash. All rights reserved.
  </p>
</footer>


    </div>
  )
}
