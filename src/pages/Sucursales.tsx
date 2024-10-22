import { useState } from "react"

function Sucursales() {
    const [dark, setDarkMode] = useState(false);
    const toggleDarkMode = () => {
        setDarkMode(!dark)
        console.log(dark)
    }
    return (
        <>
        <div className={`${dark ? 'dark-mode' : ''}`}>
            <div className="contenedor">
                <h1 className={`display-3 ${dark ? 'text-dark-mode' : ''}`}>Sucursales</h1>
                <iframe className={`${dark ? 'map-dark-mode' : ''}`} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12516.857423637352!2d-86.82717442608477!3d21.141094188453483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4c2bfe37e860b3%3A0x542924d7054fb104!2sPlaza%20Las%20Am%C3%A9ricas!5e0!3m2!1ses-419!2smx!4v1729467183150!5m2!1ses-419!2smx" width="1000" height="500"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <div className="boton my-4">
                    <button className="btn btn-secondary boton-dark" onClick={toggleDarkMode}>Dark Mode</button>
                </div>
            </div>

        </div>
        </>
    )  
}

export default Sucursales