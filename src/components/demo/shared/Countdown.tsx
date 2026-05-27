"use client";

import { useEffect, useState } from "react";

function getTimeLeft(target: Date) {
  const diff = target.getTime() - Date.now();
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

type CountdownProps = {
  date: string;
  className?: string;
  labelClass?: string;
  boxClass?: string;
};

export function Countdown({ date, className = "", labelClass = "", boxClass = "" }: CountdownProps) {
  const target = new Date(date);
  const [left, setLeft] = useState(getTimeLeft(target));

  useEffect(() => {
    const id = setInterval(() => setLeft(getTimeLeft(target)), 1000);
    return () => clearInterval(id);
  }, [date, target]);

  const items = [
    { v: left.days, l: "Días" },
    { v: left.hours, l: "Horas" },
    { v: left.minutes, l: "Min" },
    { v: left.seconds, l: "Seg" },
  ];

  return (
    <div className={className}>
      <div className="grid grid-cols-4 gap-3 md:gap-6">
        {items.map((item) => (
          <div key={item.l} className={`text-center ${boxClass}`}>
            <p className="font-serif text-3xl md:text-4xl">{String(item.v).padStart(2, "0")}</p>
            <p className={`mt-1 text-[0.6rem] tracking-[0.25em] uppercase ${labelClass}`}>
              {item.l}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
