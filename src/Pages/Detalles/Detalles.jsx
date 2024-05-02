import { useParams } from "react-router-dom"

const Detalles = () =>{

    let {id} = useParams()

    return(
        <div className="pt-60">
            <h1 className="mt-96 text-white">Holaaaaaaaaaaaaaaaaa</h1>
            <h1 className="text-white">{id}</h1>
        </div>
        
    )
}

export default Detalles