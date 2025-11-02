// app/lib/seo.ts
import type { Metadata } from "next";

export const SITE = {
  name: "NEO SPARK AGENCY",
  slogan: "เอเจนซี่ดิจิทัลครบวงจร — เว็บไซต์ คอนเทนต์ โฆษณา วัดผลได้",
  url: "https://www.neo-spark-agency.com",
  locale: "th_TH",
  twitter: "@neospark",
  ogImage: "/og/og-default.jpg",
  logo: "/og/logo-neo.png",
};

export const defaultKeywords = [
  "NEO SPARK","เอเจนซี่ทำเว็บ","ออกแบบเว็บไซต์","สร้างแบรนด์",
  "กราฟิกดีไซน์","โมชั่นกราฟิก","วิดีโอ","โฆษณาออนไลน์",
  "SEO","Core Web Vitals","Next.js","UI/UX","Performance"
];

export function buildMeta({
  title = SITE.name,
  description = SITE.slogan,
  url = SITE.url,
  image = SITE.ogImage,
  canonical,
  keywords = defaultKeywords,
  /** ถ้า true จะตั้ง title เป็นสตริงล้วน (ไม่ใช้ template) */
  noTemplate = false,
}: {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
  canonical?: string;
  keywords?: string[];
  noTemplate?: boolean;
}): Metadata {
  const abs = (p?: string) => (p?.startsWith("http") ? p : `${SITE.url}${p ?? ""}`);
  const pageUrl = canonical ? abs(canonical) : url;

  return {
    metadataBase: new URL(SITE.url),
    // ถ้า noTemplate = true -> ใช้สตริงตรง ๆ (กัน [object Object] หรือ title ยาวเกิน)
    title: noTemplate ? title : { default: title, template: `%s | ${SITE.name}` },
    description,
    applicationName: SITE.name,
    keywords,
    alternates: { canonical: pageUrl },
    openGraph: {
      type: "website",
      url: pageUrl,
      title,
      description,
      siteName: SITE.name,
      images: [{ url: abs(image), width: 1200, height: 630, alt: title }],
      locale: SITE.locale,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      site: SITE.twitter,
      images: [abs(image)],
    },
    robots: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
      googleBot: { index: true, follow: true },
    },
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: "/apple-touch-icon.png",
    },
  };
}

export const jsonLd = {
  organization() {
    return {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
      logo: `${SITE.url}${SITE.logo}`,
      sameAs: [],
    };
  },
  breadcrumb(items: { name: string; item: string }[]) {
    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: items.map((it, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: it.name,
        item: it.item,
      })),
    };
  },
  collection({ name, url }: { name: string; url: string }) {
    return {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name,
      url,
    };
  },
  article({ headline, url, image, datePublished, dateModified }: any) {
    return {
      "@context": "https://schema.org",
      "@type": "Article",
      headline,
      url,
      image: [`${SITE.url}${image}`],
      datePublished,
      dateModified,
      publisher: {
        "@type": "Organization",
        name: SITE.name,
        logo: { "@type": "ImageObject", url: `${SITE.url}${SITE.logo}` },
      },
    };
  },
};
