'use client'

import { useEffect, useState } from "react"
import { site, experience } from "@/data/site"

/** Live local time in Nicosia, ticking every second. Renders a placeholder until mounted. */
const LocalTime = () => {
    const [now, setNow] = useState<Date | null>(null)

    useEffect(() => {
        setNow(new Date())
        const id = setInterval(() => setNow(new Date()), 1000)
        return () => clearInterval(id)
    }, [])

    if (!now) return <span>--:--:--</span>

    const time = new Intl.DateTimeFormat("en-GB", {
        timeZone: site.timeZone, hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false,
    }).format(now)
    const zone = new Intl.DateTimeFormat("en-GB", { timeZone: site.timeZone, timeZoneName: "short" })
        .formatToParts(now).find((p) => p.type === "timeZoneName")?.value

    return <span suppressHydrationWarning>{time} <span className=" text-muted ">{zone}</span></span>
}

const Cell = ({ label, children, note, noteCls = "text-emerald-400", className = "" }: {
    label: string, children: React.ReactNode, note?: string, noteCls?: string, className?: string
}) => (
    <div className={` flex min-w-0 flex-col gap-1 px-5 py-3 sm:py-4 border-line ${className} `}>
        <span className=" mono-label !text-[10px] text-muted ">{label}</span>
        <span className=" font-mono text-[12px] sm:text-[13px] text-fg lg:truncate ">
            {children}
            {note && <span className={` ml-2 ${noteCls} `}>{note}</span>}
        </span>
    </div>
)

/** Bottom bar of the hero, styled like a market ticker but with my own "live data". */
const Ticker = () => (
    <div className=" grid grid-cols-2 lg:grid-cols-4 border-t border-line bg-ink/70 backdrop-blur-sm ">
        <Cell label="Experience" note={`▲ since ${site.careerStart.getFullYear()}`}>{experience().short}</Cell>
        <Cell label="Now" className="border-l">{site.currentRole} @ {site.currentCompany}</Cell>
        <Cell label="Shipping to" note="● live" noteCls="text-brightRed" className="border-t lg:border-t-0 lg:border-l">iOS · Android · Web</Cell>
        <Cell label={site.location} className="border-l border-t lg:border-t-0"><LocalTime /></Cell>
    </div>
)

export default Ticker
