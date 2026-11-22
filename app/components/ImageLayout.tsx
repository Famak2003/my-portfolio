import Image from "next/image"

/** One large image followed by a two-column grid of the rest. */
const ImageLayout: React.FC<{alt: string, images: string[]}> = ({images, alt}) => {
    if (images.length === 0) return null

    const [first, ...rest] = images

    return (
        <>
            <figure className=" relative w-full h-[300px] sm:h-[600px] rounded-2xl overflow-hidden " >
                <Image className=" object-cover " src={first} alt={alt} fill sizes="(max-width: 1400px) 100vw, 1400px" />
            </figure>
            {
                rest.length > 0 && (
                    <div className=" grid grid-cols-1 sm:grid-cols-2 gap-5 ">
                        {
                            rest.map((src) => (
                                <figure key={src} className=" relative w-full h-[300px] rounded-2xl overflow-hidden " >
                                    <Image className=" object-cover " src={src} alt={alt} fill sizes="(max-width: 640px) 100vw, 700px" />
                                </figure>
                            ))
                        }
                    </div>
                )
            }
        </>
    )
}

export default ImageLayout
