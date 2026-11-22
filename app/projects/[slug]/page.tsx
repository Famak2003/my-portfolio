import type { Metadata } from "next"
import Image from "next/image"
import { notFound } from "next/navigation"
import BackButton from "../../components/BackButton"
import ImageLayout from "../../components/ImageLayout"
import { getProject, getProjects } from "@/lib/projects"

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
        title: `${project.title} | Famak Dev`,
        description: project.summary,
    }
}

const ProjectDetail = async ({ params }: Props) => {
    const { slug } = await params
    const project = getProject(slug)
    if (!project) notFound()

    const details = [
        { name: "YEAR", value: project.year },
        { name: "ROLE", value: project.role },
        { name: "TECH STACK", value: project.techStack.join(", ") },
    ]

    return (
        <main className=" flex justify-center items-center h-fit w-full section ">
            <div className=" w-full max-w-[1400px] flex flex-col gap-8 sm:gap-10 ">
                <BackButton fallback="/projects" />
                <h1 className=" largeText ">
                    {project.title}
                </h1>
                <ul className=" flex flex-col sm:flex-row gap-5 md:gap-7 items-start sm:items-center justify-start ">
                    {
                        details.map((obj) => (
                            <li key={obj.name} className=" flex flex-col gap-2 ">
                                <span className=" text-[16px] text-[#625f5f] dark:text-textGray " >{obj.name}</span>
                                <p className=" font-semibold text-[20px] " >{obj.value}</p>
                            </li>
                        ))
                    }
                </ul>
                <div className=" flex flex-col gap-8 ">
                    <div className=" flex flex-col gap-5 w-full ">
                        <ImageLayout images={project.gallery.slice(0, 3)} alt={project.title} />
                    </div>
                    <div className=" projectDescription ">
                        <h2 className="letterSpacing">PROJECT DESCRIPTION</h2>
                        <p>{project.description}</p>
                    </div>
                </div>
                <div className=" flex flex-col gap-8 w-full ">
                    <figure className=" relative w-full h-[300px] sm:h-[600px] rounded-2xl overflow-hidden " >
                        <Image className=" object-cover " src={project.coverImage} alt={project.title} fill sizes="(max-width: 1400px) 100vw, 1400px" />
                    </figure>
                    <div className=" projectDescription ">
                        <h2 className="letterSpacing">SOLUTIONS</h2>
                        <p>{project.solutions}</p>
                    </div>
                </div>
                <div className=" flex flex-col gap-5 w-full ">
                    <ImageLayout images={project.gallery.slice(3)} alt={project.title} />
                </div>
            </div>
        </main>
    )
}

export default ProjectDetail
