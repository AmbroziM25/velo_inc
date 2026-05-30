// Lava-lamp backdrop: soft glossy blobs slowly rise, fall and drift,
// overlapping with smooth transparency.
const BLOBS = [
  { left: "10%", top: "40%", size: "16rem", color: "#18181b", dur: "15s", delay: "0s" },
  { left: "28%", top: "55%", size: "10rem", color: "#1f1f23", dur: "19s", delay: "-5s" },
  { left: "48%", top: "45%", size: "21rem", color: "#101012", dur: "17s", delay: "-9s" },
  { left: "66%", top: "58%", size: "12rem", color: "#242428", dur: "21s", delay: "-3s" },
  { left: "82%", top: "42%", size: "14rem", color: "#1a1a1e", dur: "16s", delay: "-11s" },
  { left: "40%", top: "62%", size: "9rem",  color: "#2a2a2f", dur: "23s", delay: "-7s" },
];

export default function Background() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="lava">
        {BLOBS.map((b, i) => (
          <span
            key={i}
            className="blob"
            style={{
              left: b.left,
              top: b.top,
              width: b.size,
              height: b.size,
              background: `radial-gradient(circle at 50% 22%, rgba(255,255,255,0.08), rgba(255,255,255,0) 48%),
                radial-gradient(circle at 50% 55%, ${b.color}, #050506 96%)`,
              animationDuration: b.dur,
              animationDelay: b.delay,
            }}
          />
        ))}
      </div>
    </div>
  );
}
