'use client'

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

const NotFound = () => {

    return (
        <div className=" flex flex-col gap-5 justify-center items-center ">
            <p className=" text-[200px] font-bold ">
                404
            </p>
            <p className=" italic text-[18px] tracking-[8px] ">Oops, Page not found!</p>
            <p className="  text-[18px] tracking-[2px] mb-3 ">
                The link might be broken or the page has been moved
            </p>
            <Link href={'/'} className=" flex gap-4 items-center bg-bgBlack ring-1 ring-white py-2 px-8 rounded-2xl ">
                <FontAwesomeIcon className=" text-[20px] " icon={faArrowLeft} />
                <p className=" text-[16px] ">Back to Homepage</p>
            </Link>

        </div>
    )
}

export default NotFound