import React from 'react';
import style from "./Arrows.module.css"
const NextArrow = (props) => {
    return (       
        <button className={style.boton+' absolute top-1/2 right-0 me-20 z-20'} onClick={props.onClick} type="button">
            <i class="fa-solid fa-chevron-right"></i>
        </button>       
    )
};

const PrevArrow = (props) => {
    return (       
        <button className={style.boton+' absolute top-1/2 ms-20 z-20 '} onClick={props.onClick} type="button">
            <i class="fa-solid fa-chevron-left"></i>
        </button>      
    );
};

export { PrevArrow, NextArrow };