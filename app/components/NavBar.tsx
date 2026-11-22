'use client'

import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

const leftLinks = [
    { name: 'HOME', link: '/' },
    { name: 'ABOUT', link: '/about' },
]

const rightLinks = [
    { name: 'PROJECTS', link: '/projects' },
    { name: 'CONTACT', link: '/contact' },
]

const NavBar = () => {
    const [darkmode, setDarkmode] = useState<boolean | null>(null)
    const pathname = usePathname()

    // The inline script in layout.tsx has already applied the saved theme before paint,
    // so read the initial state from the DOM instead of re-deciding it here.
    useEffect(() => {
        setDarkmode(document.documentElement.classList.contains('dark'))
    }, [])

    const toggleDarkmode = () => {
        const next = !darkmode
        setDarkmode(next)
        document.documentElement.classList.toggle('dark', next)
        try {
            localStorage.setItem("dark-mode", `${next}`)
        } catch {}
    }

    const isActive = (link: string) => link === '/' ? pathname === '/' : pathname.startsWith(link)

    const renderLink = (obj: { name: string, link: string }) => (
        <Link
            key={obj.link}
            href={obj.link}
            className={` text-[10px] smobile:text-[12px] hover:underline font-semibold ${ isActive(obj.link) ? 'underline text-brightRed' : '' } `}
        >
            {obj.name}
        </Link>
    )

    return (
        <nav className=" fixed top-2 left-[50%] z-40 translate-x-[-50%] flex justify-center items-center py-[18px] sm:py-[24px] px-5 sm:px-[100px] h-[65px] mobile:h-[75px] sm:h-fit w-[98%] rounded-xl bg-black text-white ">
            <ul className=" flex gap-3 smobile:gap-5 mobile:gap-10 items-center justify-center text-[12px] ">
                {leftLinks.map(renderLink)}
                <Link href={'/'}>
                    <Image width={39} height={39} className=" object-cover mx-[15px] sm:mx-20 " src={"/mylogo-transparent.png"} alt="Famak Dev" priority />
                </Link>
                {rightLinks.map(renderLink)}
            </ul>
            <button
                type="button"
                onClick={toggleDarkmode}
                aria-label={darkmode ? 'Switch to light mode' : 'Switch to dark mode'}
                className=" absolute right-3 sm:right-8 heroIcon hover:animate-pulse "
            >
                {
                    darkmode === null ? null :
                    darkmode ?
                        <FontAwesomeIcon className=" text-brightRed text-[18px] " icon={faSun} /> :
                        <FontAwesomeIcon className=" text-brightRed text-[18px] " icon={faMoon} />
                }
            </button>
        </nav>
    )
}

export default NavBar
