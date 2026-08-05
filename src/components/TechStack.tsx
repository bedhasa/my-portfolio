"use client";

import * as React from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
  FaJs,
  FaPhp,
  FaGitAlt,
  FaAndroid,
  FaLaravel,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiMysql,
  SiPostgresql,
  SiFlutter,
  SiGithub,
  SiVercel,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { ArrowRight, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { fadeUp } from "@/lib/animations";

type Tech = {
  name: string;
  icon: React.ReactNode;
  purpose: string;
};

type TechGroup = {
  label: string;
  description: string;
  items: Tech[];
};

const techGroups: TechGroup[] = [
  {
    label: "Frontend",
    description: "Crafting responsive, accessible interfaces with modern frameworks.",
    items: [
      {
        name: "Next.js",
        icon: <SiNextdotjs size={26} />,
        purpose: "React framework for fast, SEO-friendly web apps.",
      },
      {
        name: "JavaScript",
        icon: <FaJs size={26} />,
        purpose: "The language of the interactive web.",
      },
      {
        name: "TypeScript",
        icon: <SiTypescript size={26} />,
        purpose: "Typed JavaScript for safer, scalable code.",
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss size={26} />,
        purpose: "Utility-first CSS for rapid, clean styling.",
      },
    ],
  },
  {
    label: "Backend",
    description: "Building reliable APIs and server-side logic.",
    items: [
      {
        name: "Laravel",
        icon: <FaLaravel size={26} />,
        purpose: "Elegant PHP framework for robust web apps.",
      },
      {
        name: "PHP",
        icon: <FaPhp size={26} />,
        purpose: "Server-side scripting for dynamic websites.",
      },
      {
        name: "Node.js",
        icon: <FaNodeJs size={26} />,
        purpose: "JavaScript runtime for scalable backends.",
      },
      {
        name: "Express.js",
        icon: <SiExpress size={26} />,
        purpose: "Minimal Node.js framework for APIs.",
      },
    ],
  },
  {
    label: "Database",
    description: "Storing and structuring data with confidence.",
    items: [
      {
        name: "MySQL",
        icon: <SiMysql size={26} />,
        purpose: "Reliable relational database for structured data.",
      },
      {
        name: "PostgreSQL",
        icon: <SiPostgresql size={26} />,
        purpose: "Advanced open-source relational database.",
      },
    ],
  },
  {
    label: "Mobile",
    description: "Building cross-platform mobile experiences.",
    items: [
      {
        name: "Android",
        icon: <FaAndroid size={26} />,
        purpose: "Native Android development with Java.",
      },
      {
        name: "Flutter",
        icon: <SiFlutter size={26} />,
        purpose: "Cross-platform UI toolkit from a single codebase.",
      },
    ],
  },
  {
    label: "Tools",
    description: "Streamlining workflow, collaboration, and deployment.",
    items: [
      {
        name: "Git",
        icon: <FaGitAlt size={26} />,
        purpose: "Version control for tracking and collaborating.",
      },
      {
        name: "GitHub",
        icon: <SiGithub size={26} />,
        purpose: "Hosting and sharing code with the community.",
      },
      {
        name: "VS Code",
        icon: <VscCode size={26} />,
        purpose: "My editor of choice for fast, focused coding.",
      },
      {
        name: "Vercel",
        icon: <SiVercel size={26} />,
        purpose: "Deploying frontends with zero-config ease.",
      },
    ],
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

function TechCard({ tech, reduceMotion }: { tech: Tech; reduceMotion: boolean | null }) {
  return (
    <motion.article
      variants={reduceMotion ? fadeUp : cardVariants}
      className="group relative h-full overflow-hidden rounded-token-lg border border-border/80 bg-white/70 p-5 shadow-soft backdrop-blur-2xl transition-token hover:-translate-y-1.5 hover:border-accent/60 hover:bg-accent/10 hover:shadow-glow focus-within:outline-none focus-within:ring-2 focus-within:ring-accent focus-within:ring-offset-2 focus-within:ring-offset-background dark:bg-black/45 dark:hover:bg-accent/20"
      whileHover={reduceMotion ? undefined : { rotate: -0.6, y: -6 }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-token-full bg-accent/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />
      <div className="flex items-start justify-between gap-3">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-token-md border border-accent/25 bg-accent/10 text-accent transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
          {tech.icon}
        </span>
      </div>
      <h4 className="mt-4 font-heading text-base font-semibold text-neutral-950 dark:text-white">
        {tech.name}
      </h4>
      <p className="mt-1.5 text-sm leading-6 text-neutral-700 dark:text-neutral-300">
        {tech.purpose}
      </p>
    </motion.article>
  );
}

function GroupDivider() {
  return (
    <div aria-hidden="true" className="relative mx-auto mt-8 flex max-w-xs items-center gap-3 md:mt-10">
      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      <span className="h-1.5 w-1.5 rounded-token-full bg-accent shadow-glow" />
      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
    </div>
  );
}

export default function TechStack() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="tech-stack"
      aria-labelledby="tech-stack-heading"
      className="relative overflow-hidden py-section-y"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-grid-subtle [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]"
      />

      <Container className="relative">
        <motion.div
          variants={fadeUp}
          initial={false}
          animate="visible"
          className="mx-auto max-w-3xl text-center"
        >
          <p className="mb-3 inline-flex items-center gap-2 rounded-token-full border border-accent/30 bg-accent/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-accent">
            <Sparkles aria-hidden size={14} />
            Stack
          </p>
          <h2
            id="tech-stack-heading"
            className="font-heading text-4xl font-bold tracking-normal text-neutral-950 dark:text-white sm:text-5xl"
          >
            Tech Stack
          </h2>
          <p className="mt-4 text-base leading-7 text-muted md:text-lg">
            Technologies I use to design, build, and deploy modern software solutions.
          </p>
        </motion.div>

        <div className="mt-10 space-y-8 md:mt-14">
          {techGroups.map((group, groupIndex) => (
            <React.Fragment key={group.label}>
              {groupIndex > 0 && <GroupDivider />}
              <motion.div
                variants={fadeUp}
                initial={false}
                animate="visible"
                className="mx-auto max-w-2xl text-center"
              >
                <h3 className="font-heading text-2xl font-semibold text-neutral-950 dark:text-white sm:text-3xl">
                  {group.label}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted">{group.description}</p>
              </motion.div>

              <motion.div
                variants={{ hidden: {}, visible: {} }}
                initial={false}
                animate="visible"
                className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
                transition={{ staggerChildren: 0.08, delayChildren: 0.05 }}
              >
                {group.items.map((tech) => (
                  <TechCard key={tech.name} tech={tech} reduceMotion={reduceMotion} />
                ))}
              </motion.div>
            </React.Fragment>
          ))}
        </div>

        <motion.div
          variants={fadeUp}
          initial={false}
          animate="visible"
          className="mx-auto mt-24 max-w-2xl text-center md:mt-28"
        >
          <div
            aria-hidden="true"
            className="relative mx-auto mb-8 flex max-w-xs items-center gap-3"
          >
            <span className="h-px flex-1 bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
            <span className="h-1.5 w-1.5 rounded-token-full bg-accent shadow-glow" />
            <span className="h-px flex-1 bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
          </div>
          <h3 className="font-heading text-2xl font-semibold text-neutral-950 dark:text-white sm:text-3xl">
            Interested in working together?
          </h3>
<a
            href="#projects"
            className="mt-7 inline-flex h-12 items-center justify-center gap-2 rounded-token-full bg-neutral-950 px-6 text-sm font-semibold text-white shadow-glow transition-token hover:-translate-y-0.5 hover:bg-accent hover:shadow-[0_0_36px_rgb(255_122_0_/_0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background dark:bg-accent dark:hover:bg-accent-strong"
          >
            Explore My Projects
            <ArrowRight aria-hidden size={16} className="transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>
        </motion.div>
      </Container>
    </section>
  );
}
