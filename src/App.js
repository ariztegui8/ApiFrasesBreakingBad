import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import Frase from "./components/Frase";
import './index.css';

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 60px;
  flex-direction: column;
`

const Boton = styled.button`
  background: -webkit-linear-gradient(top left, #1d231f  0, #007d35 40%, #113127 100%);
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 100px;
  padding: 10px 50px;
  font-size: 32px;
  border: 2px solid #fff;
`

function App() {

  //State de frases
  const [frase, guardarFrase] = useState({});

  const consultarApi = async ()=>{

    //Metodo con .then
    // const api = fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    // const frase = api.then(respuesta => respuesta.json());
    // frase.then(resultado => console.log(resultado));
    // console.log(frase);

    //Metodo con async await
    const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const frase = await api.json()
    guardarFrase(frase[0]);
  }

  //Cargar una frase
  useEffect(()=>{
    consultarApi()
  }, []);


  return (
      <Contenedor>
        <Frase
          frase={frase}
        />

          <Boton
            onClick={consultarApi}
          >
            Obtener Frase
          </Boton>
      </Contenedor>
  );
}

export default App;
