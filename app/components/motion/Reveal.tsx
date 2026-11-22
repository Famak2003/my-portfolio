'use client'

import { createElement, type ReactNode } from "react"
import { motion, useReducedMotion } from "motion/react"

const tags = {
    div: motion.div,
    section: motion.section,
    article: motion.article,
    header: motion.header,
    li: motion.li,
    p: motion.p,
    figure: motion.figure,
} as const

type Tag = keyof typeof tags

/**
 * Fades, lifts and un-blurs its children the first time they scroll into view.
 * Renders a plain element (no animation) for visitors who prefer reduced motion.
 */
const Reveal = ({ children, as = "div", className, delay = 0, y = 24, id }: {
    children: ReactNode, as?: Tag, className?: string, delay?: number, y?: number, id?: string
}) => {
    const reduce = useReducedMotion()
    if (reduce) return createElement(as, { className, id }, children)

    const Comp = tags[as]
    return (
        <Comp
            id={id}
            className={className}
            initial={{ opacity: 0, y, filter: "blur(8px)" }}
            // Drop the filter once done: a lingering filter breaks backdrop-blur on children.
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)", transitionEnd: { filter: "none" } }}
            // The huge top margin counts anything already scrolled past as "seen", so a fast
            // scroll (or landing on an anchor further down) never leaves content stuck hidden.
            viewport={{ once: true, margin: "100000px 0px -8% 0px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay }}
        >
            {children}
        </Comp>
    )
}

export default Reveal
