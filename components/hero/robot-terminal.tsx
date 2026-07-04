"use client";

import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/**
 * Mini terminal popup shown when the robot is clicked. Slides up above
 * the robot, types a random fact character-by-character, blinks a cursor
 * for a second, then fades out. pointer-events: none so it never blocks
 * the hero. Imperatively triggered via ref.open().
 */

const FACTS = [
  "> RAG system: +51% nDCG@10 retrieval quality",
  "> 300+ QPS sustained · p95 latency <650ms",
  "> Legal-BERT: 88% Micro-F1 on 100-class benchmark",
  "> DQN agent: 99.8% allocation success rate",
  "> Cadence DSL: parses programs in under 5ms",
  "> AudioTranscriber: <2s end-to-end latency",
  "> 5M+ requests/day · p95 <300ms @ Vodafone",
  "> SJSU MS CS · GPA 3.5 · May 2026",
];

const TYPE_MS = 40;

export type RobotTerminalHandle = { open: () => void };

export const RobotTerminal = forwardRef<RobotTerminalHandle>(function RobotTerminal(_props, ref) {
  const [active, setActive] = useState(false);
  const [fact, setFact] = useState("");
  const [count, setCount] = useState(0);
  const lastIdx = useRef(-1);
  const timers = useRef<number[]>([]);

  const clearTimers = () => {
    timers.current.forEach((t) => clearTimeout(t));
    timers.current = [];
  };

  useImperativeHandle(
    ref,
    () => ({
      open: () => {
        // Pick a random fact, never the same one twice in a row.
        let idx = Math.floor(Math.random() * FACTS.length);
        if (idx === lastIdx.current) idx = (idx + 1) % FACTS.length;
        lastIdx.current = idx;
        setFact(FACTS[idx]);
        setActive(true);
      },
    }),
    [],
  );

  // Drive the typewriter whenever a (new) fact is shown.
  useEffect(() => {
    if (!active || !fact) return;
    clearTimers();
    setCount(0);
    const total = fact.length;
    for (let i = 1; i <= total; i++) {
      timers.current.push(window.setTimeout(() => setCount(i), i * TYPE_MS));
    }
    const typed = total * TYPE_MS;
    // After typing, blink for ~1s (cursor keeps blinking), then fade out.
    timers.current.push(window.setTimeout(() => setActive(false), typed + 1000));
    return clearTimers;
  }, [active, fact]);

  return (
    <div className="pointer-events-none absolute bottom-[80%] left-1/2 z-30 -translate-x-1/2">
      <AnimatePresence>
        {active ? (
          <motion.div
            key="terminal"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="w-[220px] rounded-[10px] border border-[#4f7cff] bg-[#0f172a] p-2.5 shadow-[0_14px_34px_-12px_rgba(15,23,42,0.7)]"
          >
            <div className="mb-2 flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#ffe500]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#2acf2a]" />
            </div>
            <p className="font-mono text-[11px] leading-relaxed text-[#4f7cff]">
              {fact.slice(0, count)}
              <motion.span
                aria-hidden
                animate={{ opacity: [1, 1, 0, 0] }}
                transition={{ duration: 0.9, repeat: Infinity, times: [0, 0.5, 0.5, 1] }}
              >
                _
              </motion.span>
            </p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
});
