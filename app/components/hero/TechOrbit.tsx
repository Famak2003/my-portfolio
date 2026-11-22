'use client'

import { useEffect, useRef } from "react"
import {
    siAndroid, siApple, siCloudflare, siDocker, siExpo, siMysql, siNestjs,
    siNextdotjs, siNginx, siNodedotjs, siReact, siTailwindcss, siTypescript,
    type SimpleIcon,
} from "simple-icons"

// Order matters: neighbours on the ring should differ in shape so the orbit reads well.
const ICONS: SimpleIcon[] = [
    siReact, siNestjs, siApple, siTypescript, siDocker, siNextdotjs,
    siMysql, siAndroid, siNodedotjs, siExpo, siNginx, siTailwindcss, siCloudflare,
]

const SPEED = 0.045 // radians per second, a slow drift

/**
 * Tech-stack "coins" drifting on a tilted ellipse around the hero headline.
 * Positions are written straight to the DOM each frame (no React re-renders),
 * the loop pauses when the hero is off-screen, and it renders a still frame
 * for visitors who prefer reduced motion.
 */
const TechOrbit = () => {
    const wrapRef = useRef<HTMLDivElement>(null)
    const chipRefs = useRef<(HTMLDivElement | null)[]>([])

    useEffect(() => {
        const wrap = wrapRef.current
        if (!wrap) return

        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
        let rx = 0, ry = 0, chip = 84, fade = 1
        let pointerX = 0, pointerY = 0, smoothX = 0, smoothY = 0
        let visible = true
        let raf = 0
        const start = performance.now()

        const measure = () => {
            const { width, height } = wrap.getBoundingClientRect()
            const small = width < 640
            // The ring spans the whole hero, edge to edge. Coins grow with the screen
            // (about 100px at 1440 wide, 120px+ on big monitors).
            // On phones the ring hugs the screen edges and fades back so the copy stays readable.
            chip = small ? 46 : Math.round(Math.min(132, Math.max(72, Math.min(width, height * 1.6) * 0.075)))
            rx = width * (small ? 0.5 : 0.44)
            ry = height * (small ? 0.44 : 0.41)
            fade = small ? 0.5 : 1
            chipRefs.current.forEach((el) => {
                if (el) { el.style.width = `${chip}px`; el.style.height = `${chip}px` }
            })
        }

        const render = (now: number) => {
            const t = reduceMotion ? 0 : (now - start) / 1000
            smoothX += (pointerX - smoothX) * 0.05
            smoothY += (pointerY - smoothY) * 0.05

            chipRefs.current.forEach((el, i) => {
                if (!el) return
                const theta = (i / ICONS.length) * Math.PI * 2 + t * SPEED
                const depth = (Math.sin(theta) + 1) / 2 // 0 = back (top), 1 = front (bottom)
                const x = Math.cos(theta) * rx + smoothX * (10 + depth * 20)
                const y = Math.sin(theta) * ry + smoothY * (8 + depth * 14)
                const scale = 0.62 + depth * 0.45
                const turn = Math.cos(theta) * 34 // coins face the centre
                const wobble = Math.sin(t * 0.6 + i) * 6
                el.style.transform =
                    `translate(-50%, -50%) translate3d(${x}px, ${y}px, 0) scale(${scale}) rotateY(${turn}deg) rotateZ(${wobble}deg)`
                el.style.opacity = String((0.28 + depth * 0.62) * fade)
                el.style.filter = `blur(${((1 - depth) * 2.2).toFixed(2)}px)`
                el.style.zIndex = String(Math.round(depth * 100))
            })

            if (!reduceMotion && visible) raf = requestAnimationFrame(render)
        }

        const onPointer = (e: PointerEvent) => {
            pointerX = (e.clientX / window.innerWidth - 0.5) * 2
            pointerY = (e.clientY / window.innerHeight - 0.5) * 2
        }

        const io = new IntersectionObserver(([entry]) => {
            const was = visible
            visible = entry.isIntersecting
            if (visible && !was && !reduceMotion) raf = requestAnimationFrame(render)
        })
        const ro = new ResizeObserver(() => { measure(); if (reduceMotion) render(start) })

        measure()
        render(start)
        if (!reduceMotion) raf = requestAnimationFrame(render)
        io.observe(wrap)
        ro.observe(wrap)
        window.addEventListener("pointermove", onPointer, { passive: true })

        return () => {
            cancelAnimationFrame(raf)
            io.disconnect()
            ro.disconnect()
            window.removeEventListener("pointermove", onPointer)
        }
    }, [])

    return (
        <div ref={wrapRef} aria-hidden className=" pointer-events-none absolute inset-0 [perspective:1100px] ">
            {ICONS.map((icon, i) => (
                <div
                    key={icon.slug}
                    ref={(el) => { chipRefs.current[i] = el }}
                    className=" absolute left-1/2 top-1/2 h-[84px] w-[84px] rounded-full opacity-0 will-change-transform [transform-style:preserve-3d] "
                    style={{
                        background: "radial-gradient(circle at 32% 26%, #3b3b42 0%, #1b1b20 55%, #0c0c0f 100%)",
                        boxShadow: "inset 0 2px 1px rgba(255,255,255,0.16), inset 0 -8px 14px rgba(0,0,0,0.65), 0 18px 40px rgba(0,0,0,0.55)",
                        border: "1px solid rgba(255,255,255,0.10)",
                    }}
                >
                    <span className=" absolute inset-[9%] rounded-full border border-white/10 " />
                    <svg viewBox="0 0 24 24" className=" absolute left-1/2 top-1/2 h-[40%] w-[40%] -translate-x-1/2 -translate-y-1/2 " fill="#c9c9cf">
                        <title>{icon.title}</title>
                        <path d={icon.path} />
                    </svg>
                </div>
            ))}
        </div>
    )
}

export default TechOrbit
