"use client";

import { useEffect, useRef, useState } from "react";

const HOLD_MS = 2000;
const LEAVE_MS = 700;

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
      <div className="intro-content">
        <span className="intro-glow" aria-hidden="true" />
        <div className="intro-mark" aria-hidden="true">
          {initials}
        </div>
        <span className="intro-line" aria-hidden="true" />
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
