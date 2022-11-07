import { Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import { Home } from "./pages/Home"
import { Store } from "./pages/Store"
import { About } from "./pages/About"
import { Navbar } from "./components/Navbar"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"
import { useEffect } from "react"

function App() {

  useEffect(() => {
    fetch('http://localhost:3000/')
      .then(res => res.json())
      .then(Base_de_datos => {
        console.log(Base_de_datos)
        idPublicacion: string
        idProducto: string
        fotoPublicacion: string
        precioPublicacion: number
        estadoPublicacion: EstadosPublicacion
        tituloPublicacion: string
        descripcionPublicacion: string
      })
  }, [])

  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
    </ShoppingCartProvider>
  )
}

export default App


