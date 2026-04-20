"use client"

import Image from "next/image"
import About from "@/public/reasonhome.jpg"
import { useState, useTransition } from "react"
import TabButton from "./TabButton"

const SKILLS = [
  "JavaScript", "TypeScript", "React", "Next.js",
  "Node.js", "Express", "MongoDB", "HTML", "CSS",
  "Rust", "C++", "Unreal Engine 5", "Blueprint",
]

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.5rem",
        }}
      >
        {SKILLS.map((skill) => (
          <span
            key={skill}
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "0.3rem 0.75rem",
              borderRadius: "99px",
              fontFamily: "var(--font-mono)",
              fontSize: "0.72rem",
              fontWeight: 700,
              letterSpacing: "0.04em",
              color: "var(--text-secondary)",
              background: "var(--bg-elevated)",
              border: "1px solid var(--border-subtle)",
              transition: "all 0.2s ease",
            }}
            className="skill-badge"
          >
            {skill}
          </span>
        ))}
        <style jsx>{`
          .skill-badge:hover {
            border-color: var(--accent-teal) !important;
            color: var(--accent-teal) !important;
          }
        `}</style>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {[
          {
            title: "Advanced Web Development & Advanced JavaScript",
            sub: "Professional Certification Course",
          },
          {
            title: "Advanced Software Engineering (ADSE)",
            sub: "Intensive Program",
          },
          {
            title: "Aptech Institute of Learning — Enugu, Nigeria",
            sub: "Affiliate of Middlesex University, London",
          },
        ].map((item, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              gap: "1rem",
              alignItems: "flex-start",
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "var(--accent-blue)",
                boxShadow: "0 0 8px var(--accent-blue)",
                flexShrink: 0,
                marginTop: "6px",
              }}
            />
            <div>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "0.88rem",
                  fontWeight: 600,
                  color: "var(--text-primary)",
                  lineHeight: 1.4,
                  marginBottom: "0.2rem",
                }}
              >
                {item.title}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.7rem",
                  color: "var(--text-muted)",
                  letterSpacing: "0.04em",
                }}
              >
                {item.sub}
              </p>
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        {[
          { label: "MERN Stack Developer",         color: "var(--accent-blue)"   },
          { label: "Advanced Software Engineering", color: "var(--accent-purple)" },
          { label: "Full-Stack Developer",          color: "var(--accent-teal)"   },
          { label: "Web Developer",                 color: "var(--accent-blue)"   },
        ].map((cert, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              padding: "0.65rem 0.9rem",
              borderRadius: "8px",
              border: "1px solid var(--border-subtle)",
              background: "var(--bg-elevated)",
            }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke={cert.color}
              strokeWidth="2"
              style={{ width: "16px", height: "16px", flexShrink: 0 }}
            >
              <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "0.88rem",
                fontWeight: 600,
                color: "var(--text-primary)",
              }}
            >
              {cert.label}
            </span>
          </div>
        ))}
      </div>
    ),
  },
]

const AboutSection = () => {
  const [tab, setTab] = useState("skills")
  const [, startTransition] = useTransition()

  const handleTabChange = (id: string) => {
    startTransition(() => setTab(id))
  }

  return (
    <section style={{ paddingBottom: "5rem" }}>

      {/* ── Page header ── */}
      <div style={{ marginBottom: "3rem" }}>
        <span className="section-label animate-fade-up">Who I am</span>
        <h1
          className="animate-fade-up delay-100"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "clamp(2.2rem, 5vw, 3.75rem)",
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            color: "var(--text-primary)",
          }}
        >
          About{" "}
          <span className="gradient-text">Benson</span>
        </h1>
      </div>

      {/* ── Two-column layout ── */}
      <div
        style={{
          display: "grid",
          gap: "3rem",
          alignItems: "start",
        }}
        className="md:grid-cols-2"
      >
        {/* ── Left: image ── */}
        <div
          className="animate-fade-up delay-200"
          style={{ position: "relative" }}
        >
          {/* Glow accent behind image */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: "-2px",
              borderRadius: "20px",
              background: "linear-gradient(135deg, var(--accent-blue), var(--accent-purple), var(--accent-teal))",
              zIndex: 0,
              opacity: 0.35,
              filter: "blur(1px)",
            }}
          />
          <div
            style={{
              position: "relative",
              zIndex: 1,
              borderRadius: "18px",
              overflow: "hidden",
              border: "1px solid var(--border-default)",
            }}
          >
            <Image
              src={About}
              alt="About Benson"
              width={500}
              height={500}
              style={{ width: "100%", height: "auto", display: "block" }}
            />
            {/* Image overlay gradient */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "50%",
                background: "linear-gradient(to top, var(--bg-base) 0%, transparent 100%)",
                pointerEvents: "none",
              }}
            />
          </div>
        </div>

        {/* ── Right: content ── */}
        <div
          className="animate-fade-up delay-300"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
          }}
        >
          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: "clamp(0.93rem, 1.4vw, 1.05rem)",
              lineHeight: 1.85,
            }}
          >
            I'm a full-stack web developer with a passion for building interactive,
            responsive, and performant web applications. I work across the stack —
            from crafting pixel-perfect UIs to architecting scalable backends.
            <br /><br />
            Always learning, always building. I thrive in collaborative environments
            and love turning complex problems into elegant digital solutions.
          </p>

          {/* Tab navigation */}
          <div
            style={{
              display: "flex",
              gap: "0.35rem",
              padding: "0.35rem",
              background: "var(--bg-elevated)",
              borderRadius: "10px",
              border: "1px solid var(--border-subtle)",
              width: "fit-content",
            }}
          >
            {TAB_DATA.map((t) => (
              <TabButton
                key={t.id}
                selectTab={() => handleTabChange(t.id)}
                active={tab === t.id}
              >
                {t.title}
              </TabButton>
            ))}
          </div>

          {/* Tab content */}
          <div
            style={{
              minHeight: "180px",
              padding: "1.25rem",
              background: "var(--bg-card)",
              border: "1px solid var(--border-subtle)",
              borderRadius: "12px",
            }}
          >
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection