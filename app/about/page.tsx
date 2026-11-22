import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight, faCode, faMobileAlt, faServer } from "@fortawesome/free-solid-svg-icons"

export const metadata: Metadata = {
    title: "About | Famak Dev",
    description: "About Famakinde Oluwapelumi, Senior Frontend Engineer & Mobile Developer.",
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
        text: "Cross-platform apps with React Native that feel native on both iOS and Android.",
    },
    {
        icon: faServer,
        title: "Backend",
        text: "REST APIs and services with Node.js, Express and NestJS, backed by MySQL and Sequelize.",
    },
]

const stats = [
    { value: "4+", label: "Years experience" },
    { value: "100+", label: "Projects completed" },
    { value: "24/7", label: "Availability" },
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
                        <p className=" text-[18px] tracking-widest ">Senior Frontend Engineer & Mobile Developer</p>
                        <p className=" text-[16px] sm:text-[18px] leading-relaxed ">
                            I&apos;m a software developer with over four years of experience turning ideas into
                            polished web and mobile products. I care about clean architecture, smooth user
                            experiences, and code that the next developer will enjoy working with.
                        </p>
                        <p className=" text-[16px] sm:text-[18px] leading-relaxed ">
                            Most of my work sits on the frontend, but I&apos;m comfortable across the stack,
                            from designing the interface to building the API and database behind it.
                        </p>
                    </div>
                </section>

                <section className=" grid grid-cols-1 sm:grid-cols-3 gap-5 ">
                    {
                        stats.map((stat) => (
                            <div key={stat.label} className=" flex flex-col items-center gap-1 p-6 rounded-2xl bg-bgBlack text-white ">
                                <span className=" text-[36px] font-bold text-brightRed ">{stat.value}</span>
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
