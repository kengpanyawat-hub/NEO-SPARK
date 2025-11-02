// app/blog/[slug]/page.tsx
import { notFound } from "next/navigation";
import { posts } from "@/data/posts";

/* ---------- Utils ---------- */
const formatDateTH = (iso: string) => {
  try {
    return new Date(iso).toLocaleDateString("th-TH", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return iso;
  }
};

type Block =
  | { type: "paragraph"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "tip"; text: string }
  | { type: "note"; text: string }
  | { type: "quote"; text: string }
  | { type: "divider" }
  | { type: "image"; src: string; alt?: string; caption?: string };

/** แปลง content (string[]) เป็นบล็อกพร้อมเรนเดอร์
 *  รองรับรูปแบบ:
 *   - หัวข้อ:  ## H2 / ### H3
 *   - รายการ:  - item / 1. item
 *   - กล่อง:   TIP: ... / NOTE: ...
 *   - คำคม:    > ...
 *   - คั่น:     --- หรือ ***
 *   - รูปภาพ:  ![alt](/images/blog/slug/pic.jpg "คำอธิบาย")
 */
function toBlocks(lines: string[]): Block[] {
  const blocks: Block[] = [];
  let i = 0;

  const isOl = (s: string) => /^\s*\d+[\.\)\-]\s+/.test(s);
  const stripOl = (s: string) => s.replace(/^\s*\d+[\.\)\-]\s+/, "");
  const isUl = (s: string) => /^\s*(?:-|\u2022)\s+/.test(s);
  const stripUl = (s: string) => s.replace(/^\s*(?:-|\u2022)\s+/, "");
  const isH2 = (s: string) => /^\s*##\s+/.test(s);
  const stripH2 = (s: string) => s.replace(/^\s*##\s+/, "");
  const isH3 = (s: string) => /^\s*###\s+/.test(s);
  const stripH3 = (s: string) => s.replace(/^\s*###\s+/, "");
  const isTip = (s: string) => /^\s*TIP:\s*/i.test(s);
  const stripTip = (s: string) => s.replace(/^\s*TIP:\s*/i, "");
  const isNote = (s: string) => /^\s*NOTE:\s*/i.test(s);
  const stripNote = (s: string) => s.replace(/^\s*NOTE:\s*/i, "");
  const isQuote = (s: string) => /^\s*>\s+/.test(s);
  const stripQuote = (s: string) => s.replace(/^\s*>\s+/, "");
  const isDivider = (s: string) => /^\s*(?:---|\*\*\*)\s*$/.test(s);

  // รูปแบบภาพ: ![alt](src "caption")
  const imgRe = /^\s*!\[([^\]]*)\]\(([^)\s]+)(?:\s+"([^"]*)")?\)\s*$/;

  while (i < lines.length) {
    const rawLine = lines[i] ?? "";
    const raw = rawLine.trim();
    if (!raw) { i++; continue; }

    // image
    const m = raw.match(imgRe);
    if (m) {
      const [, alt, src, caption] = m;
      blocks.push({ type: "image", src, alt, caption });
      i++; continue;
    }

    if (isH2(raw)) { blocks.push({ type: "h2", text: stripH2(raw) }); i++; continue; }
    if (isH3(raw)) { blocks.push({ type: "h3", text: stripH3(raw) }); i++; continue; }
    if (isTip(raw)) { blocks.push({ type: "tip", text: stripTip(raw) }); i++; continue; }
    if (isNote(raw)) { blocks.push({ type: "note", text: stripNote(raw) }); i++; continue; }
    if (isQuote(raw)) { blocks.push({ type: "quote", text: stripQuote(raw) }); i++; continue; }
    if (isDivider(raw)) { blocks.push({ type: "divider" }); i++; continue; }

    if (isOl(raw)) {
      const items: string[] = [];
      while (i < lines.length && isOl(lines[i]!.trim())) { items.push(stripOl(lines[i]!.trim())); i++; }
      blocks.push({ type: "ol", items }); continue;
    }

    if (isUl(raw)) {
      const items: string[] = [];
      while (i < lines.length && isUl(lines[i]!.trim())) { items.push(stripUl(lines[i]!.trim())); i++; }
      blocks.push({ type: "ul", items }); continue;
    }

    blocks.push({ type: "paragraph", text: raw }); i++;
  }
  return blocks;
}

/* ---------- Static params ---------- */
export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

