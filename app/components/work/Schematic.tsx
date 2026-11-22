/**
 * Animated system diagram for NEU Smart Switch, used until dashboard screenshots are available.
 * Pure SVG + CSS: data "flows" along the links, the lights glow, and everything stops
 * for visitors who prefer reduced motion.
 */
const Node = ({ x, y, w, h, title, sub, accent }: {
    x: number, y: number, w: number, h: number, title: string, sub: string, accent?: boolean
}) => (
    <g>
        <rect x={x} y={y} width={w} height={h} rx="3" fill="#121215" stroke={accent ? "#e02424" : "rgba(255,255,255,0.22)"} />
        {/* corner ticks */}
        <path d={`M${x - 3} ${y + 6} V${y - 3} H${x + 6} M${x + w - 6} ${y - 3} H${x + w + 3} V${y + 6} M${x - 3} ${y + h - 6} V${y + h + 3} H${x + 6} M${x + w - 6} ${y + h + 3} H${x + w + 3} V${y + h - 6}`}
            stroke="rgba(255,255,255,0.45)" fill="none" />
        <text x={x + 12} y={y + h / 2 - 3} className="t-title">{title}</text>
        <text x={x + 12} y={y + h / 2 + 13} className="t-sub">{sub}</text>
    </g>
)

const Bulb = ({ cx, cy, delay }: { cx: number, cy: number, delay: string }) => (
    <g>
        <circle cx={cx} cy={cy} r="15" className="bulb-glow" style={{ animationDelay: delay }} />
        <circle cx={cx} cy={cy} r="7" className="bulb" style={{ animationDelay: delay }} />
    </g>
)

const Schematic = ({ className = "" }: { className?: string }) => (
    <svg viewBox="0 0 640 380" role="img" aria-label="Diagram: bookings and a cron payload feed the Smart Switch server, which controls Shelly switches over static IPs; switches ping the server back after a power cut." className={className}>
        <style>{`
            .t-title { font: 600 11px var(--font-geist-mono), monospace; fill: #ededef; letter-spacing: .08em; }
            .t-sub { font: 10px var(--font-geist-mono), monospace; fill: #8b8b93; letter-spacing: .06em; }
            .t-edge { font: 9px var(--font-geist-mono), monospace; fill: #8b8b93; letter-spacing: .08em; }
            .link { fill: none; stroke: rgba(255,255,255,0.16); stroke-width: 1.2; }
            .flow { fill: none; stroke: #e02424; stroke-width: 1.6; stroke-dasharray: 4 14; animation: flow 1.6s linear infinite; }
            .flow-back { fill: none; stroke: #ededef; stroke-opacity: .55; stroke-width: 1.2; stroke-dasharray: 2 10; animation: flow 2.4s linear infinite reverse; }
            .bulb { fill: #3a2a12; animation: glow 4s ease-in-out infinite; }
            .bulb-glow { fill: #ffcf70; opacity: 0; animation: halo 4s ease-in-out infinite; }
            @keyframes flow { to { stroke-dashoffset: -36; } }
            @keyframes glow { 0%, 35% { fill: #3a2a12; } 45%, 90% { fill: #ffd27a; } 100% { fill: #3a2a12; } }
            @keyframes halo { 0%, 35% { opacity: 0; } 45%, 90% { opacity: .18; } 100% { opacity: 0; } }
            @media (prefers-reduced-motion: reduce) {
                .flow, .flow-back, .bulb, .bulb-glow { animation: none; }
                .bulb { fill: #ffd27a; }
            }
        `}</style>

        {/* links: inputs -> server */}
        <path d="M190 78 C 240 78, 230 160, 262 172" className="link" />
        <path d="M190 78 C 240 78, 230 160, 262 172" className="flow" />
        <path d="M190 302 C 240 302, 230 220, 262 208" className="link" />
        <path d="M190 302 C 240 302, 230 220, 262 208" className="flow" style={{ animationDuration: "2.2s" }} />
        <text x="200" y="128" className="t-edge">NEW BOOKING</text>
        <text x="200" y="262" className="t-edge">CRON PAYLOAD</text>

        {/* links: server -> switches */}
        {[70, 166, 262].map((y, i) => (
            <g key={y}>
                <path d={`M438 190 C 470 190, 460 ${y + 24}, 488 ${y + 24}`} className="link" />
                <path d={`M438 190 C 470 190, 460 ${y + 24}, 488 ${y + 24}`} className="flow" style={{ animationDelay: `${i * 0.3}s` }} />
            </g>
        ))}
        {/* self-heal ping back from a switch */}
        <path d="M520 310 C 520 350, 360 350, 350 226" className="flow-back" />
        <text x="372" y="358" className="t-edge">REBOOT → PING → RESTORE STATE</text>

        <Node x={30} y={50} w={160} h={56} title="NEU LINK" sub="facility bookings" />
        <Node x={30} y={274} w={160} h={56} title="NEU SERVER" sub="schedule, kept locally" />
        <Node x={262} y={154} w={176} h={72} title="SMART SWITCH" sub="NestJS on a VPS" accent />
        <Node x={488} y={70} w={104} h={48} title="SHELLY 01" sub="static IP" />
        <Node x={488} y={166} w={104} h={48} title="SHELLY 02" sub="static IP" />
        <Node x={488} y={262} w={104} h={48} title="SHELLY 03" sub="static IP" />

        <Bulb cx={616} cy={94} delay="0s" />
        <Bulb cx={616} cy={190} delay=".4s" />
        <Bulb cx={616} cy={286} delay=".8s" />
    </svg>
)

export default Schematic
