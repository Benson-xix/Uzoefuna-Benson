interface ProjectTagProps {
  name: string
  onClick: (name: string) => void
  isSelected: boolean
}

const ProjectTag: React.FC<ProjectTagProps> = ({ name, onClick, isSelected }) => {
  return (
    <button
      onClick={() => onClick(name)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.4rem",
        padding: "0.45rem 1.1rem",
        borderRadius: "99px",
        fontFamily: "var(--font-mono)",
        fontSize: "0.78rem",
        fontWeight: 700,
        letterSpacing: "0.07em",
        textTransform: "uppercase",
        cursor: "pointer",
        border: isSelected
          ? "1px solid var(--accent-blue)"
          : "1px solid var(--border-default)",
        background: isSelected
          ? "var(--accent-blue-dim)"
          : "var(--bg-elevated)",
        color: isSelected
          ? "var(--accent-blue)"
          : "var(--text-muted)",
        transition: "all 0.2s ease",
        boxShadow: isSelected ? "var(--glow-blue)" : "none",
      }}
      className="project-tag"
    >
      {isSelected && (
        <span
          style={{
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            background: "var(--accent-blue)",
            flexShrink: 0,
            boxShadow: "0 0 6px var(--accent-blue)",
          }}
        />
      )}
      {name}

      <style jsx>{`
        .project-tag:hover {
          border-color: var(--accent-blue) !important;
          color: var(--accent-blue) !important;
        }
      `}</style>
    </button>
  )
}

export default ProjectTag