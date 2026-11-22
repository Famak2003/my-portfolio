import Link from "next/link"
import type { ComponentProps, ReactNode } from "react"

/** Four small corner ticks drawn around the parent (which must be `relative`). */
export const Corners = ({ className = "border-white/40", size = 8 }: { className?: string, size?: number }) => {
    const box = { width: size, height: size }
    return (
        <span aria-hidden className=" pointer-events-none absolute inset-0 ">
            <span style={box} className={` absolute -left-px -top-px border-l border-t ${className} `} />
            <span style={box} className={` absolute -right-px -top-px border-r border-t ${className} `} />
            <span style={box} className={` absolute -left-px -bottom-px border-l border-b ${className} `} />
            <span style={box} className={` absolute -right-px -bottom-px border-r border-b ${className} `} />
        </span>
    )
}

/** A panel with hairline border and corner ticks. */
export const BracketFrame = ({ children, className = "" }: { children: ReactNode, className?: string }) => (
    <div className={` relative border border-line ${className} `}>
        <Corners />
        {children}
    </div>
)

const buttonBase = " group relative inline-flex items-center justify-center gap-2 h-12 px-6 font-mono text-[12px] uppercase tracking-[0.14em] text-fg transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brightRed "
const variants = {
    ghost: " border border-line bg-ink/60 backdrop-blur-sm hover:border-white/30 hover:bg-white/[0.04] ",
    solid: " bg-secondary hover:bg-brightRed border border-transparent ",
}

type Variant = keyof typeof variants

/** Mono, bracket-cornered call-to-action rendered as a Next link (or plain <a> for files/external). */
export const BracketLink = ({
    variant = "ghost",
    className = "",
    children,
    external,
    ...props
}: ComponentProps<typeof Link> & { variant?: Variant, external?: boolean, download?: string | boolean }) => {
    const cls = `${buttonBase} ${variants[variant]} ${className}`
    const inner = (
        <>
            <Corners className=" border-white/50 transition-colors group-hover:border-brightRed " />
            {children}
        </>
    )
    if (external || props.download !== undefined) {
        const { href, download, ...rest } = props
        return (
            <a
                href={String(href)}
                download={download}
                className={cls}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                {...(rest as ComponentProps<"a">)}
            >
                {inner}
            </a>
        )
    }
    return <Link className={cls} {...props}>{inner}</Link>
}
