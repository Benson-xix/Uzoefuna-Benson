interface TabButtonProps {
  active: boolean
  selectTab: () => void
  children: React.ReactNode
}

const TabButton: React.FC<TabButtonProps> = ({ active, selectTab, children }) => {
  return (
    <button
      onClick={selectTab}
      style={{
        position: "relative",
        padding: "0.55rem 1.1rem",
        fontFamily: "var(--font-display)",
        fontSize: "0.85rem",
        fontWeight: active ? 700 : 500,
        color: active ? "var(--text-primary)" : "var(--text-muted)",
        background: active ? "var(--bg-elevated)" : "transparent",
        border: active ? "1px solid var(--border-default)" : "1px solid transparent",
        borderRadius: "8px",
        cursor: "pointer",
        transition: "all 0.2s ease",
        letterSpacing: "0.01em",
        whiteSpace: "nowrap",
      }}
      className="tab-btn"
    >
      {children}

      {/* Active underline */}
      {active && (
        <span
          style={{
            position: "absolute",
            bottom: "-1px",
            left: "20%",
            right: "20%",
            height: "2px",
            borderRadius: "99px",
            background: "linear-gradient(90deg, var(--accent-blue), var(--accent-purple))",
          }}
        />
      )}

      <style jsx>{`
        .tab-btn:hover {
          color: var(--text-secondary) !important;
          background: var(--bg-elevated) !important;
        }
      `}</style>
    </button>
  )
}

export default TabButton