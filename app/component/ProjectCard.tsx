import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline"
import Link from "next/link"

interface ProjectCardProps {
  imgUrl: string
  title: string
  description: string
  gitUrl: string
  previewUrl: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  imgUrl,
  title,
  description,
  gitUrl,
  previewUrl,
}) => {
  return (
    <article
      className="project-card group"
      style={{
        borderRadius: "var(--card-radius)",
        border: "1px solid var(--border-subtle)",
        background: "var(--bg-card)",
        overflow: "hidden",
        transition: "border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease",
        display: "flex",
        flexDirection: "column",
      }}
    >
    
      <div
        style={{
          position: "relative",
          height: "200px",
          overflow: "hidden",
          background: "var(--bg-elevated)",
          backgroundImage: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          flexShrink: 0,
        }}
        className="md:h-[220px]"
      >
     
        <div
          className="project-overlay"
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(5, 6, 15, 0.85)",
            backdropFilter: "blur(4px)",
            WebkitBackdropFilter: "blur(4px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
            opacity: 0,
            transition: "opacity 0.3s ease",
          }}
        >
        
          <Link
            href={gitUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View source code"
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              border: "1px solid var(--border-default)",
              background: "var(--bg-elevated)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--text-secondary)",
              textDecoration: "none",
              transition: "all 0.2s ease",
              transform: "translateY(8px)",
            }}
            className="icon-btn"
          >
            <CodeBracketIcon style={{ width: "22px", height: "22px" }} />
          </Link>

     
          <Link
            href={previewUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Live preview"
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              border: "1px solid var(--border-default)",
              background: "var(--bg-elevated)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--text-secondary)",
              textDecoration: "none",
              transition: "all 0.2s ease",
              transitionDelay: "40ms",
              transform: "translateY(8px)",
            }}
            className="icon-btn"
          >
            <EyeIcon style={{ width: "22px", height: "22px" }} />
          </Link>
        </div>

       
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "60px",
            background: "linear-gradient(to top, var(--bg-card), transparent)",
            pointerEvents: "none",
          }}
        />
      </div>

    
      <div
        style={{
          padding: "1.25rem 1.35rem 1.5rem",
          display: "flex",
          flexDirection: "column",
          gap: "0.6rem",
          flex: 1,
        }}
      >
        <h5
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1rem",
            fontWeight: 700,
            color: "var(--text-primary)",
            letterSpacing: "-0.01em",
            lineHeight: 1.3,
          }}
        >
          {title}
        </h5>

        <p
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "0.83rem",
            color: "var(--text-muted)",
            lineHeight: 1.65,
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {description}
        </p>

      
        <div
          style={{
            marginTop: "auto",
            paddingTop: "0.85rem",
            borderTop: "1px solid var(--border-subtle)",
            display: "flex",
            gap: "1rem",
          }}
        >
          <Link
            href={gitUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.7rem",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "var(--text-muted)",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "0.3rem",
              transition: "color 0.2s ease",
            }}
            className="card-link"
          >
            <CodeBracketIcon style={{ width: "13px", height: "13px" }} />
            Code
          </Link>
          <Link
            href={previewUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.7rem",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "var(--text-muted)",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "0.3rem",
              transition: "color 0.2s ease",
            }}
            className="card-link"
          >
            <EyeIcon style={{ width: "13px", height: "13px" }} />
            Live Demo
          </Link>
        </div>
      </div>

      <style jsx>{`
        .project-card:hover {
          border-color: var(--border-default) !important;
          box-shadow: var(--glow-blue);
          transform: translateY(-4px);
        }
        .project-card:hover .project-overlay {
          opacity: 1 !important;
        }
        .project-card:hover .icon-btn {
          transform: translateY(0) !important;
        }
        .icon-btn:hover {
          border-color: var(--accent-blue) !important;
          color: var(--accent-blue) !important;
          box-shadow: var(--glow-blue);
        }
        .card-link:hover {
          color: var(--accent-teal) !important;
        }
      `}</style>
    </article>
  )
}

export default ProjectCard