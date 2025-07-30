'use client'

import Image from "next/image"

const Contact = () => {
    
    const handleSubmit = (e:any) => {
        e.preventDefault()
        console.log(e)
    }

    return(
        <div className=" section ">
            <div className=" grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-5 w-full p-10 bg-bgBlack rounded-2xl min-h-[584px] " >
                <div className=" flex flex-col gap-5 justify-between items-start ">
                    <h1 className=" letterSpacing "> CONTACT </h1>
                    <figure className=" w-[160px] md:w-[223px] h-[160px] md:h-[223px] rounded-full overflow-hidden ring-1 ring-primary ">
                        <Image className=" w-full h-full " width={223} height={223} src={'/me3.png'} alt="Famakinde" />
                    </figure>
                </div>
                <div className=" flex flex-col gap-3 ">
                    <h2 className=" largeText ">
                        Let's Collaborate
                    </h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque quidem magni reiciendis suscipit sapiente similique fugit sit, cupiditate quod nulla, corrupti enim ipsum doloribus porro facilis, eius corporis harum ex.
                    Impedit esse. </p>
                    <form onSubmit={(e) => handleSubmit(e)} className=" flex flex-col gap-2 ">
                        <input className=" p-2 bg-textGray text-white placeholder:text-white outline-none w-full h-[52.4px] rounded-xl " placeholder="Name" type="text" />
                        <input className=" p-2 bg-textGray text-white placeholder:text-white outline-none w-full h-[52.4px] rounded-xl " placeholder="Email" type="email" />
                        <textarea className=" p-2 bg-textGray text-white placeholder:text-white outline-none w-full h-[100px] rounded-xl " placeholder=" message "  />
                        <button className=" bg-primary text-white w-full h-[52.4px] rounded-xl " type="submit" >Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact