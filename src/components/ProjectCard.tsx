"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { ExternalLink, ChevronDown, FolderGit2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";
import { buttonVariants } from "@/components/ui/Button";

export type Project = {
  name: string;
  repo: string;
  status: "Completed" | "In Development";
  category: string;
  summary: string;
  image: string;
  technologies: string[];
  role: string;
  type: string;
  details: {
    overview: string;
    problem: string;
    solution: string;
    keyFeatures: string[];
    challenges: string;
    lessonsLearned: string;
    futureImprovements: string;
  };
};

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const reduceMotion = useReducedMotion();
  const [expanded, setExpanded] = React.useState(false);
  const [imageError, setImageError] = React.useState(false);

  const toggleExpanded = () => setExpanded((prev) => !prev);

  const isInDevelopment = project.status === "In Development";

  return (
    <motion.article
      layout={!reduceMotion}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex h-full flex-col overflow-hidden rounded-token-lg border border-border/80 bg-surface/85 shadow-soft backdrop-blur-2xl transition-token hover:-translate-y-1.5 hover:border-accent/50 hover:shadow-glow focus-within:outline-none focus-within:ring-2 focus-within:ring-accent focus-within:ring-offset-2 focus-within:ring-offset-background dark:bg-black/45"
    >
      {/* Orange glow on hover */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-token-full bg-accent/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />

      {/* Image area */}
      <div className="relative h-52 w-full overflow-hidden border-b border-border/50 sm:h-60">
        {project.image && !imageError ? (
          <Image
            src={project.image}
            alt={`${project.name} preview`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, 50vw"
            loading="lazy"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-accent/10 via-transparent to-accent/5 dark:from-accent/5 dark:via-transparent dark:to-accent/10">
            <FolderGit2
              aria-hidden="true"
              className="h-16 w-16 text-accent/40 transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        )}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"
        />
        {/* Status badge */}
        <div className="absolute left-4 top-4 flex gap-2">
          <span
            className={cn(
              "inline-flex items-center rounded-token-full border px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.12em] backdrop-blur-sm",
              isInDevelopment
                ? "border-amber-400/50 bg-amber-400/20 text-amber-300"
                : "border-emerald-400/50 bg-emerald-400/20 text-emerald-300",
            )}
          >
            {isInDevelopment ? "🚧 In Active Development" : "✓ Completed"}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-heading text-xl font-semibold text-neutral-950 dark:text-white sm:text-2xl">
              {project.name}
            </h3>
            <p className="mt-1 text-sm font-medium text-accent">{project.category}</p>
          </div>
        </div>

        {/* Compact metadata */}
        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-neutral-600 dark:text-neutral-400">
          <span>
            <span className="font-semibold text-neutral-800 dark:text-neutral-200">Role:</span>{" "}
            {project.role}
          </span>
          <span>
            <span className="font-semibold text-neutral-800 dark:text-neutral-200">Type:</span>{" "}
            {project.type}
          </span>
        </div>

        {/* Summary */}
        <p className="mt-3 text-sm leading-6 text-neutral-700 dark:text-neutral-300">
          {project.summary}
        </p>

        {/* Expandable details */}
        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="mt-4 space-y-4 border-t border-border/60 pt-4">
                <DetailSection title="Overview" text={project.details.overview} />
                <DetailSection title="Problem" text={project.details.problem} />
                <DetailSection title="Solution" text={project.details.solution} />
                <DetailSection
                  title="Key Features"
                  items={project.details.keyFeatures}
                />
                <DetailSection title="Challenges" text={project.details.challenges} />
                <DetailSection
                  title="Lessons Learned"
                  text={project.details.lessonsLearned}
                />
                <DetailSection
                  title="Future Improvements"
                  text={project.details.futureImprovements}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Read More toggle */}
        <button
          onClick={toggleExpanded}
          aria-expanded={expanded}
          aria-controls={`project-details-${index}`}
          id={`project-details-${index}`}
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-token hover:text-accent-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          {expanded ? "Read Less" : "Read More"}
          <ChevronDown
            aria-hidden="true"
            className={cn(
              "h-4 w-4 transition-transform duration-300",
              expanded && "rotate-180",
            )}
          />
        </button>

        {/* Technology badges */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech} className="px-2.5 py-0.5 text-[0.65rem]">
              {tech}
            </Badge>
          ))}
        </div>

        {/* Action buttons */}
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ variant: "primary", size: "sm" })}
          >
            <FaGithub aria-hidden="true" size={16} />
            View Source
          </a>
          <button
            disabled
            title="Coming Soon"
            aria-label="Live demo coming soon"
            className={cn(
              buttonVariants({ variant: "secondary", size: "sm" }),
              "cursor-not-allowed opacity-50",
            )}
          >
            <ExternalLink aria-hidden="true" size={16} />
            Live Demo<span className="text-xs">· Coming Soon</span>
          </button>
        </div>
      </div>
    </motion.article>
  );
}

function DetailSection({
  title,
  text,
  items,
}: {
  title: string;
  text?: string;
  items?: string[];
}) {
  return (
    <div>
      <h4 className="text-sm font-semibold uppercase tracking-[0.12em] text-accent">
        {title}
      </h4>
      {text && (
        <p className="mt-1.5 text-sm leading-6 text-neutral-700 dark:text-neutral-300">
          {text}
        </p>
      )}
      {items && (
        <ul className="mt-1.5 space-y-1.5 text-sm leading-6 text-neutral-700 dark:text-neutral-300">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-token-full bg-accent" />
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
