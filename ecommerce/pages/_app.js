import { onAuthStateChanged } from 'firebase/auth'
import { useEffect } from 'react'
import { auth } from '../libs/firebase'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  useEffect(()=>{
    onAuthStateChanged(auth,(result)=>{
      console.log(result)
    })
  },[])

  // Pull request(GitHub): implementando context de react para Auth 

  return <Component {...pageProps} />
}

export default MyApp
