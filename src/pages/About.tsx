import Footer from "./Footer"
import ecomerce from "../assets/eecomerce.jpeg"

function About() {
  
    return (
        <>
        <div className="container">
            <h1 className="display-5 mb-5 mt-5">Acerca de Nosotros</h1>
            <div className="about_us_conteiner">
            <div>
                <p className="about_us">En nuestra tienda en línea, nos apasiona ofrecerte una experiencia de compra única, donde la moda y la tecnología se unen para brindarte lo mejor en ropa y productos electrónicos. Trabajamos cada día para seleccionar artículos de alta calidad que se adapten a tu estilo de vida y necesidades. Nuestra misión es simplificar tu compra, brindándote productos que combinan estilo, funcionalidad y tecnología, todo desde la comodidad de tu hogar. ¡Descubre nuestra variedad y déjanos ser parte de tu día a día!
                </p>
            </div>
            <img src={ecomerce} alt="ecomerce foto" />
            </div>
        </div>
        <Footer></Footer>
        </>
    )  
}

export default About