import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  z: number;
  size: number;
  speed: number;
}

const StarfieldBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let stars: Star[] = [];
    const numStars = 150;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    const initStars = () => {
      stars = [];
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width - canvas.width / 2,
          y: Math.random() * canvas.height - canvas.height / 2,
          z: Math.random() * 1000,
          size: Math.random() * 1.5 + 0.5,
          speed: Math.random() * 2 + 1,
        });
      }
    };

    const drawStar = (star: Star) => {
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      
      // Project 3D to 2D
      const scale = 400 / star.z;
      const x = star.x * scale + centerX;
      const y = star.y * scale + centerY;
      
      // Calculate size and opacity based on distance
      const size = star.size * scale;
      const opacity = Math.min(1, (1000 - star.z) / 500);
      
      if (x < 0 || x > canvas.width || y < 0 || y > canvas.height) return;
      
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
        const trailGradient = ctx.createLinearGradient(
          x, y,
          x - (star.x * scale * 0.1), y - (star.y * scale * 0.1)
        );
        trailGradient.addColorStop(0, `rgba(34, 211, 238, ${opacity * 0.5})`);
        trailGradient.addColorStop(1, "transparent");
        
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x - (star.x * scale * 0.05 * trailLength), y - (star.y * scale * 0.05 * trailLength));
        ctx.strokeStyle = trailGradient;
        ctx.lineWidth = size * 0.8;
        ctx.stroke();
      }
    };

    const animate = () => {
      ctx.fillStyle = "rgba(5, 8, 22, 0.2)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      stars.forEach((star) => {
        // Move star towards viewer
        star.z -= star.speed;
        
        // Reset star when it passes the viewer
        if (star.z <= 0) {
          star.x = Math.random() * canvas.width - canvas.width / 2;
          star.y = Math.random() * canvas.height - canvas.height / 2;
          star.z = 1000;
        }
        
        drawStar(star);
      });
      
      animationId = requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener("resize", resize);
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ background: "transparent" }}
    />
  );
};

export default StarfieldBackground;
