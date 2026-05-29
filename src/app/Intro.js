"use client";

import { useEffect, useRef, useState } from "react";

const HOLD_MS = 2100;
const LEAVE_MS = 650;

export default function Intro({ initials = "YN" }) {
  const [phase, setPhase] = useState("intro");
  const timers = useRef([]);
  const leaveRef = useRef(() => {});

  useEffect(() => {
    const clear = () => {
      timers.current.forEach(clearTimeout);
      timers.current = [];
    };

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let seen = false;
    try {
      seen = sessionStorage.getItem("velo:intro") === "1";
    } catch {}

    if (reduce || seen) {
      setPhase("done");
      return;
    }

    const leave = () => {
      clear();
      try {
        sessionStorage.setItem("velo:intro", "1");
      } catch {}
      setPhase("leaving");
      timers.current.push(setTimeout(() => setPhase("done"), LEAVE_MS));
    };
    leaveRef.current = leave;

    timers.current.push(setTimeout(leave, HOLD_MS));
    window.addEventListener("keydown", leave);

    return () => {
      clear();
      window.removeEventListener("keydown", leave);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      className={`intro-overlay${phase === "leaving" ? " leaving" : ""}`}
      onClick={() => leaveRef.current()}
      role="presentation"
    >
      <div className="intro-stage">
        <div className="intro-orb-wrap">
          <span className="intro-glow" aria-hidden="true" />
          <div className="intro-orb" aria-hidden="true">
            <span className="intro-ring intro-ring-1" />
            <span className="intro-ring intro-ring-2" />
            <span className="intro-ring intro-ring-3" />
            <span className="intro-ring intro-ring-4" />
          </div>
          <div className="intro-core" aria-hidden="true">
            {initials}
          </div>
        </div>
      </div>
      <button
        type="button"
        className="intro-skip"
        onClick={(e) => {
          e.stopPropagation();
          leaveRef.current();
        }}
      >
        Skip
      </button>
    </div>
  );
}
