"use client"

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'
import { SkillData } from '@/consonants'
import Image from 'next/image'

const Track = ({
  reverse = false,
  slidesPerView,
}: {
  reverse?: boolean
  slidesPerView: number
}) => (
  <Swiper
    slidesPerView={slidesPerView}
    loop
    autoplay={{
      delay: 0,
      disableOnInteraction: false,
      reverseDirection: reverse,
    }}
    speed={4500}
    modules={[Autoplay]}
    style={{ width: "100%" }}
    allowTouchMove={false}
  >
    {SkillData.map((skill, index) => (
      <SwiperSlide key={index}>
        <div
          className="skill-pill"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.6rem",
            padding: "0.55rem 1rem",
            margin: "0 0.4rem",
            borderRadius: "99px",
            border: "1px solid var(--border-subtle)",
            background: "var(--bg-elevated)",
            whiteSpace: "nowrap",
            transition: "border-color 0.2s ease, box-shadow 0.2s ease",
            cursor: "default",
            userSelect: "none",
          }}
        >
          <Image
            src={skill.Image}
            alt={skill.name}
            width={skill.width > 50 ? 24 : 18}
            height={skill.height > 50 ? 24 : 18}
            style={{ objectFit: "contain", flexShrink: 0 }}
          />
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.04em",
              color: "var(--text-secondary)",
            }}
          >
            {skill.name}
          </span>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
)

const SkillComponent = () => {
  return (
    <section
      style={{
        paddingBottom: "5rem",
        overflow: "hidden",
      }}
    >
      {/* Section header */}
      <div
        style={{ textAlign: "center", marginBottom: "3rem" }}
        className="animate-fade-up"
      >
        <span className="section-label" style={{ justifyContent: "center" }}>
          Tech Stack
        </span>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "clamp(1.8rem, 4vw, 3rem)",
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            color: "var(--text-primary)",
            marginBottom: "0.75rem",
          }}
        >
          Skills &{" "}
          <span className="gradient-text--blue-purple">Technologies</span>
        </h2>
        <p
          style={{
            color: "var(--text-muted)",
            fontSize: "0.9rem",
            fontFamily: "var(--font-mono)",
            letterSpacing: "0.04em",
          }}
        >
          Using the latest tools the world has to offer
        </p>
      </div>

      {/* Scroll tracks */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          position: "relative",
        }}
      >
        {/* Left & right fade masks */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 2,
            pointerEvents: "none",
            background:
              "linear-gradient(90deg, var(--bg-base) 0%, transparent 12%, transparent 88%, var(--bg-base) 100%)",
          }}
        />

        {/* Track 1 — forward */}
        <div className="hidden sm:block">
          <Track slidesPerView={6} />
        </div>
        <div className="sm:hidden">
          <Track slidesPerView={3} />
        </div>

        {/* Track 2 — reverse */}
        <div className="hidden sm:block">
          <Track reverse slidesPerView={6} />
        </div>
        <div className="sm:hidden">
          <Track reverse slidesPerView={3} />
        </div>
      </div>

      <style jsx global>{`
        .skill-pill:hover {
          border-color: var(--accent-blue) !important;
          box-shadow: var(--glow-blue);
        }
      `}</style>
    </section>
  )
}

export default SkillComponent