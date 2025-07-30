import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

const Footer = () => {
    const today = new Date()
    const year = today.getFullYear()

        const footerGroups = [
        {
            header: "Services",
            children: [
                {
                    title: 'Frontend Development',
                    link: 'https://oluwatobioluwole.nousdynasty.com/'
                },
                {
                    title: 'UI/UX',
                    link: 'https://oluwatobioluwole.nousdynasty.com/'
                },
                {
                    title: 'Backend/API Development',
                    link: 'https://oluwatobioluwole.nousdynasty.com/'
                },
                {
                    title: 'Fullstack Development',
                    link: 'https://oluwatobioluwole.nousdynasty.com/'
                },
                {
                    title: 'DevOps & Deployment',
                    link: 'https://oluwatobioluwole.nousdynasty.com/'
                },
                {
                    title: 'Payment Gateway Integration',
                    link: 'https://oluwatobioluwole.nousdynasty.com/'
                },
                {
                    title: 'CSM Development',
                    link: 'https://oluwatobioluwole.nousdynasty.com/'
                },
                {
                    title: 'Custom Admin Dashboard System Development',
                    link: 'https://oluwatobioluwole.nousdynasty.com/'
                },
            ],        
        },
        {
            header: 'Social Media',
            children: [
                {
                    title: "Linkedin",
                    link: "https://www.linkedin.com/in/oluwapelumi-famakinde-a138ab239/"
                }
            ]
        }
    ]


    return(
         <footer className=" flex justify-center items-center h-fit w-full pt-24 p-10 pb-8 text-white dark:text-textGray bg-bgBlack dark:bg-[#1f1f1f] rounded-t-3xl ">
            <div className=" flex flex-col gap-6  ">
                <div className=" flex flex-col gap-5 xxl:gap-8 justify-center items-center mb-[40px] ">
                    <h1 className=" flex largeText w-full text-center max-w-[400px] xxl:max-w-[600px] xxl:text-[90px]">
                        Have a cool project?
                    </h1>
                    <button className=" flex justify-center gap-4 w-[193px] bg-footerButton p-2 rounded-3xl ">
                        <p className=" text-[18px] text-white ">contact Me</p>
                        <span className=" flex justify-center items-center h-[32px] aspect-square bg-white rounded-full "><FontAwesomeIcon className=" text-primary text-[12px] sm:text-[16px] " icon={faArrowRight} /></span>
                    </button>
                </div>
                <hr className=" w-full border-t-[1px] border-[#45455D] " />
                <div className=" flex flex-col lmobile:flex-row gap-5 justify-between items-center lmobile:items-start text-[20px] w-full my-5 ">
                    <div className=" flex flex-col gap-4 items-center lmobile:item-start w-full lmobile:w-[40%] sm:w-[30%] max-w-[220px] xxl:max-w-[250px] ">
                        <figure className=" ring-1 ring-primary h-[145px] w-[145px] overflow-hidden rounded-full ">
                            <img className=" object-cover h-full w-full " alt="This is me" src={"./me1.png"} />
                        </figure>
                        <p className=" text-[18px] xxl:text-[20px] text-center lmobile:text-start ">
                            Passonate Software Developer
                        </p>
                    </div>
                    <div className=" w-[50%] grid grid-cols-1 md:grid-cols-2 gap-5 place-items-stretch ">
                        {
                            footerGroups?.map((obj, idx) => {
                                return (
                                    <ul className=" flex flex-col gap-4 items-center lmobile:items-start justify-start ">
                                        <h2 className=" text-[18px] smobile:text-[20px] text-white ">{obj?.header}</h2>
                                        {
                                            obj?.children?.map((item, index) => {
                                                return(
                                                    <>
                                                        { 
                                                            obj?.header === 'Services' ? (
                                                                <Link href={item?.link} className=" text-center lmobile:text-start text-textGray text-[14px] lg:text-[16px] ">
                                                                    {item?.title}
                                                                </Link>
                                                            ) : 
                                                            (
                                                                <a className=" text-center lmobile:text-start text-textGray text-[14px] lg:text-[16px] " href={item?.link} target="_blank" >
                                                                    {item?.title}
                                                                </a>
                                                            )
                                                        }
                                                    </>
                                                )
                                            } )
                                        }
                                    </ul>
                                )
                            })
                        }
                    </div>
                </div>
                <hr className=" w-full border-t-[1px] border-[#45455D] " />
                <caption className=" text-[16px] text-[#45455D] ">{year} | Famakinde Oluwapelumi</caption>
            </div>
        </footer>
    )
}

export default Footer