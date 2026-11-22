import type { Project } from "@/lib/projects"
import { Corners } from "../ui/Bracket"
import { BrowserFrame, PhoneFrame } from "./Frames"
import Schematic from "./Schematic"

/**
 * The framed visual for a project: a browser + phones composition, two overlapping
 * browsers, or the animated schematic. Sits on a tinted, gridded panel.
 */
const Showcase = ({ project, priority = false, className = "" }: {
    project: Project, priority?: boolean, className?: string
}) => {
    const { showcase } = project
    const url = project.link?.label

    return (
        <div
            className={` relative aspect-[16/11] overflow-hidden border border-line ${className} `}
            style={{
                background: `radial-gradient(ellipse 70% 60% at 30% 25%, ${showcase.tint}55, transparent 70%), radial-gradient(ellipse 60% 50% at 85% 90%, ${showcase.tint}33, transparent 70%), #0e0e10`,
            }}
        >
            {/* faint grid */}
            <div aria-hidden className=" absolute inset-0 opacity-[0.35] [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:40px_40px] " />
            <Corners className=" border-white/50 " size={10} />

            {showcase.type === "devices" && (
                <>
                    <div className=" absolute left-[6%] top-[9%] w-[58%] transition-transform duration-700 group-hover:-translate-y-1 ">
                        <BrowserFrame src={showcase.desktop} alt={`${project.title} web app`} w={1356} h={1230} url={url} priority={priority} sizes="(max-width: 1024px) 70vw, 560px" />
                    </div>
                    <div className=" absolute bottom-[-10%] right-[19%] w-[19%] transition-transform duration-700 group-hover:-translate-y-3 ">
                        <PhoneFrame src={showcase.phones[0]} alt={`${project.title} mobile app`} sizes="160px" priority={priority} />
                    </div>
                    <div className=" absolute bottom-[4%] right-[5%] w-[19%] transition-transform duration-700 group-hover:-translate-y-2 ">
                        <PhoneFrame src={showcase.phones[1]} alt={`${project.title} mobile app`} sizes="160px" priority={priority} />
                    </div>
                </>
            )}

            {showcase.type === "browsers" && (
                <>
                    <div className=" absolute left-[5%] top-[8%] w-[74%] transition-transform duration-700 group-hover:-translate-y-1 ">
                        <BrowserFrame src={showcase.desktop} alt={`${project.title} website`} w={1600} h={824} priority={priority} sizes="(max-width: 1024px) 70vw, 560px" />
                    </div>
                    <div className=" absolute bottom-[7%] right-[5%] w-[62%] transition-transform duration-700 group-hover:-translate-y-2 ">
                        <BrowserFrame src={showcase.secondary} alt={`${project.title} dashboard`} w={1600} h={538} priority={priority} sizes="(max-width: 1024px) 60vw, 480px" />
                    </div>
                </>
            )}

            {showcase.type === "schematic" && (
                <div className=" absolute inset-0 flex items-center justify-center p-[5%] ">
                    <Schematic className=" h-auto w-full max-w-[640px] " />
                </div>
            )}
        </div>
    )
}

export default Showcase
