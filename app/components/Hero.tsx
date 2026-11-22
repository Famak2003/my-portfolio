import Image from "next/image"
import TechOrbit from "./hero/TechOrbit"
import Ticker from "./hero/Ticker"
import { BracketLink } from "./ui/Bracket"
import { site } from "@/data/site"

/** Small "+" registration marks, like crop marks on a print sheet. */
const Cross = ({ className }: { className: string }) => (
    <span aria-hidden className={` absolute h-3 w-3 ${className} `}>
        <span className=" absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/30 " />
        <span className=" absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-white/30 " />
    </span>
)

const Hero = () => {
    return (
        <section aria-label="Introduction" className=" relative isolate flex w-full flex-col h-[calc(100svh-64px)] min-h-[600px] overflow-hidden border-b border-line ">
            {/* edge rulers: faint full-height guides near the screen edges, with a bracket on the left */}
            <div aria-hidden className=" pointer-events-none absolute inset-y-0 left-3 sm:left-5 hidden sm:block w-px bg-white/[0.05] " />
            <div aria-hidden className=" pointer-events-none absolute inset-y-0 right-3 sm:right-5 hidden sm:block w-px bg-white/[0.05] " />
            <div aria-hidden className=" pointer-events-none absolute left-3 sm:left-5 top-1/2 hidden sm:block h-40 w-2 -translate-y-1/2 border-y border-l border-white/25 " />

            <div className=" relative flex-1 ">
                <TechOrbit />

                <div className=" relative z-[200] flex h-full flex-col items-center justify-center px-5 text-center ">
                    <div className=" relative flex flex-col items-center gap-6 px-4 py-8 sm:px-10 ">
                        <Cross className=" -left-1.5 -top-1.5 " />
                        <Cross className=" -right-1.5 -top-1.5 " />
                        <Cross className=" -left-1.5 -bottom-1.5 " />
                        <Cross className=" -right-1.5 -bottom-1.5 " />

                        <p className=" mono-label text-muted ">
                            <span className=" text-brightRed ">●</span> {site.title} <span className=" text-white/25 ">/</span> {site.titleDetail}
                        </p>

                        <h1 className=" text-fg font-semibold uppercase leading-[0.95] tracking-[-0.02em] text-[44px] mobile:text-[54px] sm:text-[72px] lg:text-[92px] 2xl:text-[112px] [text-shadow:0_4px_30px_rgba(0,0,0,0.8)] ">
                            <span className=" block text-muted ">From server</span>
                            <span className=" block ">
                                to screen
                                <span aria-hidden className=" ml-2 inline-block h-[0.78em] w-[0.42em] translate-y-[0.06em] bg-brightRed animate-blink " />
                            </span>
                        </h1>

                        <p className=" max-w-[600px] text-[15px] sm:text-[18px] leading-relaxed text-muted [text-shadow:0_2px_16px_rgba(0,0,0,0.9)] ">
                            I build web, mobile and IoT products end to end: React and Next.js on the web,
                            React Native on iOS and Android, and NestJS with MySQL behind them.
                        </p>

                        <div className=" flex flex-wrap items-center justify-center gap-3 pt-2 ">
                            <BracketLink href="/contact" variant="solid">Get in touch</BracketLink>
                            <BracketLink href={site.cv.href} download={site.cv.fileName}>Download CV ↓</BracketLink>
                        </div>
                    </div>
                </div>

                {/* bottom-left: who's behind this */}
                <div className=" absolute bottom-5 left-5 z-[200] hidden lg:flex items-center gap-3 max-w-[300px] ">
                    <span className=" relative h-11 w-11 shrink-0 overflow-hidden rounded-full ring-1 ring-white/15 ">
                        <Image src="/prof-pic1.jpg" alt={site.name} fill sizes="44px" className=" object-cover object-top " />
                    </span>
                    <p className=" text-[13px] leading-snug text-muted ">
                        {site.currentRole} at Near East University, {site.location}
                    </p>
                </div>

                {/* bottom-right: scroll cue */}
                <a href="#work" className=" absolute bottom-6 right-6 z-[200] hidden lg:block mono-label text-muted hover:text-fg ">
                    Scroll ↓
                </a>
            </div>

            <div className=" relative z-[200] ">
                <Ticker />
            </div>
        </section>
    )
}

export default Hero
