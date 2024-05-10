import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../Input/Input";
import style from "./Search.module.css";

const Search = () => {

    const navigate = useNavigate();
    const [cars, setCars] = useState([]);
    const [searchCar, setSearchCar] = useState(""); 
    const [filterCar, setFilterCar] = useState([]);
    const [seeSearch, setSeeSearch] = useState(false);

    useEffect (() => {
        const feachCars = async () => {
        const carsResponse = await fetch("/Mocks/ClassicsCars.json");
        const resultCars = await carsResponse.json();
        setCars(resultCars);
        };
        feachCars();
    },[]);

    const handleSearch = (event) => {
        const valueSearch = event.target.value;
        setSearchCar(valueSearch);
        const filteredCars = cars.filter(car => car.nombre.toLowerCase().includes(valueSearch.toLowerCase()));
        setFilterCar(filteredCars);
    };

    const showCar = (idCar) => {
        navigate(`/Detalles/${idCar}`);
        setSearchCar("")
        window.location.reload();
    };

    const showSearch = () => {
        setSeeSearch(!seeSearch);
    }

    return (
        <div className="relative">
            <button onClick={showSearch} className={seeSearch ? "absolute p-1 left-2" : ""}>
                {seeSearch ? <i className="fas fa-search text-black"></i> : <i className="fas fa-search"></i>}
            </button>
            <div className={seeSearch ? "flex flex-col" : "hidden"}>
                <Input value={searchCar} placeholder="Buscar" type="search" onChange={handleSearch} style={style.input}/>
                <div className="relative">
                    <div className={searchCar !== "" ? style.results : "hidden"}>
                        {filterCar.length > 0 ? (
                        <ul>
                            {filterCar.map(car => (
                                <li key={car.id} onClick={() => showCar(car.id)} className={style.liResults}>{car.nombre}</li>
                            ))}
                        </ul>
                        ) : (
                            <p className="px-10 py-1">No se encontraron resultados para su búsqueda</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );

};

export default Search;