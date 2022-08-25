import React, { useEffect } from 'react'
import axios from "axios"

// SSR
export async function getServerSideProps({params}){
    const {data:pokemon} = await axios.get("https://pokeapi.co/api/v2/pokemon/"+params.id)

    return {
        props:{
            data:{
                name: pokemon.name,
                weight: pokemon.weight,
                sprites: pokemon.sprites,
            }
        }
    }
}

export default function PokemonDetails({data}) {
    
  return (
    <div>
        <h1>{data.name}</h1>
        <p>Peso: {data.weight}</p>
        <img src={data.sprites.front_default} alt="" />
    </div>
  )
}
