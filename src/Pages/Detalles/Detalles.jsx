import { useEffect, useState } from "react"
import Header from "../../Components/Header/Header"
import { AnimatePresence,motion } from 'framer-motion';
import style from "./Detalles.module.css"
import Navegate from "../../Components/Navegate/Navegate"
import Especificaciones from "../../Components/Especificaciones/Especificaciones"
import Galeria from "../../Components/Galeria/Galeria"
import { useParams } from "react-router-dom";
import Footer from "../../Components/Footer/Footer"
import Section from "../../Components/Animation/Animation";
const Detalles = () =>{
    const [mostrarEspecificaciones, setMostrarEspecificaciones] = useState(true);
    let {id} = useParams()
    const [auto,setAuto] = useState([])
    console.log(id)
    
    useEffect(()=>{
        const feachAuto = async()=>{
            const autoResponse = await fetch(`/Mocks/car-${id}.json`)
            const autoResult = await autoResponse.json()
            setAuto(autoResult)
        }
        feachAuto()
    },[id])
    
    return(
        <>
        <Header/>
        <div className={style.detalles} style={{color: auto.colores?.color1 }}>
            <div style={{backgroundColor: auto.colores?.colorFondoDegradado,background:auto.colores?.degradado}} className={style.presentacion}>
                <div className="absolute top-32 w-full z-0 text-center">
                    <AnimatePresence mode="wait">
                        <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -30, opacity: 0 }} transition={{ duration: 1.2 }}>
                            <h1 style={{color:auto.colores?.color2}} className={style.titles}>{auto.titulo}</h1>
                        </motion.div>
                    </AnimatePresence>        
                </div>

                <div className="w-full flex justify-center text-center text-2xl">
                    <Section segundos={"7"}>
                        <div style={{borderColor: auto.colores?.color2}} className={style.rotate}>
                            <div className={"transform -rotate-45"}>0{auto.id}</div>
                        </div>
                    </Section>
                </div>

                <div className="flex justify-center w-full z-20 top-72 text-2xl">
                    <Section segundos={"8"}> 
                        <h1>{auto.nombre}</h1>
                    </Section>
                </div>

                <div className="flex justify-center z-10">
                    <AnimatePresence mode="wait">
                        <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -30, opacity: 0 }} transition={{ duration: 1.2 }}>
                            <img src={auto.imagenesFondo?.imagenInicio} alt={auto.nombre} />
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="flex justify-center text-center text-sm">
                    <Section segundos={"9"}> 
                        <p className={style.text}>{auto.introduccion}</p> 
                    </Section>
                </div>
            </div>

            <div className={style.galery}>
                <Navegate setMostrarEspecificacion={setMostrarEspecificaciones}/>
                {mostrarEspecificaciones?<Especificaciones data={auto.especificaciones} img={auto.imagenesGaleria?.lado1} nombre={auto.nombre} titulo={auto.titulo} color={auto.colores?.color3}/> : <Galeria imgs={auto.imagenesGaleria}/>}
            </div>

            <div style={{backgroundColor:auto.colores?.color3,color:auto.colores?.color1}} id="datosAutos" className={style.datosAutos}>   
                <div className={style.historia}>
                    <div className="flex justify-left items-center">
                        <Section segundos={"8"}>
                            <img src={auto.imagenesFondo?.imagenHistoria} alt="" />
                        </Section>
                    </div>
                    <div className="flex justify-center items-center">
                        <div className="flex flex-col gap-10">
                            <Section segundos={"8"}>
                                <h1 className="text-2xl"> -Historia</h1>
                                <h1 className={style.titulos}>Como se convirtio en un clasico</h1>
                                <h1 className="pe-64 ps-28 leading-loose">{auto.historia}</h1>
                            </Section>
                        </div>
                    </div>
                </div>
                
                <div className={"my-20 w-full h-auto grid grid-rows pe-72 ps-72 text-white"}>
                    <Section segundos={"8"}>
                        <div className="flex justify-start items-center">       
                            <img className="w-2/3 rounded-2xl shadow-lg" src={auto.creador?.foto} alt="" />
                            <a target="blank" href={auto.creador?.linkBiografia} className={style.titulos2+" absolute left-1/2"}> <i class="fa-solid fa-circle-play"></i> Quien fue su creador?</a>
                        </div>
                    </Section>
                </div>
                
                <div className={style.disenio}>
                    <div className="flex justify-center items-center">
                        <div className="flex flex-col gap-10 ps-52">
                            <Section segundos={"8"}>
                                <h1 className="text-2xl"> -Dise&ntilde;o</h1>
                                <h1 className={style.titulos}>Como se convirtio en un clasico</h1>
                                <h1 className="pe-28 ps-44 leading-loose">{auto.disenio}</h1>
                            </Section>
                        </div>
                    </div>
                    <div className="flex justify-end items-center">
                        <Section segundos={"8"}>
                            <img src={auto.imagenesFondo?.imagenDisenio} alt="w" />
                        </Section>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </>
    )
}

export default Detalles