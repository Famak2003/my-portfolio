import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import BackButton from "../../components/BackButton"
import Showcase from "../../components/work/Showcase"
import ImageLayout from "../../components/work/ImageLayout"
import AccessBadge from "../../components/work/AccessBadge"
import { PhoneFrame } from "../../components/work/Frames"
import { BracketFrame, BracketLink } from "../../components/ui/Bracket"
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

/**
 * The original two-column project section: wide-tracked heading on the left, content on the right.
 * `stacked` puts the content full width under the heading (for image grids).
 */
const Section = ({ title, children, stacked = false }: { title: string, children: React.ReactNode, stacked?: boolean }) => (
    <section className={` grid grid-cols-1 gap-6 border-t border-line pt-10 ${stacked ? "" : "md:grid-cols-2 md:gap-10"} `}>
        <h2 className=" letterSpacing text-fg ">{title}</h2>
        <div>{children}</div>
    </section>
)

const ProjectDetail = async ({ params }: Props) => {
    const { slug } = await params
    const project = getProject(slug)
    if (!project) notFound()

    const all = getProjects()
    const next = all[(all.findIndex((p) => p.slug === project.slug) + 1) % all.length]

    const desktopShots = project.gallery.filter((g) => g.kind === "desktop").flatMap((g) => g.images)
    const phoneSections = project.gallery.filter((g) => g.kind === "phone")

    const details = [
        { name: "YEAR", value: project.year },
        { name: "ROLE", value: project.role, sub: project.company ? `at ${project.company}` : undefined },
        { name: "PLATFORMS", value: project.platforms.join(" · ") },
        { name: "STATUS", value: project.link ? "Live" : project.access ? "Live · internal" : "In production" },
    ]

    return (
        <main className=" w-full pb-10 ">
            <div className=" container-x flex flex-col gap-14 pt-10 sm:gap-20 sm:pt-14 ">
                <header className=" flex flex-col gap-10 ">
                    <BackButton fallback="/projects" />

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
                            <div className=" flex flex-wrap gap-3 ">
                                {project.link && (
                                    <BracketLink href={project.link.href} external className=" w-fit ">{project.link.label} ↗</BracketLink>
                                )}
                                {project.access && <AccessBadge {...project.access} />}
                            </div>
                        </div>
                    </div>

                    {/* the original details row, now on a ruled strip */}
                    <ul className=" grid grid-cols-2 gap-y-6 border-y border-line py-6 lg:grid-cols-4 ">
                        {details.map((d) => (
                            <li key={d.name} className=" flex flex-col gap-2 pr-4 ">
                                <span className=" text-[13px] sm:text-[14px] tracking-[0.12em] text-muted ">{d.name}</span>
                                <p className=" font-semibold text-[17px] sm:text-[20px] leading-snug text-fg ">
                                    {d.value}
                                    {d.sub && <span className=" block text-[13px] font-normal text-muted ">{d.sub}</span>}
                                </p>
                            </li>
                        ))}
                    </ul>
                </header>

                <Showcase project={project} priority />

                <Section title="PROJECT DESCRIPTION">
                    <p className=" text-[16px] sm:text-[18px] leading-relaxed text-fg/90 ">{project.overview}</p>
                </Section>

                {desktopShots.length > 0 && <ImageLayout images={desktopShots.slice(0, 3)} />}

                <Section title="SOLUTIONS">
                    <ol className=" flex flex-col ">
                        {project.highlights.map((h, i) => (
                            <li key={h.title} className=" grid grid-cols-[auto_1fr] gap-x-5 gap-y-1 border-b border-line py-5 first:pt-0 last:border-b-0 ">
                                <span className=" mono-label row-span-2 pt-1 text-brightRed ">{pad(i + 1)}</span>
                                <h3 className=" text-[17px] sm:text-[18px] font-semibold text-fg ">{h.title}</h3>
                                <p className=" text-[15px] leading-relaxed text-muted ">{h.text}</p>
                            </li>
                        ))}
                    </ol>
                </Section>

                {desktopShots.length > 3 && <ImageLayout images={desktopShots.slice(3)} />}

                {phoneSections.map((section) => (
                    <Section key={section.title} title={section.title.toUpperCase()} stacked>
                        <ul className=" grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5 ">
                            {section.images.map((img) => (
                                <li key={img.src}>
                                    <figure className=" flex flex-col gap-3 ">
                                        <PhoneFrame src={img.src} alt={img.alt} sizes="(max-width: 640px) 45vw, 240px" />
                                        <figcaption className=" text-[12px] leading-snug text-muted ">{img.alt}</figcaption>
                                    </figure>
                                </li>
                            ))}
                        </ul>
                    </Section>
                ))}

                <Section title="TECH STACK">
                    <ul className=" flex flex-wrap gap-2 ">
                        {project.techStack.map((t) => (
                            <li key={t} className=" border border-line px-3 py-1.5 font-mono text-[12px] text-fg/90 ">{t}</li>
                        ))}
                    </ul>
                </Section>

                {(project.note || project.access) && (
                    <BracketFrame className=" flex flex-col gap-2 p-6 ">
                        {project.access && <p className=" mono-label text-muted "><span className=" text-brightRed ">●</span> {project.access.detail}</p>}
                        {project.note && <p className=" mono-label text-muted "><span className=" text-brightRed ">●</span> {project.note}</p>}
                    </BracketFrame>
                )}

                {next.slug !== project.slug && (
                    <Link href={`/projects/${next.slug}`} className=" group flex flex-col gap-3 border-t border-line pt-10 ">
                        <span className=" letterSpacing !text-[14px] text-muted ">NEXT PROJECT</span>
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
