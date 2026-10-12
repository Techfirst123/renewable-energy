import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import "./PageLoader.css";

/*
  Two things in one component:
  1. Splash — shown while the site first loads (RREV logo + progress 0-100%).
  2. Top bar — a thin progress bar that runs across the top on every route change.
  Must be rendered inside <BrowserRouter>.
*/

function PageLoader() {
  const location = useLocation();
  const [splash, setSplash] = useState(true);   // first load overlay
  const [hidden, setHidden] = useState(false);  // splash fade-out
  const [pct, setPct] = useState(0);            // splash percentage
  const [bar, setBar] = useState(0);            // route-change bar width (0 = idle)
  const first = useRef(true);
  const timers = useRef([]);

  // ---- first load splash ----
  useEffect(() => {
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    const start = Date.now();
    const MIN = reduce ? 300 : 900; // keep it brief

    const tick = setInterval(() => {
      setPct((p) => (p < 88 ? p + Math.max(2, (90 - p) / 9) : p));
    }, 90);

    const finish = () => {
      clearInterval(tick);
      setPct(100);
      const wait = Math.max(0, MIN - (Date.now() - start));
      timers.current.push(
        setTimeout(() => {
          setHidden(true);
          timers.current.push(setTimeout(() => setSplash(false), 500));
        }, wait),
      );
    };

    if (document.readyState === "complete") finish();
    else window.addEventListener("load", finish, { once: true });

    // safety: never hold the page for more than 4s
    timers.current.push(setTimeout(finish, 4000));

    return () => {
      clearInterval(tick);
      timers.current.forEach(clearTimeout);
      window.removeEventListener("load", finish);
    };
  }, []);

  // ---- route change bar ----
  useEffect(() => {
    if (first.current) {
      first.current = false;
      return undefined;
    }
    setBar(12);
    const a = setTimeout(() => setBar(62), 60);
    const b = setTimeout(() => setBar(88), 220);
    const c = setTimeout(() => setBar(100), 420);
    const d = setTimeout(() => setBar(0), 760);
    return () => [a, b, c, d].forEach(clearTimeout);
  }, [location.pathname]);

  return (
    <>
      {/* top progress bar */}
      <div className={`pl-bar ${bar ? "is-on" : ""}`} role="presentation" aria-hidden="true">
        <span style={{ width: `${bar}%` }} />
      </div>

      {/* first-load splash */}
      {splash && (
        <div className={`pl-splash ${hidden ? "is-out" : ""}`} role="status" aria-live="polite">
          <div className="pl-box">
            <img src="/assets/brand/rrev-logo.png" alt="Renewable Rise Energy Venture" width="404" height="150" />

            <div className="pl-track">
              <span style={{ width: `${pct}%` }} />
            </div>

            <div className="pl-meta">
              <span>Clean energy. Green tomorrow.</span>
              <b>{Math.round(pct)}%</b>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default PageLoader;
