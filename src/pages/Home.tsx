import { useEffect, useState } from "react"
import Footer from "./Footer"

function Home() {
    const [data, setData] = useState([]) // Este almacena los datos de la API

    // Función asincrona que realiza una petición a una API y me devuelve un JSON
    const getProduts = async () => {
        const response = await fetch("https://fakestoreapi.com/products/")
        const json = await response.json()
        setData(json)
        console.log(json);
    }

    // Deteecta cuando algo cambia en la app e invoca a getProducts
    useEffect(() => {
        getProduts()
        console.log(data)
    }, [])

    return (
        <>
            <div className="container">
                <h1 className="display-3">Productos</h1>
                <div className="producto__contenedor mt-5 view">
                    {data.map((product) => (
                    <div class="card mb-3 p-3 producto" style={{ 'max-width': '540px;' }}>
                        <div className="row g-0">
                            <div className="col-md-4 producto__img">
                                <img src={product.image} className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{product.title}</h5>
                                    <p className="card-text">Descripcion</p>
                                    <p className="card-text"><small className="text-body-secondary">$ {product.price}</small></p>
                                    <button className="btn btn-info">Agregar a Carrito</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default Home