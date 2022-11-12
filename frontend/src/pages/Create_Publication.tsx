import { Card } from "react-bootstrap";
import axios from "axios"
import { resultProps } from "../interfaces/Show_Publications"


export function CreatePublications() {
  
  axios.post('http://localhost:3000/publicacion/post', {
    idPublicacion: "HOLA",
    idProducto: "HOLA",
    fotoPublicacion: "HOLA",
    precioPublicacion: "HOLA",
    estadoPublicacion: "HOLA",
    tituloPublicacion: "HOLA",
    descripcionPublicacion: "HOLA" 
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });  
  
  return (
      <Card.Text>hola</Card.Text>
    )
  }
  