import ScrollText from "../motion/ScrollText"

const KEYWORDS = ["Mobile apps", "Web platforms", "Admin dashboards", "APIs", "Real-time", "Accessibility", "DevOps"]

/** Infinite, slow keyword marquee. Two copies of the list scroll as one; it stops for reduced motion. */
const Marquee = () => (
    <div aria-hidden className=" relative flex overflow-hidden border-y border-line py-5 [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)] ">
        {[0, 1].map((copy) => (
            <ul key={copy} className=" flex shrink-0 animate-marquee items-center gap-10 pr-10 motion-reduce:animate-none ">
                {KEYWORDS.map((k) => (
                    <li key={k} className=" flex items-center gap-10 whitespace-nowrap font-mono text-[22px] sm:text-[30px] uppercase tracking-[0.08em] text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.35)] ">
                        {k}
                        <span className=" h-2 w-2 bg-brightRed " />
                    </li>
                ))}
            </ul>
        ))}
    </div>
)

/** Statement of what I specialise in, between the hero and the work. */
const Specialties = () => (
    <section aria-label="What I specialise in" className=" w-full pt-20 sm:pt-28 ">
        <div className=" container-x flex flex-col gap-8 pb-14 ">
            <p className=" mono-label text-muted "><span className=" text-brightRed ">●</span> What I do</p>
            <ScrollText
                className=" max-w-[1100px] text-[28px] sm:text-[40px] lg:text-[52px] font-medium leading-[1.12] tracking-[-0.02em] "
                segments={[
                    { text: "I specialise in " },
                    { text: "cross-platform mobile apps", strong: true },
                    { text: ", " },
                    { text: "Next.js web platforms", strong: true },
                    { text: " and " },
                    { text: "admin dashboards", strong: true },
                    { text: ", and the " },
                    { text: "NestJS APIs", strong: true },
                    { text: " that power them, built accessible and run in production." },
                ]}
            />
        </div>
        <Marquee />
    </section>
)

export default Specialties
