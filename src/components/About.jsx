import React from "react";
import profileImg from "../assets/about.jpg";

const About = () => {
  const stats = [
    { value: "3+", label: "Major Projects" },
    { value: "React", label: "Frontend" },
    { value: "Django", label: "Backend" },
    { value: "2025", label: "Journey Start" },
  ];

  const tags = ["React.js", "Python", "Django", "REST APIs", "Tailwind CSS", "JavaScript", "Git"];

  return (
    <section
      id="about"
      className="relative py-28 px-6 md:px-16 bg-[#050508] text-white overflow-hidden"
      style={{ fontFamily: "'Syne', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');
        .about-card {
          background: linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%);
          border: 1px solid rgba(168,85,247,0.12);
          backdrop-filter: blur(12px);
          transition: border-color 0.3s;
        }
        .about-card:hover { border-color: rgba(168,85,247,0.3); }
        .tag-pill {
          background: rgba(168,85,247,0.08);
          border: 1px solid rgba(168,85,247,0.2);
          transition: background 0.2s, border-color 0.2s, transform 0.2s;
        }
        .tag-pill:hover {
          background: rgba(168,85,247,0.18);
          border-color: rgba(168,85,247,0.5);
          transform: translateY(-2px);
        }
        .stat-card {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.06);
          transition: border-color 0.3s, background 0.3s;
        }
        .stat-card:hover {
          background: rgba(168,85,247,0.06);
          border-color: rgba(168,85,247,0.25);
        }
        .img-frame {
          position: relative;
        }
        .img-frame::before {
          content: '';
          position: absolute;
          top: 16px; left: 16px; right: -16px; bottom: -16px;
          border: 1px solid rgba(168,85,247,0.2);
          border-radius: 20px;
          z-index: 0;
        }
      `}</style>

      {/* blobs */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)" }} />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(236,72,153,0.08) 0%, transparent 70%)" }} />

      {/* section label */}
      <div className="flex items-center gap-3 mb-16 max-w-6xl mx-auto">
        <div className="w-8 h-px bg-purple-500" />
        <span className="text-purple-400 text-xs tracking-[0.25em] uppercase font-medium" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          About me
        </span>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-16">

        {/* LEFT — image */}
        <div className="md:w-5/12 flex justify-center">
          <div className="img-frame w-72 md:w-80">
            <img
              src={profileImg}
              alt="Fathimath Sulthana"
              className="relative z-10 w-full rounded-2xl object-cover"
              style={{
                boxShadow: "0 32px 80px rgba(0,0,0,0.6), 0 0 60px rgba(139,92,246,0.15)",
              }}
            />
          </div>
        </div>

        {/* RIGHT — content */}
        <div className="md:w-7/12 space-y-8" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3" style={{ fontFamily: "'Syne', sans-serif" }}>
              Crafting digital
              <br />
              <span style={{
                background: "linear-gradient(135deg, #a855f7, #ec4899)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
                experiences
              </span>
            </h2>
            <p className="text-purple-400 font-medium text-sm tracking-wide">Full-Stack Developer · React.js & Python Django</p>
          </div>

          <p className="text-gray-400 text-base leading-relaxed">
            I'm a passionate Full-Stack Developer with hands-on experience building modern, scalable web applications.
            I specialize in creating seamless user experiences on the frontend with{" "}
            <span className="text-purple-300 font-medium">React.js</span>, and building robust, production-ready backends with{" "}
            <span className="text-purple-300 font-medium">Python Django</span>.
          </p>

          <p className="text-gray-500 text-sm leading-relaxed">
            I love solving real-world problems through clean, efficient code — and I'm always learning something new to sharpen my craft.
          </p>

          {/* tech tags */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="tag-pill text-purple-300 text-xs font-medium px-3 py-1.5 rounded-full">
                {tag}
              </span>
            ))}
          </div>

          {/* stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            {stats.map((s, i) => (
              <div key={i} className="stat-card rounded-2xl p-4 text-center">
                <p className="text-xl font-bold text-purple-400 mb-1" style={{ fontFamily: "'Syne', sans-serif" }}>{s.value}</p>
                <p className="text-gray-500 text-xs uppercase tracking-widest">{s.label}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="pt-2">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white transition"
              style={{ background: "linear-gradient(135deg, #7c3aed, #a855f7)", boxShadow: "0 8px 32px rgba(139,92,246,0.3)" }}
            >
              Get in touch
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;