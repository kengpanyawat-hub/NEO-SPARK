import { getServiceBySlug, SERVICES2 } from "@/data/services2";
import ProcessSteps from "@/components/ProcessSteps";
import PortfolioGrid from "@/components/PortfolioGrid";
import { notFound } from "next/navigation";


export const revalidate = 3600; // cache 1 ชม.

type Params = { slug: string };

export async function generateStaticParams() {
  return SERVICES2.map((s) => ({ slug: s.slug }));
}

export default function ServiceDetailPage({ params }: { params: Params }) {
  const service = getServiceBySlug(params.slug);
  if (!service) return notFound();

  const Icon = service.icon;

  return (
    <main className="relative">
      {/* Header */}
      <section className="relative overflow-hidden border-b border-white/10 bg-[radial-gradient(1200px_400px_at_50%_-10%,rgba(98,20,217,.25),transparent_60%)]">
        <div className="mx-auto flex max-w-6xl items-center gap-6 px-4 pb-14 pt-20 md:pt-24">
          <div className="shrink-0 hidden sm:flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500/20 ring-1 ring-violet-500/30">
            <Icon className="h-6 w-6 text-violet-200" />
          </div>
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
              {service.title}
            </h1>
            <p className="mt-2 text-lg text-neutral-200">{service.subtitle}</p>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-neutral-300/85">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      <ProcessSteps steps={service.steps} />

      {/* Portfolio */}
      <PortfolioGrid items={service.works} />
    </main>
  );
}
