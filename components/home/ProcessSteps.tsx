// components/home/ProcessSteps.tsx
"use client";
import Reveal from "@/components/motion/Reveal";
import {
  ClipboardList,
  Ruler,
  Code2,
  RefreshCw,
  Rocket,
} from "lucide-react";

type Step = {
  title: string;
  desc: string;
  icon: React.ReactNode;
};

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="
        relative mx-auto mb-4 grid h-12 w-12 place-items-center rounded-2xl
        text-white
        bg-[conic-gradient(from_210deg,theme(colors.purple.500),theme(colors.pink.500))]
        ring-1 ring-white/15 shadow-[0_0_24px_0_rgba(168,85,247,.25)]
        before:absolute before:inset-[2px] before:rounded-[14px] before:bg-[#0f0d13]/85
        before:content-['']
      "
      aria-hidden
    >
      <div className="relative z-10">{children}</div>
    </div>
  );
}

const STEPS: Step[] = [
  {
    title: "Brief & Plan",
    desc: "เก็บ requirement วางโครงสร้างคอนเทนต์",
    icon: <ClipboardList size={22} />,
  },
  {
    title: "Design",
    desc: "ดีไซน์โทน Neo-tech ให้เข้ากับแบรนด์",
    icon: <Ruler size={22} />,
  },
  {
    title: "Develop",
    desc: "พัฒนา Next.js + Tailwind + Motion",
    icon: <Code2 size={22} />,
  },
  {
    title: "Review",
    desc: "ทดสอบ/ปรับแก้รอบหลักตามแพ็กเกจ",
    icon: <RefreshCw size={22} />,
  },
  {
    title: "Launch & Support",
    desc: "ขึ้นระบบ + คู่มือ + ซัพพอร์ตหลังเปิดเว็บ",
    icon: <Rocket size={22} />,
  },
];

export default function ProcessSteps() {
  return (
  <Reveal>
    <section className="aurora rounded-3xl border border-white/10 p-8 container-xl py-14">
      <h2 className="text-center text-3xl md:text-4xl font-extrabold mb-10">
        ขั้นตอนทำงาน
      </h2>

      <div className="grid gap-5 md:grid-cols-5">
        {STEPS.map((s, i) => (
          <article
            key={s.title}
            className="
              card text-center group
              hover:border-neo-violet/50 transition
              hover:translate-y-[-2px]
            "
          >
            <Badge>
              {/* ไอคอนข้างใน badge */}
              <div
                className="
                  text-neo-violet group-hover:text-neo-pink transition
                  drop-shadow-[0_0_12px_rgba(236,72,153,.25)]
                "
              >
                {s.icon}
              </div>
            </Badge>

            <h3 className="text-lg font-semibold">{s.title}</h3>
            <p className="mt-2 text-white/70 leading-relaxed">{s.desc}</p>

            {/* เส้นไฮไลต์ใต้การ์ด */}
            <div
              className="
                mt-5 h-px w-16 mx-auto rounded-full
                bg-gradient-to-r from-neo-violet/40 to-neo-pink/40
                opacity-0 group-hover:opacity-100 transition
              "
            />
          </article>
        ))}
      </div>
    </section>
	</Reveal>
  );
}
