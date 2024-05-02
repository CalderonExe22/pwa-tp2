import style from "./Tarjetas.module.css"
import Boton from "../Boton/Boton";
import { useNavigate } from "react-router-dom";

const Tarjeta = ({video,nombreAuto,anio,id}) => {

    const navegate = useNavigate()

    const verDetalles = (idCar) =>{
        navegate(`/Detalles/${idCar}`)
    }

    return(
        <div className={style.items}>
          <video className={style.video} muted autoPlay loop>
            <source src={video} type="video/mp4" />  
          </video> 
          <div className={style.text}>
            <span className={style.titles}>{nombreAuto} {anio}</span>
            <Boton onClick={() => verDetalles(id)} nombre={"Descubre mas"}></Boton>
          </div>
        </div>
    )
}

export default Tarjeta