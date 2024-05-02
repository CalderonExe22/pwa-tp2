
import React, { useEffect, useState } from "react";
import style from "./Home.module.css"
import Carrusel from "../../Components/Carrusel/Carrusel";
import BotonDesplazar from "../../Components/BotonDesplazar/BotonDesplazar";

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
        <div className={style.home}>
            <BotonDesplazar/>
            <div id="contenido1" className={style.presentacion + `${scrollPosition > 250 ? ' '+style.desenfoque : ''}`}>
                <div className={style.color}></div>
                <video className={style.video} muted autoPlay loop>
                    <source src="https://rr2---sn-x1xe7n76.googlevideo.com/videoplayback?expire=1714669829&ei=pXQzZpnMOJLFp-oPg7u9sAQ&ip=41.108.148.166&id=o-ACUiPjNa1dhwZQh0BiLKP9UYs5Rc7SoTMlNlbRkmaMHR&itag=248&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C271%2C278%2C313&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&bui=AWRWj2TVWpM6ei_eWpUW4ZC505SnRgXBqf6L7iVa0jdeDvBY2SE_4eLVsJHVBhigMPjtB_vf97pLgcp2&vprv=1&svpuc=1&mime=video%2Fwebm&ns=qsKmwn1aSwuzCxcMzlRlWcsQ&gir=yes&clen=23161380&dur=123.680&lmt=1675425925805099&keepalive=yes&c=TVHTML5_SIMPLY_EMBEDDED_PLAYER&sefc=1&txp=5319224&n=Pb-ElIvg3n_cJnqn&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cvprv%2Csvpuc%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRgIhAI5XidPGgLwIR-R0B3q7gohWIYo9DcFBBv5QXWdFmV33AiEA61rtICjlR3or9R8KFuN3b5OdpFnT3lMU0VqI4YYQntw%3D&rm=sn-5abxgpxuxaxjvh-5abd7r,sn-h5qzy7s&req_id=d160e8da126ba3ee&cmsv=e&redirect_counter=2&cms_redirect=yes&ipbypass=yes&mh=t_&mip=186.134.152.124&mm=29&mn=sn-x1xe7n76&ms=rdu&mt=1714660861&mv=m&mvi=2&pl=23&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AHWaYeowRAIgPjnbULFDM8nbSeucZLpVg5o19lNIfJP34hIhaWX01gwCIC-rPASrQEE2x-8hwi_V90yS0L0VI12mz4LV-Kq5kCuC" type="video/mp4"/>
                </video>
                <div className={style.info}>
                    <span className={style.titles}>Descubre las marcas</span>
                    <p>mas emblematicas de cada epoca.</p>
                    <p>junto a su historia</p>
                </div>
            </div>
            <div id="contenido2" className={style.datos + `${scrollPosition > 1300 ? ' '+style.desenfoque : ''}`}>
                <div className={style.color}></div>
                <video className={style.video} muted autoPlay loop>
                    <source src="https://rr3---sn-bg07dn6k.googlevideo.com/videoplayback?expire=1714683205&ei=5agzZuaINLqXlu8PsN2q2A4&ip=181.214.166.129&id=o-AId2SyfBYOQqgY8AZe57KVnVa1v8CsBt5O_qJ2PgWeHM&itag=137&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C271%2C278%2C313&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&bui=AWRWj2T_srUhLEJ0QVc_EFIJg0IVyjE_xK75X8KS17vEvoR7tVU3sWNCOl4Eip9tzd6n8_Dk0-e8k6O7&spc=UWF9f1RE_vS34SjINdNbQBNY3bgaxoHEBBr42Z-Zn1fWPkrpRLs_0eNMuClD&vprv=1&svpuc=1&mime=video%2Fmp4&ns=smeIt7Hj43vWnJS9_BZBOfgQ&gir=yes&clen=41632684&dur=87.520&lmt=1697455094604262&keepalive=yes&c=WEB&sefc=1&txp=5319224&n=nVCxih5T4gM0lQ&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRAIgRZsAmeTO3LxYEUC35meFVGm28VoLBHo_76IqAcvX2sgCIFH6MptewxuLA3yIHE4F7XacBH41aI-WNQkN6hE2gub4&redirect_counter=1&cm2rm=sn-vgqese7l&req_id=ef3810e9ea74a3ee&cms_redirect=yes&cmsv=e&mh=TQ&mip=186.134.152.124&mm=34&mn=sn-bg07dn6k&ms=ltu&mt=1714661317&mv=m&mvi=3&pl=23&lsparams=mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AHWaYeowRAIgUkOMGPOTQy-sh_WzgTXMpND3GRc3uODuk19QfvqqdhcCIA0iZJhhe1Cfh-wRctTfNEeQkEHncQ9t2335FW1pKGHT" type="video/mp4"/>
                </video>
                <div className={style.info2}>
                    <span className={style.titles}>Descubre las marcas</span>
                    <p>mas emblematicas de cada epoca.</p>
                    <p>junto a su historia</p>
                </div>
            </div>
            <div id="contenido3" className={style.datos2  + `${scrollPosition > 2300 ? ' '+style.desenfoque : ''}`}>
                <Carrusel cars={cars}></Carrusel>
            </div>
            <div className="mt-96 mb-96 flex flex-col">
                <div className={"flex justify-center content-center"}>
                    <span className={style.titles}>Enterate mas sobre nosotros</span>
                </div>
                <div>
                    <button className="w-48 text-white">Acerca de nosotros</button>
                </div>
            </div>
        </div>     
    )
}

export default Home 