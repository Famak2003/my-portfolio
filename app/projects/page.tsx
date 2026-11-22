import type { Metadata } from "next"
import SelectedWork from "../components/work/SelectedWork"
import { site } from "@/data/site"

export const metadata: Metadata = {
    title: `Work | ${site.name}`,
    description: "Case studies: NEU Link, Punica HR and NEU Smart Switch, across mobile, web, backend and IoT.",
}

const Projects = () => (
    <main className=" w-full ">
        <SelectedWork id="projects" heading="h1" />
    </main>
)

export default Projects
