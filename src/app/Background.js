const BUBBLES = [
  { top: "-6rem", left: "-5rem", size: "24rem", color: "rgba(255,255,255,0.10)", dur: "26s", dx: "4rem", dy: "3rem", delay: "0s" },
  { top: "30%", left: "70%", size: "20rem", color: "rgba(180,180,200,0.09)", dur: "32s", dx: "-3rem", dy: "4rem", delay: "-6s" },
  { top: "65%", left: "-8rem", size: "26rem", color: "rgba(150,150,170,0.08)", dur: "30s", dx: "5rem", dy: "-3rem", delay: "-12s" },
  { top: "78%", left: "60%", size: "18rem", color: "rgba(255,255,255,0.07)", dur: "24s", dx: "-4rem", dy: "-4rem", delay: "-3s" },
  { top: "8%", left: "40%", size: "14rem", color: "rgba(200,200,220,0.07)", dur: "28s", dx: "3rem", dy: "5rem", delay: "-9s" },
];

export default function Background() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {BUBBLES.map((b, i) => (
        <span
          key={i}
          className="bubble"
          style={{
            top: b.top,
            left: b.left,
            width: b.size,
            height: b.size,
            background: `radial-gradient(circle at 30% 30%, ${b.color}, transparent 70%)`,
            animationDelay: b.delay,
            "--dur": b.dur,
            "--dx": b.dx,
            "--dy": b.dy,
          }}
        />
      ))}
    </div>
  );
}
