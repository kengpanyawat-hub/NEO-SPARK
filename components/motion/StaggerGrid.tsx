"use client";
import { motion } from "framer-motion";

export default function StaggerGrid({
  items,
  renderItem,
  cols = "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
}: {
  items: any[];
  renderItem: (item: any, i: number) => React.ReactNode;
  cols?: string;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-10% 0% -10% 0%" }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
      className={`grid gap-6 ${cols}`}
    >
      {items.map((it, i) => (
        <motion.div
          key={i}
          variants={{
            hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
            show: { opacity: 1, y: 0, filter: "blur(0px)" },
          }}
          transition={{ duration: .55, ease: [0.22,1,0.36,1] }}
        >
          {renderItem(it, i)}
        </motion.div>
      ))}
    </motion.div>
  );
}
