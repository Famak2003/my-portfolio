import { BracketLink } from "./components/ui/Bracket"

const NotFound = () => {
    return (
        <main className=" container-x flex min-h-[60vh] flex-col items-center justify-center gap-5 py-16 text-center ">
            <p className=" mono-label text-brightRed ">● Error 404</p>
            <p className=" text-[110px] font-semibold leading-none tracking-[-0.04em] text-fg sm:text-[200px] ">
                404
            </p>
            <p className=" text-[14px] italic tracking-[8px] text-muted sm:text-[18px] ">Oops, Page not found!</p>
            <p className=" mb-3 text-[14px] tracking-[2px] text-muted sm:text-[16px] ">
                The link might be broken or the page has been moved
            </p>
            <BracketLink href="/">← Back to Homepage</BracketLink>
        </main>
    )
}

export default NotFound
