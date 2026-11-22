'use client'

import { useRef } from "react"
import { motion, useMotionTemplate, useReducedMotion, useScroll, useTransform, type MotionValue } from "motion/react"

export type Segment = { text: string, strong?: boolean }

const Word = ({ children, progress, range, strong }: {
    children: string, progress: MotionValue<number>, range: [number, number], strong?: boolean
}) => {
    const opacity = useTransform(progress, range, [0.14, 1])
    const blur = useTransform(progress, range, [6, 0])
    const filter = useMotionTemplate`blur(${blur}px)`
    return (
        <motion.span style={{ opacity, filter }} className={strong ? "text-fg" : "text-muted"}>
            {children}
        </motion.span>
    )
}

/**
 * A paragraph whose words light up and un-blur one by one as it scrolls through the viewport.
 * Highlighted segments end up white, the rest grey. Static for reduced motion.
 */
const ScrollText = ({ segments, className }: { segments: Segment[], className?: string }) => {
    const ref = useRef<HTMLParagraphElement>(null)
    const reduce = useReducedMotion()
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.5"] })

    const words = segments.flatMap((s) => s.text.split(/(\s+)/).filter(Boolean).map((w) => ({ w, strong: s.strong })))
    const total = words.filter(({ w }) => w.trim()).length
    let i = 0

    return (
        <p ref={ref} className={className}>
            {words.map(({ w, strong }, k) => {
                if (!w.trim()) return w
                if (reduce) return <span key={k} className={strong ? "text-fg" : "text-muted"}>{w}</span>
                const start = i / total
                i += 1
                return <Word key={k} progress={scrollYProgress} range={[start, Math.min(1, start + 1.5 / total + 0.02)]} strong={strong}>{w}</Word>
            })}
        </p>
    )
}

export default ScrollText
