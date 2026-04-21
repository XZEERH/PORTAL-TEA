import React, { useEffect, useRef } from 'react';

export const Starfield = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let stars = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    const initStars = () => {
      stars = [];
      // Jumlah bintang disesuaikan dengan luas layar
      const count = Math.floor((canvas.width * canvas.height) / 2000);
      for (let i = 0; i < count; i++) {
        const z = Math.random() * canvas.width;
        const colors = ['#ffffff', '#f2b05e', '#e2e8f0', '#ffffff'];
        stars.push({
          x: Math.random() * canvas.width - canvas.width / 2,
          y: Math.random() * canvas.height - canvas.height / 2,
          z: z,
          size: Math.random() * 1.5 + 0.5,
          color: colors[Math.floor(Math.random() * colors.length)],
          opacity: Math.random(),
          twinkle: Math.random() * 0.05,
        });
      }
    };

    const draw = () => {
      // Membersihkan canvas setiap frame
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      stars.forEach((star) => {
        // Proyeksi 3D sederhana
        const k = 128 / star.z;
        const px = star.x * k + centerX;
        const py = star.y * k + centerY;

        if (px >= 0 && px <= canvas.width && py >= 0 && py <= canvas.height) {
          const size = star.size * k;
          const opacity = (1 - star.z / canvas.width) * star.opacity;

          ctx.beginPath();
          ctx.arc(px, py, size / 2, 0, Math.PI * 2);
          ctx.fillStyle = star.color;
          ctx.globalAlpha = opacity;
          ctx.fill();

          // Efek kelap-kelip (twinkle)
          star.opacity += star.twinkle;
          if (star.opacity > 1 || star.opacity < 0.2) star.twinkle *= -1;
        }

        // Menggerakkan bintang ke arah penonton (efek warp)
        star.z -= 0.2;
        if (star.z <= 0) {
          star.z = canvas.width;
          star.x = Math.random() * canvas.width - canvas.width / 2;
          star.y = Math.random() * canvas.height - canvas.height / 2;
        }
      });

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resize);
    resize();
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <div className="nebula-bg" />
      <div className="nebula-texture" />
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-[-1] pointer-events-none"
      />
    </>
  );
};
