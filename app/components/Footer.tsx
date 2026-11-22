import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import Link from "next/link"

type FooterItem = { title: string, link?: string }

const footerGroups: { header: string, children: FooterItem[] }[] = [
    {
        header: "Services",
        children: [
            { title: 'Frontend Development' },
            { title: 'UI/UX' },
            { title: 'Backend/API Development' },
            { title: 'Fullstack Development' },
            { title: 'DevOps & Deployment' },
            { title: 'Payment Gateway Integration' },
            { title: 'CMS Development' },
            { title: 'Custom Admin Dashboard System Development' },
        ],
    },
    {
        header: 'Socials',
        children: [
            {
                title: "Linkedin",
                link: "https://www.linkedin.com/in/oluwapelumi-famakinde-a138ab239/"
            }
        ]
    }
]

const Footer = () => {
    const year = new Date().getFullYear()

    return(
         <footer className=" flex justify-center items-center h-fit w-full pt-24 p-10 pb-8 text-white dark:text-textGray bg-bgBlack dark:bg-[#1f1f1f] rounded-t-3xl ">
            <div className=" flex flex-col gap-6  ">
                <div className=" flex flex-col gap-5 xxl:gap-8 justify-center items-center mb-[40px] ">
                    <h2 className=" flex largeText w-full text-center max-w-[400px] xxl:max-w-[600px] xxl:text-[90px]">
                        Have a cool project?
                    </h2>
                    <Link href="/contact" className=" flex justify-center items-center gap-4 bg-footerButton py-2 px-6 sm:px-9 rounded-3xl ">
                        <span className=" button text-white ">Contact Me</span>
                        <span
                            className=" flex justify-center items-center h-[20px] sm:h-[32px] aspect-square bg-white rounded-full "
                        >
                            <FontAwesomeIcon className=" text-primary text-[12px] sm:text-[16px] " icon={faArrowRight} />
                        </span>
                    </Link>
                </div>
                <hr className=" w-full border-t-[1px] border-[#45455D] " />
                <div className=" flex flex-col lmobile:flex-row gap-5 justify-between items-center lmobile:items-start text-[20px] w-full my-5 ">
                    <div className=" flex flex-col gap-4 items-center lmobile:items-start w-full lmobile:w-[40%] sm:w-[30%] max-w-[220px] xxl:max-w-[250px] ">
                        <figure className=" ring-1 ring-primary h-[145px] w-[145px] overflow-hidden rounded-full ">
                            <Image className=" object-cover h-full w-full " width={145} height={145} alt="Famakinde Oluwapelumi" src="/me1.png" />
                        </figure>
                        <p className=" text-[18px] xxl:text-[20px] text-center lmobile:text-start ">
                            Passionate Software Developer
                        </p>
                    </div>
                    <div className=" w-[50%] grid grid-cols-1 md:grid-cols-2 gap-5 place-items-stretch ">
                        {
                            footerGroups.map((group) => (
                                <div key={group.header} className=" flex flex-col gap-4 items-center lmobile:items-start justify-start ">
                                    <h3 className=" text-[18px] smobile:text-[20px] text-white ">{group.header}</h3>
                                    <ul className=" flex flex-col gap-4 items-center lmobile:items-start ">
                                        {
                                            group.children.map((item) => (
                                                <li key={item.title} className=" text-center lmobile:text-start text-textGray text-[14px] lg:text-[16px] ">
                                                    {
                                                        item.link ? (
                                                            <a className=" hover:text-white " href={item.link} target="_blank" rel="noopener noreferrer">
                                                                {item.title}
                                                            </a>
                                                        ) : item.title
                                                    }
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <hr className=" w-full border-t-[1px] border-[#45455D] " />
                <p className=" text-[16px] text-[#45455D] text-center ">{year} | Famakinde Oluwapelumi</p>
            </div>
        </footer>
    )
}

export default Footer
