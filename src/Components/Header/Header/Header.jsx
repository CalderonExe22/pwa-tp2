import style from "./Header.module.css"
import React, { useEffect, useState } from "react";
import { RUTAS } from "../../../Const/Const";

const Header = () =>{

    //const [scroll,setScroll] = useState(false)
    const [lastScrollTop,setLastScrollTop] = useState(0)
    const [direccionScroll,setDireccionScroll] = useState("up")
    const [isVisible,setIsVisible] = useState(true)

    /*useEffect(() =>{
        const scrollear = () =>{
            if(window.scrollY > 0){
                setScroll(true)
            }else{
                setScroll(false)
            }
        }
        // Agrega un event listener para el evento de scroll cuando el componente se monta
        window.addEventListener('scroll', scrollear)

        // Remueve el event listener cuando el componente se desmonta para evitar fugas de memoria
        return () => {
         window.removeEventListener('scroll', scrollear)
        }
    },[])*/

    console.log(window.scrollY)
    useEffect(()=>{
        const scroll = () =>{
            const actualScroll = window.scrollY
            if(actualScroll > lastScrollTop){
                setDireccionScroll("down")
            }else{
                setDireccionScroll("up")
            }
            setLastScrollTop(actualScroll < 0 ? 0 : actualScroll)
        }
        window.addEventListener("scroll",scroll)
        return () =>{
            window.removeEventListener("scroll",scroll)
        }
    },[lastScrollTop])

    useEffect(()=>{
        setIsVisible(direccionScroll === "up")
    },[direccionScroll])

    return(
        <header className={isVisible ? style.header : style.scrolled}>
            <nav className="flex flex-col gap-3">
                <nav className="flex justify-center">
                    <h1 className={style.logo}>ClassicsCars</h1>
                </nav>
                <nav className="flex justify-center gap-28 font-bold text-lg">
                    <a href={RUTAS.home} className={style.links}>Home</a>
                    <a href={RUTAS.detalles} className={style.links}>Explorar</a>
                    <a href={RUTAS.acercaDe} className={style.links}>Acerca de</a>
                </nav>
            </nav>
        </header>
    );
}

export default Header