import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import Link from "next/link"
import { site } from "@/data/site"
import Reveal from "./motion/Reveal"

const services = [
    'Frontend Development',
    'Mobile App Development',
    'UI/UX',
    'Backend/API Development',
    'Fullstack Development',
    'DevOps & Deployment',
    'Payment Gateway Integration',
    'CMS Development',
    'Custom Admin Dashboard System Development',
]

const socials = [
    { title: "GitHub", href: site.socials.github },
    { title: "LinkedIn", href: site.socials.linkedin },
]

/** The original footer layout (call to action, photo, services, socials) in the dark theme, plus a giant name. */
const Footer = () => {
    const year = new Date().getFullYear()

    return (
        <footer className=" relative w-full overflow-hidden rounded-t-3xl border-t border-line bg-panel/60 ">
            <div className=" container-x flex flex-col gap-6 pt-24 ">
                <Reveal className=" mb-10 flex flex-col items-center justify-center gap-6 xxl:gap-8 ">
                    <h2 className=" largeText w-full max-w-[420px] text-center font-semibold text-fg xxl:max-w-[640px] xxl:text-[90px] xxl:leading-[95px] ">
                        Have a cool project?
                    </h2>
                    <Link href="/contact" className=" group flex items-center justify-center gap-4 rounded-3xl bg-secondary py-2 pl-6 pr-2 transition-colors hover:bg-brightRed sm:pl-9 ">
                        <span className=" button text-white ">Contact Me</span>
                        <span className=" flex aspect-square h-[28px] items-center justify-center rounded-full bg-white sm:h-[36px] ">
                            <FontAwesomeIcon className=" text-[12px] text-primary transition-transform group-hover:translate-x-0.5 sm:text-[16px] " icon={faArrowRight} />
                        </span>
                    </Link>
                </Reveal>

                <hr className=" w-full border-line " />

                <div className=" my-5 flex w-full flex-col items-center gap-10 lmobile:flex-row lmobile:items-start lmobile:justify-between ">
                    <div className=" flex w-full max-w-[240px] flex-col items-center gap-4 lmobile:items-start ">
                        <figure className=" h-[120px] w-[120px] overflow-hidden rounded-full ring-1 ring-primary ">
                            <Image className=" h-full w-full object-cover " width={120} height={120} alt={site.name} src="/me1.png" />
                        </figure>
                        <p className=" text-center text-[18px] text-fg lmobile:text-start ">
                            {site.title}
                            <span className=" mt-1 block mono-label text-muted ">{site.titleDetail} · {site.location}</span>
                        </p>
                    </div>

                    <div className=" grid w-full grid-cols-1 gap-10 sm:grid-cols-2 lmobile:w-[55%] ">
                        <div className=" flex flex-col items-center gap-4 lmobile:items-start ">
                            <h3 className=" mono-label text-fg ">Services</h3>
                            <ul className=" flex flex-col items-center gap-3 lmobile:items-start ">
                                {services.map((s) => (
                                    <li key={s} className=" text-center text-[14px] text-muted lmobile:text-start lg:text-[15px] ">{s}</li>
                                ))}
                            </ul>
                        </div>
                        <div className=" flex flex-col items-center gap-4 lmobile:items-start ">
                            <h3 className=" mono-label text-fg ">Socials</h3>
                            <ul className=" flex flex-col items-center gap-3 lmobile:items-start ">
                                {socials.map((s) => (
                                    <li key={s.title}>
                                        <a className=" text-[14px] text-muted transition-colors hover:text-fg lg:text-[15px] " href={s.href} target="_blank" rel="noopener noreferrer">
                                            {s.title} ↗
                                        </a>
                                    </li>
                                ))}
                                <li>
                                    <a className=" text-[14px] text-muted transition-colors hover:text-fg lg:text-[15px] " href={site.cv.href} download={site.cv.fileName}>
                                        Download CV ↓
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <hr className=" w-full border-line " />

                <div className=" flex flex-col items-center justify-between gap-2 pb-4 sm:flex-row ">
                    <p className=" mono-label text-muted ">© {year} · {site.name}</p>
                    <p className=" mono-label text-white/30 ">Built with Next.js · {site.location}</p>
                </div>
            </div>

            {/* giant glowing surname, cut off by the bottom edge */}
            <p
                aria-hidden
                className=" pointer-events-none mt-6 -mb-[0.26em] select-none whitespace-nowrap bg-gradient-to-b from-white/90 via-white/35 to-transparent bg-clip-text text-center text-[16.8vw] font-semibold uppercase leading-none tracking-[-0.04em] text-transparent [filter:drop-shadow(0_0_40px_rgba(224,36,36,0.25))] "
            >
                Famakinde
            </p>
        </footer>
    )
}

export default Footer
