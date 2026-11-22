import Link from "next/link"
import { getProjects, type Project } from "@/lib/projects"
import { BracketLink } from "../ui/Bracket"
import Showcase from "./Showcase"

const pad = (n: number) => String(n).padStart(2, "0")

const WorkRow = ({ project, index, total }: { project: Project, index: number, total: number }) => {
    const flip = index % 2 === 1

    return (
        <article className=" grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-14 ">
            <Link
                href={`/projects/${project.slug}`}
                aria-label={`View ${project.title} case study`}
                className={` group block lg:col-span-7 ${flip ? "lg:order-last" : ""} `}
            >
                <Showcase project={project} priority={index === 0} />
            </Link>

            <div className=" flex flex-col gap-5 lg:col-span-5 ">
                <div className=" flex items-center gap-3 mono-label text-muted ">
                    <span className=" text-fg ">{pad(index + 1)}</span>
                    <span className=" h-px w-8 bg-white/20 " />
                    <span>{pad(total)}</span>
                    <span className=" ml-auto text-white/40 ">{project.year}</span>
                </div>

                <p className=" mono-label text-brightRed ">{project.tags.join(" / ")}</p>

                <h3 className=" text-[32px] sm:text-[40px] lg:text-[44px] font-semibold uppercase leading-[1] tracking-[-0.01em] text-fg ">
                    {project.title}
                </h3>

                <p className=" text-[15px] sm:text-[16px] leading-relaxed text-muted ">{project.summary}</p>

                <dl className=" grid grid-cols-2 gap-4 border-y border-line py-4 ">
                    <div>
                        <dt className=" mono-label !text-[10px] text-muted ">Role</dt>
                        <dd className=" mt-1 text-[14px] text-fg ">{project.role}</dd>
                    </div>
                    <div>
                        <dt className=" mono-label !text-[10px] text-muted ">Platforms</dt>
                        <dd className=" mt-1 text-[14px] text-fg ">{project.platforms.join(" · ")}</dd>
                    </div>
                </dl>

                <div className=" flex flex-wrap gap-3 ">
                    <BracketLink href={`/projects/${project.slug}`}>View case →</BracketLink>
                    {project.link && (
                        <BracketLink href={project.link.href} external className=" !text-muted hover:!text-fg ">
                            {project.link.label} ↗
                        </BracketLink>
                    )}
                </div>
            </div>
        </article>
    )
}

/** "Selected work" section: alternating case-study rows built from data/projects.json. */
const SelectedWork = ({ id = "work", heading = "h2" }: { id?: string, heading?: "h1" | "h2" }) => {
    const projects = getProjects()
    const Heading = heading

    return (
        <section id={id} aria-labelledby={`${id}-title`} className=" w-full scroll-mt-20 py-20 sm:py-28 ">
            <div className=" container-x flex flex-col gap-16 sm:gap-24 ">
                <header className=" flex flex-col gap-6 border-b border-line pb-10 sm:flex-row sm:items-end sm:justify-between ">
                    <div className=" flex flex-col gap-4 ">
                        <p className=" mono-label text-muted "><span className=" text-brightRed ">●</span> Selected work</p>
                        <Heading id={`${id}-title`} className=" text-[40px] sm:text-[56px] lg:text-[72px] font-semibold uppercase leading-[0.95] tracking-[-0.02em] text-fg ">
                            Things I&apos;ve <span className=" text-muted ">shipped</span>
                        </Heading>
                    </div>
                    <p className=" max-w-[360px] text-[15px] leading-relaxed text-muted sm:text-right ">
                        Production systems across mobile, web, backend and hardware, owned from the database to the App Store.
                        <span className=" mt-2 block mono-label text-fg ">{pad(projects.length)} projects</span>
                    </p>
                </header>

                {projects.map((project, i) => (
                    <WorkRow key={project.slug} project={project} index={i} total={projects.length} />
                ))}
            </div>
        </section>
    )
}

export default SelectedWork
