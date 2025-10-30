// lib/seo.ts
import type { Metadata } from "next";

export const SITE = {
  name: "NEO SPARK AGENCY",
  slogan: "One-Stop Creative & Performance",
  domain: "https://neo-spark.agency",         // โดเมน production (มี https)
  locale: "th_TH",
  siteName: "NEO SPARK AGENCY",
  description:
    "เอเจนซี่ครบวงจร รับทำเว็บไซต์ ออกแบบแบรนด์ กราฟิก โมชัน วิดีโอ โฆษณา การตลาดดิจิทัล อีเวนต์ และดูแลรายเดือน — เร็ว สวย วัดผลได้",
  email: "neo.spark@gmail.com",
  phone: "+66-8X-XXX-XXXX",
  address: "Bangkok, Thailand",
  logo: "/icons/icon-512.png",                // ให้มีจริงใน /public/icons/
  ogImage: "/og.jpg",                          // 1200x630 (หรือ 1200x628)
  twitter: "@neospark",
  facebookPage: "https://www.facebook.com/yourpage",
  lineOA: "https://line.me/R/ti/p/xxxx",
};

export const DEFAULT_METADATA: Metadata = {
  metadataBase: new URL(SITE.domain),
  title: {
    default: `${SITE.name} — ${SITE.slogan}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: SITE.locale,
    url: SITE.domain,
    siteName: SITE.siteName,
    title: `${SITE.name} — ${SITE.slogan}`,
    description: SITE.description,
    images: [{ url: SITE.ogImage, width: 1200, height: 630, alt: SITE.siteName }],
  },
  twitter: {
    card: "summary_large_image",
    site: SITE.twitter,
    creator: SITE.twitter,
    title: `${SITE.name} — ${SITE.slogan}`,
    description: SITE.description,
    images: [SITE.ogImage],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/icons/apple-touch-icon.png" }],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? "",
    yandex: "", // ถ้าไม่มีค่า ให้เป็น "" (string) แทน undefined
  },
  manifest: "/manifest.webmanifest",
};
/** helper: สร้าง Metadata สำหรับหน้าเพจ */
export function pageMeta({
  title,
  description,
  path = "/",
  image = SITE.ogImage,
}: {
  title: string;
  description?: string;
  path?: string;
  image?: string;
}): Metadata {
  const url = path.startsWith("http") ? path : new URL(path, SITE.domain).toString();
  const desc = description ?? SITE.description;
  return {
    title,
    description: desc,
    alternates: { canonical: url },
    openGraph: {
      url,
      title,
      description: desc,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      title,
      description: desc,
      images: [image],
    },
  };
}

/** JSON-LD template ต่าง ๆ */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.domain,
    logo: new URL(SITE.logo, SITE.domain).toString(),
    sameAs: [SITE.facebookPage, SITE.lineOA].filter(Boolean),
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: SITE.phone,
        contactType: "customer service",
        areaServed: "TH",
        availableLanguage: ["Thai", "English"],
      },
    ],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.siteName,
    url: SITE.domain,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE.domain}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function breadcrumbJsonLd(items: { name: string; item: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((b, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: b.name,
      item: b.item,
    })),
  };
}

/** ตัวอย่าง JSON-LD สำหรับบริการ/เซอร์วิส */
export function serviceJsonLd({
  name,
  description,
  url,
  image = SITE.ogImage,
}: {
  name: string;
  description: string;
  url: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    provider: { "@type": "Organization", name: SITE.name, url: SITE.domain },
    areaServed: "TH",
    image,
  };
}

/** ตัวอย่าง JSON-LD สำหรับบทความ/บล็อก */
export function articleJsonLd({
  title,
  description,
  url,
  image = SITE.ogImage,
  datePublished,
  dateModified,
  author = SITE.name,
}: {
  title: string;
  description: string;
  url: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image: [image],
    url,
    datePublished,
    dateModified: dateModified || datePublished,
    author: { "@type": "Person", name: author },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      logo: { "@type": "ImageObject", url: new URL(SITE.logo, SITE.domain).toString() },
    },
  };
}
