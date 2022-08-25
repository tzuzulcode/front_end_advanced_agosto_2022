import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/Home.module.css'
import Link from "next/link"
import Navbar from '../components/Navbar'

// Estática
export default function Home() {
  const [click,setClick] = useState(1)
  return (
    <>
      <Navbar/>
      <h1>Hola mundo, next.js</h1>
      <button onClick={()=>{setClick(click+1)}}>{click}</button>
      <Link href="/pokemon">Pokemon</Link>
      <Link href="/pokemon_ssr">Pokemon SSR</Link>
    </>
  )
}
