//import Fetching from "../data/axios"
import { Button } from "react-bootstrap"
import axios from "axios"
import { resultProps } from "../interfaces/Show_Publications";
import { useState, useEffect } from "react";

export function ShowPublications() {
//Fetching con axios
    const [result, setResult] = useState<resultProps[]>([]);

  const api = async () => {
      axios({
        method: 'get',
        url: 'http://localhost:3000/usuario/read',
      })
      .then(function (response:any) {
        setResult(response?.data)
      }).catch((err)=>{
        console.log(err)
      })
  };
  useEffect(() => {
    console.log("JASHDKAJHS")
    api();
  }, []);
  return(
    <div className="App">
    <h1>
      {result?.map((value: resultProps) => {
        return (
          <Button>
            <div>{value.rutUsuario}</div>
            <div>{value.nombreUsuario}</div>
            <div>{value.correoUsuario}</div>
            <div>{value.direccionUsuario}</div>
          </Button>
        );
      })}
    </h1>
  </div>
  )
}


  