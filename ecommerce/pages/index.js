import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [click,setClick] = useState(1)
  return (
    <>
      <h1>Hola mundo, next.js</h1>
      <button onClick={()=>{setClick(click+1)}}>{click}</button>
    </>
  )
}
