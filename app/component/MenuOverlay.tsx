'use client'

import Link from "next/link"
import { useEffect } from "react"

interface MenuOverlayProps {
  links: { title: string; path: string }[]
  isOpen: boolean
  onClose: () => void
}

const MenuOverlay: React.FC<MenuOverlayProps> = ({ links, isOpen, onClose }) => {

 
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [isOpen])

  return (
    <>
     
      <div
        onClick={onClose}
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 40,
          background: "rgba(5, 6, 15, 0.7)",
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? "auto" : "none",
          transition: "opacity 0.3s ease",
        }}
      />


      <div
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        style={{
          position: "fixed",
          top: "73px",       
          left: 0,
          right: 0,
          zIndex: 45,
          background: "var(--bg-surface)",
          borderBottom: "1px solid var(--border-subtle)",
          transform: isOpen ? "translateY(0)" : "translateY(-16px)",
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? "auto" : "none",
          transition: "transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease",
          overflow: "hidden",
        }}
      >
   
        <div style={{
          height: "1px",
          background: "linear-gradient(90deg, var(--accent-blue), var(--accent-purple), var(--accent-teal))",
          opacity: 0.6,
        }} />

        <nav style={{ padding: "1.5rem 1.5rem 2rem" }}>
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "0.25rem" }}>
            {links.map((link, index) => (
              <li
                key={index}
                style={{
                  opacity: isOpen ? 1 : 0,
                  transform: isOpen ? "translateY(0)" : "translateY(-8px)",
                  transition: `opacity 0.35s ease ${80 + index * 60}ms, transform 0.35s cubic-bezier(0.16,1,0.3,1) ${80 + index * 60}ms`,
                }}
              >
                <Link
                  href={link.path}
                  onClick={onClose}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0.85rem 1rem",
                    borderRadius: "10px",
                    fontFamily: "var(--font-display)",
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    color: "var(--text-secondary)",
                    textDecoration: "none",
                    border: "1px solid transparent",
                    transition: "all 0.2s ease",
                    letterSpacing: "-0.01em",
                  }}
                  className="mobile-nav-link"
                >
                  <span>{link.title}</span>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.65rem",
                      color: "var(--text-muted)",
                      letterSpacing: "0.06em",
                    }}
                  >
                    0{index + 1}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

   
          <div
            style={{
              marginTop: "1.25rem",
              paddingTop: "1.25rem",
              borderTop: "1px solid var(--border-subtle)",
              opacity: isOpen ? 1 : 0,
              transform: isOpen ? "translateY(0)" : "translateY(-8px)",
              transition: `opacity 0.4s ease ${80 + links.length * 60 + 40}ms, transform 0.4s ease ${80 + links.length * 60 + 40}ms`,
            }}
          >
            <Link
              href="/contact"
              onClick={onClose}
              className="btn btn-primary"
              style={{ width: "100%", justifyContent: "center", padding: "0.75rem" }}
            >
              Hire me
            </Link>
          </div>
        </nav>
      </div>

      <style jsx>{`
        .mobile-nav-link:hover {
          color: var(--text-primary) !important;
          background: var(--bg-elevated) !important;
          border-color: var(--border-subtle) !important;
        }
      `}</style>
    </>
  )
}

export default MenuOverlay