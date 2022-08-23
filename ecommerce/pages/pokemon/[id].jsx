import React from 'react'

export async function getStaticPaths(){
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=30")
    const data = await response.json()

    const pokemonIDs = data.results.map(pokemon=>({
        params:{
            id:pokemon.name //id es el nombre del param del archivo
        }
    }))


    return {
        paths:pokemonIDs,
        fallback:false // fallback:false, si no se encuentra el path dirige a 404
    }
}

export async function getStaticProps({params}){
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/"+params.id)
    const pokemon = await response.json()

    return {
        props:{
            data:pokemon
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
