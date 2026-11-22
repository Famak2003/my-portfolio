import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { getProjects } from "@/lib/projects"

export const metadata: Metadata = {
    title: "Projects | Famak Dev",
    description: "A selection of projects I have designed and built.",
}

const Projects = () => {
    const projects = getProjects()

    return (
        <main className=" flex justify-center w-full section ">
            <div className=" flex flex-col gap-8 sm:gap-10 w-full max-w-[1400px] ">
                <div className=" flex flex-col gap-3 ">
                    <h1 className=" letterSpacing text-primary dark:text-brightRed ">PROJECTS</h1>
                    <p className=" largeText ">Selected Work</p>
                </div>
                {
                    projects.length === 0 ? (
                        <p className=" text-[18px] ">Projects are coming soon.</p>
                    ) : (
                        <ul className=" grid grid-cols-1 md:grid-cols-2 gap-8 ">
                            {
                                projects.map((project) => (
                                    <li key={project.slug}>
                                        <Link
                                            href={`/projects/${project.slug}`}
                                            className=" group card flex flex-col h-full rounded-2xl overflow-hidden text-white "
                                        >
                                            <figure className=" relative w-full h-[260px] sm:h-[320px] overflow-hidden ">
                                                <Image
                                                    className=" object-cover transition-transform duration-500 group-hover:scale-105 "
                                                    src={project.coverImage}
                                                    alt={project.title}
                                                    fill
                                                    sizes="(max-width: 768px) 100vw, 700px"
                                                />
                                            </figure>
                                            <div className=" flex flex-col gap-3 p-6 ">
                                                <p className=" text-[14px] text-textGray ">{project.year} · {project.role}</p>
                                                <h2 className=" text-[22px] sm:text-[26px] font-semibold ">{project.title}</h2>
                                                <p className=" text-textGray ">{project.summary}</p>
                                                <ul className=" flex flex-wrap gap-2 mt-1 ">
                                                    {
                                                        project.techStack.map((tech) => (
                                                            <li key={tech} className=" text-[12px] px-3 py-1 rounded-full ring-1 ring-primary text-lightGray ">{tech}</li>
                                                        ))
                                                    }
                                                </ul>
                                                <span className=" flex items-center gap-2 mt-2 text-brightRed font-semibold ">
                                                    View project
                                                    <FontAwesomeIcon className=" text-[14px] transition-transform group-hover:translate-x-1 " icon={faArrowRight} />
                                                </span>
                                            </div>
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    )
                }
            </div>
        </main>
    )
}

export default Projects
