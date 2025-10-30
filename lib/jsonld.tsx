// lib/jsonld.tsx
"use client";

export default function JsonLd({ data }: { data: Record<string, any> }) {
  return (
    <script
      type="application/ld+json"
      // ป้องกัน XSS: แปลง object เป็น JSON
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
