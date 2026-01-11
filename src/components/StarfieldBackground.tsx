import { useEffect, useRef, useCallback, memo } from "react";

interface Star {
  x: number;
  y: number;
  z: number;
  size: number;
  speed: number;
}

const StarfieldBackground = memo(() => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const starsRef = useRef<Star[]>([]);
  const lastTimeRef = useRef<number>(0);

  const initStars = useCallback((width: number, height: number) => {
    const numStars = 150; // Keep original star count for visual density
    starsRef.current = [];
    for (let i = 0; i < numStars; i++) {
      starsRef.current.push({
        x: Math.random() * width - width / 2,
        y: Math.random() * height - height / 2,
        z: Math.random() * 1000,
        size: Math.random() * 1.5 + 0.5,
        speed: Math.random() * 2 + 1,
      });
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let resizeTimeout: ReturnType<typeof setTimeout>;

    const resize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        const width = window.innerWidth;
        const height = window.innerHeight;

        canvas.width = width * dpr;
        canvas.height = height * dpr;
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
        ctx.scale(dpr, dpr);

        initStars(width, height);
      }, 100);
    };

    const drawStar = (star: Star, width: number, height: number) => {
      const centerX = width / 2;
      const centerY = height / 2;

      // Project 3D to 2D
      const scale = 400 / star.z;
      const x = star.x * scale + centerX;
      const y = star.y * scale + centerY;

      // Early exit for off-screen stars
      if (x < -20 || x > width + 20 || y < -20 || y > height + 20) return;

      // Calculate size and opacity based on distance
      const size = star.size * scale;
      const opacity = Math.min(1, (1000 - star.z) / 500);

      // Draw star with glow
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, size * 2);
      gradient.addColorStop(0, `rgba(34, 211, 238, ${opacity})`);
      gradient.addColorStop(0.5, `rgba(34, 211, 238, ${opacity * 0.3})`);
      gradient.addColorStop(1, "transparent");

      ctx.beginPath();
      ctx.arc(x, y, size * 2, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();

      // Draw core
      ctx.beginPath();
      ctx.arc(x, y, size * 0.5, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
      ctx.fill();

      // Draw streak/trail for fast-moving stars
      if (star.z < 400) {
        const trailLength = (400 - star.z) / 20;
        const trailEndX = x - star.x * scale * 0.05 * trailLength;
        const trailEndY = y - star.y * scale * 0.05 * trailLength;

        const trailGradient = ctx.createLinearGradient(x, y, trailEndX, trailEndY);
        trailGradient.addColorStop(0, `rgba(34, 211, 238, ${opacity * 0.5})`);
        trailGradient.addColorStop(1, "transparent");

        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(trailEndX, trailEndY);
        ctx.strokeStyle = trailGradient;
        ctx.lineWidth = size * 0.8;
        ctx.stroke();
      }
    };

    const animate = (currentTime: number) => {
      // Throttle to ~45fps - good balance of smoothness and performance
      if (currentTime - lastTimeRef.current < 22) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }
      lastTimeRef.current = currentTime;

      const width = window.innerWidth;
      const height = window.innerHeight;

      // Motion blur effect with semi-transparent clear
      ctx.fillStyle = "rgba(5, 8, 22, 0.2)";
      ctx.fillRect(0, 0, width, height);

      const stars = starsRef.current;
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        // Move star towards viewer
        star.z -= star.speed;

        // Reset star when it passes the viewer
        if (star.z <= 0) {
          star.x = Math.random() * width - width / 2;
          star.y = Math.random() * height - height / 2;
          star.z = 1000;
        }

        drawStar(star, width, height);
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener("resize", resize, { passive: true });
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resize);
      clearTimeout(resizeTimeout);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [initStars]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ background: "transparent" }}
      aria-hidden="true"
    />
  );
});

StarfieldBackground.displayName = "StarfieldBackground";

export default StarfieldBackground;
