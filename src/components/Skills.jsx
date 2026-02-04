import Container from "./Container"

function Skills() {
  return (
    <section style={{ padding: "60px 20px", textAlign: "center" }}>
        <Container>
            <h2>Skills</h2>
            <p>React • Node • Python • ML • Git • MongoDB</p>
        </Container>
    </section>
  )
}

const styles = {
   container: {
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "0 20px"
  } 
}

export default Skills
