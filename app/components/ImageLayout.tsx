const ImageLayout: React.FC<{alt: string, images: string[]}> = ({images, alt}) => {
    return (
        <>
            <figure className=" w-full h-[600px] rounded-2xl overflow-hidden " >
                <img className=" w-full h-full object-cover " src={images[0]} alt={alt} />
            </figure>
            <div className=" grid grid-cols-1 sm:grid-cols-2 gap-5 ">
                {
                    images.slice(1)?.map((obj, idx) => {
                        return(
                            <figure key={idx} className=" w-full h-[300px] rounded-2xl overflow-hidden " >
                                <img className=" w-full h-full object-cover " src={obj} alt={alt} />
                            </figure>
                        )
                    })
                }
            </div>
        </>
    )
}

export default ImageLayout