"use client"
import Image from "next/image";
import Card from "./components/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faArrowDown, faArrowDown19, faArrowDownShortWide, faArrowRight, faBullseye, faComputer, faDatabase, faLightbulb, faMobileAlt, faMoon, faShield, faThunderstorm, faWebAwesome } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import { faCloudMoon } from "@fortawesome/free-solid-svg-icons/faCloudMoon";
import Hero from "./components/Hero";
import { faDigitalTachograph } from "@fortawesome/free-solid-svg-icons/faDigitalTachograph";
import { faDiceSix } from "@fortawesome/free-solid-svg-icons/faDiceSix";
import Link from "next/link";
import Footer from "./components/Footer";
import NextJsIcon from "@/public/svg/NextJsIcon";
import NestJsIcon from "@/public/svg/NestJsIcon";
import SequeliseIcon from "@/public/svg/SequeliseIcon";

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
    
    const techStackRef = useRef<HTMLElement>(null);
    const handleScrollToTechStack = () => {
        techStackRef?.current?.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start' // Aligns the section to the top of the viewport
            });
    }



    const techStack = [
    {
        header: "React JS",
        writeup: "Architecting modular, high-performance web applications with a focus on state management and reusable UI components.",
        icon: () => <img className="cardIcon" src={'./icons8-react-100.png'} alt="React" />
    },
    {
        header: "Next JS",
        writeup: "Leveraging Server-Side Rendering (SSR) and Static Site Generation (SSG) to build SEO-friendly, blazing-fast web experiences.",
        icon: () => <NextJsIcon size={40}/>
    },
    {
        header: "TypeScript",
        writeup: "Enhancing code reliability and maintainability through strict typing, ensuring scalable and error-free development cycles.",
        icon: () => <img className={"cardIcon"} src={'./typescript-100.png'} alt="TypeScript" />
    },
    {
        header: "JavaScript",
        writeup: "Mastering core ES6+ concepts to create interactive, dynamic user experiences with efficient asynchronous logic.",
        icon: () => <img className={"cardIcon"} src={'./icons8-javascript-100.png'} alt="JavaScript" />
    },
    {
        header: "React Native",
        writeup: "Building cross-platform mobile applications that deliver native performance and seamless 60fps animations.",
        icon: () => <img className={"cardIcon"} src={'./icons8-react-native-100.png'} alt="React Native" />
    },
    {
        header: "Mobile development",
        writeup: "Designing responsive, touch-optimized interfaces tailored for both iOS and Android platform standards.",
        icon: () => <FontAwesomeIcon className="text-white text-[35px] md:text-[25px] tab:text-[30px] lg:text-[40px]" icon={faMobileAlt} />
    },
    {
        header: "Node JS",
        writeup: "Developing scalable, event-driven server-side logic capable of handling high-concurrency requests efficiently.",
        icon: () => <img className={"cardIcon"} src={'./icons8-nodejs-100.png'} alt="Node" />
    },
    {
        header: "Express JS",
        writeup: "Crafting robust RESTful APIs and middleware architectures to facilitate secure and fast data communication.",
        icon: () => <img className={"cardIcon"} src={'./icons8-express-js-80.png'} alt="Express" />
    },
    {
        header: "Nest JS",
        writeup: "Implementing enterprise-grade backend systems using modular architecture and dependency injection for clean code.",
        icon: () => <NestJsIcon/>
    },
    {
        header: "MySQL",
        writeup: "Managing relational data with optimized indexing, complex queries, and ACID-compliant transaction handling.",
        icon: () => <FontAwesomeIcon className="text-white text-[35px] md:text-[25px] tab:text-[30px] lg:text-[40px]" icon={faDatabase} />
    },
    {
        header: "Sequelize",
        writeup: "Simplifying database interactions through Object-Relational Mapping (ORM) and automated schema migrations.",
        icon: () => <SequeliseIcon/>
    },
    {
        header: "UI/UX Design",
        writeup: "Translating complex user requirements into intuitive, aesthetically pleasing, and accessible interface designs.",
        icon: () => <img className={"cardIcon"} src={'./icons8-windows-10-personalization-100.png'} alt="Express" />
    },
];
    



  return (
        <main className=" flex flex-col gap-10 items-center bg-transparent text-black dark:text-textGray min-h-[100dvh] h-fit w-screen ">            
            <Hero handleScrollToTechStack={handleScrollToTechStack}/>
            <div ref={techStackRef} id="tech-stack" className=" flex flex-col justify-center items-center gap-5 py-14 section w-full bg-bgBlack ">
                <h1 className=" text-[34px] mobile:text-[48px] font-bold text-accent "> Arsenal Wall </h1>
                <ul className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-x-10 gap-y-10 gap-10 w-full max-w-5xl ">
                    {
                        techStack?.map((obj, idx) => {
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
