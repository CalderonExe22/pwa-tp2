
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "./Carrusel.module.css"
import Tarjeta from "../Tarjetas/Tarjetas";
import { NextArrow,PrevArrow } from "../Arrows/Arrows";

function Carrusel({cars}) {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows:true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div>
      <Slider className={style.carrusel} {...settings}>

        {cars.map(car =>(
          <Tarjeta key={car.id} id={car.id} nombreAuto={car.nombre} anio={car.anio} video={car.video} />
        ))}

      </Slider>
    </div>
  );
}

export default Carrusel;

