// Career, skills and education, taken from the CV in public/cv.

export interface Job {
    period: string
    company: string
    role: string
    location: string
    text: string
    /** Case studies built in this role (project slugs). */
    projects?: string[]
}

export const experience: Job[] = [
    {
        period: "Jun 2025 – Now",
        company: "NEU AI, Informatics & Innovation Center",
        role: "Full-Stack & Mobile Engineer",
        location: "Nicosia, Cyprus",
        text: "End-to-end ownership of the NEU Link ecosystem (iOS, Android, Next.js web and admin) and NEU Smart Switch, including the NestJS backends and running production on a VPS with Nginx, PM2 and Cloudflare.",
        projects: ["neu-link", "neu-smart-switch"],
    },
    {
        period: "Dec 2024 – May 2025",
        company: "Near East Technology",
        role: "Fullstack Developer",
        location: "Nicosia, Cyprus",
        text: "Built and maintained production CMS dashboards and client apps with React, Next.js, TypeScript, NestJS and MySQL, from requirements to deployment, with English and Turkish support.",
    },
    {
        period: "Mar 2024 – Nov 2024",
        company: "Gunsel",
        role: "Frontend Developer",
        location: "Nicosia, Cyprus",
        text: "Built enterprise HR dashboards and workflows in React and Next.js, including Punica HR, with real-time REST integrations and accessibility and responsiveness improvements.",
        projects: ["punica"],
    },
    {
        period: "Jul 2023 – Mar 2024",
        company: "VersityEdge",
        role: "Frontend Developer",
        location: "Remote",
        text: "Led frontend development of reusable and embedded React systems, set up component patterns that cut development time by about 30%, and mentored junior developers.",
    },
]

export interface SkillGroup {
    title: string
    text: string
    items: string[]
}

export const skills: SkillGroup[] = [
    {
        title: "Mobile",
        text: "Cross-platform apps shipped to the App Store and Google Play.",
        items: ["React Native (CLI & Expo)", "iOS Live Activities", "Push notifications", "Performance", "Kotlin (exposure)"],
    },
    {
        title: "Frontend",
        text: "Component architecture and design systems for the web.",
        items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"],
    },
    {
        title: "Accessibility",
        text: "Interfaces that work with assistive tech, audited and tested.",
        items: ["WCAG 2.2", "ARIA", "VoiceOver · TalkBack · NVDA", "Axe · Lighthouse"],
    },
    {
        title: "Backend & integrations",
        text: "APIs, real-time services and smart-device integration.",
        items: ["Node.js", "NestJS", "REST", "WebSockets", "MySQL", "Shelly smart switches", "Cron jobs"],
    },
    {
        title: "DevOps",
        text: "Deploying and running what I build.",
        items: ["VPS", "Nginx", "PM2", "Cloudflare", "Docker", "CI/CD", "Git"],
    },
]

export const education = {
    period: "2021 – 2024",
    degree: "B.Sc. Software Engineering",
    school: "Near East University",
    location: "Nicosia, Cyprus",
    note: "WES verified",
}

export const community = {
    title: "Sharing what I learn",
    text: "I write about mobile, frontend and backend engineering for a network of 3,800+ professionals on LinkedIn.",
}
