import { Card } from "react-bootstrap";
import axios from "axios"
import { useEffect } from "react";
import { resultProps } from "../interfaces/Show_Publications"

export function CreatePublications() {
  const api = async () => {
    axios({
      method: 'post',
      url: 'http://localhost:3000/publicacion/create',
      data: {
        rutUsuario: "21.479.053-4", // lo paso yo
        idProducto: "3a2e7cc2-6df2-44a9-afb1-df19b4920989", // lo paso yo 
        fotoPublicacion: "https://cdn.pixabay.com/photo/2016/03/21/23/25/link-1271843_960_720.png",
        precioPublicacion: 500,
        estadoPublicacion: "Bueno",
        tituloPublicacion: "hola",
        descripcionPublicacion: "hola"
      }
        })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });  
  };
  useEffect(() => {
    console.log("B")
    api();
}, []);
  return (
    <Card.Text>hola</Card.Text>
  )
};
  