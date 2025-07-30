'use client'

import Image from "next/image"
import Link from "next/link"
import { useParams, usePathname } from "next/navigation"
import { useEffect, useState } from "react"

const NavBar = () => {
    const [darkmode, setDarkmode] = useState<boolean | null>(null)
    const params = usePathname()

    const navLinks = [
        {
            name: 'HOME',
            link: '/',
        },
        {
            name: 'ABOUT',
            link: '/about',
        },
        {
            name: 'logo',
            link: '/mylogo-transparent.png',
        },
        {
            name: 'PROJECTS',
            link: '/projects',
        },
        {
            name: 'CONTACT',
            link: '/contact',
        },
    ]

    console.log(params)

    //// darkmode ////
    useEffect(() =>{
        if (darkmode === null) return;
        const root = window.document.documentElement
        if (darkmode){
            root.classList.add('dark')
        }else{
            root.classList.remove('dark')
        }
    
        //save dark-mode preference
        localStorage.setItem("dark-mode", `${darkmode}`);
    }, [darkmode])

    useEffect(() => {
        const storedDarkmode = localStorage.getItem('dark-mode') === "true"
        setDarkmode(storedDarkmode)
    }, [])

    return (
        <nav className=" fixed top-2 left-[50%] z-40 translate-x-[-50%] flex justify-center item-center py-[18px] sm:py-[24px] px-5 sm:px-[100px] h-[65px] mobile:h-[75px] sm:h-fit w-[98%] rounded-xl bg-black ">
            <ul className=" flex gap-3 smobile:gap-5 mobile:gap-10 items-center justify-center text-[12px] ">
                {
                    navLinks?.map((obj, idx) => {
                        if (obj?.name !== 'logo'){
                            return(
                                <Link 
                                    key={idx}
                                    href={obj?.link}
                                    className={` text-[10px] smobile:text-[12px] hover:underline font-semibold ${ params === obj?.link ? 'underline' : '' } `}
                                >
                                    {obj.name}
                                </Link>
                            )
                        }
                        return(
                            <Link key={idx} href={'/'}>
                                <Image width={39} height={39} className=" object-cover mx-[15px] sm:mx-20 " src={"/mylogo-transparent.png"} alt="Famak Dev" />
                            </Link>
                        )
                    })
                }
            </ul>
            {/* <button 
                onClick={() => {
                    return setDarkmode(!darkmode)
                }}
                className=" heroIcon hover:animate-pulse "
            >
                {
                    darkmode ? 
                        <FontAwesomeIcon className=" text-secondary text-[20px] " icon={faMoon} /> :
                        <FontAwesomeIcon className=" text-secondary text-[20px] " icon={faLightbulb} />
                }
            </button> */}

        </nav>
    )
}

export default NavBar