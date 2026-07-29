"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion, type TargetAndTransition, type Variants } from "framer-motion";
import { BriefcaseBusiness, Mail, MapPin, Sparkles } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const titles = [
  "Full-Stack Software Developer",
  "Information Systems Graduate",
  "Next.js Developer",
  "Laravel Developer",
  "Android Developer",
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.18,
      staggerChildren: 0.1,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.62, ease: [0.22, 1, 0.36, 1] },
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, y: 36, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.78, delay: 0.34, ease: [0.22, 1, 0.36, 1] },
  },
};

function useTypingAnimation(words: string[], startDelay = 650) {
  const shouldReduceMotion = useReducedMotion();
  const [wordIndex, setWordIndex] = useState(0);
  const [characterIndex, setCharacterIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (shouldReduceMotion) {
      setHasStarted(true);
      setCharacterIndex(words[0].length);
      return;
    }

    const startTimer = window.setTimeout(() => setHasStarted(true), startDelay);
    return () => window.clearTimeout(startTimer);
  }, [shouldReduceMotion, startDelay, words]);

  useEffect(() => {
    if (!hasStarted || shouldReduceMotion) return;

    const currentWord = words[wordIndex];
    const isWordComplete = characterIndex === currentWord.length;
    const isWordCleared = characterIndex === 0;
    const delay = isDeleting ? 36 : isWordComplete ? 1450 : isWordCleared ? 280 : 58;

    const timer = window.setTimeout(() => {
      if (!isDeleting && isWordComplete) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting && isWordCleared) {
        setIsDeleting(false);
        setWordIndex((index) => (index + 1) % words.length);
        return;
      }

      setCharacterIndex((index) => index + (isDeleting ? -1 : 1));
    }, delay);

    return () => window.clearTimeout(timer);
  }, [characterIndex, hasStarted, isDeleting, shouldReduceMotion, wordIndex, words]);

  return words[wordIndex].slice(0, characterIndex);
}

const heroButtonClass =
  "group inline-flex h-12 items-center justify-center gap-2 rounded-token-full px-5 text-sm font-semibold transition-token focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background hover:-translate-y-0.5 hover:scale-[1.03]";

const socialLinkClass =
  "inline-flex h-10 w-10 items-center justify-center rounded-token-full border border-border bg-white/90 text-neutral-700 shadow-soft backdrop-blur-xl transition-token hover:-translate-y-0.5 hover:border-accent/70 hover:text-accent hover:shadow-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background dark:bg-black/70 dark:text-neutral-200";

