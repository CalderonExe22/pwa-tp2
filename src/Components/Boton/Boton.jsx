import React from "react";
import style from "./Boton.module.css"

const Boton = ({nombre,onClick}) =>{
    return(
        <button className={style.boton} type="button" onClick={onClick}>{nombre}</button>
    );
}

export default Boton