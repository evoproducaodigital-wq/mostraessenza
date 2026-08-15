import { useEffect, useRef } from "react";

type Props = {
  src: string;
  title: string;
};

export default function Panorama360({ src, title }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    let viewer: { destroy?: () => void } | undefined;

    (async () => {
      await import("pannellum/build/pannellum.css");
      await import("pannellum/build/pannellum.js");
      if (cancelled || !containerRef.current) return;

      const pannellum = (window as unknown as { pannellum?: any }).pannellum;
      if (!pannellum) return;

      viewer = pannellum.viewer(containerRef.current, {
        type: "equirectangular",
        panorama: src,
        title,
        autoLoad: true,
        autoRotate: -2,
        showZoomCtrl: true,
        showFullscreenCtrl: true,
        keyboardZoom: true,
        mouseZoom: true,
        hfov: 100,
        backgroundColor: [0.04, 0.04, 0.04],
      });
    })();

    return () => {
      cancelled = true;
      try {
        viewer?.destroy?.();
      } catch {
        /* noop */
      }
    };
  }, [src, title]);

  return <div ref={containerRef} className="h-full w-full" />;
}
