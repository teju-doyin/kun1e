"use client";
import React, { useEffect, useRef, useState } from "react";
import { NumberDisplay } from "@/types";

const expNumbers: NumberDisplay[] = [
  { id: 0, number: 8, label: "years of experience" },
  { id: 1, number: 50, label: "project completed", differentStyling: true },
  { id: 2, number: 25, label: "happy clients" },
];

const useCountUp = (
  target: number,
  duration: number = 2000,
  start: boolean,
) => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    if (!start) return;

    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [start, target, duration]);

  return count;
};

const NumberItem = ({ item }: { item: NumberDisplay }) => {
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const count = useCountUp(item.number, 2000, hasStarted);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setHasStarted(true);
      },
      { threshold: 0.5 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`flex-col-center py-4 flex-1 ${item.differentStyling ? "bg-gray text-off-white" : ""}`}
    >
      <p className="font-semibold text-3xl mb-1">{count}+</p>
      <p className="uppercase text-xs">{item.label}</p>
    </div>
  );
};

const Numbers = () => {
  return (
    <div className="w-[95%] mx-auto medium:flex medium:justify-around border border-black mb-12">
      {expNumbers.map((item) => (
        <NumberItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Numbers;
