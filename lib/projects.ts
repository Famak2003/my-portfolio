import projectsData from "@/data/projects.json"

export interface Project {
    slug: string
    title: string
    summary: string
    year: string
    role: string
    techStack: string[]
    coverImage: string
    description: string
    solutions: string
    /** First 3 images show above the description, the rest below the solutions. */
    gallery: string[]
}

const projects: Project[] = projectsData

export const getProjects = (): Project[] => projects

export const getProject = (slug: string): Project | undefined =>
    projects.find((project) => project.slug === slug)
