import React from "react"
import { InfosUsuario } from "./InfosUsuario";

export function CardVideo(props) {
    
    const usuario1={
        img:"https://i.pravatar.cc/50",
        nome: "Usuario 1",
      }

    function reproduzVideo() {
        alert("O vídeo está sendo reproduzido");
    }

    return (
        <div className="box-pagina-principal" onClick={reproduzVideo}>
            <img src={props.card.img} />
            <h4>{props.card.titulo}</h4>
            <InfosUsuario usuario={usuario1}/>
        </div>
    )
}