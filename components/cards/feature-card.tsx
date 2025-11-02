"use client";
import { m } from "framer-motion";
import { ReactNode } from "react";
import clsx from "clsx";

export function FeatureCard({
  icon,
  title,
  desc,
  className,
}: {
  icon: ReactNode;
  title: string;
  desc: string;
  className?: string;
}) {
  return (
    <m.article
      whileHover={{ y: -6, rotateX: 2 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      className={clsx(
        "card-glass card-shine rounded-2xl p-6 md:p-7",
        "border-white/10 hover:border-white/30",
        className
      )}
    >
      <m.div
        whileHover={{ scale: 1.06, rotate: -3 }}
        transition={{ type: "spring", stiffness: 300, damping: 14 }}
        className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/5"
      >
        {icon}
      </m.div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-white/70 leading-relaxed">{desc}</p>
    </m.article>
  );
}
