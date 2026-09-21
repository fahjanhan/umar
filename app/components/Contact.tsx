"use client";

import { useState } from "react";

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];
const WEEKDAYS = ["M", "T", "W", "T", "F", "S", "S"];
const TIMES = ["09:00", "10:30", "12:00", "13:30", "15:00", "16:30"];

export default function Contact() {
  const now = new Date();
  const [year, setYear] = useState(now.getFullYear());
  const [month, setMonth] = useState(now.getMonth());
  const [selected, setSelected] = useState<number | null>(null);
  const [time, setTime] = useState<string | null>(null);

  const firstWeekday = (new Date(year, month, 1).getDay() + 6) % 7;
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const today = now.getDate();
  const isCurrentMonth =
    year === now.getFullYear() && month === now.getMonth();
  const minIndex = now.getFullYear() * 12 + now.getMonth();
  const maxIndex = now.getFullYear() * 12 + now.getMonth() + 1;
  const currentIndex = year * 12 + month;
  const canGoPrev = currentIndex > minIndex;
  const canGoNext = currentIndex < maxIndex;
  const nowMinutes = now.getHours() * 60 + now.getMinutes();
  const isTodaySelected =
    isCurrentMonth && selected === now.getDate();

  const isPast = (day: number) => {
    if (year < now.getFullYear()) return true;
    if (year > now.getFullYear()) return false;
    if (month < now.getMonth()) return true;
    if (month > now.getMonth()) return false;
    return day < now.getDate();
  };

  const toMinutes = (t: string) => {
    const [h, m] = t.split(":").map(Number);
    return h * 60 + m;
  };

  const timeDisabled = (t: string) =>
    isTodaySelected && toMinutes(t) < nowMinutes;

  const shift = (delta: number) => {
    const d = new Date(year, month + delta, 1);
    setYear(d.getFullYear());
    setMonth(d.getMonth());
    setSelected(null);
    setTime(null);
  };

  return (
    <section id="contact" className="px-2 md:px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-baseline justify-between mb-12">
          <div className="flex items-baseline gap-6">
            <p className="text-xs tracking-[0.3em] uppercase opacity-50">
              [ Contact ]
            </p>
            <span
              className="inline-block w-2 h-2 rounded-full bg-white"
              style={{ animation: "blink 1.5s steps(1) infinite" }}
            />
          </div>
          <span className="text-xs tracking-[0.3em] uppercase opacity-40">
            35MM · Open Reel
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative border border-white/25 bg-white/[0.02] p-8 md:p-12 flex flex-col justify-between min-h-[420px]">
            <span className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-white/40" />
            <span className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-white/40" />
            <span className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-white/40" />
            <span className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-white/40" />

            <div>
              <p className="text-[10px] md:text-xs tracking-[0.3em] uppercase opacity-50 mb-4">
                Direct Line
              </p>
              <a
                href="mailto:hello@firstdraft.studio"
                className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight break-all border-b border-white/20 pb-2 hover:border-white transition-colors"
              >
                hello@firstdraft.studio
              </a>
            </div>

            <div className="mt-16">
              <p className="text-[10px] md:text-xs tracking-[0.3em] uppercase opacity-40 mb-4">
                Response within 48 hours
              </p>
              <div className="h-10 flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-red-700" />
                <span className="text-xs tracking-[0.3em] uppercase opacity-70">
                  Open for new bookings
                </span>
              </div>
            </div>
          </div>

          <div className="relative border border-white/25 bg-white/[0.02]">
            <span className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-white/40" />
            <span className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-white/40" />
            <span className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-white/40" />
            <span className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-white/40" />

            <div className="flex items-center justify-between border-b border-white/25 px-4 md:px-6 py-3">
              <button
                type="button"
                onClick={() => shift(-1)}
                disabled={!canGoPrev}
                className={`text-sm transition-colors ${
                  canGoPrev
                    ? "opacity-50 hover:text-white hover:opacity-100"
                    : "opacity-15 cursor-not-allowed"
                }`}
                aria-label="Previous month"
              >
                [ ‹ ]
              </button>
              <p className="font-display text-lg md:text-xl">
                {MONTHS[month]} <span className="opacity-40">{year}</span>
              </p>
              <button
                type="button"
                onClick={() => shift(1)}
                disabled={!canGoNext}
                className={`text-sm transition-colors ${
                  canGoNext
                    ? "opacity-50 hover:text-white hover:opacity-100"
                    : "opacity-15 cursor-not-allowed"
                }`}
                aria-label="Next month"
              >
                [ › ]
              </button>
            </div>

            <div className="grid grid-cols-7 border-t border-white/25">
              {WEEKDAYS.map((d, i) => (
                <div
                  key={i}
                  className="py-2 text-center font-mono text-[10px] tracking-widest opacity-40"
                >
                  {d}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7">
              {Array.from({ length: firstWeekday }).map((_, i) => (
                <div key={`empty-${i}`} className="aspect-square" />
              ))}
              {Array.from({ length: daysInMonth }).map((_, i) => {
                const day = i + 1;
                const isToday = isCurrentMonth && day === today;
                const isSelected = selected === day;
                const disabled = isPast(day);
                return (
                  <button
                    key={day}
                    type="button"
                    disabled={disabled}
                    onClick={() => setSelected(isSelected ? null : day)}
                    className={`aspect-square border border-white/10 font-mono text-xs transition-colors ${
                      isSelected
                        ? "bg-red-800 text-black"
                        : isToday
                          ? "bg-white/15 hover:bg-white/25"
                          : disabled
                            ? "opacity-25 cursor-not-allowed"
                            : "opacity-60 hover:opacity-100 hover:bg-white/10"
                    }`}
                  >
                    {day}
                  </button>
                );
              })}
            </div>

            <div className="border-t border-white/25 px-4 md:px-6 py-4">
              <p className="text-[10px] md:text-xs tracking-[0.3em] uppercase opacity-50 mb-3">
                {selected ? "Pick a slot" : "Select a date first"}
              </p>
              <div className="grid grid-cols-3 gap-2">
                {TIMES.map((t) => {
                  const isTime = time === t;
                  const disabled = selected === null || timeDisabled(t);
                  return (
                    <button
                      key={t}
                      type="button"
                      disabled={disabled}
                      onClick={() => setTime(isTime ? null : t)}
                      className={`border px-2 py-2 font-mono text-xs tracking-wide transition-colors ${
                        isTime
                          ? "bg-red-800 border-red-800 text-black"
                          : disabled
                            ? "border-white/10 text-white/20 opacity-50 cursor-not-allowed"
                            : "border-white/20 opacity-70 hover:opacity-100 hover:bg-white/10"
                      }`}
                    >
                      {t}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="border-t border-white/25 px-4 md:px-6 py-4 flex items-center justify-between gap-4">
              <p className="text-[10px] md:text-xs tracking-[0.3em] uppercase opacity-50">
                {selected && time
                  ? `${MONTHS[month]} ${selected.toString().padStart(2, "0")} · ${time}`
                  : selected
                    ? `Pick a slot · ${MONTHS[month]} ${selected.toString().padStart(2, "0")}`
                    : "Select a date to book"}
              </p>
              <a
                href="mailto:hello@firstdraft.studio"
                className={`bg-white px-4 py-2.5 text-[11px] font-semibold tracking-[0.2em] uppercase text-black transition-colors hover:bg-red-800 ${
                  selected && time ? "" : "opacity-30 pointer-events-none"
                }`}
              >
                Book Slot
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}