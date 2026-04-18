import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

const Footer = () => {
  const links = ["Home", "About", "Skills", "Projects", "Education", "Contact"];

  return (
    <footer
      className="relative bg-[#050508] text-white overflow-hidden"
      style={{ fontFamily: "'Syne', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');
        .footer-link {
          position: relative;
          transition: color 0.2s;
        }
        .footer-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background: linear-gradient(90deg, #a855f7, #ec4899);
          transition: width 0.3s cubic-bezier(0.16,1,0.3,1);
        }
        .footer-link:hover::after { width: 100%; }
        .footer-link:hover { color: #d8b4fe; }
        .social-btn {
          transition: transform 0.2s, background 0.2s, border-color 0.2s;
        }
        .social-btn:hover {
          transform: translateY(-3px);
        }
        .footer-glow-line {
          background: linear-gradient(90deg, transparent, rgba(168,85,247,0.5), rgba(236,72,153,0.3), transparent);
        }
      `}</style>

      {/* top glow line */}
      <div className="footer-glow-line h-px w-full" />

      {/* blobs */}
      <div
        className="absolute top-0 left-0 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-0 right-0 w-64 h-64 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(236,72,153,0.08) 0%, transparent 70%)" }}
      />

      {/* main content */}
      <div className="relative max-w-6xl mx-auto px-6 md:px-16 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">

          {/* ── BRAND ── */}
          <div className="space-y-5 md:col-span-1">
            <div>
              <h2 className="text-2xl font-extrabold tracking-tight leading-tight">
                Fathimath{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #a855f7, #ec4899)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Sulthana
                </span>
              </h2>
              <p
                className="text-purple-400 text-xs tracking-[0.2em] uppercase mt-1"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Full-Stack Developer
              </p>
            </div>

            <p
              className="text-gray-500 text-sm leading-relaxed max-w-xs"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Building modern, scalable web experiences with React & Django — one component at a time.
            </p>

            {/* contact info */}
            <div className="space-y-2.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <a
                href="mailto:fsulthanaibrahim@gmail.com"
                className="footer-link flex items-center gap-2.5 text-gray-400 text-sm group"
              >
                <div className="w-7 h-7 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0 group-hover:border-purple-500/40 transition-colors">
                  <FaEnvelope className="text-purple-400 text-xs" />
                </div>
                <span>fsulthanaibrahim@gmail.com</span>
              </a>
              <a
                href="tel:+917025887016"
                className="footer-link flex items-center gap-2.5 text-gray-400 text-sm group"
              >
                <div className="w-7 h-7 rounded-lg bg-pink-500/10 border border-pink-500/20 flex items-center justify-center flex-shrink-0 group-hover:border-pink-500/40 transition-colors">
                  <FaPhone className="text-pink-400 text-xs" />
                </div>
                <span>+91 7025887016</span>
              </a>
            </div>
          </div>

          {/* ── QUICK LINKS ── */}
          <div>
            <h3
              className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 mb-5"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Quick Links
            </h3>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="footer-link text-gray-400 text-sm inline-block"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── CONNECT ── */}
          <div>
            <h3
              className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 mb-5"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Connect
            </h3>

            <div className="flex gap-3 mb-6">
              <a
                href="https://github.com/fsulthanaibrahim-hue"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn w-10 h-10 rounded-xl bg-white/3 border border-white/8 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/8 hover:border-white/20"
                style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.08)" }}
                title="GitHub"
              >
                <FaGithub size={17} />
              </a>
              <a
                href="https://www.linkedin.com/in/fsulthanaibrahim"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn w-10 h-10 rounded-xl flex items-center justify-center text-blue-400 hover:text-blue-300"
                style={{ background: "rgba(59,130,246,0.08)", border: "1px solid rgba(59,130,246,0.2)" }}
                title="LinkedIn"
              >
                <FaLinkedin size={17} />
              </a>
              <a
                href="mailto:fsulthanaibrahim@gmail.com"
                className="social-btn w-10 h-10 rounded-xl flex items-center justify-center text-purple-400 hover:text-purple-300"
                style={{ background: "rgba(168,85,247,0.08)", border: "1px solid rgba(168,85,247,0.2)" }}
                title="Email"
              >
                <FaEnvelope size={17} />
              </a>
            </div>

            {/* availability */}
            <div
              className="inline-flex items-center gap-2 bg-emerald-500/5 border border-emerald-500/15 rounded-xl px-3 py-2"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-emerald-400 text-xs font-medium">Open to opportunities</span>
            </div>
          </div>
        </div>

        {/* ── BOTTOM BAR ── */}
        <div className="mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-white/[0.06]">
          <p
            className="text-gray-600 text-xs"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            © {new Date().getFullYear()} Fathimath Sulthana. All rights reserved.
          </p>
          <p
            className="text-gray-600 text-xs flex items-center gap-1.5"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Built with
            <span className="text-blue-400 font-medium">React</span>
            <span className="ml-0.5">⚡</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;