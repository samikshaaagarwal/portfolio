function Contact() {
  return (
    <section id="contact" style={{ padding: "60px 20px", textAlign: "center" }}>
        <div style={styles.container}>
            <h2>Contact</h2>
            <p>Email: samiksha.stays@gmail.com</p>
            <p>GitHub: github.com/samikshaaagarwal</p>
        </div>
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

export default Contact
