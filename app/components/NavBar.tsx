'use client'

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

const leftLinks = [
    { name: 'HOME', link: '/' },
    { name: 'ABOUT', link: '/about' },
]

const rightLinks = [
    { name: 'PROJECTS', link: '/projects' },
    { name: 'CONTACT', link: '/contact' },
]

/**
 * The original floating navbar (links either side of a centred logo), now translucent
 * and sticky. Its height comes from --nav-h in globals.css so the hero can size itself to it.
 */
const NavBar = () => {
    const pathname = usePathname()

    const isActive = (link: string) => link === '/' ? pathname === '/' : pathname.startsWith(link)

    const renderLink = (obj: { name: string, link: string }) => (
        <Link
            key={obj.link}
            href={obj.link}
            aria-current={isActive(obj.link) ? 'page' : undefined}
            className={` text-[10px] smobile:text-[12px] hover:underline underline-offset-4 font-semibold transition-colors ${ isActive(obj.link) ? 'underline text-brightRed' : 'text-white hover:text-white' } `}
        >
            {obj.name}
        </Link>
    )

    return (
        <header className=" sticky top-2 z-50 mx-auto mt-2 w-[98%] ">
            <nav
                aria-label="Main"
                className=" flex h-[var(--nav-h)] items-center justify-center rounded-xl border border-white/10 bg-black/55 px-5 backdrop-blur-md sm:px-[100px] "
            >
                <ul className=" flex gap-3 smobile:gap-5 mobile:gap-10 items-center justify-center text-[12px] ">
                    {leftLinks.map((l) => <li key={l.link}>{renderLink(l)}</li>)}
                    <li>
                        <Link href={'/'} aria-label="Home">
                            <Image width={39} height={39} className=" object-cover mx-[15px] sm:mx-20 " src={"/mylogo-transparent.png"} alt="Famak Dev" priority />
                        </Link>
                    </li>
                    {rightLinks.map((l) => <li key={l.link}>{renderLink(l)}</li>)}
                </ul>
            </nav>
        </header>
    )
}

export default NavBar
