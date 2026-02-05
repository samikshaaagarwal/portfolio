import Container from "./Container"

function Projects() {
  const projects = [
    {
      title: "Livestock Skin Disease Detection",
      desc: "ML system for disease detection, lesion segmentation, and severity scoring from cattle images.",
      tech: ["Python", "CNN", "ML"],
      link: "https://github.com/samikshaaagarwal/lsd-detection-segmentation-severity"
    },
    {
      title: "Mini Instagram Backend",
      desc: "RESTful backend with authentication, posts, likes, and comments.",
      tech: ["Node", "Express", "MongoDB"],
      link: "https://github.com/samikshaaagarwal/mini-insta-backend"
    },
    {
      title: "Smart Task Manager",
      desc: "Full-stack task manager with priorities, deadlines, and progress tracking.",
      tech: ["React", "Node", "JWT"],
      link: "#"
    },
    {
      title: "SheCares Website",
      desc: "Women’s healthcare platform providing trusted resources and support tools.",
      tech: ["React", "Frontend"],
      link: "https://github.com/msrujana19/sheCares-Health-care-website"
    },
    {
      title: "E-Commerce Platform (Ongoing)",
      desc: "Scalable shopping app with cart, auth, and payment integration.",
      tech: ["React", "Node", "Stripe"],
      link: "#"
    }
  ]

  return (
    <section style={styles.section} id="projects">
      <Container>
        <h2 style={styles.heading}>Projects</h2>

        <div style={styles.grid}>
          {projects.map((p, i) => (
            <div key={i} style={styles.card}>
              <h3>{p.title}</h3>
              <p style={styles.desc}>{p.desc}</p>

              <div style={styles.tags}>
                {p.tech.map((t, idx) => (
                  <span key={idx} style={styles.tag}>{t}</span>
                ))}
              </div>

              <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              aria-label={`Open GitHub repo for ${p.title}`}
            >
              GitHub
            </a>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}


const styles = {
  section: {
    padding: "100px 20px",
    textAlign: "center"
  },

  container: {
    maxWidth: "1100px",
    margin: "0 auto"
  },

  heading: {
    fontSize: "32px",
    marginBottom: "50px"
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "24px"
  },

  card: {
    background: "rgba(255,255,255,0.06)",
    padding: "24px",
    borderRadius: "12px",
    textAlign: "left",
    backdropFilter: "blur(6px)",
    transition: "0.2s",
    border: "1px solid rgba(255,255,255,0.08)"
  },

  desc: {
    color: "#d1d5db",
    fontSize: "14px",
    margin: "10px 0 14px"
  },

  tags: {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
    marginBottom: "14px"
  },

  tag: {
    fontSize: "12px",
    padding: "4px 10px",
    background: "rgba(255,255,255,0.1)",
    borderRadius: "6px"
  }
}


export default Projects
