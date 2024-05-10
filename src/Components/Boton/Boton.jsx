import React from "react";
import style from "./Boton.module.css"

const Boton = ({nombre,onClick}) =>{
    return(
        <a href="#" className={style.boton} type="button" onClick={onClick} >{nombre}</a>
    );
}

export default Boton