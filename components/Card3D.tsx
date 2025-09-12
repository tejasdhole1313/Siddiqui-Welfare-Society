'use client'
import React from 'react';

export function Card3D({ children }: { children: React.ReactNode }) {
  const ref = React.createRef<HTMLDivElement>();
  return (
    <div
      ref={ref}
      onMouseMove={(e) => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const cx = rect.width / 2;
        const cy = rect.height / 2;
        const dx = (x - cx) / cx;
        const dy = (y - cy) / cy;
        const tiltX = dy * 6;
        const tiltY = -dx * 8;
        el.style.transform = `perspective(900px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateZ(8px)`;
      }}
      onMouseLeave={() => {
        if (!ref.current) return;
        ref.current.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0px)";
      }}
      className="group bg-white rounded-2xl shadow-md overflow-hidden"
      style={{ transition: "transform 0.25s ease, box-shadow 0.25s ease" }}
    >
      {children}
    </div>
  );
}