/* ---------- SEO ---------- */
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const p = posts.find((x) => x.slug === params.slug);
  if (!p) return {};
  const title = p.title;
  const description = p.excerpt ?? p.takeaway?.join(" · ") ?? "";
  const image = p.cover || "/og.jpg";
  const url = `https://neo-spark.agency/blog/${p.slug}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      images: [{ url: image }],
      type: "article",
    },
    alternates: { canonical: url },
  };
}

/* ---------- Page ---------- */
export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  const blocks = toBlocks(post.content ?? []);

  return (
    <div className="relative">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(50%_40%_at_50%_0%,rgba(124,58,237,0.18),rgba(0,0,0,0))]" />
      <article className="mx-auto max-w-3xl py-10 px-5 sm:px-6 md:px-0 text-white">
        <header className="mb-8">
          <div className="flex items-center gap-2 text-xs text-white/60">
            <span>{formatDateTH(post.date)}</span>
            {post.tags?.length ? (
              <>
                <span>•</span>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((t) => (
                    <span key={t} className="inline-flex items-center rounded-full bg-white/5 px-2.5 py-0.5 ring-1 ring-white/10 text-[11px]">
                      {t}
                    </span>
                  ))}
                </div>
              </>
            ) : null}
          </div>
          <h1 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">{post.title}</h1>
          {post.excerpt && <p className="mt-3 text-white/70 leading-relaxed">{post.excerpt}</p>}
        </header>

        {post.cover && (
          <div className="mb-8 overflow-hidden rounded-xl ring-1 ring-white/10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={post.cover} alt={post.title} className="w-full h-auto object-cover" />
          </div>
        )}

        <div className="prose prose-invert max-w-none">
          {blocks.map((b, idx) => {
            switch (b.type) {
              case "h2":
                return <h2 key={idx} className="mt-10 mb-3 text-2xl font-semibold tracking-tight">{b.text}</h2>;
              case "h3":
                return <h3 key={idx} className="mt-8 mb-3 text-xl font-semibold">{b.text}</h3>;
              case "paragraph":
                return <p key={idx} className="leading-7 text-white/80">{b.text}</p>;
              case "ul":
                return (
                  <ul key={idx} className="list-disc list-inside space-y-2 text-white/85">
                    {b.items.map((item, i) => <li key={i} className="leading-7">{item}</li>)}
                  </ul>
                );
              case "ol":
                return (
                  <ol key={idx} className="list-decimal list-inside space-y-2 text-white/85">
                    {b.items.map((item, i) => <li key={i} className="leading-7">{item}</li>)}
                  </ol>
                );
              case "tip":
                return (
                  <div key={idx} className="my-6 rounded-xl border border-purple-500/20 bg-purple-500/10 p-4">
                    <p className="m-0 text-white/90"><span className="font-semibold text-purple-300">Tip: </span>{b.text}</p>
                  </div>
                );
              case "note":
                return (
                  <div key={idx} className="my-6 rounded-xl border border-white/10 bg-white/5 p-4">
                    <p className="m-0 text-white/80"><span className="font-semibold">Note: </span>{b.text}</p>
                  </div>
                );
              case "quote":
                return <blockquote key={idx} className="my-6 border-l-4 border-white/20 pl-4 text-white/70 italic">{b.text}</blockquote>;
              case "divider":
                return <hr key={idx} className="my-8 border-white/10" />;
              case "image":
                return (
                  <figure key={idx} className="my-8 overflow-hidden rounded-xl ring-1 ring-white/10">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={b.src} alt={b.alt || ""} className="w-full h-auto object-cover" />
                    {(b.caption || b.alt) && (
                      <figcaption className="px-3 py-2 text-center text-xs text-white/60">
                        {b.caption || b.alt}
                      </figcaption>
                    )}
                  </figure>
                );
              default:
                return null;
            }
          })}
        </div>

        {post.takeaway?.length ? (
          <section className="mt-10">
            <h3 className="text-xl font-semibold mb-3 text-purple-300">สรุปนำไปใช้</h3>
            <ul className="list-disc list-inside space-y-2 text-white/85">
              {post.takeaway.map((t, i) => <li key={i} className="leading-7">{t}</li>)}
            </ul>
          </section>
        ) : null}

        <footer className="mt-10 pt-6 border-t border-white/10 text-sm text-white/60">
          <div>ผู้เขียน: {post.author ?? "NEO SPARK AGENCY"}</div>
          <div className="mt-1">เผยแพร่: {formatDateTH(post.date)}</div>
        </footer>
      </article>
    </div>
  );
}
