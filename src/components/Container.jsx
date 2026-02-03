function Container({ children }) {
  return (
    <div style={{
      maxWidth: "1100px",
      margin: "0 auto",
      padding: "0 20px"
    }}>
      {children}
    </div>
  )
}

export default Container
