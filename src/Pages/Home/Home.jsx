
import React, { useEffect, useState } from "react";
import style from "./Home.module.css"
import Carrusel from "../../Components/Carrusel/Carrusel";
import Header from "../../Components/Header/Header";
import Section from "../../Components/Animation/Animation";

const Home = () =>{

    const [scrollPosition,setScrollPosition] = useState(0)
    const [cars,setCars] = useState([])
    const footer = document.getElementsByClassName("footer")

    const feachCars = async() =>{
        const carsResponse = await fetch("/Mocks/ClassicsCars.json")
        const resultCars = await carsResponse.json()
        setCars(resultCars)
    }

    useEffect(() =>{

        feachCars()
        const efectoVista = () =>{
            const scroll = window.scrollY
            setScrollPosition(scroll)
        }
        window.addEventListener("scroll",efectoVista)
        return () =>{
            window.removeEventListener("scroll",efectoVista)
        }

    },[footer])

    console.log(cars)

    return (
        <>
        <Header/>
        <div className={style.home}>
            <div id="contenido1" className={style.presentacion + `${scrollPosition > 250 ? ' '+style.desenfoque : ''}`}>
                <div className={style.color}></div>
                <video className={style.video} muted autoPlay loop>
                    <source src="https://pwa-videos-exequiel.s3.us-east-2.amazonaws.com/videos/videoHome2.mp4" type="video/mp4"/>
                </video>
                <div className={style.info}>
                    <Section segundos={"8"}>
                        <h1 className={style.titles}>Descubre las marcas</h1>
                        <p>mas emblematicas de cada epoca.</p>
                        <p>junto a su historia</p>
                    </Section>
                </div>
            </div>
            <div id="contenido2" className={style.datos + `${scrollPosition > 1100 ? ' '+style.desenfoque : ''}`}>
                <div className={style.color}></div>
                <video className={style.video} muted autoPlay loop>
                    <source src="https://pwa-videos-exequiel.s3.us-east-2.amazonaws.com/videos/videoHome.mp4" type="video/mp4"/>
                </video>
                <div className={style.info2}>
                    <Section segundos={"8"}>
                        <h1 className={style.titles}>Los automoviles mas importantes</h1>
                        <p>de la epoca, .</p>
                        <p>junto a su historia</p>
                    </Section>
                </div>
            </div>
            <div id="contenido3" className={style.datos2  + `${scrollPosition > 2300 ? ' '+style.desenfoque : ''}`}>
                <Carrusel cars={cars}></Carrusel>
            </div>
        </div> 
        </>    
    )
}

export default Home 