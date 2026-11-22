import type { Metadata } from "next"
import Image from "next/image"
import ContactForm from "../components/contact/ContactForm"
import { Corners } from "../components/ui/Bracket"
import { site } from "@/data/site"

export const metadata: Metadata = {
    title: `Contact | ${site.name}`,
    description: "Get in touch about a project, a role, or just to say hello.",
}

const links = [
    { label: "LinkedIn", href: site.socials.linkedin, external: true },
    { label: "GitHub", href: site.socials.github, external: true },
]

/** The original contact card (CONTACT + photo on the left, "Let's Collaborate" + form on the right), restyled. */
const Contact = () => (
    <main className=" w-full pt-10 sm:pt-14 ">
        <div className=" container-x ">
            <div className=" relative grid w-full grid-cols-1 gap-10 border border-line bg-panel/70 p-6 sm:p-10 md:grid-cols-[2fr_3fr] md:gap-14 ">
                <Corners className=" border-white/40 " size={10} />

                <div className=" flex flex-col items-start justify-between gap-8 ">
                    <div className=" flex flex-col gap-4 ">
                        <h1 className=" letterSpacing text-fg ">CONTACT</h1>
                        <p className=" mono-label text-muted "><span className=" text-brightRed ">●</span> {site.location}</p>
                    </div>
                    <figure className=" h-[160px] w-[160px] overflow-hidden rounded-full ring-1 ring-primary md:h-[223px] md:w-[223px] ">
                        <Image className=" h-full w-full object-cover " width={223} height={223} src="/prof-pic1-headshot.jpg" alt={site.name} />
                    </figure>
                    <ul className=" flex flex-col gap-3 ">
                        {links.map((l) => (
                            <li key={l.label}>
                                <a href={l.href} target="_blank" rel="noopener noreferrer" className=" mono-label text-muted transition-colors hover:text-fg ">
                                    {l.label} ↗
                                </a>
                            </li>
                        ))}
                        <li>
                            <a href={site.cv.href} download={site.cv.fileName} className=" mono-label text-muted transition-colors hover:text-fg ">
                                Download CV ↓
                            </a>
                        </li>
                    </ul>
                </div>

                <div className=" flex flex-col gap-5 ">
                    <h2 className=" largeText font-semibold text-fg ">Let&apos;s Collaborate</h2>
                    <p className=" text-[16px] leading-relaxed text-muted ">
                        Have a project in mind, a role to fill, or just want to say hello? Send me a message
                        and I&apos;ll get back to you as soon as I can.
                    </p>
                    <ContactForm />
                </div>
            </div>
        </div>
    </main>
)

export default Contact
