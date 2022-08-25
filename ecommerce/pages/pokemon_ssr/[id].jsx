import React from 'react'

// SSR
export async function getServerSideProps({params}){
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/"+params.id)
    const pokemon = await response.json()

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
