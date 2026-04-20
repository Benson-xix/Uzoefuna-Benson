"use client"

import 'swiper/css'
import { Quotes } from '@/consonants'
import { Autoplay, EffectFade } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/effect-fade'

const MidSection = () => {
  return (
    <section
      style={{
        position: "relative",
        marginTop: "2rem",
        marginBottom: "2rem",
        overflow: "hidden",
        borderRadius: "20px",
        border: "1px solid var(--border-subtle)",
        background: "var(--bg-surface)",
      }}
    >
    
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 70% 60% at 50% 100%, rgba(139,92,246,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

    
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, var(--accent-purple) 30%, var(--accent-blue) 70%, transparent)",
          zIndex: 1,
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          padding: "clamp(3rem, 6vw, 5rem) clamp(1.5rem, 5vw, 4rem)",
          textAlign: "center",
          minHeight: "320px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "2rem",
        }}
      >
     
        <span className="section-label" style={{ color: "var(--accent-purple)" }}>
          <span style={{ background: "var(--accent-purple)", height: "1px", width: "20px", display: "inline-block" }} />
          Words That Motivate Me
        </span>

        
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: "2rem",
            left: "3rem",
            fontFamily: "var(--font-display)",
            fontSize: "8rem",
            lineHeight: 1,
            color: "var(--accent-purple)",
            opacity: 0.06,
            fontWeight: 800,
            userSelect: "none",
            pointerEvents: "none",
          }}
        >
          "
        </div>

 
        <div style={{ width: "100%", maxWidth: "780px" }}>
          <Swiper
            slidesPerView={1}
            loop={true}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            autoHeight={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            speed={700}
            modules={[Autoplay, EffectFade]}
            style={{ width: "100%" }}
          >
            {Quotes.map((quote, index) => (

              <SwiperSlide key={index}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "1.25rem",
                    padding: "0.5rem 1rem",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(1.05rem, 2.2vw, 1.45rem)",
                      fontWeight: 600,
                      lineHeight: 1.55,
                      letterSpacing: "-0.01em",
                      background:
                        "linear-gradient(135deg, var(--text-primary) 0%, var(--accent-blue) 50%, var(--accent-teal) 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      maxWidth: "660px",
                      margin: "0 auto",
                    }}
                  >
                    "{quote.quote}"
                  </p>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                    }}
                  >
                    <div
                      style={{
                        width: "28px",
                        height: "1px",
                        background:
                          "linear-gradient(90deg, transparent, var(--accent-purple))",
                      }}
                    />
                    <p
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.78rem",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: "var(--accent-purple)",
                      }}
                    >
                      {quote.author}
                    </p>
                    <div
                      style={{
                        width: "28px",
                        height: "1px",
                        background:
                          "linear-gradient(90deg, var(--accent-purple), transparent)",
                      }}
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

       
        <div
          style={{
            width: "60px",
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, var(--border-default), transparent)",
          }}
        />
      </div>
    </section>
  )
}

export default MidSection