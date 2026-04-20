/* eslint-disable react/no-unescaped-entities */
'use client'

import Image from 'next/image'
import Profile from '@/public/IMG_20230611_133246_164.jpg'
import { TypeAnimation } from 'react-type-animation'
import Link from 'next/link'

const Hero = () => {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "3rem",
        paddingTop: "2rem",
        paddingBottom: "5rem",
        alignItems: "center",
      }}
      className="lg:flex-row lg:justify-between lg:items-center"
    >

     <div style={{ flex: "1 1 0", maxWidth: "600px" }}>

     
        <div className="animate-fade-up" style={{ marginBottom: "1.5rem" }}>
          <span className="section-label">Available for work</span>
        </div>

  
        <h1
          className="animate-fade-up delay-100"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "clamp(2.4rem, 5.5vw, 4.5rem)",
            lineHeight: 1.08,
            letterSpacing: "-0.03em",
            marginBottom: "1rem",
            color: "var(--text-primary)",
          }}
        >
          <span
            style={{
              display: "block",
              fontSize: "clamp(1rem, 2vw, 1.3rem)",
              fontWeight: 500,
              letterSpacing: "0.01em",
              color: "var(--text-secondary)",
              marginBottom: "0.4rem",
            }}
          >
            Hello, I'm
          </span>

          <span className="gradient-text" style={{ display: "block" }}>Benson</span>

          <span
            style={{
              display: "block",
              minHeight: "1.2em",
              background: "linear-gradient(90deg, var(--text-primary), var(--accent-blue))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            <TypeAnimation
              sequence={[
                'Software Engineer',    1200,
                'Game Developer',       1200,
                'FullStack Developer',  1200,
              ]}
              wrapper="span"
              speed={52}
              repeat={Infinity}
              style={{ fontFamily: "var(--font-display)", fontWeight: 300 }}
              cursor={true}
            />
          </span>

        </h1>

      
        <p
          className="animate-fade-up delay-200"
          style={{
            color: "var(--text-secondary)",
            fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)",
            lineHeight: 1.8,
            marginBottom: "2rem",
            maxWidth: "480px",
          }}
        >
          Where imagination meets functionality.{" "}
          <span
            style={{
              background: "linear-gradient(90deg, var(--accent-blue), var(--accent-purple), var(--accent-teal))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              fontWeight: 500,
            }}
          >
            Let's elevate your brand through innovative design and development.
          </span>
        </p>

  
        <div
          className="animate-fade-up delay-300"
          style={{ display: "flex", gap: "0.85rem", flexWrap: "wrap" }}
        >
          <Link href="/contact" className="btn btn-primary" style={{ fontSize: "0.9rem" }}>
            Contact Me
          </Link>

          <a
            href="/Uzoefuna_Benson.pdf"
            download
            className="btn btn-outline"
            style={{ fontSize: "0.9rem" }}
          >
            Download CV
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              style={{ width: "16px", height: "16px" }}
            >
              <path
                fillRule="evenodd"
                d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>

    
        <div
          className="animate-fade-up delay-400"
          style={{
            display: "flex",
            gap: "1.5rem",
            marginTop: "2.5rem",
            paddingTop: "2rem",
            borderTop: "1px solid var(--border-subtle)",
          }}
        >
          {[
            { value: "7+",  label: "Years Experience" },
            { value: "20+", label: "Projects Built which Includes Admin Systems And Backend Architectures"   },
            { value: "10+", label: "Happy Clients"    },
          ].map((stat) => (
            <div key={stat.label}>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.5rem",
                  fontWeight: 800,
                  background: "linear-gradient(135deg, var(--accent-blue), var(--accent-purple))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  lineHeight: 1,
                  marginBottom: "0.2rem",
                }}
              >
                {stat.value}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.68rem",
                  color: "var(--text-muted)",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

   
      <div
        className="animate-fade-in delay-200"
        style={{
          position: "relative",
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
       
        <div
          style={{
            position: "absolute",
            width: "320px",
            height: "320px",
            borderRadius: "9999px",
            background: "conic-gradient(from 0deg, var(--accent-blue), var(--accent-purple), var(--accent-teal), var(--accent-blue))",
            animation: "spin-slow 8s linear infinite",
            opacity: 0.5,
          }}
          className="lg:w-[460px] lg:h-[460px]"
        />

 
        <div
          style={{
            position: "absolute",
            width: "310px",
            height: "310px",
            borderRadius: "9999px",
            background: "var(--bg-base)",
          }}
          className="lg:w-[448px] lg:h-[448px]"
        />

    
        <div
          style={{
            position: "relative",
            width: "290px",
            height: "290px",
            borderRadius: "9999px",
            overflow: "hidden",
            border: "1px solid var(--border-default)",
            background: "var(--bg-elevated)",
            zIndex: 1,
          }}
          className="lg:w-[420px] lg:h-[420px]"
        >
          <Image
            src={Profile}
            alt="Uzoefuna Benson — profile photo"
            fill
            style={{ objectFit: "cover", objectPosition: "top center" }}
            priority
            sizes="(max-width: 1024px) 290px, 420px"
          />
        </div>

     
        <div
          style={{
            position: "absolute",
            bottom: "10px",
            right: "0px",
            background: "var(--bg-elevated)",
            border: "1px solid var(--border-default)",
            borderRadius: "12px",
            padding: "0.6rem 0.9rem",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            zIndex: 2,
            backdropFilter: "blur(12px)",
            boxShadow: "var(--glow-blue)",
          }}
        >
          <span
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "var(--accent-teal)",
              boxShadow: "0 0 8px var(--accent-teal)",
              flexShrink: 0,
              animation: "pulse-dot 2s ease-in-out infinite",
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.7rem",
              color: "var(--text-secondary)",
              letterSpacing: "0.04em",
            }}
          >
            Open to opportunities
          </span>
        </div>

        <style jsx>{`
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to   { transform: rotate(360deg); }
          }
          @keyframes pulse-dot {
            0%, 100% { opacity: 1; transform: scale(1); }
            50%       { opacity: 0.6; transform: scale(0.85); }
          }
        `}</style>
      </div>
    </section>
  )
}

export default Hero