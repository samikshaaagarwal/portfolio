import Container from "./Container"

function Footer() {
  return (
    <Container>
        <footer style={{ padding: "20px", textAlign: "center", background: "#111", color: "white" }}>
        © 2026 Samiksha
        </footer>
    </Container>
  )
}

const styles = {
   container: {
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "0 20px"
  } 
}

export default Footer
