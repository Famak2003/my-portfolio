'use client'

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useRouter } from "next/navigation"

/** Goes back in history, or to `fallback` when the page was opened directly. */
const BackButton: React.FC<{ fallback: string }> = ({ fallback }) => {
    const router = useRouter()

    return (
        <button
            type="button"
            className=" flex items-center gap-3 w-fit "
            onClick={() => {
                if (window.history.length > 1) router.back()
                else router.push(fallback)
            }}
        >
            <FontAwesomeIcon className=" w-[24px] !text-[18px] text-primary dark:text-brightRed " icon={faArrowLeft} />
            <span className=" text-[18px] tracking-[20px] ">
                BACK
            </span>
        </button>
    )
}

export default BackButton
