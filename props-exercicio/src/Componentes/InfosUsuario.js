import React from "react"

export function InfosUsuario(props) {

    return(
    <div>
        <img src={props.usuario.img}/>
        <p>{props.usuario.nome}</p>
    </div>
    )
}