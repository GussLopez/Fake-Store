import { Link } from "react-router-dom"

function Footer() {
  
    return (
        <>
        <footer className="footer">
            <p>&copy; <span className="foro__span">Market Foro</span> Todos los derechos reservados 2024</p>

            <nav>
                <Link className="nav-link" aria-current="page" to="/">
                    Inicio
                </Link>
                <Link className="nav-link" to="/carrito">
                    Carrito
                </Link>
                <Link className="nav-link" to="/nosotros">
                    Nosotros
                </Link>
                <Link className="nav-link" to="/map"> 
                    Sucursales
                </Link>
            </nav>
        </footer>
        </>
    )  
}

export default Footer