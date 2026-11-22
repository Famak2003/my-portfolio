import Image from "next/image"
import type { ProjectImage } from "@/lib/projects"

const Shot = ({ img, sizes, capped = false }: { img: ProjectImage, sizes: string, capped?: boolean }) => (
    <figure className=" flex flex-col gap-2 ">
        <div className={` overflow-hidden rounded-2xl ring-1 ring-white/10 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.9)] ${capped ? "max-h-[420px] sm:max-h-[680px]" : ""} `}>
            <Image src={img.src} alt={img.alt} width={img.w} height={img.h} sizes={sizes} className=" block h-auto w-full " />
        </div>
        <figcaption className=" text-[12px] leading-snug text-muted ">{img.alt}</figcaption>
    </figure>
)

/**
 * The original project-page image layout: one large image, then the rest in two columns.
 * Grid images keep their own aspect ratio; the large one is capped in height (like the
 * original 600px feature image) and shows the top of the screenshot.
 */
const ImageLayout = ({ images }: { images: ProjectImage[] }) => {
    if (images.length === 0) return null
    const [first, ...rest] = images

    return (
        <div className=" flex flex-col gap-5 ">
            <Shot img={first} sizes="(max-width: 1280px) 100vw, 1240px" capped />
            {rest.length > 0 && (
                <div className=" grid grid-cols-1 items-start gap-5 sm:grid-cols-2 ">
                    {rest.map((img) => <Shot key={img.src} img={img} sizes="(max-width: 640px) 100vw, 620px" />)}
                </div>
            )}
        </div>
    )
}

export default ImageLayout
