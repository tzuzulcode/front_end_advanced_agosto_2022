import Link from "next/link"

// Funcion para renderizado desde el servidor: Server-Side Rendering
export async function getServerSideProps(){
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=30")
    const data = await response.json()
  
    return {
      props:{
        data:data.results
      }
    }
}
  
  export default function PokemonSSR({data}) {
    // useEffect(()=>{
  
    // },[]) // Client side rendering
    return (
      <div>
        <h1>Pokemon</h1>
        {data?.map(pokemon=>{
          return <Link key={pokemon.name} href={"/pokemon_ssr/"+pokemon.name} >
            <article>
              <p>{pokemon.name}</p>
            </article>
          </Link>
        })}
      </div>
    )
  }