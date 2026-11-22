import projectsData from "@/data/projects.json"

export interface ProjectImage {
    src: string
    alt: string
    w: number
    h: number
}

export interface GallerySection {
    title: string
    /** `phone` renders in phone frames, `desktop` in browser frames. */
    kind: "phone" | "desktop"
    images: ProjectImage[]
}

export type Showcase =
    | { type: "devices", tint: string, desktop: string, phones: string[] }
    | { type: "browsers", tint: string, desktop: string, secondary: string }
    | { type: "schematic", tint: string }

export interface Project {
    slug: string
    title: string
    tagline: string
    summary: string
    tags: string[]
    year: string
    role: string
    platforms: string[]
    techStack: string[]
    /** Where it was built, when that differs from the obvious (e.g. Punica at Gunsel). */
    company?: string
    link?: { label: string, href: string }
    /** For projects with no public URL, e.g. ones that only run on an internal network. */
    access?: { label: string, detail: string }
    showcase: Showcase
    overview: string
    highlights: { title: string, text: string }[]
    gallery: GallerySection[]
    /** Shown on the project page, e.g. when screenshots are still to come. */
    note?: string
}

const projects = projectsData as Project[]

export const getProjects = (): Project[] => projects

export const getProject = (slug: string): Project | undefined =>
    projects.find((project) => project.slug === slug)
