'use client'

import { useRef, useState } from "react"
import emailjs from '@emailjs/browser'
import toast from "react-hot-toast"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSpinner } from "@fortawesome/free-solid-svg-icons/faSpinner"

const fields = [
    { name: "user_name", label: "Name", type: "text", autoComplete: "name" },
    { name: "user_email", label: "Email", type: "email", autoComplete: "email" },
    { name: "subject", label: "Subject", type: "text", autoComplete: "off" },
] as const

const inputCls = " w-full border border-line bg-raised px-4 text-[15px] text-fg placeholder:text-white/25 outline-none transition-colors focus:border-brightRed "

/** EmailJS contact form (same fields and template variables as before, restyled). */
const ContactForm = () => {
    const form = useRef<HTMLFormElement>(null)
    const [submitting, setSubmitting] = useState(false)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!form.current) return

        const data = new FormData(form.current)
        const values = ["user_name", "user_email", "subject", "message"].map((k) => String(data.get(k) ?? "").trim())
        if (values.some((v) => !v)) {
            toast.error('Please fill in all fields before sending.')
            return
        }

        setSubmitting(true)
        emailjs
            .sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
                form.current,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
            )
            .then(
                () => {
                    toast.success('Message sent successfully, I will get back to you shortly.')
                    form.current?.reset()
                    setSubmitting(false)
                },
                (error) => {
                    console.error('FAILED...', error.text)
                    toast.error('Failed to send message. This may be due to a network issue, please try again.')
                    setSubmitting(false)
                },
            )
    }

    return (
        <form ref={form} onSubmit={handleSubmit} className=" flex flex-col gap-4 ">
            <div className=" grid grid-cols-1 gap-4 sm:grid-cols-2 ">
                {fields.slice(0, 2).map((f) => (
                    <label key={f.name} className=" flex flex-col gap-2 ">
                        <span className=" mono-label !text-[10px] text-muted ">{f.label}</span>
                        <input className={` h-12 ${inputCls} `} name={f.name} type={f.type} autoComplete={f.autoComplete} />
                    </label>
                ))}
            </div>
            <label className=" flex flex-col gap-2 ">
                <span className=" mono-label !text-[10px] text-muted ">{fields[2].label}</span>
                <input className={` h-12 ${inputCls} `} name={fields[2].name} type={fields[2].type} autoComplete={fields[2].autoComplete} />
            </label>
            <label className=" flex flex-col gap-2 ">
                <span className=" mono-label !text-[10px] text-muted ">Message</span>
                <textarea className={` min-h-[140px] resize-y py-3 ${inputCls} `} name="message" />
            </label>
            <button
                className=" relative mt-2 flex h-12 w-full items-center justify-center gap-2 bg-secondary font-mono text-[12px] uppercase tracking-[0.14em] text-white transition-colors hover:bg-brightRed disabled:opacity-70 "
                type="submit"
                disabled={submitting}
            >
                {submitting ? (
                    <>
                        <FontAwesomeIcon className=" animate-spin " icon={faSpinner} />
                        Sending
                    </>
                ) : "Send message →"}
            </button>
        </form>
    )
}

export default ContactForm
