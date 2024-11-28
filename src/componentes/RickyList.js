import React from 'react'
import { useState,useEffect } from 'react'
import RickyCard from './RickyCard'
import './ricky.css'

export default function RickyList() {
    const [characters,setCharacters] = useState([])
    useEffect(()=>{
        fetch("https://rickandmortyapi.com/api/character/")
        .then((response) => response.json())
        .then((response) => setCharacters(response.results))

    },[])
  return (
    <div>
        <h1> Rick and Morty 
            <div className='heroes-container'>
                { characters.map(character =>{
                    return (
                        <RickyCard character={character} />
                    )
                })}
            </div>
        </h1>
    </div>
  )
}
