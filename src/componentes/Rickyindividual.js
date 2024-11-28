import { getElementError } from '@testing-library/react'
import React ,{useState}from 'react'
import { useHref, useParams } from 'react-router-dom'
import RickyList from './RickyList'
import RickyCard from './RickyCard'
import Swal from 'sweetalert2'




export default function Rickyindividual() {
    const [individual, setIndividual] = useState([])
    const { id } = useParams()
    const [isLoading, setyIloading] = useState(true)
    


    fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => response.json())
    .then((response) => setIndividual(response))

if(isloading){
    Swal.fire({tittle: "cargando datos..."})
    Swal.showLoading()
}    
else
    Swal.close()



  return (
    <div className='individual'>
        <img src={individual.image} alt={individual.image} />
        <p>Id: {individual.id}</p>
        <p>Nombre: {individual.name}</p>
        <p>Status: {individual.status}</p>
        <p>Especie: {individual.species}</p>
        <p>Genero: {individual.gender}</p>
        
    </div>
    
  )
}








