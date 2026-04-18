import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = () => {
  const [copied, setCopied] = useState(null);

  const copy = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopied(key);
    setTimeout(() => setCopied(null), 2000);
  };

  const contacts = [
    {
      key: "email",
      icon: <FaEnvelope />,
      label: "Email",
      value: "fsulthanaibrahim@gmail.com",
      href: "mailto:fsulthanaibrahim@gmail.com",
      color: "#a855f7",
      copyable: true,
    },
    {
      key: "phone",
      icon: <FaPhone />,
      label: "Phone",
      value: "+91 7025887016",
      href: "tel:+917025887016",
      color: "#ec4899",
      copyable: true,
    },
  ];

  const socials = [
    {
      icon: <FaGithub />,
      label: "GitHub",
      sub: "fsulthanaibrahim-hue",
      href: "https://github.com/fsulthanaibrahim-hue",
      color: "#e2e8f0",
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      sub: "fsulthanaibrahim",
      href: "https://www.linkedin.com/in/fsulthanaibrahim",
      color: "#60a5fa",
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-28 px-6 md:px-16 bg-[#050508] text-white overflow-hidden"
      style={{ fontFamily: "'Syne', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');
        .contact-card {
          background: linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01));
          border: 1px solid rgba(255,255,255,0.07);
          transition: border-color 0.3s, transform 0.3s;
        }
        .contact-card:hover {
          border-color: rgba(168,85,247,0.25);
          transform: translateY(-4px);
        }
        .social-card {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.06);
          transition: border-color 0.3s, background 0.3s, transform 0.3s;
        }
        .social-card:hover {
          background: rgba(168,85,247,0.05);
          border-color: rgba(168,85,247,0.2);
          transform: translateY(-3px);
        }
        .copy-btn {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
          transition: background 0.2s, border-color 0.2s;
        }
        .copy-btn:hover { background: rgba(168,85,247,0.15); border-color: rgba(168,85,247,0.3); }
        .mailto-btn {
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .mailto-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 40px rgba(139,92,246,0.35);
        }
        .availability-pulse {
          animation: pulse 2s ease-in-out infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>

      {/* blobs */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(236,72,153,0.09) 0%, transparent 70%)" }} />
      <div className="absolute top-0 left-1/2 w-[300px] h-[300px] rounded-full pointer-events-none -translate-x-1/2"
        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)" }} />

      {/* header */}
      <div className="max-w-4xl mx-auto mb-16 text-center">
        <div className="flex items-center justify-center gap-3 mb-5">
          <div className="w-8 h-px bg-purple-500" />
          <span className="text-purple-400 text-xs tracking-[0.25em] uppercase font-medium" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Contact
          </span>
          <div className="w-8 h-px bg-purple-500" />
        </div>
        <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-5">
          Let's{" "}
          <span style={{
            background: "linear-gradient(135deg, #a855f7, #ec4899)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
            Connect
          </span>
        </h2>
        <p className="text-gray-400 text-base leading-relaxed max-w-xl mx-auto" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          Open to new projects, freelance opportunities, and collaboration ideas. I typically respond within 24 hours.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-5">
        {/* availability banner */}
        <div className="flex items-center justify-between bg-emerald-500/5 border border-emerald-500/15 rounded-2xl px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-emerald-400 availability-pulse" />
            <span className="text-emerald-400 text-sm font-medium" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Available for opportunities
            </span>
          </div>
          <span className="text-gray-600 text-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>Actively seeking roles</span>
        </div>

        {/* contact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {contacts.map((c) => (
            <div key={c.key} className="contact-card rounded-2xl p-5">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0 mt-0.5"
                    style={{ background: `${c.color}15`, color: c.color, border: `1px solid ${c.color}25` }}
                  >
                    {c.icon}
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-widest mb-1 font-medium" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      {c.label}
                    </p>
                    <a
                      href={c.href}
                      className="text-white text-sm font-medium hover:text-purple-300 transition break-all"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {c.value}
                    </a>
                  </div>
                </div>
                {c.copyable && (
                  <button
                    onClick={() => copy(c.value, c.key)}
                    className="copy-btn flex-shrink-0 rounded-lg px-2.5 py-1.5 text-xs text-gray-400 hover:text-purple-300 transition"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {copied === c.key ? "✓ Copied" : "Copy"}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* social cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {socials.map((s, i) => (
            <a
              key={i}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-card rounded-2xl p-5 flex items-center gap-4 group"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                style={{ background: `${s.color}12`, color: s.color, border: `1px solid ${s.color}20` }}
              >
                {s.icon}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white text-sm font-semibold" style={{ fontFamily: "'DM Sans', sans-serif" }}>{s.label}</p>
                <p className="text-gray-500 text-xs truncate" style={{ fontFamily: "'DM Sans', sans-serif" }}>{s.sub}</p>
              </div>
              <svg className="w-4 h-4 text-gray-600 group-hover:text-purple-400 transition flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center pt-4">
          <a
            href="mailto:fsulthanaibrahim@gmail.com"
            className="mailto-btn inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-white font-semibold text-sm"
            style={{
              background: "linear-gradient(135deg, #7c3aed, #a855f7, #ec4899)",
              boxShadow: "0 8px 32px rgba(139,92,246,0.25)",
            }}
          >
            <FaEnvelope className="text-lg" />
            Send me an email
          </a>
        </div>

        <p className="text-center text-gray-600 text-xs pt-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          I'm actively seeking fullstack developer opportunities. Let's build something amazing together.
        </p>
      </div>
    </section>
  );
};

export default Contact;