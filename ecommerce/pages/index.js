import Head from 'next/head'
import Image from 'next/image'
import { useState, useContext } from 'react'
import Link from "next/link"
import Navbar from '../components/Navbar'
import { signOut } from 'firebase/auth'
import { auth } from '../libs/firebase'
import { authContext } from '../context/AuthContext'

// Estática
export default function Home() {
  const {user, setUser} = useContext(authContext)

  console.log(user); 

  const logout = ()=>{
    signOut(auth)
    setUser({
      logout: true
    })
  }
  return (
    <>
      <Navbar/>

      <div className='flex gap-3'>
        {!user.logout && <button onClick={logout}>Log out</button>}
        {user.logout && <Link href="/login">Login</Link>}
        {user.logout && <Link href="/signup">SignUp</Link>}
        <Link href="/pokemon">Pokemon</Link>
        <Link href="/pokemon_ssr">Pokemon SSR</Link>
        <Link href="/products">Products</Link>
        <Link href="/admin/products/create">Create Product</Link>
        {!user.logout && <h1>Welcome {user.name}!</h1>}
      </div>
    </>
  )
}
