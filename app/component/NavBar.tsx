'use client'

import Link from "next/link"
import NavLink from "./NavLink"
import { useEffect, useState } from "react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import MenuOverlay from "./MenuOverlay"

const navLinks = [
  { title: "About",    path: "/about"    },
  { title: "Projects", path: "/programs" },
  { title: "Contact",  path: "/contact"  },
]

const NavBar = () => {
  const [navBarOpen, setNavBarOpen]   = useState(false)
  const [scrolled,   setScrolled]     = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled
            ? "rgba(5, 6, 15, 0.85)"
            : "rgba(5, 6, 15, 0.4)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: scrolled
            ? "1px solid var(--border-subtle)"
            : "1px solid transparent",
        }}
      >
    
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "1px",
            background:
              "linear-gradient(90deg, transparent 0%, var(--accent-blue) 30%, var(--accent-purple) 70%, transparent 100%)",
            opacity: scrolled ? 1 : 0,
            transition: "opacity 0.4s ease",
          }}
        />

        <div className="flex items-center justify-between mx-auto px-6 py-4 max-w-7xl">

        
          <Link
            href="/"
            className="group flex items-center gap-2 no-underline"
            aria-label="Home"
          >
            <div className="logo-mark" style={{
              position: "relative",
              width: "44px",
              height: "44px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
            
              <div style={{
                position: "absolute",
                inset: 0,
                borderRadius: "10px",
                border: "1px solid var(--border-default)",
                background: "var(--bg-elevated)",
                transition: "border-color 0.25s ease, box-shadow 0.25s ease",
              }}
              className="group-hover:[border-color:var(--accent-blue)] group-hover:[box-shadow:var(--glow-blue)]"
              />
              <span
                className="gradient-text"
                style={{
                  position: "relative",
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: "1rem",
                  letterSpacing: "-0.03em",
                  zIndex: 1,
                }}
              >
                UB
              </span>
            </div>

            <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.1 }}>
              <span style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "0.9rem",
                color: "var(--text-primary)",
                letterSpacing: "-0.02em",
              }}>
                Uzoefuna
              </span>
              <span style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.62rem",
                color: "var(--accent-teal)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}>
                Benson
              </span>
            </div>
          </Link>

       
          <ul className="hidden md:flex items-center gap-1 list-none m-0 p-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}

           
            <li style={{ marginLeft: "0.75rem" }}>
              <Link
                href="/contact"
                className="btn btn-primary"
                style={{ fontSize: "0.85rem", padding: "0.5rem 1.1rem" }}
              >
                Hire me
              </Link>
            </li>
          </ul>

         
          <button
            onClick={() => setNavBarOpen(!navBarOpen)}
            className="md:hidden flex items-center justify-center"
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "8px",
              border: "1px solid var(--border-default)",
              background: "var(--bg-elevated)",
              color: navBarOpen ? "var(--accent-blue)" : "var(--text-secondary)",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
            aria-label={navBarOpen ? "Close menu" : "Open menu"}
            aria-expanded={navBarOpen}
          >
            {navBarOpen
              ? <XMarkIcon className="h-5 w-5" />
              : <Bars3Icon className="h-5 w-5" />
            }
          </button>
        </div>
      </nav>

      <MenuOverlay links={navLinks} isOpen={navBarOpen} onClose={() => setNavBarOpen(false)} />
    </>
  )
}

export default NavBar