
import React, { useEffect, useState } from "react";
import style from "./Home.module.css"
import Carrusel from "../../Components/Carrusel/Carrusel";
import Header from "../../Components/Header/Header";
import Section from "../../Components/Animation/Animation";
import Footer from "../../Components/Footer/Footer";
const Home = () =>{

    const [scrollPosition,setScrollPosition] = useState(0)
    const [cars,setCars] = useState([])

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

    },[])

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
                        <h1 className={style.titles}>Descubre las marcas icónicas</h1>
                        <p>Desde los primeros pioneros hasta las marcas contemporáneas, cada una tiene su propia historia fascinante y un legado único.</p>
                        <p>Explora su evolución a lo largo del tiempo y sumérgete en el apasionante mundo de la industria automotriz.</p>
                    </Section>
                </div>
            </div>
            <div id="contenido2" className={style.datos + `${scrollPosition > 1200 ? ' '+style.desenfoque : ''}`}>
                <div className={style.color}></div>
                <video className={style.video} muted autoPlay loop>
                    <source src="https://pwa-videos-exequiel.s3.us-east-2.amazonaws.com/videos/videoHome.mp4" type="video/mp4"/>
                </video>
                <div className={style.info2}>
                    <Section segundos={"8"}>
                        <h1 className={style.titles}>Los automóviles más influyentes</h1>
                        <p>que han definido la industria del automóvil a lo largo de los años. Desde los clásicos atemporales hasta los innovadores revolucionarios, cada uno ha dejado una marca indeleble en la historia del transporte.</p>
                        <p>Acompáñanos en un viaje a través del tiempo mientras desentrañamos la historia detrás de estos iconos automotrices."</p>
                    </Section>
                </div>
            </div>
            <div id="contenido3" className={style.datos2  + `${scrollPosition > 2300 ? ' '+style.desenfoque : ''}`}>
                <Carrusel cars={cars}></Carrusel>
            </div>
        </div> 
        <Footer/>
        </>    
    )
}

export default Home 