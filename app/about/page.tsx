import type { Metadata } from "next"
import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCode, faMobileAlt, faServer } from "@fortawesome/free-solid-svg-icons"
import Columns from "../components/home/Columns"
import { BracketLink, Corners } from "../components/ui/Bracket"
import { site, yearsOfExperience } from "@/data/site"

export const metadata: Metadata = {
    title: `About | ${site.name}`,
    description: `About ${site.name}, ${site.title} (${site.titleDetail}).`,
}

const focusAreas = [
    {
        icon: faCode,
        title: "Frontend",
        text: "Fast, accessible interfaces with React, Next.js and TypeScript, built from reusable components that scale with the product.",
    },
    {
        icon: faMobileAlt,
        title: "Mobile",
        text: "React Native apps shipped to the App Store and Google Play, with push notifications, iOS Live Activities and native-feeling navigation.",
    },
    {
        icon: faServer,
        title: "Backend",
        text: "REST APIs, WebSockets and NestJS services backed by MySQL, deployed on VPS with Nginx, PM2 and Cloudflare, plus integrations with Shelly smart switches for facility automation.",
    },
]

const About = () => {
    const stats = [
        { value: `${yearsOfExperience()}+ years`, label: "Experience" },
        { value: "iOS · Android · Web", label: "Platforms shipped" },
        { value: "WCAG 2.2", label: "Accessibility standard" },
    ]

    return (
        <main className=" w-full pt-10 sm:pt-14 ">
            <div className=" container-x flex flex-col gap-16 sm:gap-20 ">
                <section className=" grid grid-cols-1 items-center gap-10 md:grid-cols-[2fr_3fr] md:gap-14 ">
                    <figure className=" relative mx-auto aspect-square w-full max-w-[420px] border border-line p-2 ">
                        <Corners className=" border-white/50 " size={10} />
                        <div className=" relative h-full w-full overflow-hidden ">
                            <Image className=" object-cover grayscale-[15%] " src="/me2.png" alt={site.name} fill sizes="(max-width: 768px) 100vw, 420px" priority />
                        </div>
                    </figure>
                    <div className=" flex flex-col gap-5 ">
                        <h1 className=" letterSpacing text-brightRed ">ABOUT ME</h1>
                        <p className=" largeText font-semibold text-fg ">{site.name}</p>
                        <p className=" mono-label text-muted ">{site.title} <span className=" text-white/25 ">/</span> {site.titleDetail}</p>
                        <p className=" text-[16px] leading-relaxed text-fg/90 sm:text-[18px] ">
                            I&apos;m a software engineer with {yearsOfExperience()}+ years of experience building
                            scalable fullstack, web and mobile applications for international production
                            environments, with React, Next.js and React Native on the front and Node.js and
                            NestJS on the back.
                        </p>
                        <p className=" text-[16px] leading-relaxed text-muted sm:text-[18px] ">
                            I own the full lifecycle, from database design and DevOps to App Store releases,
                            and I build to WCAG 2.2 accessibility standards. Lately I&apos;ve also been integrating
                            smart devices into fault-tolerant systems for real-time facility automation.
                        </p>
                    </div>
                </section>

                <dl className=" grid grid-cols-1 border-y border-line sm:grid-cols-3 ">
                    {stats.map((s, i) => (
                        <div key={s.label} className={` flex flex-col gap-1 py-6 ${i > 0 ? "border-t border-line sm:border-l sm:border-t-0 sm:pl-6" : ""} `}>
                            <dt className=" mono-label !text-[10px] text-muted ">{s.label}</dt>
                            <dd className=" text-[24px] font-semibold text-fg sm:text-[28px] ">{s.value}</dd>
                        </div>
                    ))}
                </dl>

                <section className=" flex flex-col gap-6 ">
                    <h2 className=" letterSpacing text-fg ">WHAT I DO</h2>
                    <ul className=" grid grid-cols-1 gap-5 md:grid-cols-3 ">
                        {focusAreas.map((area) => (
                            <li key={area.title} className=" relative flex flex-col gap-3 border border-line bg-panel/60 p-6 ">
                                <Corners className=" border-white/30 " size={6} />
                                <FontAwesomeIcon className=" h-6 w-6 text-brightRed " icon={area.icon} />
                                <h3 className=" text-[22px] font-semibold text-fg ">{area.title}</h3>
                                <p className=" text-[15px] leading-relaxed text-muted ">{area.text}</p>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>

            <Columns />

            <div className=" container-x pb-10 ">
                <section className=" relative flex flex-col items-center justify-between gap-6 border border-line bg-panel/60 p-8 sm:flex-row ">
                    <Corners className=" border-white/40 " size={10} />
                    <p className=" text-center text-[22px] font-semibold text-fg sm:text-start sm:text-[28px] ">
                        Want to see what I&apos;ve built?
                    </p>
                    <div className=" flex flex-wrap justify-center gap-3 ">
                        <BracketLink href="/projects">View projects</BracketLink>
                        <BracketLink href="/contact" variant="solid">Get in touch →</BracketLink>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default About
