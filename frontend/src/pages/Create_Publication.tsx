import { Button, Card } from "react-bootstrap";
import axios from "axios"
import { useEffect } from "react";
import  Formulario  from "../components/Form"
import { resultProps } from "../interfaces/Publications"

/*
await axios.post(
  '/bezkoder.com/tutorials',
  {
    title: title,
    description: description,
  },
  {
    headers: {
      "x-access-token": "token-value",
    },
  }
);
*/

export function CreatePublications() {
  const api = async () => {
    await axios.post('http://localhost:3000/publicacion/crear',
    {
      headers: {
        "x-access-token": "token-value",
      },
    }
    )
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
  