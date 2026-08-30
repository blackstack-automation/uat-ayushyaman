"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

type Phase = "idle" | "opening" | "revealed";

/** Subtle pleated velvet in the brand teal — not a hard dark wall. */
const CURTAIN_BG = `
  repeating-linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.07) 0px,
    rgba(255, 255, 255, 0.07) 1px,
    rgba(255, 255, 255, 0) 1px,
    rgba(255, 255, 255, 0) 13px,
    rgba(0, 0, 0, 0.13) 14px,
    rgba(0, 0, 0, 0.13) 15px,
    rgba(0, 0, 0, 0) 15px,
    rgba(0, 0, 0, 0) 28px
  ),
  linear-gradient(180deg, #12928f 0%, #0a6f6d 55%, #075453 100%)
`;

const SPARKS = [
  { left: "12%", top: "22%", size: 6, dur: 5.5, delay: 0, o: 0.7 },
  { left: "24%", top: "68%", size: 4, dur: 6.5, delay: 1.2, o: 0.5 },
  { left: "39%", top: "34%", size: 5, dur: 5, delay: 0.6, o: 0.6 },
  { left: "61%", top: "58%", size: 4, dur: 7, delay: 2, o: 0.45 },
  { left: "72%", top: "26%", size: 6, dur: 5.8, delay: 0.9, o: 0.65 },
  { left: "84%", top: "72%", size: 5, dur: 6.2, delay: 1.6, o: 0.5 },
  { left: "50%", top: "80%", size: 4, dur: 6.8, delay: 0.3, o: 0.5 },
  { left: "8%", top: "48%", size: 5, dur: 5.4, delay: 2.4, o: 0.55 },
];

/* ---------- Scalloped valance — uniform U's + draped inner folds ---------- */
const V_BAND = 24; // solid band height (px)
const V_DROP = 70; // how far each U dips below the band (px)
const V_H = V_BAND + V_DROP + 24; // svg height (px)
const V_COUNT = 6; // number of U's across the top

