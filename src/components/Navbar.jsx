import Container from "./Container"

function Navbar() {
  return (
    <Container>
        <nav style={styles.nav}>
            <h2>Samiksha</h2>
            <div style={styles.links}>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </div>
        </nav>
    </Container>
  )
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "16px",
    alignItems: "center",
    color: "white",
    background: "rgba(0,0,0,0.35)",
    boxShadow: "0 4px 12px rgba(0,0,0,0.4)"
  },
  links: {
    display: "flex",
    gap: "20px"
  },
  container: {
    display: "flex",
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "0 20px"
  } 
}

export default Navbar
