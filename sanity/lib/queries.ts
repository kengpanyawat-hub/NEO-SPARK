import { client } from './client'

// ─── Works ───────────────────────────────────────────────
export async function getWorks() {
  return client.fetch(`
    *[_type == "work"] | order(order asc, publishedAt desc) {
      _id, title, "slug": slug.current, category, client, excerpt, featured, order,
      "cover": cover.asset->url, tags, publishedAt
    }
  `)
}

export async function getWorkBySlug(slug: string) {
  return client.fetch(`
    *[_type == "work" && slug.current == $slug][0] {
      _id, title, "slug": slug.current, category, client, excerpt, content, tags, publishedAt,
      "cover": cover.asset->url,
      "images": images[].asset->url
    }
  `, { slug })
}

// ─── Posts ───────────────────────────────────────────────
export async function getPosts() {
  return client.fetch(`
    *[_type == "post"] | order(publishedAt desc) {
      _id, title, "slug": slug.current, excerpt, author, category, tags, publishedAt, featured,
      "cover": cover.asset->url
    }
  `)
}

export async function getPostBySlug(slug: string) {
  return client.fetch(`
    *[_type == "post" && slug.current == $slug][0] {
      _id, title, "slug": slug.current, excerpt, author, category, tags, publishedAt, content, takeaway,
      "cover": cover.asset->url
    }
  `, { slug })
}

// ─── Team ─────────────────────────────────────────────────
export async function getTeamMembers() {
  return client.fetch(`
    *[_type == "teamMember"] | order(order asc) {
      _id, name, role, bio, order,
      "photo": photo.asset->url
    }
  `)
}

// ─── Services ─────────────────────────────────────────────
export async function getServices() {
  return client.fetch(`
    *[_type == "service"] | order(order asc) {
      _id, title, "slug": slug.current, icon, desc, features, plans, order
    }
  `)
}

// ─── Testimonials ─────────────────────────────────────────
export async function getTestimonials() {
  return client.fetch(`
    *[_type == "testimonial"] | order(order asc) {
      _id, name, company, text, rating, order,
      "photo": photo.asset->url
    }
  `)
}

// ─── Courses ──────────────────────────────────────────────
export async function getCourses() {
  return client.fetch(`
    *[_type == "course"] | order(order asc) {
      _id, title, "slug": slug.current, price, summary, syllabus, order,
      "cover": cover.asset->url
    }
  `)
}

// ─── Partners ─────────────────────────────────────────────
export async function getPartners() {
  return client.fetch(`
    *[_type == "partner"] | order(order asc) {
      _id, name, url, order,
      "logo": logo.asset->url
    }
  `)
}

// ─── Site Settings ────────────────────────────────────────
export async function getSiteSettings() {
  return client.fetch(`
    *[_type == "siteSettings"][0] {
      siteName, tagline, description, email, phone, address,
      facebook, instagram, youtube, tiktok, line, stats,
      "logo": logo.asset->url
    }
  `)
}