function Valance({ parted, reduce }: { parted: boolean; reduce: boolean }) {
  const [w, setW] = useState(0);

  useEffect(() => {
    const update = () => setW(window.innerWidth);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const geo = useMemo(() => {
    if (!w) return null;

    const count = V_COUNT;
    const pitch = w / count;
    const baseY = V_BAND;
    // keep the U's proportional so they never look stretched on narrow screens
    const drop = Math.min(V_DROP, pitch * 0.42);
    const dipY = baseY + drop;
    const k = 0.26; // horizontal control-handle fraction → keeps every U identical

    let fill = `M0,0 H${w} V${baseY} `;
    let edge = `M${w},${baseY} `;
    for (let i = count; i > 0; i--) {
      const xR = i * pitch;
      const xL = (i - 1) * pitch;
      const seg = `C ${xR - pitch * k},${dipY} ${xL + pitch * k},${dipY} ${xL},${baseY} `;
      fill += seg;
      edge += seg;
    }
    fill += "Z";

    // nested inner U's per scallop → layered, folding cloth
    const folds: { d: string; stroke: string; width: number }[] = [];
    // fine striations gathering toward each cusp
    const gathers: { d: string; stroke: string }[] = [];

    for (let i = 0; i < count; i++) {
      const xL = i * pitch;
      const xR = (i + 1) * pitch;
      const mid = xL + pitch / 2;

      folds.push({
        d: `M${xL + pitch * 0.09},${baseY} C ${xL + pitch * 0.31},${dipY - drop * 0.08} ${xR - pitch * 0.31},${dipY - drop * 0.08} ${xR - pitch * 0.09},${baseY}`,
        stroke: "rgba(255,255,255,0.17)",
        width: 1.4,
      });
      folds.push({
        d: `M${xL + pitch * 0.17},${baseY + drop * 0.07} C ${xL + pitch * 0.36},${dipY - drop * 0.19} ${xR - pitch * 0.36},${dipY - drop * 0.19} ${xR - pitch * 0.17},${baseY + drop * 0.07}`,
        stroke: "rgba(0,0,0,0.17)",
        width: 1.2,
      });
      folds.push({
        d: `M${xL + pitch * 0.26},${baseY + drop * 0.16} C ${xL + pitch * 0.4},${dipY - drop * 0.29} ${xR - pitch * 0.4},${dipY - drop * 0.29} ${xR - pitch * 0.26},${baseY + drop * 0.16}`,
        stroke: "rgba(255,255,255,0.08)",
        width: 1,
      });

      for (const t of [0.16, 0.3, 0.44, 0.56, 0.7, 0.84]) {
        const xTop = xL + pitch * t;
        const xBot = mid + (xTop - mid) * 0.1;
        gathers.push({
          d: `M${xTop},${baseY - 2} Q ${xTop},${baseY + drop * 0.4} ${xBot},${baseY + drop * 0.74}`,
          stroke:
            Math.abs(t - 0.5) < 0.1
              ? "rgba(255,255,255,0.06)"
              : "rgba(0,0,0,0.10)",
        });
      }
    }

    // festoon string: a light at the bottom of every U and at every seam between them
    const points: { x: number; y: number }[] = [];
    for (let i = 0; i < count; i++) {
      points.push({ x: (i + 0.5) * pitch, y: baseY + drop * 0.75 + 6 }); // U low point
      if (i < count - 1) points.push({ x: (i + 1) * pitch, y: baseY + 5 }); // seam
    }
    const lights = points.map((p, i) => ({ ...p, i }));

    return { count, pitch, fill, edge, folds, gathers, lights };
  }, [w]);

  return (
    <motion.div
      className="absolute inset-x-0 top-0 z-[6] overflow-visible"
      initial={{ y: 0 }}
      animate={{ y: parted ? "-120%" : 0 }}
      transition={{ duration: 1.2, ease: [0.66, 0, 0.34, 1] }}
    >
      {geo && (
        <>
          <svg
            viewBox={`0 0 ${w} ${V_H}`}
            preserveAspectRatio="none"
            width="100%"
            height={V_H}
            className="block overflow-visible drop-shadow-[0_16px_20px_rgba(0,0,0,0.38)]"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="valFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#0f827f" />
                <stop offset="0.55" stopColor="#0a6f6d" />
                <stop offset="1" stopColor="#064b49" />
              </linearGradient>
              <linearGradient id="valSheen" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="rgba(255,255,255,0.2)" />
                <stop offset="1" stopColor="rgba(255,255,255,0)" />
              </linearGradient>
            </defs>

            <path d={geo.fill} fill="url(#valFill)" />
            <rect x="0" y="0" width={w} height={V_BAND + 8} fill="url(#valSheen)" />

            {geo.gathers.map((g, i) => (
              <path
                key={`g${i}`}
                d={g.d}
                fill="none"
                stroke={g.stroke}
                strokeWidth="1"
                strokeLinecap="round"
              />
            ))}
            {geo.folds.map((f, i) => (
              <path
                key={`f${i}`}
                d={f.d}
                fill="none"
                stroke={f.stroke}
                strokeWidth={f.width}
                strokeLinecap="round"
              />
            ))}

            <path
              d={geo.edge}
              fill="none"
              stroke="rgba(255,255,255,0.26)"
              strokeWidth="1.6"
            />
          </svg>

          {/* festoon lights — under every U and at every seam between them */}
          <div className="pointer-events-none absolute inset-x-0 top-0">
            {geo.lights.map(({ i, x, y }) => (
              <div
                key={i}
                className="absolute -translate-x-1/2"
                style={{ left: `${(x / w) * 100}%`, top: y }}
              >
                <span className="absolute left-1/2 top-0 h-2.5 w-px -translate-x-1/2 -translate-y-full bg-white/25" />
                <motion.span
                  className="block size-[7px] rounded-full bg-white"
                  style={{
                    boxShadow:
                      "0 0 10px 3px rgba(255,255,255,0.85), 0 0 22px 7px rgba(127,212,209,0.55)",
                  }}
                  animate={
                    parted || reduce
                      ? { opacity: 1, scale: 1 }
                      : { opacity: [1, 0.12, 1], scale: [1, 0.6, 1] }
                  }
                  transition={{
                    duration: 2.4,
                    repeat: Infinity,
                    delay: i * 0.28,
                    ease: "easeInOut",
                  }}
                />
              </div>
            ))}
          </div>
        </>
      )}
    </motion.div>
  );
}

/* ---------------------------- Waving curtain ---------------------------- */
function Curtain({
  side,
  parted,
  still,
}: {
  side: "left" | "right";
  parted: boolean;
  still: boolean;
}) {
  const isLeft = side === "left";
  const animateWave = !still && !parted;

  return (
    <motion.div
      className={`absolute inset-y-0 w-[52%] overflow-hidden ${
        isLeft ? "left-0 origin-left" : "right-0 origin-right"
      }`}
      style={{
        boxShadow: isLeft
          ? "inset -60px 0 90px -30px rgba(0,0,0,0.5)"
          : "inset 60px 0 90px -30px rgba(0,0,0,0.5)",
      }}
      initial={{ x: 0, scaleX: 1 }}
      animate={{
        x: parted ? (isLeft ? "-104%" : "104%") : 0,
        scaleX: parted ? 0.86 : 1,
      }}
      transition={{ duration: 1.5, ease: [0.66, 0, 0.34, 1] }}
    >
      {/* fabric body — slow hanging sway */}
      <motion.div
        className="absolute inset-0 origin-top"
        animate={
          animateWave
            ? { skewX: [0, 0.6, 0, -0.6, 0], scaleX: [1, 1.015, 1, 0.99, 1] }
            : { skewX: 0, scaleX: 1 }
        }
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* pleats that drift like moving cloth */}
        <motion.div
          className="absolute inset-[-6%]"
          style={{ backgroundImage: CURTAIN_BG }}
          animate={
            animateWave
              ? {
                  backgroundPosition: [
                    "0px 0px",
                    "11px 0px",
                    "0px 0px",
                    "-11px 0px",
                    "0px 0px",
                  ],
                }
              : { backgroundPosition: "0px 0px" }
          }
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* travelling volume — light & shade rolling across the folds */}
        <motion.div
          className="absolute inset-[-6%] opacity-80 mix-blend-soft-light"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, rgba(0,0,0,0.20) 0px, rgba(0,0,0,0.20) 20px, rgba(255,255,255,0.06) 40px, rgba(0,0,0,0) 64px, rgba(0,0,0,0) 96px)",
          }}
          animate={
            animateWave
              ? { backgroundPosition: ["0px 0px", "96px 0px"] }
              : { backgroundPosition: "0px 0px" }
          }
          transition={{ duration: 13, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>

      {/* soft sheen sweeping over the fabric */}
      {animateWave && (
        <motion.div
          className="absolute inset-y-0 w-1/2"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.10), transparent)",
          }}
          animate={{ x: ["-70%", "270%"] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            repeatDelay: 2.5,
          }}
        />
      )}

      {/* bright meeting edge */}
      <div
        className={`absolute inset-y-0 w-[3px] bg-gradient-to-b from-white/5 via-white/40 to-white/5 ${
          isLeft ? "right-0" : "left-0"
        }`}
      />
      <div
        className={`absolute inset-y-0 w-24 to-transparent ${
          isLeft ? "right-4 bg-gradient-to-l" : "left-4 bg-gradient-to-r"
        } from-white/12`}
      />
    </motion.div>
  );
}

