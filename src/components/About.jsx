function About() {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.heading}>About Me</h2>

        <p style={styles.text}>
          I design and build complete digital products — crafting clean UIs, scalable APIs, and smart ML-powered solutions.
Passionate about full-stack development, machine learning, and turning ideas into real-world impact.
        </p>

        <div style={styles.skills}>
          <span>React</span>
          <span>Node</span>
          <span>MongoDB</span>
          <span>Python</span>
          <span>Machine Learning</span>
        </div>
      </div>
    </section>
  )
}


const styles = {
  section: {
    padding: "100px 20px",
    textAlign: "center"
  },

  container: {
    maxWidth: "900px",
    margin: "0 auto"
  },

  heading: {
    fontSize: "32px",
    marginBottom: "20px"
  },

  text: {
    opacity: 0.75,
    lineHeight: "1.7",
    marginBottom: "30px"
  },

  skills: {
    display: "flex",
    justifyContent: "center",
    gap: "12px",
    flexWrap: "wrap"
  }
}


export default About
