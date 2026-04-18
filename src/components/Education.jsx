import React from "react";

const education = [
  {
    institution: "S.A.B.T.M.H.S.S Thayineri",
    location: "Payyanur, Kerala",
    degree: "Higher Secondary Education",
    year: "2022 – 2024",
    icon: "🎓",
    tags: ["Science Stream"],
    color: "#818cf8",
  },
  {
    institution: "FullStack Development Training",
    location: "ZIAS Academy",
    degree: "Frontend & Backend Development",
    year: "2025 – 2026",
    icon: "💻",
    tags: ["React.js", "Python", "Django", "DRF", "HTML", "CSS", "JavaScript"],
    projects: ["TRENDORA", "EYRA", "ZIAS"],
    color: "#a855f7",
    current: true,
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="relative py-28 px-6 md:px-16 bg-[#050508] text-white overflow-hidden"
      style={{ fontFamily: "'Syne', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');
        .edu-card {
          background: linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01));
          border: 1px solid rgba(255,255,255,0.07);
          transition: border-color 0.3s, transform 0.3s;
          position: relative;
        }
        .edu-card:hover {
          transform: translateX(6px);
          border-color: rgba(168,85,247,0.3);
        }
        .edu-card.current {
          border-color: rgba(168,85,247,0.2);
        }
        .edu-tag {
          background: rgba(168,85,247,0.08);
          border: 1px solid rgba(168,85,247,0.2);
          transition: background 0.2s;
        }
        .edu-tag:hover { background: rgba(168,85,247,0.18); }
        .project-tag {
          background: rgba(236,72,153,0.08);
          border: 1px solid rgba(236,72,153,0.2);
          color: #f9a8d4;
        }
        .timeline-dot::before {
          content: '';
          position: absolute;
          left: -25px;
          top: 50%;
          transform: translateY(-50%);
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(168,85,247,0.8);
          box-shadow: 0 0 12px rgba(168,85,247,0.6);
        }
      `}</style>

      {/* blobs */}
      <div className="absolute top-0 right-0 w-[350px] h-[350px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%)" }} />

      {/* header */}
      <div className="max-w-3xl mx-auto mb-16">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-8 h-px bg-purple-500" />
          <span className="text-purple-400 text-xs tracking-[0.25em] uppercase font-medium" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Background
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Education &{" "}
          <span style={{
            background: "linear-gradient(135deg, #a855f7, #ec4899)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
            Training
          </span>
        </h2>
      </div>

      {/* timeline */}
      <div className="max-w-3xl mx-auto relative">
        {/* vertical line */}
        <div className="absolute left-5 top-8 bottom-8 w-px bg-gradient-to-b from-purple-500/40 via-purple-500/20 to-transparent" />

        <div className="space-y-8 pl-16">
          {education.map((edu, i) => (
            <div key={i} className="relative timeline-dot">
              {/* dot with icon */}
              <div
                className="absolute -left-[52px] top-6 w-10 h-10 rounded-xl flex items-center justify-center text-xl border"
                style={{
                  background: `${edu.color}15`,
                  borderColor: `${edu.color}30`,
                  boxShadow: `0 0 20px ${edu.color}20`,
                }}
              >
                {edu.icon}
              </div>

              <div className={`edu-card ${edu.current ? "current" : ""} rounded-2xl p-6`}>
                {/* current badge */}
                {edu.current && (
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-2.5 py-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-emerald-400 text-[10px] font-medium" style={{ fontFamily: "'DM Sans', sans-serif" }}>Ongoing</span>
                  </div>
                )}

                <div className="mb-4">
                  <div className="flex items-start gap-2 mb-1">
                    <h3 className="text-lg font-bold text-white leading-tight">{edu.institution}</h3>
                  </div>
                  <p className="text-gray-500 text-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>{edu.location}</p>
                </div>

                <p className="text-gray-300 text-sm mb-1 font-medium" style={{ fontFamily: "'DM Sans', sans-serif" }}>{edu.degree}</p>
                <p className="text-purple-400 text-xs font-semibold mb-4 tracking-wide">{edu.year}</p>

                {/* skill tags */}
                {edu.tags && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {edu.tags.map(tag => (
                      <span key={tag} className="edu-tag text-purple-300 text-[11px] font-medium px-2.5 py-1 rounded-full" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* project tags */}
                {edu.projects && (
                  <div>
                    <p className="text-gray-600 text-[11px] uppercase tracking-widest mb-2 font-medium" style={{ fontFamily: "'DM Sans', sans-serif" }}>Projects built</p>
                    <div className="flex flex-wrap gap-2">
                      {edu.projects.map(p => (
                        <span key={p} className="project-tag text-[11px] font-semibold px-3 py-1 rounded-full" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;