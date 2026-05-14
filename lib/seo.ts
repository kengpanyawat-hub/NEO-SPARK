import type { Metadata } from "next";

export const SITE = {
  name: "NEO SPARK AGENCY",
  slogan: "เอเจนซี่ดิจิทัลครบวงจร — การตลาดออนไลน์ เว็บไซต์ คอนเทนต์ โฆษณา วัดผลได้",
  url: "https://www.neo-spark-agency.com",
  locale: "th_TH",
  twitter: "@neospark",
  ogImage: "/og/og-default.jpg", // 1200x630
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
}: {
  title?: string; description?: string; url?: string; image?: string;
  canonical?: string; keywords?: string[];
}): Metadata {
  const canonicalUrl = canonical ? `${SITE.url}${canonical}` : url;
  return {
    title,
    description,
    keywords,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: SITE.name,
      locale: SITE.locale,
      type: "website",
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export const jsonLd = {
  organization: () => ({
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}${SITE.logo}`,
    sameAs: [
      "https://www.facebook.com/NeoSparkAgency",
      "https://www.instagram.com/neo.spark.agency/",
    ],
  }),
  breadcrumb: (items: { name: string; url: string }[]) => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE.url}${item.url}`,
    })),
  }),
  article: (data: {
    title: string; description: string; url: string;
    image: string; datePublished: string; author: string;
  }) => ({
    "@context": "https://schema.org",
    "@type": "Article",
    headline: data.title,
    description: data.description,
    url: `${SITE.url}${data.url}`,
    image: `${SITE.url}${data.image}`,
    datePublished: data.datePublished,
    author: { "@type": "Person", name: data.author },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      logo: { "@type": "ImageObject", url: `${SITE.url}${SITE.logo}` },
    },
  }),
};
