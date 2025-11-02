// app/ai-tools/[id]/page.tsx
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getToolById } from "@/data/ai-tools";
import ToolRunner from "@/components/ToolRunner";
import { buildMeta } from "../../lib/seo";

export const revalidate = 3600;

type Params = { id: string };

export async function generateStaticParams() {
  const { TOOLS } = await import("@/data/ai-tools");
  return TOOLS.map((t) => ({ id: t.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const tool = getToolById(params.id);
  if (!tool) return {};

  // ปลอดภัยกับชนิดข้อมูล: เลือกรูป OG ตามลำดับที่มีอยู่จริง
  const ogImage = (() => {
    const t = tool as any;
    return t.og || t.image || t.cover || "/og/og-aitools.jpg";
  })();

  return buildMeta({
    title: `${tool.title} — NEO SPARK AI Tools`,
    description: tool.description,
    canonical: `/ai-tools/${tool.id}`,
    image: ogImage,
  });
}

export default function ToolPage({ params }: { params: Params }) {
  const tool = getToolById(params.id);
  if (!tool) return notFound();

  return (
    <ToolRunner
      toolId={tool.id}
      title={tool.title}
      description={tool.description}
    />
  );
}
