"use client";

import * as React from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
  LayoutDashboard,
  Globe,
  Smartphone,
  Database,
  Code2,
  Palette,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { fadeUp, staggerChildren, viewportOnce } from "@/lib/animations";

type Service = {
  title: string;
  description: string;
  capabilities: string[];
  icon: React.ReactNode;
};

const services: Service[] = [
  {
    title: "Business Management Systems",
    description:
      "Custom systems that streamline operations, track resources, and give you full control over daily workflows.",
    capabilities: ["Inventory", "Warehouse", "Maintenance", "Administration"],
    icon: <LayoutDashboard size={26} />,
  },
  {
    title: "Custom/Personal App or Website",
    description:
      "Tailored personal apps and websites designed around your unique goals, brand, and vision.",
    capabilities: ["Personal Websites", "Portfolio Sites", "Small Business Sites", "Personal Branding"],
    icon: <Globe size={26} />,
  },
  {
    title: "Mobile Application Development",
    description:
      "Cross-platform mobile apps for Android and Flutter that put your services in your users' pockets.",
    capabilities: ["Android", "Flutter", "Business Apps", "Field Apps"],
    icon: <Smartphone size={26} />,
  },
  {
    title: "Database Design",
    description:
      "Well-structured relational databases engineered for performance, integrity, and reliable data access.",
    capabilities: ["MySQL", "PostgreSQL", "Relational Design", "Performance", "Data Integrity"],
    icon: <Database size={26} />,
  },
  {
    title: "Web Development",
    description:
      "Fast, responsive, and scalable websites and web applications built to engage users and grow your business.",
    capabilities: ["Landing Pages", "E-Commerce", "Web Portals", "SEO-Ready"],
    icon: <Code2 size={26} />,
  },
  {
    title: "UI/UX Implementation",
    description:
      "Modern, accessible interfaces crafted with care for usability, responsiveness, and performance.",
    capabilities: ["Responsive Design", "Accessibility", "Modern Interfaces", "Performance"],
    icon: <Palette size={26} />,
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

function ServiceCard({ service, reduceMotion }: { service: Service; reduceMotion: boolean | null }) {
  return (
    <motion.article
      variants={reduceMotion ? fadeUp : cardVariants}
      whileHover={reduceMotion ? undefined : { rotate: -0.6, y: -6 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-token-lg border border-border/80 bg-white/70 p-6 shadow-soft backdrop-blur-2xl transition-token hover:-translate-y-1.5 hover:border-accent/60 hover:bg-accent/[0.06] hover:shadow-glow focus-within:outline-none focus-within:ring-2 focus-within:ring-accent focus-within:ring-offset-2 focus-within:ring-offset-background dark:bg-black/45 dark:hover:bg-accent/[0.08]"
    >
      {/* Orange glow on hover */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-token-full bg-accent/15 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />
      {/* Top accent border animation */}
      <div
        aria-hidden="true"
        className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />

      {/* Icon */}
      <div className="relative">
        <span
          aria-hidden="true"
className="flex h-12 w-12 items-center justify-center rounded-token-lg border border-accent/25 bg-accent/10 text-accent transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110"
        >
          {service.icon}
        </span>
      </div>

      {/* Content */}
      <div className="mt-5 flex flex-1 flex-col">
        <h3 className="font-heading text-lg font-semibold text-neutral-950 dark:text-white">
          {service.title}
        </h3>
        <p className="mt-2.5 text-sm leading-6 text-neutral-700 dark:text-neutral-300">
          {service.description}
        </p>

        {/* Capabilities */}
        <ul className="mt-5 flex flex-wrap gap-2">
          {service.capabilities.map((cap) => (
            <li
              key={cap}
              className="inline-flex items-center rounded-token-full border border-accent/25 bg-accent/[0.07] px-3 py-1 text-xs font-medium text-accent transition-token group-hover:border-accent/50 group-hover:bg-accent/10"
            >
              {cap}
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}

export default function Services() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative overflow-hidden py-section-y"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-grid-subtle [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]"
      />

      <Container className="relative">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="mb-3 inline-flex items-center gap-2 rounded-token-full border border-accent/30 bg-accent/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-accent">
            <Sparkles aria-hidden size={14} />
            Services
          </p>
          <h2
            id="services-heading"
            className="font-heading text-4xl font-bold tracking-normal text-neutral-950 dark:text-white sm:text-5xl"
          >
            What I Build
          </h2>
          <p className="mt-4 text-base leading-7 text-muted md:text-lg">
            I design and develop software solutions that help businesses improve efficiency,
            automate workflows, and create better digital experiences.
          </p>
        </motion.div>

        <motion.div
          variants={reduceMotion ? undefined : staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 md:mt-16"
        >
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} reduceMotion={reduceMotion} />
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto mt-20 max-w-2xl text-center md:mt-24"
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
            Need a software solution?
          </h3>
          <p className="mt-2 text-base leading-7 text-muted">
            Let&apos;s discuss your project.
          </p>
<a
            href="#contact"
            className="mt-7 inline-flex h-12 items-center justify-center gap-2 rounded-token-full bg-neutral-950 px-6 text-sm font-semibold text-white shadow-glow transition-token hover:-translate-y-0.5 hover:bg-accent hover:shadow-[0_0_36px_rgb(255_122_0_/_0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background dark:bg-accent dark:hover:bg-accent-strong"
          >
            Get In Touch
            <ArrowRight aria-hidden size={16} className="transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>
        </motion.div>
      </Container>
    </section>
  );
}
