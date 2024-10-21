import { useState } from "react"


function Button() {
  const [nameStudent, setNameStudent] = useState('Gus')
  const showNameStudent = () => {
    setNameStudent('Pedro')
  }
  return(
    <>
        <h1 className="display-5">Ejemplo de boton</h1>
        <button className="btn btn-danger" onClick={showNameStudent}>Dar Clic</button>
        {nameStudent}
    </>  
  )  
}

export default Button