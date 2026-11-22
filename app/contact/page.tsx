'use client'

import Image from "next/image"
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import toast from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons/faSpinner";

const Contact = () => {
    
    const form = useRef<HTMLFormElement>(null);
    const [submitting, setSubmitting] = useState(false)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        if (!form.current) return;
        
        const formData = new FormData(form.current);
        const userName = formData.get('user_name') as string;
        const userEmail = formData.get('user_email') as string;
        const subject = formData.get('subject') as string;
        const message = formData.get('message') as string;

        
        if (!userName.trim() || !userEmail.trim() || !subject.trim() || !message.trim()) {
            toast.error('Please fill in all fields before sending.');
            return; 
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
                toast.success('Message sent successfully, we will get back to you shortly');
                form.current?.reset();
                setSubmitting(false)
            },
            (error) => {
                console.error('FAILED...', error.text);
                toast.error('Failed to send message. This may be due to a network issue, please try again.');
                setSubmitting(false)
            },
        );
    };

    return(
        <div className=" section ">
            <div className=" grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-5 w-full p-6 sm:p-10 bg-bgBlack text-white dark:text-textGray rounded-2xl min-h-[584px] " >
                <div className=" flex flex-col gap-5 justify-between items-start ">
                    <h1 className=" letterSpacing "> CONTACT </h1>
                    <figure className=" w-[160px] md:w-[223px] h-[160px] md:h-[223px] rounded-full overflow-hidden ring-1 ring-primary ">
                        <Image className=" w-full h-full object-cover " width={223} height={223} src={'/me3.png'} alt="Famakinde" />
                    </figure>
                </div>
                <div className=" flex flex-col gap-3 ">
                    <h2 className=" largeText ">
                        Let&apos;s Collaborate
                    </h2>
                    <p>
                        Have a project in mind, a role to fill, or just want to say hello? Send me a message
                        and I&apos;ll get back to you as soon as I can.
                    </p>
                    <form ref={form} onSubmit={(e) => handleSubmit(e)} className=" flex flex-col gap-2 ">
                        <input className=" p-2 bg-textGray text-white placeholder:text-white outline-none w-full h-[52.4px] rounded-xl " name="subject" placeholder="Subject" type="text" />
                        <input className=" p-2 bg-textGray text-white placeholder:text-white outline-none w-full h-[52.4px] rounded-xl " name="user_name" placeholder="Name" type="text" />
                        <input className=" p-2 bg-textGray text-white placeholder:text-white outline-none w-full h-[52.4px] rounded-xl " name="user_email" placeholder="Email" type="email" />
                        <textarea className=" p-2 bg-textGray text-white placeholder:text-white outline-none w-full h-[100px] rounded-xl " name="message" placeholder="Message" />
                        <button className=" bg-primary hover:bg-secondary disabled:opacity-70 w-full h-[52.4px] rounded-xl transition-colors " type="submit" disabled={submitting} >
                            {
                                submitting ? (
                                    <FontAwesomeIcon className=" animate-spin rounded-3xl text-2xl " icon={faSpinner}/>
                                ) : (
                                    <p className=" text-white ">
                                        Submit
                                    </p>
                                )
                            }
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact