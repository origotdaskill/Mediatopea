"use client";

import createGlobe from "cobe";
import { useEffect, useRef, useState } from "react";
import { useSpring } from "react-spring";

export default function Globe() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  const [globeVersion, setGlobeVersion] = useState(0);

  const [{ r }, api] = useSpring(() => ({
    r: 0,
    config: {
      mass: 1,
      tension: 280,
      friction: 40,
      precision: 0.001,
    },
  }));

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    
    const handleContextLost = (event: Event) => {
      event.preventDefault();
      console.log("WebGL context lost. Will attempt to restore.");
    };
    
    const handleContextRestored = () => {
      console.log("WebGL context restored. Re-initializing globe.");
      setGlobeVersion((v) => v + 1);
    };

    canvas.addEventListener("webglcontextlost", handleContextLost);
    canvas.addEventListener("webglcontextrestored", handleContextRestored);

    let phi = 0;
    let width = 0;
    const onResize = () =>
      canvasRef.current && (width = canvasRef.current.offsetWidth);
    window.addEventListener("resize", onResize);
    onResize();

    const globe = createGlobe(canvasRef.current, {
      // ... all your globe settings
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.3,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.459, 0.459, 0.459],
      markerColor: [0.878, 0.878, 0.878],
      glowColor: [0.698, 0.698, 0.698],
      markers: [
        { location: [33.5731, -7.5898], size: 0.1 },
        { location: [40.7128, -74.006], size: 0.1 },
        { location: [35.6762, 139.6503], size: 0.1 },
        { location: [51.5074, -0.1278], size: 0.05 },
        { location: [19.076, 72.8777], size: 0.05 },
      ],
      onRender: (state) => {
        if (!pointerInteracting.current) {
          phi += 0.005;
        }
        state.phi = phi + r.get();
        state.width = width * 2;
        state.height = width * 2;
      },
    });

    setTimeout(() => (canvasRef.current!.style.opacity = "1"));

    return () => {
      globe.destroy();
      canvas.removeEventListener("webglcontextlost", handleContextLost);
      canvas.removeEventListener("webglcontextrestored", handleContextRestored);
    };
  }, [r, globeVersion]);

  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <canvas
        // ✅ THE FIX: Add the key prop here
        key={globeVersion}
        ref={canvasRef}
        // ... all your event handlers
        onPointerDown={(e) => {
          pointerInteracting.current =
            e.clientX - pointerInteractionMovement.current;
          canvasRef.current!.style.cursor = "grabbing";
        }}
        onPointerUp={() => {
          pointerInteracting.current = null;
          canvasRef.current!.style.cursor = "grab";
        }}
        onPointerOut={() => {
          pointerInteracting.current = null;
          canvasRef.current!.style.cursor = "grab";
        }}
        onMouseMove={(e) => {
          if (pointerInteracting.current !== null) {
            const delta = e.clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta;
            api.start({
              r: delta / 200,
            });
          }
        }}
        onTouchMove={(e) => {
          if (pointerInteracting.current !== null && e.touches[0]) {
            const delta = e.touches[0].clientX - pointerInteractionMovement.current;
            pointerInteractionMovement.current = delta;
            api.start({
              r: delta / 100,
            });
          }
        }}
        style={{
          width: "100%",
          height: "100%",
          contain: "layout paint size",
          cursor: "auto",
          opacity: 0,
          transition: "opacity 1s ease",
        }}
      />
    </div>
  );
}