"use client"

import { useState, useRef } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'

const projectsData = [
  {
    id: 1,
    title: 'Uzoefuna Benson Portfolio Website',
    description: 'An online showcase of professional journey, skills, and accomplishments as a Full-Stack Software Developer — featuring an elegant and interactive interface.',
    image: "Capture11111.PNG",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Benson-xix/Uzoefuna-Benson",
    previewUrl: "https://uzoefuna-benson.vercel.app/",
  },
  {
    id: 2,
    title: 'Mini Mart E-commerce Website',
    description: 'A digital marketplace providing a seamless shopping experience with user-friendly navigation, detailed product information, and a secure checkout process.',
    image: "Screenshot2024-01-0303602.PNG",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Benson-xix/Mini-Mart",
    previewUrl: "http://mini-mart.vercel.app/",
  },
  {
    id: 3,
    title: 'Relax E-commerce Website',
    description: 'A digital platform designed to offer a tranquil and stress-free online shopping experience for customers seeking relaxation and wellness products.',
    image: "Capture122.PNG",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Benson-xix/Relax-App",
    previewUrl: "https://relax-app-blond.vercel.app/",
  },
  {
    id: 4,
    title: 'Nox Banking App',
    description: 'A cutting-edge mobile banking application offering account management, transaction tracking, budgeting tools, and personalized financial insights.',
    image: "Capture.PNG",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Benson-xix/Banking",
    previewUrl: "https://banking-benson.vercel.app/",
  },
  {
    id: 5,
    title: 'Manhwa API Database',
    description: 'A centralized repository of structured Manhwa data — titles, chapters, authors, genres, and metadata — accessible via a developer-friendly API.',
    image: "Capture222.PNG",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Benson-xix/Database-next",
    previewUrl: "https://database-next-c85m.vercel.app/",
  },
  {
    id: 6,
    title: 'Prime Labs Tech Web App',
    description: 'A dynamic and sophisticated online platform by Prime Labs Technology, aimed at providing innovative solutions in the tech industry.',
    image: "Capture5555.PNG",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Benson-xix/PrimeLabs",
    previewUrl: "https://prime-labs.vercel.app/",
  },
  {
    id: 7,
    title: 'YouTube Clone',
    description: 'A web application replicating the UI and key functionalities of YouTube — the popular video-sharing platform.',
    image: "Capture4444.PNG",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Benson-xix/youtub-clone",
    previewUrl: "http://youtub-clone.vercel.app/",
  },
  {
    id: 8,
    title: 'Frontend CRM',
    description: 'A frontend CRM web design featuring interactive tooltips, sliders, and fully responsive components.',
    image: "CRM.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Benson-xix/Frontend-CRM-Project",
    previewUrl: "https://frontend-crm-project.vercel.app/",
  },
  {
    id: 9,
    title: 'Qodebyte',
    description: 'A professional web app interface for Qodebyte Digital Solutions.',
    image: "CRM.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Benson-xix",
    previewUrl: "https://qodebyte.com/",
  },
  {
    id: 10,
    title: 'Paws and Play Store',
    description: 'An e-commerce web app to browse and find shelters for a wide variety of pets.',
    image: "CRM.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Benson-xix/Paws-and-Play-Store",
    previewUrl: "https://paws-and-play-store.vercel.app/",
  },
  {
    id: 11,
    title: 'Primelabs Digital Template App',
    description: 'A digital asset marketplace web app to sell templates and other digital assets.',
    image: "CRM.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Benson-xix/primelabs-digital-template-app",
    previewUrl: "https://primelabs-digital-template-app.onrender.com/",
  },
  {
    id: 12,
    title: 'Big Men Transaction POS MANAGEMENT',
    description: 'A Management System for Busineess to be managed online and offline with A Pos system included',
    image: "bmt.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Qodebyte-Pro-Services/BMT_POS_SYSTEM",
    previewUrl: "https://www.bmtpossystem.com",
  }
]

const TAGS = ["All", "Web", "Mobile"]

const ProjectSection = () => {
  const [tag, setTag] = useState("All")

  const filteredProjects = projectsData.filter((p) => p.tag.includes(tag))

  return (
    <section>

     
      <div style={{ marginBottom: "3.5rem" }}>
        <span className="section-label animate-fade-up">Selected Work</span>

        <h1
          className="animate-fade-up delay-100"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "clamp(2.2rem, 5vw, 3.75rem)",
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            marginBottom: "1rem",
            color: "var(--text-primary)",
          }}
        >
          My{" "}
          <span className="gradient-text--blue-purple">Projects</span>
        </h1>

        <p
          className="animate-fade-up delay-200"
          style={{
            color: "var(--text-secondary)",
            fontSize: "1rem",
            lineHeight: 1.75,
            maxWidth: "520px",
          }}
        >
          A collection of things I've built — from full-stack web apps to
          polished UI experiences. Each one a story of problem-solving and craft.
        </p>
      </div>

      
      <div
        className="animate-fade-up delay-300"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.6rem",
          marginBottom: "2.5rem",
          flexWrap: "wrap",
        }}
      >
        {TAGS.map((t) => (
          <ProjectTag
            key={t}
            name={t}
            onClick={setTag}
            isSelected={tag === t}
          />
        ))}

      
        <span
          style={{
            marginLeft: "auto",
            fontFamily: "var(--font-mono)",
            fontSize: "0.72rem",
            color: "var(--text-muted)",
            letterSpacing: "0.06em",
          }}
        >
          {filteredProjects.length} project{filteredProjects.length !== 1 ? "s" : ""}
        </span>
      </div>

   
      <div className="divider" style={{ marginBottom: "2.5rem" }} />

   
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {filteredProjects.map((project, index) => (
          <div
            key={project.id}
            className="animate-fade-up"
            style={{
              animationDelay: `${index * 50}ms`,
              animationFillMode: "both",
            }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </div>
        ))}
      </div>

   
      {filteredProjects.length === 0 && (
        <div
          style={{
            textAlign: "center",
            padding: "5rem 2rem",
            border: "1px dashed var(--border-subtle)",
            borderRadius: "var(--card-radius)",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.85rem",
              color: "var(--text-muted)",
              letterSpacing: "0.05em",
            }}
          >
            // No projects in this category yet
          </p>
        </div>
      )}
    </section>
  )
}

export default ProjectSection