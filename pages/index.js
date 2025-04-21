export default function Home() {
  return (
    <main style={{ textAlign: "center", padding: "5rem", fontFamily: "sans-serif" }}>
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>Mailles Cortês Machiana</h1>
      <p style={{ fontSize: "1.5rem", maxWidth: "600px", margin: "0 auto" }}>
        Computer Science student | Future Web Dev | Finance-Focused<br />
        This portfolio is built on the belief that <strong>everything is a remix.</strong>
      </p>

      <div style={{ marginTop: "2rem" }}>
        <a
          href="/projects"
          style={{
            marginRight: "1rem",
            padding: "0.75rem 1.5rem",
            backgroundColor: "black",
            color: "white",
            textDecoration: "none",
            borderRadius: "10px"
          }}
        >
          View Projects
        </a>
        <a
          href="/resume.pdf"
          style={{
            padding: "0.75rem 1.5rem",
            border: "1px solid black",
            color: "black",
            textDecoration: "none",
            borderRadius: "10px"
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Résumé
        </a>
      </div>
    </main>
  )
}