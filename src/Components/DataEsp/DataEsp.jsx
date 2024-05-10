
import {React, useState} from "react";
import style from "./DataEsp.module.css"

const DataEsp = ({data,nombreData,color}) =>{
    const [mostrarData,setMostrarData] = useState(false)
    const [fondoColor,setFondoColor] = useState("")
    const mostrar = () =>{
        setMostrarData(true)
        setFondoColor(color+"99")
    }
    const ocultar = () =>{
        setMostrarData(false)
        setFondoColor("")
    }
    console.log(fondoColor)
    return(
        <div style={{backgroundColor:fondoColor}} className={mostrarData?style.dataMostrar:style.dataOcultar} onMouseEnter={mostrar} onMouseLeave={ocultar}>
            <h1>{nombreData}</h1>
            <h1 className={mostrarData?style.text:style.textOcultar}>{data}</h1>
        </div>
    )
}

export default DataEsp