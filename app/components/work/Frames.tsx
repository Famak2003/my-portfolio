import Image from "next/image"

/** A phone-shaped frame around a portrait screenshot (645×1398 source images). */
export const PhoneFrame = ({ src, alt, className = "", sizes = "260px", priority }: {
    src: string, alt: string, className?: string, sizes?: string, priority?: boolean
}) => (
    <div className={` relative aspect-[645/1398] overflow-hidden rounded-[11%/5%] border-[3px] border-[#26262c] bg-black shadow-[0_30px_60px_-20px_rgba(0,0,0,0.8)] ring-1 ring-white/10 ${className} `}>
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className=" object-cover object-top " />
    </div>
)

/** A minimal browser window around a desktop screenshot. */
export const BrowserFrame = ({ src, alt, w, h, url, className = "", sizes = "(max-width: 1024px) 100vw, 900px", priority }: {
    src: string, alt: string, w: number, h: number, url?: string, className?: string, sizes?: string, priority?: boolean
}) => (
    <div className={` overflow-hidden rounded-lg border border-white/10 bg-[#141417] shadow-[0_30px_60px_-24px_rgba(0,0,0,0.85)] ${className} `}>
        <div className=" flex h-7 items-center gap-1.5 border-b border-white/[0.06] px-3 ">
            <span className=" h-2 w-2 rounded-full bg-white/15 " />
            <span className=" h-2 w-2 rounded-full bg-white/15 " />
            <span className=" h-2 w-2 rounded-full bg-white/15 " />
            {url && (
                <span className=" ml-3 truncate rounded bg-white/[0.05] px-2 py-0.5 font-mono text-[10px] text-muted ">{url}</span>
            )}
        </div>
        <Image src={src} alt={alt} width={w} height={h} sizes={sizes} priority={priority} className=" block h-auto w-full " />
    </div>
)
