import { faArrowDownShortWide, faBullseye, faShield, faThunderstorm } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"

const stats = [
    { icon: faBullseye, value: "100+", label: "PROJECTS COMPLETED" },
    { icon: faThunderstorm, value: "4+", label: "YEARS EXPERIENCE" },
    { icon: faShield, value: "24/7", label: "AVAILABILITY" },
]

const Hero:React.FC<{handleScrollToTechStack: () => void}> = ({handleScrollToTechStack}) => {
    return(
        <div
            className="  relative flex justify-center items-center gap-3 w-full h-fit mobile:h-[calc(100dvh-75px)] sm:h-[calc(100dvh-135px)] section sm:pt-[50px] bg-transparent "
        >
            <div className="   flex flex-col items-center gap-8 w-fit h-full">
                <div className=" relative w-fit h-fit p-2 ring-2 ring-accent shadow-md animate-shadow-pulse rounded-full ">
                    <div className=" relative flex justify-center items-center overflow-hidden h-[280px] w-[280px] mobile:h-[350px] mobile:w-[350px] rounded-full aspect-square bg-card bg-gradient-to-br from-primary/1 to-primary/5 border-2 border-primary/30 ">
                        <Image
                            className={"object-cover object-top grayscale-[20%] hover:grayscale-0 transition-all duration-500 "}
                            src={'/prof-pic1.jpg'}
                            alt="Famakinde Oluwapelumi"
                            fill
                            sizes="350px"
                            priority
                        />
                    </div>
                    <span className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full animate-pulse"/>
                    <span className=" absolute -bottom-2 -left-2 w-4 h-4 bg-primary/60 rounded-full animate-pulse duration-300 "/>
                </div>
                <div className=" flex flex-col items-center justify-center ">
                    <h1 className=" flex flex-col mobile:flex-row justify-center mobile:gap-2 sm:gap-3 tracking-tight text-[35px] sm:text-[48px] font-semibold " >
                        <span className=" text-primary dark:text-brightRed text-center ">Famakinde</span>
                        <span className=" text-center " >Oluwapelumi</span>
                    </h1>
                    <div className=" flex gap-4 items-center justify-center w-full mb-[38px] ">
                        <hr className=" border-primary border-t-[1px] w-[55px] "/>
                        <p className=" text-[14px] mobile:text-[18px] sm:text-[20px] tracking-widest text-center">
                            Senior Frontend Engineer & Mobile Developer
                        </p>
                        <hr className=" border-primary border-t-[1px] w-[55px] "/>
                    </div>
                    <div className=" text-[18px] text-center mb-[32px] ">
                        <p className="  ">
                            Precision in code. Excellence in execution.
                        </p>
                        <p className=" text-secondary dark:text-brightRed ">
                            Every project completed with legendary focus.
                        </p>
                    </div>
                    <ul className=" flex items-center justify-center gap-5 flex-wrap ">
                        {
                            stats.map((stat) => (
                                <li key={stat.label} className=" flex flex-col justify-center items-center ">
                                    <p className=" flex gap-2 text-secondary dark:text-brightRed ">
                                        <span className=" heroIcon ">
                                            <FontAwesomeIcon className=" text-[20px] " icon={stat.icon} />
                                        </span>
                                        <span className=" text-[24px] font-bold ">{stat.value}</span>
                                    </p>
                                    <p className=" text-[14px] ">
                                        {stat.label}
                                    </p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <button
                    type="button"
                    onClick={handleScrollToTechStack}
                    className=" flex gap-2 justify-center items-center font-semibold w-[228px] h-[48px] rounded-lg bg-secondary hover:bg-brightRed transition-colors ">
                    <span className=" text-[16px] text-white ">
                        VIEW MY TECH STACK
                    </span>
                    <span className=" heroIcon ">
                        <FontAwesomeIcon className=" text-[20px] w-full h-full text-white " icon={faArrowDownShortWide} />
                    </span>
                </button>
                <div className=" absolute bottom-0 left-[50%] translate-x-[-50%] hidden mobile:flex justify-center items-start rounded-3xl w-[20px] mobile:w-[24px] h-[35px] mobile:h-[40px] ring-2 ring-secondary dark:ring-secondary/30 animate-bounce ">
                    <span className=" mt-2 w-[4px] h-[12px] rounded-3xl bg-secondary animate-pulse "/>
                </div>
            </div>
        </div>
    )
}

export default Hero
