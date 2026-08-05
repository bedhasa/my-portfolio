"use client";

import Image from "next/image";
import {
  BookOpenCheck,
  BriefcaseBusiness,
  Code2,
  GraduationCap,
  Handshake,
  Layers3,
  Lightbulb,
  MapPin,
  Rocket,
  Sparkles,
  Target,
  UsersRound,
} from "lucide-react";
import { motion, useReducedMotion, useScroll, useSpring, type Variants } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/Card";
import { fadeUp, viewportOnce } from "@/lib/animations";

const storyParagraphs = [
  "I am Bedasa Negash, an Information Systems graduate from Ethiopia who found software development through a simple question: how can technology make real work easier, faster, and more reliable?",
  "That question still guides how I build. I enjoy turning messy problems into scalable web applications with clean architecture, stable data flows, and interfaces people can understand without a manual.",
  "My motivation comes from practical impact. Whether I am building academic systems, business tools, or portfolio-grade web experiences, I care about the small decisions that make software trustworthy.",
  "I am a continuous learner, always sharpening my Next.js, Laravel, Android, and system-design skills so I can contribute with clarity, humility, and momentum.",
];

const facts = [
  { label: "Ethiopia", icon: MapPin },
  { label: "Information Systems Graduate", icon: GraduationCap },
  { label: "Full-Stack Developer", icon: Code2 },
  { label: "Open to Opportunities", icon: BriefcaseBusiness },
];

const highlights = [
  {
    title: "Problem Solver",
    description: "I break complex needs into focused flows, clear data models, and software that serves a real purpose.",
    icon: Target,
  },
  {
    title: "Continuous Learner",
    description: "I keep improving through projects, documentation, experiments, and honest iteration.",
    icon: BookOpenCheck,
  },
  {
    title: "Team Player",
    description: "I communicate early, respect shared standards, and build with the people who will maintain the work.",
    icon: UsersRound,
  },
];

const milestones = [
  {
    year: "2023",
    title: "Entered Hawassa University",
    description: "Began my higher education journey at Hawassa University, diving into the world of technology.",
    icon: GraduationCap,
  },
  {
    year: "2024",
    title: "Started Information Systems Degree",
    description: "Started my Information Systems degree, learning how people, data, and technology work together to solve organizational problems.",
    icon: BookOpenCheck,
  },
  {
    year: "2025",
    title: "Academic & Personal Projects",
    description: "Worked on academic course projects and personal projects, turning classroom concepts into working software.",
    icon: Layers3,
  },
  {
    year: "2026",
    title: "Graduated",
    description: "Graduated with my Information Systems degree, building a strong foundation in software, analysis, and problem solving.",
    icon: Sparkles,
  },
  {
    year: "Now",
    title: "Seeking Opportunities & Freelancing",
    description: "Currently seeking a job and working as a freelancer, ready to contribute clean engineering and meaningful impact.",
    icon: Handshake,
  },
];

const timelineCardVariants: Variants = {
  hidden: (side: "left" | "right") => ({
    opacity: 0,
    x: side === "left" ? -36 : 36,
    y: 12,
  }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.58, ease: [0.22, 1, 0.36, 1] },
  },
};

function FactBadge({ label, icon: Icon }: (typeof facts)[number]) {
  return (
    <span className="inline-flex items-center gap-2 rounded-token-full border border-border bg-white/80 px-3 py-2 text-xs font-semibold text-neutral-700 shadow-soft backdrop-blur-xl dark:bg-black/45 dark:text-neutral-200">
      <Icon aria-hidden size={14} className="text-accent" />
      {label}
    </span>
  );
}

function HighlightCard({ title, description, icon: Icon }: (typeof highlights)[number]) {
  return (
    <motion.article
      whileHover={{ y: -6, scale: 1.01 }}
      className="group rounded-token-lg border border-border/80 bg-white/75 p-5 shadow-soft backdrop-blur-2xl transition-token hover:border-accent/50 hover:shadow-glow dark:bg-black/45"
    >
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-token-md border border-accent/25 bg-accent/10 text-accent">
        <Icon aria-hidden size={20} />
      </div>
      <h3 className="font-heading text-base font-semibold text-neutral-950 dark:text-white">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-neutral-700 dark:text-neutral-300">{description}</p>
    </motion.article>
  );
}

