import { faTrophy } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { ReactNode } from "react"

interface objType {
    writeup: string, 
    header: string,
    icon: () => ReactNode
}

const Card: React.FC<{obj: objType}> = ({obj}) => {
    return(
        <div className="card relative bg-[#1f1f1f] flex flex-col gap-3 justify-center items-center rounded-lg ring-[.2px] ring-primary w-full sm:w-[280px] md:w-[220px] tab:w-[270px] lg:w-[298px] h-[230px] md:h-[200px] tab:h-[220px] lg:h-[242px] ">
            <FontAwesomeIcon className=" text-[18px] sm:text-[24px] md:text-[20px] tab:text-[24px] absolute top-5 right-5 text-primary " icon={faTrophy} />
            <span className=" flex justify-center items-center h-[55px] sm:h-[64px] aspect-square rounded-full p-2 animate-icon-shadow-pulse ">
                {obj?.icon()}
            </span>
            <h2 className=" text-[22px] md:text-[20px] tab:text-[24px] font-semibold text-white " >{obj?.header}</h2>
            <p className=" text-[15px] md:text-[14px] tab:text-[16px] text-pretty ">{obj?.writeup}</p>
        </div>
    )
}

export default Card