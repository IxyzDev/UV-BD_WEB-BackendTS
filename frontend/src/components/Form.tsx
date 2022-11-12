import {Container, Button, InputGroup } from "react-bootstrap"
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
/*  idPublicacion: string
  idProducto: string
  fotoPublicacion: string    *
  precioPublicacion: number    *
  estadoPublicacion: string   *
  tituloPublicacion: string   *
  descripcionPublicacion: string   *
   */
const Formulario = () => {
    const handleSubmit = () => {}

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Titulo</Form.Label>
                    <Form.Control type="title" placeholder="Titulo PUblicacion" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Link Foto</Form.Label>
                    <Form.Control type="title" placeholder="https://..." />
                </Form.Group>
                <Form.Label>Estado Producto</Form.Label>
                <Form.Select className="mb-3" aria-label="Default select example">
                    <option value="1">Bueno</option>
                    <option value="2">Malo</option>
                    <option value="3">Medio</option>
                </Form.Select>
                <Form.Label>Precio Producto</Form.Label>
                <InputGroup className="mb-3">
                    <InputGroup.Text>$</InputGroup.Text>
                        <Form.Control aria-label="Amount (to the nearest dollar)" />
                    <InputGroup.Text>.00</InputGroup.Text>
                </InputGroup>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Descripccion</Form.Label>
                    <Form.Control as="textarea" type="text" placeholder="Descripccion" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    )

}

export default Formulario