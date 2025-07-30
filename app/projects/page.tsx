'use client'

import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ImageLayout from "../components/ImageLayout"
import { useRouter } from "next/navigation"

const projectDetails = {
    name: 'First Project',
    details: [
        {
            name: "YEAR",
            value: "2020/2021"
        },
        {
            name: "ROLE",
            value: "Fullstack Dev"
        },
        {
            name: "TECH STACK",
            value: "Javascript, React js, Next js"
        },
    ],
    images1: [
        '/me1.png',
        '/me2.png',
        '/me3.png',
        '/nice.avif',
        '/pic.jpg',
        '/bike.jpg',
        // '/fire.jpeg',
        // '/boy.jpg'
    ],
    mainImg: '/fire.jpeg',
}

const Projects = () => {
    const router = useRouter()
    return (
        <div className=" flex justify-center items-center h-fit w-screen section text-white dark:text-textGray ">
            <div className=" max-w-[1400px] flex flex-col gap-8 sm:gap-10 ">
                <button 
                    className=" flex items-center gap-3 " 
                    onClick={() => {
                        router.back()
                    }}
                >
                    <FontAwesomeIcon className=" w-[24px] !text-[18px] text-primary " icon={faArrowLeft} />
                    <p className=" text-[18px] tracking-[20px] ">
                        BACK
                    </p>
                </button>
                <h1 className=" largeText ">
                    Designing a Social Media App for the Black Experience
                </h1>
                <ul className=" flex flex-col sm:flex-row gap-5 md:gap- items-start7 sm:items-center justify-start ">
                    {
                        projectDetails?.details.map((obj, idx) => {
                            return(
                                <li key={idx} className=" flex flex-col gap-2 ">
                                    <span className=" text-[16px] text-[#625f5f] " >{obj?.name}</span>
                                    <p className=" font-semibold text-[20px] " >{obj?.value}</p>
                                </li>
                            )
                        })
                    }
                </ul>
                <div className=" flex flex-col gap-8 ">
                    <div className=" flex flex-col gap-5 w-full ">
                        <ImageLayout images={projectDetails?.images1.slice(0, 3)} alt={projectDetails?.name} />                    
                    </div>
                    <div className=" projectDescription ">
                        <h2 className="letterSpacing">PROJECT DESCRIPTION</h2>
                        <p>
                            BLACK built its ecosystem due to well-designed products while our rivals’ approach was to make theirs by acquiring similar services and stimulating their growth with enormous money investments. We looked for ways to boost our revenue streams, but rather than working on each service’s revenue separately, we were looking for an amplifying force for all of them at once. Eventually, the Fintech division became such a solution – consumers received various offerings that made their transactions in Yandex more beneficial while the services cut expenses on payment infrastructure
                        </p>
                    </div>
                </div>
                <div className=" flex flex-col gap-8 w-full ">
                    <figure className=" w-full h-[600px] rounded-2xl overflow-hidden " >
                        <img className=" w-full h-full object-cover " src={projectDetails?.mainImg} alt={projectDetails?.name} />
                    </figure>
                    <div className=" projectDescription ">
                        <h2 className="letterSpacing">SOLUTIONS</h2>
                        <p>
                            BLACK built its ecosystem due to well-designed products while our rivals’ approach was to make theirs by acquiring similar services and stimulating their growth with enormous money investments.
                        </p>
                    </div>
                </div>
                <div className=" flex flex-col gap-5 w-full ">
                    <ImageLayout images={projectDetails?.images1.slice(3)} alt={projectDetails?.name} />                    
                </div>
            </div>
        </div>
    )
}

export default Projects