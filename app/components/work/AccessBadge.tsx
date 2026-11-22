import { faLock } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Corners } from "../ui/Bracket"

/** Non-clickable stand-in for a live link on projects that aren't publicly reachable. */
const AccessBadge = ({ label, detail }: { label: string, detail: string }) => (
    <span
        title={detail}
        className=" relative inline-flex h-12 items-center gap-2 border border-dashed border-white/15 px-5 font-mono text-[12px] uppercase tracking-[0.14em] text-muted "
    >
        <Corners className=" border-white/25 " size={6} />
        <FontAwesomeIcon icon={faLock} className=" h-3 w-3 text-brightRed " aria-hidden />
        {label}
        <span className=" sr-only ">: {detail}</span>
    </span>
)

export default AccessBadge
