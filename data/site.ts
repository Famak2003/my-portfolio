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
    // Start of the earliest role listed on the site and CV (Gunsel, March 2024), so the
    // experience figure always matches what someone gets by adding up the listed dates.
    careerStart: new Date("2024-03-01"),
    cv: {
        href: "/cv/Famakinde-Oluwapelumi-CV.pdf",
        fileName: "Famakinde-Oluwapelumi-CV.pdf",
    },
    socials: {
        github: "https://github.com/Famak2003",
        linkedin: "https://www.linkedin.com/in/oluwapelumi-famakinde-a138ab239/",
    },
}

/**
 * Experience as people would describe it from the listed dates:
 * under half a year past a full year reads "3+ years", more than that reads "nearly 4 years".
 * Updates itself over time (e.g. "nearly 3 years" until March 2027, then "3+ years").
 */
export const experience = (now = new Date()) => {
    const start = site.careerStart
    const months = (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth())
    const years = Math.floor(months / 12)
    const nearly = months % 12 >= 6
    const n = nearly ? years + 1 : Math.max(1, years)
    return {
        /** e.g. "nearly 3 years" / "3+ years" */
        long: nearly ? `nearly ${n} years` : `${n}+ years`,
        /** e.g. "Nearly 3 yrs" / "3+ yrs" */
        short: nearly ? `Nearly ${n} yrs` : `${n}+ yrs`,
    }
}
