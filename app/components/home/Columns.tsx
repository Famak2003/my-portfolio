import Link from "next/link"
import { community, education, experience, skills } from "@/data/experience"
import { getProject } from "@/lib/projects"

const pad = (n: number) => String(n).padStart(2, "0")

/** One numbered entry in a column, with the faint index on the right. */
const Entry = ({ index, children }: { index: number, children: React.ReactNode }) => (
    <li className=" relative flex flex-col gap-2 border-b border-line py-6 pr-8 last:border-b-0 ">
        <span aria-hidden className=" absolute right-0 top-6 font-mono text-[11px] text-white/20 ">{pad(index + 1)}</span>
        {children}
    </li>
)

const ColumnTitle = ({ children, id }: { children: React.ReactNode, id: string }) => (
    <h2 id={id} className=" border-b border-line pb-5 text-[26px] sm:text-[30px] font-medium uppercase tracking-[0.02em] text-fg ">
        {children}
    </h2>
)

/** Experience, Skills, and Education & community, side by side like a dense CV. */
const Columns = () => (
    <section aria-label="Experience and skills" id="experience" className=" w-full scroll-mt-[var(--nav-space)] py-20 sm:py-28 ">
        <div className=" container-x grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3 lg:gap-12 ">
            {/* Experience */}
            <div aria-labelledby="col-experience">
                <ColumnTitle id="col-experience">Experience</ColumnTitle>
                <ol>
                    {experience.map((job, i) => (
                        <Entry key={job.company + job.period} index={i}>
                            <p className=" mono-label !text-[10px] text-muted ">{job.period} · {job.company}</p>
                            <h3 className=" mono-label !text-[13px] font-semibold text-fg ">{job.role}</h3>
                            <p className=" text-[14px] leading-relaxed text-muted ">{job.text}</p>
                            {job.projects && (
                                <p className=" flex flex-wrap gap-x-4 gap-y-1 pt-1 ">
                                    {job.projects.map((slug) => {
                                        const p = getProject(slug)
                                        return p ? (
                                            <Link key={slug} href={`/projects/${slug}`} className=" mono-label !text-[10px] text-brightRed hover:text-fg ">
                                                {p.title} →
                                            </Link>
                                        ) : null
                                    })}
                                </p>
                            )}
                        </Entry>
                    ))}
                </ol>
            </div>

            {/* Skills */}
            <div aria-labelledby="col-skills">
                <ColumnTitle id="col-skills">Skills</ColumnTitle>
                <ol>
                    {skills.map((group, i) => (
                        <Entry key={group.title} index={i}>
                            <h3 className=" mono-label !text-[13px] font-semibold text-fg ">{group.title}</h3>
                            <p className=" text-[14px] leading-relaxed text-muted ">{group.text}</p>
                            <ul className=" flex flex-wrap gap-1.5 pt-1 ">
                                {group.items.map((item) => (
                                    <li key={item} className=" border border-line px-2 py-0.5 font-mono text-[11px] text-fg/80 ">{item}</li>
                                ))}
                            </ul>
                        </Entry>
                    ))}
                </ol>
            </div>

            {/* Education & community */}
            <div aria-labelledby="col-education" className=" md:col-span-2 lg:col-span-1 ">
                <ColumnTitle id="col-education">Education</ColumnTitle>
                <ol>
                    <Entry index={0}>
                        <p className=" mono-label !text-[10px] text-muted ">{education.period} · {education.school}</p>
                        <h3 className=" mono-label !text-[13px] font-semibold text-fg ">{education.degree}</h3>
                        <p className=" text-[14px] leading-relaxed text-muted ">{education.location}. {education.note}.</p>
                    </Entry>
                    <Entry index={1}>
                        <p className=" mono-label !text-[10px] text-muted ">Community</p>
                        <h3 className=" mono-label !text-[13px] font-semibold text-fg ">{community.title}</h3>
                        <p className=" text-[14px] leading-relaxed text-muted ">{community.text}</p>
                    </Entry>
                </ol>
            </div>
        </div>
    </section>
)

export default Columns
