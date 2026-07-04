"use client";

import { motion } from "framer-motion";
import { TechRow } from "@/components/ui/tech-badge";
import { fadeUp } from "@/lib/motion";
import type { Education } from "@/lib/data";

export function EducationCard({ edu }: { edu: Education }) {
  const initial = edu.degree.startsWith("Master") ? "MS" : "BE";

  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 26 }}
      className="group flex h-full flex-col rounded-2xl border border-line bg-surface p-8 shadow-card transition-[background-color,box-shadow] duration-300 hover:bg-blush hover:shadow-lift"
    >
      <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blush font-mono text-2xl font-bold text-accent">
        {initial}
      </span>

      <h3 className="mt-6 text-xl font-bold tracking-tight text-ink">{edu.degree}</h3>
      <p className="mt-1 text-[15px] font-medium text-accent">{edu.school}</p>
      <p className="mt-2 font-mono text-xs text-faint">
        {edu.dates} · {edu.location} · GPA {edu.gpa}
      </p>

      <hr className="my-6 border-line" />

      <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-accent">Coursework</span>
      <div className="mt-3">
        <TechRow tech={edu.coursework} />
      </div>
    </motion.article>
  );
}
