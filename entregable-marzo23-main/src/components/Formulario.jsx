import { useState } from 'react'

import Boton from './Boton'
  





const Formulario = () => {



    const [nombrePilar,setNombrePilar] = useState("")
    const [habilidad,setHabilidad] = useState("")
    
    const handleSubmit = e => {
        e.preventDefault()
    
        if (nombrePilar.indexOf(' ') !== -1 && nombrePilar.length < 3) {
            alert("No cumple con las condiciones");
          } else {
            console.log('Correcto');
          }
        if (habilidad.length <6){
          alert(`${habilidad}` + `tiene un texto muy corto`)
        }
          
    }


  return (

  
    <form onSubmit={handleSubmit}>
        

        <label htmlFor='nombre'>casador de demonios</label>
        <br />
        <input
            id='nombre'
            type='text'
            placeholder='Nombre Pilar'
            value={nombrePilar}
            onChange={e =>setNombrePilar(e.target.value)}
        />

    <hr />

        <label htmlFor='nombre2'>habilidad</label>
        <br />
        <input
            id='nombre2'
            type='text'
            placeholder='elemento favorito'
            value={habilidad}
            onChange={e =>setHabilidad(e.target.value)}

        />

    <hr />
    
    <Boton/>

    </form>
  )
}

export default Formulario
