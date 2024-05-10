import React from "react";
import style from "./Galeria.module.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PrevArrow, NextArrow } from "../Arrows/Arrows"
import { AnimatePresence,motion } from "framer-motion";
const Galeria = ({imgs}) =>{
    const settings = {
        arrows:true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
    };
    console.log(imgs)
    return (
        <AnimatePresence mode="wait">
            <motion.div className={style.datos} initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -30, opacity: 0 }} transition={{ duration: 0.4 }}>
            <Slider className={style.carrusel} {...settings}>
                {/*<div className={style.items}>
                    <div className="flex justify-center items-center h-full">
                        <img src={imgs?.frente} alt="2" />
                    </div>
                </div>
                <div className={style.items}>
                    <div className="flex justify-center items-center h-full">
                        <img src={imgs?.lado1} alt="2" />
                    </div>
                </div>
                <div className={style.items}>
                    <div className="flex justify-center items-center h-full">
                        <img src={imgs?.lado2} alt="2" />
                    </div>
                </div>
                <div className={style.items}>
                    <div className="flex justify-center items-center h-full">
                        <img src={imgs?.atras} alt="2" />
                    </div>
                </div>*/}
                {
                    Object.entries(imgs).map(([nombre, url])=> (
                        <div className={style.items}>
                            <div className="flex justify-center items-center h-full">
                                <img key={nombre} src={url} alt={nombre} />
                            </div>
                        </div>
                    ))
                }
            </Slider>
            </motion.div>
        </AnimatePresence>
    )
}

export default Galeria