'use client'

import { useRouter } from "next/navigation"

/** Goes back in history, or to `fallback` when the page was opened directly. */
const BackButton: React.FC<{ fallback: string, label?: string }> = ({ fallback, label = "Back" }) => {
    const router = useRouter()

    return (
        <button
            type="button"
            className=" group inline-flex w-fit items-center gap-3 mono-label text-muted transition-colors hover:text-fg "
            onClick={() => {
                if (window.history.length > 1) router.back()
                else router.push(fallback)
            }}
        >
            <span aria-hidden className=" text-brightRed transition-transform group-hover:-translate-x-1 ">←</span>
            {label}
        </button>
    )
}

export default BackButton
