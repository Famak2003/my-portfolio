import { faArrowDownShortWide, faBullseye, faShield, faThunderstorm } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Hero:React.FC<{handleScrollToTechStack: () => void}> = ({handleScrollToTechStack}) => {
    return(
        <div 
            className="  relative flex justify-center items-center gap-3 w-full h-fit mobile:h-[calc(100dvh-75px)] sm:h-[calc(100dvh-135px)] section sm:pt-[50px] bg-transparent "                
        >
            <div className="   flex flex-col items-center gap-8 w-fit h-full">
                <div className=" relative w-fit h-fit p-2 ring-2 ring-accent shadow-md animate-shadow-pulse rounded-full ">
                    <div className=" flex justify-center items-center overflow-hidden h-[350px] w-[350px] rounded-full aspect-square bg-card bg-gradient-to-br from-primary/1 to-primary/5 border-2 border-primary/30 ">
                        {/* <FontAwesomeIcon className=" text-[156px] text-textGray " icon={faShield} /> */}
                        <img className={"h-full w-full object-cover object-top grayscale-[20%] hover:grayscale-0 transition-all duration-500 "} src={'./prof-pic1.jpg'} />
                    </div>
                    <span className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full animate-pulse"/>
                    <span className=" absolute -bottom-2 -left-2 w-4 h-4 bg-primary/60 rounded-full animate-pulse duration-300 "/>
                </div>
                <div className=" flex flex-col items-center justify-center ">
                    <h1 className=" flex flex-col mobile:flex-row justify-center mobile:gap-2 sm:gap-3 tracking-tight text-[35px] sm:text-[48px] font-semibold " >
                        <span className=" text-primary dark:text-brightYellow text-center ">Famakinde</span> 
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
                        <p className=" text-secondary ">
                            Every project completed with legendary focus.
                        </p>
                    </div>
                    <ul className=" flex items-center justify-center gap-5 flex-wrap ">
                        <li className=" flex flex-col justify-center items-center ">
                            <h2 className=" flex gap-2 text-secondary  ">
                                <span className=" heroIcon ">
                                    <FontAwesomeIcon className=" text-[20px] " icon={faBullseye} />
                                </span>
                                <span className=" text-[24px] font-bold ">100+</span>
                            </h2>
                            <h3 className=" text-[14px] ">
                                PROJECTS COMPLETED
                            </h3>
                        </li>
                        <li className=" flex flex-col justify-center items-center ">
                            <h2 className=" flex gap-2 text-secondary  ">
                                <span className=" heroIcon ">
                                    <FontAwesomeIcon className=" text-[20px] " icon={faThunderstorm} />
                                </span>
                                <span className=" text-[24px] font-bold ">4+</span>                        
                            </h2>
                            <h3 className=" text-[14px] ">
                                YEARS EXPERIENCE
                            </h3>
                        </li>
                        <li className=" flex flex-col justify-center items-center ">
                            <h2 className=" flex gap-2 text-secondary  ">
                                <span className=" heroIcon ">
                                    <FontAwesomeIcon className=" text-[20px] " icon={faShield} />
                                </span>
                                <span className=" text-[24px] font-bold ">24/7</span>                        
                            </h2>
                            <h3 className=" text-[14px] ">
                                AVALABILITY
                            </h3>
                        </li>
                    </ul>
                </div>
                <button 
                    // href="#tech-stack" 
                    onClick={handleScrollToTechStack}
                    className=" flex gap-2 justify-center items-center text-black font-semibold w-[228px] h-[48px] rounded-lg bg-secondary ">
                    <p className=" text-[16px] text-white ">
                        VIEW MY TECH STACK
                    </p>
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