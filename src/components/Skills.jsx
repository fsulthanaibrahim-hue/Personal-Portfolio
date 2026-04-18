import React, { useEffect, useRef, useState } from "react";
import { FaReact, FaPython, FaGitAlt, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import { SiDjango, SiTailwindcss } from "react-icons/si";
import { MdHttp } from "react-icons/md";

const skills = [
  { name: "React.js",       level: 80, icon: <FaReact />,       color: "#38bdf8", cat: "Frontend" },
  { name: "HTML5",          level: 90, icon: <FaHtml5 />,       color: "#fb923c", cat: "Frontend" },
  { name: "CSS / Tailwind", level: 85, icon: <SiTailwindcss />, color: "#818cf8", cat: "Frontend" },
  { name: "JavaScript",     level: 75, icon: <FaJs />,          color: "#fbbf24", cat: "Frontend" },
  { name: "Django",         level: 80, icon: <SiDjango />,      color: "#34d399", cat: "Backend"  },
  { name: "Python",         level: 80, icon: <FaPython />,      color: "#facc15", cat: "Backend"  },
  { name: "REST APIs",      level: 70, icon: <MdHttp />,        color: "#f472b6", cat: "Backend"  },
  { name: "Git / GitHub",   level: 85, icon: <FaGitAlt />,      color: "#f87171", cat: "Tools"    },
];

const SkillBar = ({ skill, visible }) => (
  <div className="skill-item group">
    <div className="flex items-center justify-between mb-2">
      <div className="flex items-center gap-2.5">
        <span className="text-lg" style={{ color: skill.color }}>{skill.icon}</span>
        <span className="text-sm font-medium text-gray-200" style={{ fontFamily: "'DM Sans', sans-serif" }}>{skill.name}</span>
      </div>
      <span className="text-xs font-semibold" style={{ color: skill.color, fontFamily: "'Syne', sans-serif" }}>
        {skill.level}%
      </span>
    </div>
    <div className="h-1 bg-white/5 rounded-full overflow-hidden">
      <div
        className="h-full rounded-full transition-all duration-1000 ease-out"
        style={{
          width: visible ? `${skill.level}%` : "0%",
          background: `linear-gradient(90deg, ${skill.color}99, ${skill.color})`,
          boxShadow: `0 0 12px ${skill.color}60`,
        }}
      />
    </div>
  </div>
);

const Skills = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const categories = [...new Set(skills.map(s => s.cat))];

  return (
    <section
      id="skills"
      className="relative py-28 px-6 md:px-16 bg-[#050508] text-white overflow-hidden"
      ref={ref}
      style={{ fontFamily: "'Syne', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');
        .skill-card {
          background: linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01));
          border: 1px solid rgba(255,255,255,0.06);
          transition: border-color 0.3s, transform 0.3s;
        }
        .skill-card:hover {
          border-color: rgba(168,85,247,0.25);
          transform: translateY(-4px);
        }
        .cat-label {
          background: rgba(168,85,247,0.08);
          border: 1px solid rgba(168,85,247,0.2);
        }
      `}</style>

      {/* blobs */}
      <div className="absolute top-1/4 left-0 w-[350px] h-[350px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)" }} />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(236,72,153,0.07) 0%, transparent 70%)" }} />

      {/* header */}
      <div className="max-w-6xl mx-auto mb-16">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-8 h-px bg-purple-500" />
          <span className="text-purple-400 text-xs tracking-[0.25em] uppercase font-medium" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Expertise
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Technical{" "}
          <span style={{
            background: "linear-gradient(135deg, #a855f7, #ec4899)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
            Skills
          </span>
        </h2>
      </div>

      {/* grouped by category */}
      <div className="max-w-6xl mx-auto space-y-10">
        {categories.map((cat) => (
          <div key={cat}>
            <div className="flex items-center gap-3 mb-6">
              <span className="cat-label text-purple-400 text-xs font-semibold px-3 py-1 rounded-full tracking-wider uppercase" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {cat}
              </span>
              <div className="h-px flex-1 bg-white/5" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {skills.filter(s => s.cat === cat).map((skill, i) => (
                <div key={i} className="skill-card rounded-2xl p-5">
                  <SkillBar skill={skill} visible={visible} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* bottom note */}
      <p className="text-center text-gray-600 text-xs mt-16 max-w-md mx-auto leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
        Continuously learning and levelling up — currently exploring TypeScript, Next.js, and cloud deployments.
      </p>
    </section>
  );
};

export default Skills;