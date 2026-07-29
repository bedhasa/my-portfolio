// components/Projects.tsx
"use client";

import { useState } from "react";
import Image from "next/image";

const projects = [
  {
    name: "IoT Inventory System",
    image: "/images/iot.png",
    link: "https://your-iot-link.com",
  },
  {
    name: "Ekub Platform",
    image: "/images/ekub.jpg",
    link: "https://your-ekub.com",
  },
  {
    name: "E-commerce Site",
    image: "",
    link: "https://your-ecommerce.com",
  },
  {
    name: "Personal Portfolio",
    image: "/images/portfolio.png",
    link: "https://your-portfolio.com",
  },
  {
    name: "Student Info Dashboard",
    image: "",
    link: "https://your-stud-app.com",
  },
];

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="mt-20 space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-orange-700 dark:text-orange-300">📁 Projects</h2>
        <p className="text-neutral-800 dark:text-neutral-200 text-lg max-w-2xl mx-auto">
          Explore some of my recent projects. Click a card to check availability.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <div
            key={i}
            className="bg-white dark:bg-zinc-800 rounded-xl overflow-hidden shadow hover:shadow-xl transition-all duration-300 transform hover:scale-[1.03] border border-orange-300 dark:border-zinc-700"
          >
            <div
              onClick={() => handleClick(i)}
              className="cursor-pointer"
            >
              <div className="h-48 overflow-hidden relative">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-neutral-100 dark:bg-zinc-700 text-neutral-700 dark:text-neutral-200 text-lg">
                    coming soon
                  </div>
                )}
              </div>
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold text-orange-700 dark:text-orange-300">
                  {project.name}
                </h3>
              </div>
            </div>

            {activeIndex === i && (
              <div className="px-4 pb-4 text-center">
                <p className="text-sm mt-2 text-red-500 font-medium">
                  ⚠️ Not available now — under editing...
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
