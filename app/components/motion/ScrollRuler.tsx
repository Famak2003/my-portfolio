'use client'

import { motion, useScroll, useSpring, useTransform } from "motion/react"

const TICKS = 21

/**
 * Fixed ruler on the left edge showing how far down the page you are, with a live percentage.
 * Large screens only; purely decorative, so hidden from assistive tech.
 */
const ScrollRuler = () => {
    const { scrollYProgress } = useScroll()
    const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.4 })
    const percent = useTransform(progress, (v) => String(Math.round(v * 100)).padStart(3, "0"))

    return (
        <div aria-hidden className=" pointer-events-none fixed left-4 top-1/2 z-40 hidden h-[38vh] -translate-y-1/2 xl:block ">
            <div className=" relative h-full w-3 border-y border-l border-white/25 ">
                {Array.from({ length: TICKS }, (_, i) => (
                    <span
                        key={i}
                        className={` absolute left-0 h-px bg-white/25 ${i % 5 === 0 ? "w-3" : "w-1.5"} `}
                        style={{ top: `${(i / (TICKS - 1)) * 100}%` }}
                    />
                ))}
                <motion.span style={{ scaleY: progress }} className=" absolute -left-px top-0 h-full w-[2px] origin-top bg-brightRed " />
            </div>
            <motion.span className=" absolute -bottom-6 left-0 font-mono text-[10px] tracking-[0.1em] text-muted ">{percent}</motion.span>
        </div>
    )
}

export default ScrollRuler
