"use client"
import Image from "next/image";
import Card from "./components/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faArrowDown, faArrowDown19, faArrowDownShortWide, faArrowRight, faBullseye, faComputer, faDatabase, faLightbulb, faMobileAlt, faMoon, faShield, faThunderstorm, faWebAwesome } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { faCloudMoon } from "@fortawesome/free-solid-svg-icons/faCloudMoon";
import Hero from "./components/Hero";
import { faDigitalTachograph } from "@fortawesome/free-solid-svg-icons/faDigitalTachograph";
import { faDiceSix } from "@fortawesome/free-solid-svg-icons/faDiceSix";
import Link from "next/link";
import Footer from "./components/Footer";

const heroCardData = [
  {
    title: "Projects Completed",
    content: "100",
  },
  {
    title: "Years Experience",
    content: "4+",
  },
  {
    title: "Avalability",
    content: "24/7",
  },
]

export default function Page() {
    


    const arsenalWall = [
        {
            header: "React JS",
            writeup: "Famakinde is king",
            icon: () => <FontAwesomeIcon className="text-accent text-[35px] md:text-[25px] tab:text-[30px] lg:text-[40px] " icon={faWebAwesome} />
        },
        {
            header: "Next JS",
            writeup: "Famakinde is king",
            icon: () => <FontAwesomeIcon className="text-accent text-[35px] md:text-[25px] tab:text-[30px] lg:text-[40px] " icon={faAngleDown} />
        },
        {
            header: "TypeScript",
            writeup: "Famakinde is king",
            icon: () => <FontAwesomeIcon className="text-accent text-[35px] md:text-[25px] tab:text-[30px] lg:text-[40px] " icon={faAngleDown} />
        },
        {
            header: "JS",
            writeup: "Famakinde is king",
            icon: () => <FontAwesomeIcon className="text-accent text-[35px] md:text-[25px] tab:text-[30px] lg:text-[40px] " icon={faAngleDown} />
        },
        {
            header: "React Native",
            writeup: "Famakinde is king",
            icon: () => <FontAwesomeIcon className="text-accent text-[35px] md:text-[25px] tab:text-[30px] lg:text-[40px] " icon={faMobileAlt} />
        },
        {
            header: "Mobile Apps",
            writeup: "Famakinde is king",
            icon: () => <FontAwesomeIcon className="text-accent text-[35px] md:text-[25px] tab:text-[30px] lg:text-[40px] " icon={faMobileAlt} />
        },
        {
            header: "Node JS",
            writeup: "Famakinde is king",
            icon: () => <FontAwesomeIcon className="text-accent text-[35px] md:text-[25px] tab:text-[30px] lg:text-[40px] " icon={faComputer} />
        },
        {
            header: "Express JS",
            writeup: "Famakinde is king",
            icon: () => <FontAwesomeIcon className="text-accent text-[35px] md:text-[25px] tab:text-[30px] lg:text-[40px] " icon={faAngleDown} />
        },
        {
            header: "Nest JS",
            writeup: "Famakinde is king",
            icon: () => <FontAwesomeIcon className="text-accent text-[35px] md:text-[25px] tab:text-[30px] lg:text-[40px] " icon={faComputer} />
        },
        {
            header: "SQL",
            writeup: "Famakinde is king",
            icon: () => <FontAwesomeIcon className="text-accent text-[35px] md:text-[25px] tab:text-[30px] lg:text-[40px] " icon={faDatabase} />
        },
        {
            header: "Sequelise",
            writeup: "Famakinde is king",
            icon: () => <FontAwesomeIcon className="text-accent text-[35px] md:text-[25px] tab:text-[30px] lg:text-[40px] " icon={faDigitalTachograph} />
        },
        {
            header: "UI/UX Design",
            writeup: "Famakinde is king",
            icon: () => <FontAwesomeIcon className="text-accent text-[35px] md:text-[25px] tab:text-[30px] lg:text-[40px] " icon={faDiceSix} />
        },
        
    ]
    



  return (
        <main className=" flex flex-col gap-10 items-center bg-transparent text-black dark:text-textGray min-h-[100dvh] h-fit w-screen ">            
            <Hero/>
            <div className=" flex flex-col justify-center items-center gap-5 py-14 section w-full bg-bgBlack ">
                <h1 className=" text-[34px] mobile:text-[48px] font-bold text-accent "> Arsenal Wall </h1>
                <ul className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-x-10 gap-y-10 gap-10 w-full max-w-5xl ">
                    {
                        arsenalWall?.map((obj, idx) => {
                            return (
                                <Card key={idx} obj={obj} />
                            )
                        })
                    }
                </ul>
            </div>
            <div>

            </div>
        </main> 
  );
}
