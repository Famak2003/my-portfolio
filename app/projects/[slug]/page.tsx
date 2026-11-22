import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import BackButton from "../../components/BackButton"
import Showcase from "../../components/work/Showcase"
import { BrowserFrame, PhoneFrame } from "../../components/work/Frames"
import { BracketFrame, BracketLink, Corners } from "../../components/ui/Bracket"
import { getProject, getProjects } from "@/lib/projects"
import { site } from "@/data/site"

type Props = { params: Promise<{ slug: string }> }

export const dynamicParams = false

export function generateStaticParams() {
    return getProjects().map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params
    const project = getProject(slug)
    if (!project) return {}
    return {
        title: `${project.title}: ${project.tagline} | ${site.name}`,
        description: project.summary,
    }
}

const pad = (n: number) => String(n).padStart(2, "0")

// Borders for the 2×2 (mobile) / 1×4 (desktop) meta grid.
const metaCellCls = [
    "",
    "pl-5 border-l",
    "border-t lg:border-t-0 lg:pl-5 lg:border-l",
    "pl-5 border-l border-t lg:border-t-0",
]

/** Mono label on the left, content on the right; stacks on mobile. */
const Block = ({ label, children }: { label: string, children: React.ReactNode }) => (
    <section className=" grid grid-cols-1 gap-6 border-t border-line pt-10 lg:grid-cols-12 lg:gap-14 ">
        <h2 className=" mono-label text-muted lg:col-span-3 ">{label}</h2>
        <div className=" lg:col-span-9 ">{children}</div>
    </section>
)

const ProjectDetail = async ({ params }: Props) => {
    const { slug } = await params
    const project = getProject(slug)
    if (!project) notFound()

    const all = getProjects()
    const next = all[(all.findIndex((p) => p.slug === project.slug) + 1) % all.length]

    const meta = [
        { label: "Year", value: project.year },
        { label: "Role", value: project.role },
        { label: "Platforms", value: project.platforms.join(" · ") },
        { label: "Status", value: project.link ? "Live" : "In production" },
    ]

    return (
        <main className=" w-full pb-10 ">
            <div className=" container-x flex flex-col gap-14 pt-10 sm:gap-20 sm:pt-14 ">
                {/* header */}
                <header className=" flex flex-col gap-10 ">
                    <BackButton fallback="/projects" label="All work" />
                    <div className=" grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end ">
                        <div className=" flex flex-col gap-5 lg:col-span-7 ">
                            <p className=" mono-label text-brightRed ">{project.tags.join(" / ")}</p>
                            <h1 className=" text-[44px] sm:text-[64px] lg:text-[84px] font-semibold uppercase leading-[0.92] tracking-[-0.02em] text-fg ">
                                {project.title}
                            </h1>
                            <p className=" mono-label text-muted ">{project.tagline}</p>
                        </div>
                        <div className=" flex flex-col gap-6 lg:col-span-5 ">
                            <p className=" text-[16px] sm:text-[18px] leading-relaxed text-muted ">{project.summary}</p>
                            {project.link && (
                                <BracketLink href={project.link.href} external className=" w-fit ">{project.link.label} ↗</BracketLink>
                            )}
                        </div>
                    </div>

                    <dl className=" grid grid-cols-2 border-y border-line lg:grid-cols-4 ">
                        {meta.map((m, i) => (
                            <div key={m.label} className={` flex flex-col gap-1 py-4 border-line ${metaCellCls[i]} `}>
                                <dt className=" mono-label !text-[10px] text-muted ">{m.label}</dt>
                                <dd className=" text-[14px] sm:text-[15px] text-fg ">{m.value}</dd>
                            </div>
                        ))}
                    </dl>
                </header>

                <Showcase project={project} priority />

                <Block label="Overview">
                    <p className=" max-w-[760px] text-[17px] sm:text-[20px] leading-relaxed text-fg/90 ">{project.overview}</p>
                </Block>

                <Block label="What I built">
                    <ol className=" grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 ">
                        {project.highlights.map((h, i) => (
                            <li key={h.title} className=" relative flex flex-col gap-3 border border-line bg-panel/60 p-6 ">
                                <Corners className=" border-white/30 " size={6} />
                                <span className=" mono-label text-brightRed ">{pad(i + 1)}</span>
                                <h3 className=" text-[18px] font-semibold text-fg ">{h.title}</h3>
                                <p className=" text-[14px] leading-relaxed text-muted ">{h.text}</p>
                            </li>
                        ))}
                    </ol>
                </Block>

                <Block label="Stack">
                    <ul className=" flex flex-wrap gap-2 ">
                        {project.techStack.map((t) => (
                            <li key={t} className=" border border-line px-3 py-1.5 font-mono text-[12px] text-fg/90 ">{t}</li>
                        ))}
                    </ul>
                </Block>

                {project.gallery.map((section) => (
                    <Block key={section.title} label={`${section.title} · ${pad(section.images.length)}`}>
                        {section.kind === "phone" ? (
                            <ul className=" grid grid-cols-2 gap-5 sm:grid-cols-3 xl:grid-cols-4 ">
                                {section.images.map((img) => (
                                    <li key={img.src}>
                                        <figure className=" flex flex-col gap-3 ">
                                            <PhoneFrame src={img.src} alt={img.alt} sizes="(max-width: 640px) 45vw, 240px" />
                                            <figcaption className=" text-[12px] leading-snug text-muted ">{img.alt}</figcaption>
                                        </figure>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <ul className=" grid grid-cols-1 gap-6 xl:grid-cols-2 ">
                                {section.images.map((img) => (
                                    <li key={img.src}>
                                        <figure className=" flex flex-col gap-3 ">
                                            <BrowserFrame src={img.src} alt={img.alt} w={img.w} h={img.h} url={project.link?.label} sizes="(max-width: 1280px) 100vw, 640px" />
                                            <figcaption className=" text-[12px] leading-snug text-muted ">{img.alt}</figcaption>
                                        </figure>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </Block>
                ))}

                {project.note && (
                    <BracketFrame className=" p-6 ">
                        <p className=" mono-label text-muted "><span className=" text-brightRed ">●</span> {project.note}</p>
                    </BracketFrame>
                )}

                {/* next project */}
                {next.slug !== project.slug && (
                    <Link href={`/projects/${next.slug}`} className=" group flex flex-col gap-3 border-t border-line pt-10 ">
                        <span className=" mono-label text-muted ">Next project</span>
                        <span className=" flex items-center justify-between gap-6 text-[36px] sm:text-[56px] font-semibold uppercase leading-none tracking-[-0.02em] text-fg transition-colors group-hover:text-brightRed ">
                            {next.title}
                            <span aria-hidden className=" transition-transform group-hover:translate-x-2 ">→</span>
                        </span>
                    </Link>
                )}
            </div>
        </main>
    )
}

export default ProjectDetail
