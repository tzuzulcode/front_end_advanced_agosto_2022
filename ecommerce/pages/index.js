import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Link from "next/link"
import Navbar from '../components/Navbar'
import { signOut } from 'firebase/auth'
import { auth } from '../libs/firebase'

// Estática
export default function Home() {
  const [click,setClick] = useState(1)

  const logout = ()=>{
    signOut(auth)
  }
  return (
    <>
      <Navbar/>
      <h1>Hola mundo, next.js</h1>
      <button onClick={()=>{setClick(click+1)}}>{click}</button>
      <button onClick={logout}>Log out</button>

      <Link href="/login">Login</Link>
      <Link href="/signup">SignUp</Link>
      <Link href="/pokemon">Pokemon</Link>
      <Link href="/pokemon_ssr">Pokemon SSR</Link>
      <Link href="/products">Products</Link>
      <Link href="/admin/products/create">Create Product</Link>
    </>
  )
}
