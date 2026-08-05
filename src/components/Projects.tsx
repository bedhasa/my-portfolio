"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ProjectCard, type Project } from "@/components/ProjectCard";
import { fadeUp, viewportOnce } from "@/lib/animations";

const projects: Project[] = [
  {
    name: "Campus Maintenance Management System",
    repo: "https://github.com/bedhasa/campus-maintenance-management-system",
    status: "Completed",
    category: "Full-Stack Web Application",
    summary:
      "A comprehensive platform for managing campus maintenance requests, tracking work orders, and coordinating facilities teams efficiently.",
    image: "",
    technologies: ["Laravel", "MySQL", "Tailwind CSS", "Nextjs"],
    role: "Full-Stack Developer",
    type: "Academic / Personal Project",
    details: {
      overview:
        "A full-stack web application that digitizes campus maintenance workflows, enabling students and staff to submit requests and track their resolution in real-time.",
      problem:
        "Campus maintenance requests were managed through paper forms and informal channels, leading to lost requests, unclear priorities, and slow response times.",
      solution:
        "Built a centralized system with role-based dashboards for students, staff, and maintenance teams. Automated ticket assignment, status tracking, and notifications.",
      keyFeatures: [
        "Role-based access control (Student, Staff, Admin, Maintenance Team)",
        "Ticket submission with categories and priority levels",
        "Real-time status tracking and update history",
        "Dashboard analytics for maintenance performance",
        "Email notifications for ticket updates",
      ],
      challenges:
        "Designing a clean role-based permission model and ensuring the ticket lifecycle was intuitive for users with varying technical comfort.",
      lessonsLearned:
        "Gained deep experience with Laravel's authentication and authorization systems, and learned the importance of clear user feedback loops in workflow tools.",
      futureImprovements:
        "Add mobile push notifications, asset management module, and predictive maintenance analytics.",
    },
  },
  {
    name: "Inventory Management System",
    repo: "https://github.com/bedhasa/inventory-management-system",
    status: "Completed",
    category: "Business System",
    summary:
      "A robust inventory management solution for tracking stock levels, multiple product categories.",
    image: "",
    technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    role: "Full-Stack Developer",
    type: "Academic / Personal Project",
    details: {
      overview:
        "An inventory management system designed to help small businesses track stock, manage suppliers, and generate actionable reports.",
      problem:
        "Businesses struggled with manual stock tracking, leading to overstocking, stockouts, and inaccurate financial reporting.",
      solution:
        "Created a system with real-time stock updates, automatic reorder alerts, and comprehensive reporting on inventory value and movement.",
      keyFeatures: [
        "Product and category management",
        "Stock in/out tracking with audit trail",
        "Low-stock alerts and reorder suggestions",
        "Inventory valuation and movement reports",
      ],
      challenges:
        "Implementing accurate stock calculations during concurrent transactions and designing a flexible schema for different product types.",
      lessonsLearned:
        "Learned the importance of database transactions and locking mechanisms for maintaining data integrity in inventory systems.",
      futureImprovements:
        "Add barcode scanning, multi-warehouse support, and integration with e-commerce platforms.",
    },
  },
  {
    name: "Ekub System",
    repo: "https://github.com/bedhasa/Ekub-system",
    status: "Completed",
    category: "Financial Management System",
    summary:
      "A digital platform for managing traditional Ekub savings circles, automating payments, member tracking, and payout scheduling.",
    image: "",
    technologies: ["JavaScript", "PHP", "MySQL"],
    role: "Full-Stack Developer",
    type: "Academic / Personal Project",
    details: {
      overview:
        "A digital solution for Ekub (traditional rotating savings groups), automating member management, contribution tracking, and payout distribution.",
      problem:
        "Traditional Ekub groups relied on manual record-keeping, leading to disputes, missed payments, and lack of transparency.",
      solution:
        "Built a platform that automates the entire Ekub cycle — member contributions, rotation order, payouts, and dispute resolution records.",
      keyFeatures: [
        "Circle creation and member management",
        "Automated contribution tracking",
        "Rotation scheduling and payout calculation",
        "Payment history and financial reports",
        "Transparent records for dispute resolution",
      ],
      challenges:
        "Modeling the complex rules of Ekub rotation and ensuring the system handled edge cases like early payouts and member exits fairly.",
      lessonsLearned:
        "Gained insight into financial domain modeling and the importance of building trust through transparent, auditable systems.",
      futureImprovements:
        "Add mobile money integration, automated reminders, and a mobile-first PWA interface.",
    },
  },
  {
    name: "EthioSpend",
    repo: "https://github.com/bedhasa/EthioSpend",
    status: "In Development",
    category: "Personal Finance Platform",
    summary:
      "A personal finance Mobile app designed to help users track spending, set budgets, and gain insights into their financial habits.",
    image: "",
    technologies: ["JAVA"],
    role: "Full-Stack Developer",
    type: "Personal Project",
    details: {
      overview:
        "EthioSpend is an in-development personal finance platform focused on expense tracking, budget management, and financial insights for individual users.",
      problem:
        "Many people lack simple, accessible tools to understand their spending patterns and build healthier financial habits.",
      solution:
        "Designing an intuitive app with smart categorization, budget alerts, and visual analytics to make personal finance approachable.",
      keyFeatures: [
        "Expense and income tracking",
        "Budget creation and alerts",
        "Visual spending analytics and trends",
        "Transaction categorization",
        "Monthly financial reports",
      ],
      challenges:
        "Currently designing a scalable data model for transactions and building real-time budget alerts that don't overwhelm users.",
      lessonsLearned:
        "Working on this project is teaching me the importance of thoughtful UX in financial applications and data visualization best practices.",
      futureImprovements:
        "Add bank account integration, bill reminders, savings goals, and AI-powered spending insights.",
    },
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
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
            Portfolio
          </p>
          <h2
            id="projects-heading"
            className="font-heading text-4xl font-bold tracking-normal text-neutral-950 dark:text-white sm:text-5xl"
          >
            Featured Projects
          </h2>
          <p className="mt-4 text-base leading-7 text-muted md:text-lg">
            Real software solutions built to solve practical business and organizational challenges.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:mt-20 lg:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
