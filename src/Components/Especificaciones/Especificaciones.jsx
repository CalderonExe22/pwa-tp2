import {React} from "react";
import style from "./Especificaciones.module.css"
import DataEsp from "../DataEsp/DataEsp";
import { AnimatePresence,motion } from "framer-motion";
const Especificaciones = ({color,nombre,img,data,titulo}) =>{
    return(
        <AnimatePresence mode="wait">
            <motion.div className={style.datos} initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -30, opacity: 0 }} transition={{ duration: 0.4 }}> 
                <div style={{backgroundColor:color}} className={style.especificaciones}>
                <div className="flex justify-start items-center ps-10"><h1 className={style.marca}>{nombre}</h1></div>
                    {
                    data && Object.entries(data).map(([nombre, dataAuto]) => (
                        <DataEsp key={nombre} color={color} nombreData={nombre} data={dataAuto} />          
                    ))
                    }
                </div>
                <div className="relative w-full h-full z-0">
                    <div className="absolute top-32 w-full -z-10 text-center">
                        <h1 style={{color:color}} className={style.titles}>{titulo}</h1>
                    </div>
                    <div className="flex justify-center items-center w-full h-full z-0 content-center">
                        <img className="w-4/5" src={img} alt={nombre} />
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    )
}

export default Especificaciones