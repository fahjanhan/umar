"use client";

import { useEffect, useRef, useState } from "react";

interface Particle {
  origX: number;
  origY: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
}

export default function ParticleText({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: -9999, y: -9999, active: false });
  const animRef = useRef<number>(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext("2d")!;
    const dpr = Math.min(window.devicePixelRatio, 2);

    const SAMPLE_GAP = 3;
    const SCATTER_RADIUS = 120;
    const SCATTER_FORCE = 8;

    function build() {
      const w = container!.offsetWidth;
      const h = container!.offsetHeight;
      canvas!.width = w * dpr;
      canvas!.height = h * dpr;
      canvas!.style.width = w + "px";
      canvas!.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      ctx.clearRect(0, 0, w, h);
      const fontSize = w < 640 ? w * 0.14 : w * 0.11;
      ctx.font = `900 ${fontSize}px system-ui, -apple-system, sans-serif`;
      ctx.fillStyle = "#fff";
      ctx.textBaseline = "middle";
      ctx.textAlign = "left";

      const lines = ["WE", "CRAFT", "WORLDS"];
      const lineH = fontSize * 0.88;
      const startY = h - lineH * lines.length - 20;

      lines.forEach((line, i) => {
        ctx.fillText(line, 0, startY + i * lineH + lineH / 2);
      });

      const imgData = ctx.getImageData(0, 0, w * dpr, h * dpr);
      const px = imgData.data;
      const particles: Particle[] = [];

      for (let y = 0; y < h * dpr; y += SAMPLE_GAP * dpr) {
        for (let x = 0; x < w * dpr; x += SAMPLE_GAP * dpr) {
          const i = (y * w * dpr + x) * 4;
          if (px[i + 3] > 128) {
            const size = Math.random() * 1.5 + 1;
            particles.push({
              origX: x / dpr,
              origY: y / dpr,
              x: x / dpr,
              y: y / dpr,
              vx: 0,
              vy: 0,
              size,
            });
          }
        }
      }

      particlesRef.current = particles;
      setReady(true);
    }

    build();

    const onResize = () => build();
    window.addEventListener("resize", onResize);

    const getPos = (e: MouseEvent | Touch) => {
      const rect = canvas!.getBoundingClientRect();
      return { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };

    const onMouseMove = (e: MouseEvent) => {
      const p = getPos(e);
      mouseRef.current = { ...p, active: true };
    };
    const onMouseLeave = () => {
      mouseRef.current = { x: -9999, y: -9999, active: false };
    };
    const onTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      const p = getPos(e.touches[0]);
      mouseRef.current = { ...p, active: true };
    };
    const onTouchEnd = () => {
      mouseRef.current = { x: -9999, y: -9999, active: false };
    };

    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseleave", onMouseLeave);
    canvas.addEventListener("touchmove", onTouchMove, { passive: false });
    canvas.addEventListener("touchend", onTouchEnd);

    const animate = () => {
      animRef.current = requestAnimationFrame(animate);
      const particles = particlesRef.current;
      const mouse = mouseRef.current;

      ctx.clearRect(0, 0, canvas!.width / dpr, canvas!.height / dpr);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (mouse.active) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < SCATTER_RADIUS) {
            const force = (1 - dist / SCATTER_RADIUS) * SCATTER_FORCE;
            const angle = Math.atan2(dy, dx);
            p.vx += Math.cos(angle) * force;
            p.vy += Math.sin(angle) * force;
          }
        }

        p.vx += (p.origX - p.x) * 0.06;
        p.vy += (p.origY - p.y) * 0.06;
        p.vx *= 0.88;
        p.vy *= 0.88;
        p.x += p.vx;
        p.y += p.vy;

        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        const alpha = Math.min(1, 0.4 + speed * 0.08);

        ctx.fillStyle = `rgba(255,255,255,${alpha})`;
        ctx.fillRect(p.x, p.y, p.size, p.size);
      }
    };

    animate();

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", onResize);
      canvas.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("mouseleave", onMouseLeave);
      canvas.removeEventListener("touchmove", onTouchMove);
      canvas.removeEventListener("touchend", onTouchEnd);
    };
  }, [text]);

  return (
    <div ref={containerRef} className={`relative w-full ${className}`}>
      <canvas
        ref={canvasRef}
        className={`w-full cursor-crosshair transition-opacity duration-500 ${ready ? "opacity-100" : "opacity-0"}`}
      />
    </div>
  );
}
