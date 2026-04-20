'use client'
import Link from "next/link"


interface NavLinkProps {
  href:  string
  title: string
}

const NavLink: React.FC<NavLinkProps> = ({ href, title }) => {
  return (
    <Link
      href={href}
      style={{
        position: "relative",
        display: "inline-block",
        padding: "0.5rem 0.85rem",
        fontFamily: "var(--font-display)",
        fontSize: "0.9rem",
        fontWeight: 500,
        color: "var(--text-secondary)",
        textDecoration: "none",
        letterSpacing: "0.01em",
        transition: "color 0.2s ease",
        borderRadius: "6px",
      }}
      className="nav-link group"
    >
      {title}

      {/* Animated underline */}
      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "4px",
          left: "0.85rem",
          right: "0.85rem",
          height: "1px",
          background: "linear-gradient(90deg, var(--accent-blue), var(--accent-purple))",
          transformOrigin: "left center",
          transform: "scaleX(0)",
          transition: "transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
          borderRadius: "99px",
        }}
        className="nav-underline"
      />

      <style jsx>{`
        .nav-link:hover {
          color: var(--text-primary) !important;
        }
        .nav-link:hover .nav-underline {
          transform: scaleX(1) !important;
        }
      `}</style>
    </Link>
  )
}

export default NavLink