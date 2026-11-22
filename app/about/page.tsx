import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight, faCode, faMobileAlt, faServer } from "@fortawesome/free-solid-svg-icons"
import { site, yearsOfExperience } from "@/data/site"

export const metadata: Metadata = {
    title: "About | Famak Dev",
    description: "About Famakinde Oluwapelumi, Fullstack Software Engineer (Mobile, Web).",
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

const stats = [
    { value: `${yearsOfExperience()}+`, label: "Years experience" },
    { value: "iOS · Android · Web", label: "Platforms shipped" },
    { value: "WCAG 2.2", label: "Accessibility standard" },
]

const About = () => {
    return (
        <main className=" flex justify-center w-full section ">
            <div className=" flex flex-col gap-12 w-full max-w-[1400px] ">
                <section className=" grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-10 items-center ">
                    <figure className=" relative w-full max-w-[420px] mx-auto aspect-square rounded-2xl overflow-hidden ring-1 ring-primary ">
                        <Image className=" object-cover " src="/me2.png" alt="Famakinde Oluwapelumi" fill sizes="(max-width: 768px) 100vw, 420px" priority />
                    </figure>
                    <div className=" flex flex-col gap-5 ">
                        <h1 className=" letterSpacing text-primary dark:text-brightRed ">ABOUT ME</h1>
                        <p className=" largeText ">Famakinde Oluwapelumi</p>
                        <p className=" text-[18px] tracking-widest ">{site.title} | {site.titleDetail}</p>
                        <p className=" text-[16px] sm:text-[18px] leading-relaxed ">
                            I&apos;m a software engineer with {yearsOfExperience()}+ years of experience building
                            scalable fullstack, web and mobile applications for international production
                            environments, with React, Next.js and React Native on the front and Node.js and
                            NestJS on the back.
                        </p>
                        <p className=" text-[16px] sm:text-[18px] leading-relaxed ">
                            I own the full lifecycle, from database design and DevOps to App Store releases,
                            and I build to WCAG 2.2 accessibility standards. Lately I&apos;ve also been integrating
                            smart devices into fault-tolerant systems for real-time facility automation.
                        </p>
                    </div>
                </section>

                <section className=" grid grid-cols-1 sm:grid-cols-3 gap-5 ">
                    {
                        stats.map((stat) => (
                            <div key={stat.label} className=" flex flex-col items-center gap-1 p-6 rounded-2xl bg-bgBlack text-white ">
                                <span className=" text-[26px] sm:text-[30px] font-bold text-brightRed text-center ">{stat.value}</span>
                                <span className=" text-[14px] tracking-widest text-textGray uppercase ">{stat.label}</span>
                            </div>
                        ))
                    }
                </section>

                <section className=" flex flex-col gap-6 ">
                    <h2 className=" letterSpacing ">WHAT I DO</h2>
                    <ul className=" grid grid-cols-1 md:grid-cols-3 gap-5 ">
                        {
                            focusAreas.map((area) => (
                                <li key={area.title} className=" card flex flex-col gap-3 p-6 rounded-2xl text-white ">
                                    <FontAwesomeIcon className=" text-[28px] text-brightRed " icon={area.icon} />
                                    <h3 className=" text-[22px] font-semibold ">{area.title}</h3>
                                    <p className=" text-textGray ">{area.text}</p>
                                </li>
                            ))
                        }
                    </ul>
                </section>

                <section className=" flex flex-col sm:flex-row gap-5 items-center justify-between p-8 rounded-2xl bg-bgBlack text-white ">
                    <p className=" text-[22px] sm:text-[28px] font-semibold text-center sm:text-start ">
                        Want to see what I&apos;ve built?
                    </p>
                    <div className=" flex flex-wrap gap-4 justify-center ">
                        <Link href="/projects" className=" flex items-center gap-2 px-6 py-3 rounded-xl ring-1 ring-white hover:bg-white hover:text-black transition-colors ">
                            View projects
                        </Link>
                        <Link href="/contact" className=" flex items-center gap-2 px-6 py-3 rounded-xl bg-secondary hover:bg-brightRed transition-colors ">
                            Get in touch
                            <FontAwesomeIcon className=" text-[14px] " icon={faArrowRight} />
                        </Link>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default About
