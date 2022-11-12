import axios from "axios";
import { useState, useEffect } from "react";
import "./styles.css";

type resultProps = {
  rutUsuario: string
  nombreUsuario: string
  correoUsuario: string
  contrasenaUsuario: string
  direccionUsuario: string
};

export default function App() {
  const [result, setResult] = useState<resultProps[]>([]);

  const api = async () => { axios({
     
        method: 'get',
        url: 'http://localhost:3000/usuario/read',
      })
      .then(function (response:any) {
        setResult(response?.data)
      }).catch((err)=>{
        console.log(err)
      })

      
      // const apiResponse = await fetch("http://localhost:3000/usuario/read",{
      //     method: 'GET',
      //     headers: { 'Content-type': 'application/json'},
      // });
      // console.log(apiResponse)
      // const json = await apiResponse.json();
    // const jsonData = await data.json();
    // setResult(jsonData.results);
  };

  useEffect(() => {
    console.log("JASHDKAJHS")
    api();
  }, []);
/*  rutUsuario: string
  nombreUsuario: string
  correoUsuario: string
  contrasenaUsuario: string
  direccionUsuario: string */
  return (
    <div className="App">
      <h1>
        {result?.map((value: resultProps) => {
          return (
            <div>
              <div>{value.rutUsuario}</div>
              <div>{value.nombreUsuario}</div>
            </div>
          );
        })}
      </h1>
      <h2>Json File from DB_Backend.</h2>
    </div>
  );
}