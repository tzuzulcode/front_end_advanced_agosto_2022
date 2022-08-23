import React, { useEffect } from 'react'
import Link from "next/link"

// Funcion para generación estática, desde el server
export async function getStaticProps(){
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=30")
  const data = await response.json()

  return {
    props:{
      data:data.results
    }
  }
}

export default function Pokemon({data}) {
  // useEffect(()=>{

  // },[]) // Client side rendering
  return (
    <div>
      <h1>Pokemon</h1>
      {data?.map(pokemon=>{
        return <Link href={"/pokemon/"+pokemon.name} >
          <article key={pokemon.name}>
            <p>{pokemon.name}</p>
          </article>
        </Link>
      })}
    </div>
  )
}