export default function LaunchPage() {
  const [phase, setPhase] = useState<Phase>("idle");
  const reduce = useReducedMotion();

  const open = useCallback(() => {
    setPhase((current) => {
      if (current !== "idle") return current;

      if (!reduce) {
        void (async () => {
          try {
            const confetti = (await import("canvas-confetti")).default;
            const colors = ["#079794", "#05706E", "#0d6e8c", "#7fd4d1", "#ffffff"];
            confetti({
              particleCount: 110,
              spread: 78,
              startVelocity: 48,
              scalar: 0.9,
              origin: { x: 0.5, y: 0.5 },
              colors,
            });
            window.setTimeout(() => {
              confetti({ particleCount: 60, angle: 60, spread: 60, origin: { x: 0, y: 0.65 }, colors });
              confetti({ particleCount: 60, angle: 120, spread: 60, origin: { x: 1, y: 0.65 }, colors });
            }, 260);
          } catch {
            /* confetti is a nice-to-have only */
          }
        })();
      }

      window.setTimeout(() => setPhase("revealed"), reduce ? 200 : 1750);
      return "opening";
    });
  }, [reduce]);

  const parted = phase === "opening" || phase === "revealed";
  const still = Boolean(reduce);

  return (
    <div className="fixed inset-0 z-[1000] select-none overflow-hidden bg-[#0e7f78] font-sans">
      {/* ===== STAGE — the "camera" that pushes through the opening ===== */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1 }}
        animate={{ scale: parted && !reduce ? 2.7 : 1 }}
        transition={{ duration: 2, ease: [0.6, 0, 0.24, 1], delay: 0.12 }}
      >
        {/* White behind the curtains */}
        <div className="absolute inset-0 bg-white">
          <motion.div
            className="absolute left-1/2 top-1/2 h-[62vmin] w-[62vmin] -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(7,151,148,0.22) 0%, rgba(7,151,148,0) 70%)",
            }}
            animate={reduce ? {} : { scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <Curtain side="left" parted={parted} still={still} />
        <Curtain side="right" parted={parted} still={still} />

        <Valance parted={parted} reduce={still} />

        {/* Seam light — breathes while closed, flares as it opens */}
        <motion.div
          className="absolute bottom-0 left-1/2 top-0 w-px -translate-x-1/2 bg-white"
          style={{ boxShadow: "0 0 50px 14px rgba(255,255,255,0.75)" }}
          animate={
            phase === "opening"
              ? { opacity: [0.9, 1, 0], scaleX: [1, 26, 70] }
              : reduce
              ? { opacity: 0.45 }
              : { opacity: [0.3, 0.7, 0.3] }
          }
          transition={
            phase === "opening"
              ? { duration: 1.2, ease: "easeIn" }
              : { duration: 3.5, repeat: Infinity, ease: "easeInOut" }
          }
        />

        {/* Cinematic vignette */}
        <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_220px_70px_rgba(0,0,0,0.28)]" />
      </motion.div>

      {/* ===== Ambient sparkles (idle only) ===== */}
      {phase === "idle" && !reduce && (
        <div className="pointer-events-none absolute inset-0 z-[4]">
          {SPARKS.map((s, i) => (
            <motion.span
              key={i}
              className="absolute rounded-full bg-white"
              style={{ left: s.left, top: s.top, width: s.size, height: s.size }}
              animate={{ y: [0, -26, 0], opacity: [0, s.o, 0] }}
              transition={{
                duration: s.dur,
                repeat: Infinity,
                delay: s.delay,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      )}

      {/* ===== Idle UI — button sits on the seam, not scaled with the stage ===== */}
      <AnimatePresence>
        {phase === "idle" && (
          <motion.div
            className="absolute inset-0 z-[8] flex flex-col items-center justify-center px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.15, transition: { duration: 0.4 } }}
          >
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="mb-2 text-[11px] font-semibold uppercase tracking-[0.42em] text-white/70"
            >
              Ayushman Surgicare
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.42, duration: 0.7 }}
              className="mb-9 text-center text-2xl font-bold tracking-tight text-white sm:text-[2rem]"
            >
              The new website is ready
            </motion.h1>

            <motion.button
              type="button"
              onClick={open}
              initial={{ opacity: 0, y: 16, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.6, type: "spring", stiffness: 150, damping: 15 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="group relative flex items-center gap-2.5 rounded-full bg-white px-8 py-4 text-sm font-bold text-[#075453] shadow-[0_24px_60px_-15px_rgba(0,0,0,0.55)]"
            >
              <span className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-white/60" />
              <motion.span
                className="pointer-events-none absolute inset-0 rounded-full border-2 border-white"
                animate={{ scale: [1, 1.4], opacity: [0.6, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
              />
              <Sparkles className="size-4" />
              Launch the site
            </motion.button>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="mt-5 text-xs text-white/55"
            >
              Tap to open the curtains
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ===== Revealed — clean white welcome ===== */}
      <AnimatePresence>
        {phase === "revealed" && (
          <motion.div
            key="revealed"
            className="absolute inset-0 z-[20] flex flex-col items-center justify-center overflow-hidden bg-white px-6 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 h-[82vmin] w-[82vmin] -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(7,151,148,0.13) 0%, rgba(7,151,148,0) 70%)",
              }}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.12 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                opacity: { duration: 0.35, delay: 0.08 },
                scale: { type: "spring", stiffness: 85, damping: 13, delay: 0.08 },
              }}
            >
              <Image
                src="/images/logo/AyushmanSurgicareLogoFooter.png"
                alt="Ayushman Surgicare"
                width={1376}
                height={460}
                priority
                className="h-auto w-[85vw] max-w-[620px]"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="mt-7 text-[11px] font-bold uppercase tracking-[0.4em] text-brand"
            >
              Now live
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.82, duration: 0.6 }}
              className="mt-3 max-w-xl text-3xl font-bold tracking-tight text-navy sm:text-[2.6rem] sm:leading-[1.1]"
            >
              Welcome to the new Ayushman Surgicare
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.94, duration: 0.6 }}
              className="mt-4 max-w-md text-[15px] leading-relaxed text-[#556171]"
            >
              Expert surgical care, trusted specialists and 90-day Care Buddy support —
              now easier to explore than ever.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.08, duration: 0.6 }}
            >
              <Link
                href="/"
                className="group mt-9 inline-flex items-center gap-2 rounded-full bg-brand px-8 py-4 text-sm font-bold text-white shadow-[0_18px_40px_-12px_rgba(7,151,148,0.6)] transition-colors hover:bg-brand-deep"
              >
                Enter Website
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