export default function ProfileSection() {
  const typedTitle = useTypingAnimation(titles);
  const shouldReduceMotion = useReducedMotion();

  const floatingAnimation: TargetAndTransition | undefined = shouldReduceMotion
    ? undefined
    : {
        y: [0, -12, 0],
        transition: { duration: 7, repeat: Infinity, ease: "easeInOut" },
      };

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden px-section-x pb-4 pt-4 sm:pt-6 md:pb-6 lg:pb-8 lg:pt-8"
    >
      <div className="absolute right-[-18%] top-[6%] -z-10 h-72 w-72 rounded-token-full bg-accent/18 blur-3xl sm:h-96 sm:w-96 lg:right-[-8%] lg:h-[30rem] lg:w-[30rem]" />
      <div className="absolute left-1/2 top-3 -z-10 h-px w-[78vw] -translate-x-1/2 bg-gradient-to-r from-transparent via-accent/35 to-transparent" />

      <div className="mx-auto grid max-w-container items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] lg:gap-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left"
        >
          <motion.p
            variants={fadeUp}
            className="mb-4 inline-flex items-center gap-2 rounded-token-full border border-accent/35 bg-white/90 px-4 py-2 text-sm font-semibold text-accent shadow-glow backdrop-blur-xl dark:bg-black/55"
          >
            <Sparkles aria-hidden size={16} />
            Hello, I&apos;m
          </motion.p>

          <motion.div variants={fadeUp}>
            <h1
              id="hero-heading"
              className="font-heading text-5xl font-bold leading-[0.98] tracking-normal text-neutral-950 dark:text-white sm:text-6xl lg:text-7xl"
            >
              Bedasa Negash
            </h1>
            <p
              className="mt-5 min-h-[2.5rem] font-heading text-2xl font-semibold text-accent sm:text-3xl"
              aria-live="polite"
              aria-label={typedTitle}
            >
              <span>{typedTitle}</span>
              <motion.span
                aria-hidden="true"
                className="ml-1 inline-block h-7 w-0.5 translate-y-1 bg-accent sm:h-8"
                animate={shouldReduceMotion ? { opacity: 1 } : { opacity: [1, 1, 0, 0] }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
            </p>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-xl text-base leading-7 text-neutral-700 dark:text-neutral-200 sm:text-lg lg:mx-0"
          >
            I build modern web applications, business systems, and mobile experiences with
            clean architecture, thoughtful interfaces, and reliable user flows.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start"
          >
            <motion.a
              href="#projects"
              whileHover={shouldReduceMotion ? undefined : { scale: 1.03 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
              className={`${heroButtonClass} bg-neutral-950 text-white shadow-glow hover:bg-accent dark:bg-accent dark:hover:bg-accent-strong`}
            >
              <BriefcaseBusiness aria-hidden size={18} />
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={shouldReduceMotion ? undefined : { scale: 1.03 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
              className={`${heroButtonClass} border border-border/70 bg-transparent text-foreground hover:border-accent hover:bg-accent hover:text-white hover:shadow-glow`}
            >
              <Mail aria-hidden size={18} />
              Contact Me
            </motion.a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-7 flex items-center justify-center gap-3 lg:justify-start"
            aria-label="Social profiles"
          >
            <a
              href="https://github.com/bedhasa"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Bedasa Negash on GitHub"
              className={socialLinkClass}
            >
              <FaGithub aria-hidden size={18} />
            </a>
            <a
              href="https://linkedin.com/in/bedasa-negash"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Bedasa Negash on LinkedIn"
              className={socialLinkClass}
            >
              <FaLinkedin aria-hidden size={18} />
            </a>
            <a
              href="mailto:bdhsane@gmail.com"
              aria-label="Email Bedasa Negash"
              className={socialLinkClass}
            >
              <Mail aria-hidden size={18} />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          className="relative mx-auto w-full max-w-[26rem] lg:mr-0"
        >
          <motion.div animate={floatingAnimation} className="relative">
            <div className="absolute inset-4 -z-10 rounded-[2rem] bg-accent/25 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-accent/25 bg-white/85 p-3 shadow-soft backdrop-blur-2xl dark:border-white/10 dark:bg-black/45">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.55rem] bg-surface">
                <Image
                  src="/images/heroimg1.png"
                  alt="Illustration of Bedasa Negash coding with modern web development tools"
                  fill
                  priority
                  sizes="(max-width: 768px) 84vw, 416px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/18 via-transparent to-white/10 dark:from-black/30" />
              </div>
            </div>

            <motion.div
              aria-hidden="true"
              className="absolute -bottom-8 left-4 max-w-[15rem] rounded-token-lg border border-accent/25 bg-white/95 px-4 py-3 text-left shadow-soft backdrop-blur-2xl dark:border-white/10 dark:bg-black/80 sm:left-[-1.25rem]"
              initial={{ opacity: 0, y: 18, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.78, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                Available
              </p>
              <p className="mt-1 text-sm font-semibold text-neutral-950 dark:text-white">Software Engineer</p>
              <p className="mt-2 flex items-center gap-1.5 text-xs text-neutral-700 dark:text-neutral-200">
                <MapPin size={13} />
                Addis Ababa, Ethiopia
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
}
