import {React} from "react"
import style from "./Navegate.module.css"

const Navegate = ({setMostrarEspecificacion}) =>{
    return(
        <div className="absolute w-full top-0 z-10">
            <div className="flex justify-center items-center p-12">
                <div className="flex justify-around w-72">
                    <button className={style.boton} onClick={()=>setMostrarEspecificacion(true)} >Especificaciones</button>
                    <button className={style.boton} onClick={()=>setMostrarEspecificacion(false)} >Galeria</button>
                </div>
            </div>
        </div>
    )
}

export default Navegate