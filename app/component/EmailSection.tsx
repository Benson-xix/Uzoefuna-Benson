/* eslint-disable react/no-unescaped-entities */
'use client'

import Link from "next/link"
import { useRef, useState } from "react"

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "0.75rem 1rem",
  borderRadius: "10px",
  border: "1px solid var(--border-default)",
  background: "var(--bg-elevated)",
  color: "var(--text-primary)",
  fontFamily: "var(--font-display)",
  fontSize: "0.9rem",
  outline: "none",
  transition: "border-color 0.2s ease, box-shadow 0.2s ease",
}

const labelStyle: React.CSSProperties = {
  display: "block",
  fontFamily: "var(--font-mono)",
  fontSize: "0.72rem",
  fontWeight: 700,
  letterSpacing: "0.08em",
  textTransform: "uppercase" as const,
  color: "var(--text-muted)",
  marginBottom: "0.5rem",
}

const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/Benson-xix",
    color: "var(--text-secondary)",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: "20px", height: "20px" }}>
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/uzoefuna-benson-264335240",
    color: "var(--accent-blue)",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: "20px", height: "20px" }}>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
]

type Status = "idle" | "sending" | "success" | "error"

const EmailSection = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<Status>("idle")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("sending")

    const formData = new FormData(e.currentTarget)
    const data = {
      email:   formData.get("email")   as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    }

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      if (!response.ok) throw new Error(`HTTP ${response.status}`)
      setStatus("success")
      formRef.current?.reset()
      setTimeout(() => setStatus("idle"), 5000)
    } catch {
      setStatus("error")
      setTimeout(() => setStatus("idle"), 5000)
    }
  }

  return (
    <section style={{ paddingBottom: "5rem" }}>

      {/* Page header */}
      <div style={{ marginBottom: "3.5rem" }}>
        <span className="section-label animate-fade-up">Get in touch</span>
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
          Let's{" "}
          <span className="gradient-text">Connect</span>
        </h1>
      </div>

      {/* Two-column grid */}
      <div
        style={{ display: "grid", gap: "3rem", alignItems: "start" }}
        className="md:grid-cols-2"
      >

        {/* ── Left: info panel ── */}
        <div
          className="animate-fade-up delay-200"
          style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
        >
          {/* Description */}
          <div
            style={{
              padding: "1.75rem",
              borderRadius: "var(--card-radius)",
              border: "1px solid var(--border-subtle)",
              background: "var(--bg-card)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              aria-hidden
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "1px",
                background: "linear-gradient(90deg, transparent, var(--accent-blue), transparent)",
              }}
            />
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "1.2rem",
                letterSpacing: "-0.02em",
                color: "var(--text-primary)",
                marginBottom: "0.75rem",
              }}
            >
              I'm currently open to new opportunities
            </h3>
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "0.9rem",
                lineHeight: 1.8,
              }}
            >
              My inbox is always open. Whether you have a project in mind, a
              question, or just want to say hi — I'll get back to you as soon
              as possible.
            </p>
          </div>

          {/* Direct email */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.68rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--text-muted)",
              }}
            >
              Or email me directly
            </p>
            <a
              href="mailto:bensondominic81@gmail.com"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "0.95rem",
                fontWeight: 600,
                color: "var(--accent-blue)",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                transition: "color 0.2s ease",
              }}
              className="email-link"
            >
              bensondominic81@gmail.com
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: "14px", height: "14px" }}>
                <path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          {/* Social links */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.68rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--text-muted)",
              }}
            >
              Find me on
            </p>
            <div style={{ display: "flex", gap: "0.75rem" }}>
              {SOCIAL_LINKS.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    padding: "0.55rem 1rem",
                    borderRadius: "8px",
                    border: "1px solid var(--border-subtle)",
                    background: "var(--bg-elevated)",
                    color: "var(--text-muted)",
                    textDecoration: "none",
                    fontFamily: "var(--font-display)",
                    fontSize: "0.82rem",
                    fontWeight: 600,
                    transition: "all 0.2s ease",
                  }}
                  className="social-btn"
                >
                  {s.icon}
                  {s.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

       
        <div className="animate-fade-up delay-300">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.25rem",
              padding: "2rem",
              borderRadius: "var(--card-radius)",
              border: "1px solid var(--border-subtle)",
              background: "var(--bg-card)",
            }}
          >
          
            <div>
              <label htmlFor="email" style={labelStyle}>Your Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                style={inputStyle}
                className="form-input"
              />
            </div>

           
            <div>
              <label htmlFor="subject" style={labelStyle}>Subject</label>
              <input
                id="subject"
                name="subject"
                type="text"
                required
                placeholder="Hello Benson"
                style={inputStyle}
                className="form-input"
              />
            </div>

            
            <div>
              <label htmlFor="message" style={labelStyle}>Message</label>
              <textarea
                id="message"
                name="message"
                required
                maxLength={500}
                rows={5}
                placeholder="Tell me about your project..."
                style={{ ...inputStyle, resize: "vertical", minHeight: "130px" }}
                className="form-input"
              />
            </div>

          
            <button
              type="submit"
              disabled={status === "sending"}
              className="btn btn-primary"
              style={{
                width: "100%",
                justifyContent: "center",
                padding: "0.8rem",
                fontSize: "0.9rem",
                opacity: status === "sending" ? 0.7 : 1,
                cursor: status === "sending" ? "not-allowed" : "pointer",
              }}
            >
              {status === "sending" ? "Sending…" : "Send Message"}
              {status === "idle" && (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ width: "16px", height: "16px" }}>
                  <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </button>

  
            {status === "success" && (
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.78rem",
                  color: "var(--accent-teal)",
                  textAlign: "center",
                  letterSpacing: "0.04em",
                }}
              >
                ✓ Message sent! I'll be in touch soon.
              </p>
            )}
            {status === "error" && (
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.78rem",
                  color: "#f87171",
                  textAlign: "center",
                  letterSpacing: "0.04em",
                }}
              >
                ✕ Something went wrong. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>

      <style jsx>{`
        .form-input:focus {
          border-color: var(--accent-blue) !important;
          box-shadow: 0 0 0 3px rgba(0, 180, 255, 0.1) !important;
        }
        .form-input::placeholder { color: var(--text-muted); }
        .email-link:hover { color: var(--accent-teal) !important; }
        .social-btn:hover {
          border-color: var(--accent-blue) !important;
          color: var(--accent-blue) !important;
          box-shadow: var(--glow-blue);
        }
      `}</style>
    </section>
  )
}

export default EmailSection