function TimelineItem({
  milestone,
  index,
  reduceMotion,
}: {
  milestone: (typeof milestones)[number];
  index: number;
  reduceMotion: boolean | null;
}) {
  const Icon = milestone.icon;
  const side = index % 2 === 0 ? "left" : "right";

  return (
    <motion.li
      custom={side}
      variants={reduceMotion ? fadeUp : timelineCardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="relative grid gap-4 md:grid-cols-[minmax(0,1fr)_3rem_minmax(0,1fr)] md:items-center"
    >
      <div className={side === "left" ? "md:col-start-1" : "md:col-start-3"}>
        <Card className="group p-5 hover:border-accent/45 hover:shadow-glow">
          <div className="flex items-start gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-token-md border border-accent/25 bg-accent/10 text-accent">
              <Icon aria-hidden size={20} />
            </span>
            <span>
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-accent">{milestone.year}</span>
              <h3 className="mt-1 font-heading text-lg font-semibold text-neutral-950 dark:text-white">
                {milestone.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-neutral-700 dark:text-neutral-300">
                {milestone.description}
              </p>
            </span>
          </div>
        </Card>
      </div>

      <div className="absolute left-0 top-5 flex h-10 w-10 -translate-x-[0.35rem] items-center justify-center rounded-token-full border border-accent/35 bg-background text-accent shadow-glow md:static md:col-start-2 md:mx-auto md:translate-x-0">
        <span className="h-3 w-3 rounded-token-full bg-accent" />
      </div>
    </motion.li>
  );
}

export default function About() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 65%", "end 55%"],
  });
  const lineScale = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    restDelta: 0.001,
  });

  return (
    <div className="space-y-28 px-section-x pt-0 md:space-y-32" aria-label="About Bedasa Negash">
      <section aria-labelledby="who-i-am-heading" className="mx-auto max-w-container">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(280px,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <div className="relative mx-auto w-full max-w-[29rem] lg:mx-0">
            <div className="absolute inset-8 -z-10 rounded-[2rem] bg-accent/20 blur-3xl" />
            <div className="overflow-hidden rounded-[1.75rem] border border-accent/20 bg-white/70 p-3 shadow-soft backdrop-blur-2xl dark:bg-black/45">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.25rem] bg-surface">
                <Image
                  src="/images/profile.jpg"
                  alt="Professional portrait of Bedasa Negash"
                  fill
                  sizes="(max-width: 1024px) 90vw, 464px"
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>

          <div>
            <p className="mb-3 inline-flex items-center gap-2 rounded-token-full border border-accent/30 bg-accent/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-accent">
              <Lightbulb aria-hidden size={14} />
              Story
            </p>
            <h2
              id="who-i-am-heading"
              className="font-heading text-4xl font-bold tracking-normal text-neutral-950 dark:text-white sm:text-5xl"
            >
              Who I Am
            </h2>

            <div className="mt-6 space-y-4 text-base leading-8 text-neutral-700 dark:text-neutral-200">
              {storyParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-2.5" aria-label="Quick facts">
              {facts.map((fact) => (
                <FactBadge key={fact.label} {...fact} />
              ))}
            </div>

            <div className="mt-9 grid gap-4 sm:grid-cols-3">
              {highlights.map((highlight) => (
                <HighlightCard key={highlight.title} {...highlight} />
              ))}
            </div>

            <div className="mt-9">
              <a
                href="#projects"
                className="inline-flex h-12 items-center justify-center rounded-token-full bg-neutral-950 px-6 text-sm font-semibold text-white shadow-glow transition-token hover:-translate-y-0.5 hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background dark:bg-accent dark:hover:bg-accent-strong"
              >
                View Projects
              </a>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="journey-heading" className="mx-auto max-w-container">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="mb-3 inline-flex items-center gap-2 rounded-token-full border border-accent/30 bg-accent/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-accent">
            <Rocket aria-hidden size={14} />
            Timeline
          </p>
          <h2
            id="journey-heading"
            className="font-heading text-4xl font-bold tracking-normal text-neutral-950 dark:text-white sm:text-5xl"
          >
            My Journey
          </h2>
        </motion.div>

        <div ref={timelineRef} className="relative mt-14 md:mt-16">
          <div className="absolute bottom-0 left-4 top-0 w-px overflow-hidden bg-border md:left-1/2 md:-translate-x-1/2">
            <motion.div
              aria-hidden="true"
              className="h-full w-full origin-top bg-accent"
              style={{ scaleY: shouldReduceMotion ? 1 : lineScale }}
            />
          </div>

          <ol className="space-y-8 pl-12 md:space-y-10 md:pl-0" aria-label="Career journey timeline">
            {milestones.map((milestone, index) => (
              <TimelineItem
                key={`${milestone.year}-${milestone.title}`}
                milestone={milestone}
                index={index}
                reduceMotion={shouldReduceMotion}
              />
            ))}
          </ol>
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto mt-16 max-w-2xl text-center"
        >
          <h3 className="font-heading text-2xl font-semibold text-neutral-950 dark:text-white sm:text-3xl">
            Let&apos;s Build Something Meaningful Together
          </h3>
          <a
            href="#projects"
            className="mt-6 inline-flex h-12 items-center justify-center rounded-token-full bg-neutral-950 px-6 text-sm font-semibold text-white shadow-glow transition-token hover:-translate-y-0.5 hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background dark:bg-accent dark:hover:bg-accent-strong"
          >
            View Projects
          </a>
        </motion.div>
      </section>
    </div>
  );
}
