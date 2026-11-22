'use client'

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { site } from "@/data/site"

const pageLinks = [
    { name: 'Work', href: '/projects' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
]

const externalLinks = [
    { name: 'GitHub', href: site.socials.github },
    { name: 'LinkedIn', href: site.socials.linkedin },
]

const linkCls = " mono-label relative py-1 transition-colors hover:text-fg "

/** Tiny corner mark next to each link, a nod to the bracket frames used elsewhere. */
const Tick = () => (
    <span aria-hidden className=" absolute -right-[7px] top-0 h-[5px] w-[5px] border-r border-t border-current opacity-60 " />
)

const NavBar = () => {
    const pathname = usePathname()
    const [open, setOpen] = useState(false)

    // Close the mobile menu whenever the route changes.
    useEffect(() => { setOpen(false) }, [pathname])

    const isActive = (href: string) => href === '/' ? pathname === '/' : pathname.startsWith(href)

    const links = (
        <>
            {pageLinks.map((l) => (
                <Link
                    key={l.href}
                    href={l.href}
                    aria-current={isActive(l.href) ? 'page' : undefined}
                    className={` ${linkCls} ${isActive(l.href) ? 'text-brightRed' : 'text-muted'} `}
                >
                    {l.name}<Tick />
                </Link>
            ))}
            {externalLinks.map((l) => (
                <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className={` ${linkCls} text-muted `}>
                    {l.name}<Tick />
                </a>
            ))}
            <a href={site.cv.href} download={site.cv.fileName} className={` ${linkCls} text-fg `}>
                CV ↓<Tick />
            </a>
        </>
    )

    return (
        <header className=" fixed inset-x-0 top-0 z-50 border-b border-line bg-ink/70 backdrop-blur-md ">
            <nav aria-label="Main" className=" container-x flex h-16 items-center justify-between ">
                <Link href="/" className=" flex items-center gap-3 " aria-label="Home">
                    <Image width={28} height={28} src="/mylogo-transparent.png" alt="" priority />
                    <span className=" mono-label text-fg ">{site.shortName}</span>
                </Link>

                <div className=" hidden md:flex items-center gap-7 ">
                    {links}
                </div>

                <button
                    type="button"
                    className=" md:hidden mono-label text-fg h-10 px-3 border border-line "
                    aria-expanded={open}
                    aria-controls="mobile-menu"
                    onClick={() => setOpen((v) => !v)}
                >
                    {open ? 'Close' : 'Menu'}
                </button>
            </nav>

            {open && (
                <div id="mobile-menu" className=" md:hidden border-t border-line bg-ink/95 ">
                    <div className=" container-x flex flex-col items-start gap-5 py-6 ">
                        {links}
                    </div>
                </div>
            )}
        </header>
    )
}

export default NavBar
