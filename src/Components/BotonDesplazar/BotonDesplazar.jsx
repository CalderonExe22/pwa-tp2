
import style from "./BotonDesplazar.module.css";
import React, { useState } from "react";

const Galeria = () =>{

    const [onClick,setOnClick] = useState(false)

    const clickButton = (div) =>{
        scrollToDiv(div)
        setOnClick(div)
    }

    const resetAnimation = () =>{
        setOnClick(false)
    }

    const scrollToDiv = (div) => {
        const divElement = document.getElementById(div);
        divElement.scrollIntoView({ behavior: 'smooth' });

    };
    console.log(onClick)
    return (
        <div className="fixed right-0 top-1/3 justify-end content-center p-5 me-14 z-50">
            <div className="flex flex-col gap-1">
                <button className={`${onClick === "contenido1" ? style.botonEfecto : style.boton}`} onClick={()=>clickButton("contenido1")} onAnimationEnd={resetAnimation}></button>
                <button className={`${onClick === "contenido2" ? style.botonEfecto : style.boton}`} onClick={()=>clickButton("contenido2")} onAnimationEnd={resetAnimation}></button>
                <button className={`${onClick === "contenido3" ? style.botonEfecto : style.boton}`} onClick={()=>clickButton("contenido3")} onAnimationEnd={resetAnimation}></button>
            </div>
        </div>
    )
}

export default Galeria