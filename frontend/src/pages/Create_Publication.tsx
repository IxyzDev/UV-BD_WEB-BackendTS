import { Button, Card } from "react-bootstrap";
import axios from "axios"
import { useEffect } from "react";
import  Formulario  from "../components/Form"
import { resultProps } from "../interfaces/Publications"

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
      .then(function (response:any) {
        console.log(response);
      }).catch((err)=>{
        console.log(err)
      }) 
  }
  useEffect(() => {
    console.log("A")
    api();
  }, []);
  return (
    <Button onClick={CreatePublications}>
      <Card.Text>
        <Formulario/>
      </Card.Text>
    </Button>
  )
};
  