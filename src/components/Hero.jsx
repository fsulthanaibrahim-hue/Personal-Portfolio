import React, { useEffect, useRef } from "react";
import heroImg from "../assets/hero.jpg";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.2 + 0.3,
      dx: (Math.random() - 0.5) * 0.3,
      dy: (Math.random() - 0.5) * 0.3,
      o: Math.random() * 0.5 + 0.1,
    }));

    let raf;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(168,85,247,${p.o})`;
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });
      raf = requestAnimationFrame(draw);
    };
    draw();

    const onResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", onResize); };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-16 bg-[#050508] text-white overflow-hidden"
      style={{ fontFamily: "'Syne', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');
        .hero-fade { animation: fadeUp 0.9s cubic-bezier(0.16,1,0.3,1) both; }
        .hero-fade-1 { animation-delay: 0.1s; }
        .hero-fade-2 { animation-delay: 0.25s; }
        .hero-fade-3 { animation-delay: 0.4s; }
        .hero-fade-4 { animation-delay: 0.55s; }
        .hero-img-in { animation: imgIn 1.1s cubic-bezier(0.16,1,0.3,1) 0.3s both; }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes imgIn {
          from { opacity: 0; transform: scale(0.92) translateY(16px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        .ring-spin {
          animation: rotateSlow 12s linear infinite;
          transform-origin: center;
        }
        @keyframes rotateSlow { to { transform: rotate(360deg); } }
        .hero-btn {
          position: relative; overflow: hidden;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .hero-btn:hover { transform: translateY(-2px); }
        .hero-btn::after {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.08), transparent 70%);
          transform: translateX(-100%);
          transition: transform 0.5s;
        }
        .hero-btn:hover::after { transform: translateX(100%); }
        .scroll-line {
          animation: scrollPulse 2s ease-in-out infinite;
        }
        @keyframes scrollPulse {
          0%, 100% { transform: scaleY(1); opacity: 0.4; }
          50% { transform: scaleY(1.4); opacity: 1; }
        }
      `}</style>

      {/* Particle canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" style={{ opacity: 0.6 }} />

      {/* Mesh gradient blobs */}
      <div className="absolute top-[-120px] left-[-80px] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.18) 0%, transparent 70%)" }} />
      <div className="absolute bottom-[-100px] right-[-60px] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(236,72,153,0.14) 0%, transparent 70%)" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%)" }} />

      {/* ── LEFT TEXT ── */}
      <div className="z-10 md:w-1/2 text-center md:text-left space-y-5 max-w-xl">

        {/* label */}
        <div className="hero-fade hero-fade-1 inline-flex items-center gap-2">
          <div className="w-6 h-px bg-purple-500" />
          <span style={{ fontFamily: "'DM Sans', sans-serif" }} className="text-purple-400 text-sm font-medium tracking-[0.2em] uppercase">
            Hello, I'm
          </span>
        </div>

        {/* name */}
        <h1 className="hero-fade hero-fade-2 text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight">
          Fathimath
          <br />
          <span style={{
            background: "linear-gradient(135deg, #a855f7 0%, #ec4899 50%, #6366f1 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
            Sulthana
          </span>
        </h1>

        {/* typing */}
        <div className="hero-fade hero-fade-3 flex items-center gap-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
          <span className="text-lg md:text-xl text-gray-300 font-normal">
            <TypeAnimation
              sequence={["Full-Stack Developer", 1500, "React.js Developer", 1500, "Python Developer", 1500, "Django Developer", 1500]}
              speed={50}
              repeat={Infinity}
            />
          </span>
        </div>

        {/* tagline */}
        <p className="hero-fade hero-fade-3 text-gray-500 text-sm md:text-base leading-relaxed max-w-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          Crafting scalable, modern web experiences — one component at a time.
        </p>

        {/* CTAs */}
        <div className="hero-fade hero-fade-4 flex flex-wrap justify-center md:justify-start gap-3 pt-2">
          <a
            href="#projects"
            className="hero-btn px-6 py-3 rounded-xl text-sm font-semibold text-white shadow-lg shadow-purple-900/40"
            style={{ background: "linear-gradient(135deg, #7c3aed, #a855f7)" }}
          >
            View Work →
          </a>
          <a
            href="#contact"
            className="hero-btn px-6 py-3 rounded-xl text-sm font-semibold text-purple-300 border border-purple-500/30 hover:border-purple-400/60 bg-purple-500/5 transition"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Let's Talk
          </a>
        </div>

        {/* scroll hint */}
        <div className="hero-fade hero-fade-4 hidden md:flex items-center gap-3 pt-6">
          <div className="flex flex-col gap-1 items-center">
            <div className="w-px h-8 bg-purple-500/40 scroll-line" />
            <div className="w-px h-4 bg-purple-500/20" />
          </div>
          <span className="text-[11px] text-gray-600 uppercase tracking-widest" style={{ fontFamily: "'DM Sans', sans-serif" }}>Scroll</span>
        </div>
      </div>

      {/* ── RIGHT IMAGE ── */}
      <div className="z-10 md:w-1/2 mt-14 md:mt-0 flex justify-center items-center">
        <div className="hero-img-in relative">
          {/* spinning ring */}
          <svg className="ring-spin absolute inset-0 w-full h-full" viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="160" cy="160" r="155" stroke="url(#ringGrad)" strokeWidth="1" strokeDasharray="6 14" strokeLinecap="round" />
            <defs>
              <linearGradient id="ringGrad" x1="0" y1="0" x2="320" y2="320" gradientUnits="userSpaceOnUse">
                <stop stopColor="#a855f7" stopOpacity="0.8" />
                <stop offset="0.5" stopColor="#ec4899" stopOpacity="0.4" />
                <stop offset="1" stopColor="#6366f1" stopOpacity="0.2" />
              </linearGradient>
            </defs>
          </svg>

          {/* glow behind image */}
          <div className="absolute inset-8 rounded-full blur-2xl"
            style={{ background: "radial-gradient(circle, rgba(139,92,246,0.4) 0%, transparent 70%)" }} />

          <img
            src={heroImg}
            alt="Fathimath Sulthana"
            className="relative w-56 md:w-72 rounded-full object-cover"
            style={{
              border: "2px solid rgba(168,85,247,0.5)",
              boxShadow: "0 0 60px rgba(139,92,246,0.3), 0 0 120px rgba(139,92,246,0.1)",
            }}
          />

          {/* floating badge */}
          <div className="absolute -bottom-2 -right-4 bg-[#0f0f16] border border-purple-500/30 rounded-2xl px-4 py-2 shadow-xl shadow-black/50"
            style={{ fontFamily: "'DM Sans', sans-serif" }}>
            <p className="text-xs text-gray-500 mb-0.5">Status</p>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-medium text-emerald-400">Open to work</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;