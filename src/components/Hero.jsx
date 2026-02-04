import Container from "./Container"

function Hero() {
  return (
    <section style={styles.hero}>
        <Container>
            <h1>Hi, I'm Samiksha 👋</h1>
            <p>Frontend + Backend Developer</p>
            <p>React • Node • APIs • Databases • Deployment</p>
            <div style={styles.links}>
                <a href="#projects">
                    <button>View Projects</button>
                </a>
                <a href="#contact">
                    <button>Contact me</button>
                </a>
            </div>
        </Container>
    </section>
  )
}

const styles = {
  hero: {
  height: "80vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center"
  },
  container: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "0 20px"
  },
  links: {
    display: "flex",
    justifyContent: "center",
    gap: "20px"
  }
}

export default Hero
