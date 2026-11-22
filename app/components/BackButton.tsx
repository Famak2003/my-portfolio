'use client'

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useRouter } from "next/navigation"

/** The original wide-tracked BACK button. Goes back in history, or to `fallback` when opened directly. */
const BackButton: React.FC<{ fallback: string }> = ({ fallback }) => {
    const router = useRouter()

    return (
        <button
            type="button"
            className=" group flex w-fit items-center gap-3 text-fg "
            onClick={() => {
                if (window.history.length > 1) router.back()
                else router.push(fallback)
            }}
        >
            <FontAwesomeIcon className=" w-[24px] !text-[18px] text-brightRed transition-transform group-hover:-translate-x-1 " icon={faArrowLeft} />
            <span className=" text-[16px] sm:text-[18px] tracking-[14px] sm:tracking-[20px] ">
                BACK
            </span>
        </button>
    )
}

export default BackButton
