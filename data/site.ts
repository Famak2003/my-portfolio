// Single source of truth for personal details shown across the site.
// Numbers and titles follow the CV in public/cv.

export const site = {
    name: "Famakinde Oluwapelumi",
    shortName: "FAMAKINDE O.",
    title: "Fullstack Software Engineer",
    titleDetail: "Mobile · Web",
    location: "Nicosia, Cyprus",
    timeZone: "Europe/Nicosia",
    currentRole: "Full-Stack & Mobile Engineer",
    currentCompany: "Punica",
    // First professional role started July 2023. That role is no longer listed on the site
    // or CV, but it still counts towards years of experience.
    careerStart: new Date("2023-07-01"),
    cv: {
        href: "/cv/Famakinde-Oluwapelumi-CV.pdf",
        fileName: "Famakinde-Oluwapelumi-CV.pdf",
    },
    socials: {
        github: "https://github.com/Famak2003",
        linkedin: "https://www.linkedin.com/in/oluwapelumi-famakinde-a138ab239/",
    },
}

/** Whole years since the first professional role, e.g. 3 for "3+ years". */
export const yearsOfExperience = (now = new Date()) => {
    const ms = now.getTime() - site.careerStart.getTime()
    return Math.max(1, Math.floor(ms / (365.25 * 24 * 60 * 60 * 1000)))
}
