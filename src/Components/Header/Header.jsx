import style from "./Header.module.css"
import React, { useEffect, useState } from "react";
import { RUTAS } from "../../Const/Const";
import Search from "../Search/Search";

const Header = () =>{

    const [lastScrollTop,setLastScrollTop] = useState(0)
    const [direccionScroll,setDireccionScroll] = useState("up")
    const [isVisible,setIsVisible] = useState(true)
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
            <nav className="flex justify-around content-center gap-3">
                <nav className="flex justify-center">
                    <h1 className={style.logo}>ClassicsCars</h1>
                </nav>
                <nav className="flex justify-center items-center gap-16 font-bold text-lg">
                    <a href={RUTAS.home} className={style.links}><i class="fa-solid fa-house"></i> Home</a>
                    <Search/>
                </nav>
            </nav>
        </header>
    );
}

export default Header