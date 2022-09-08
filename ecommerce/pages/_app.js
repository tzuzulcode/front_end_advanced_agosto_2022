import AuthContext from '../context/AuthContext'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  // Pull request(GitHub): implementando context de react para Auth 

  return <AuthContext>
    <Component {...pageProps} />
  </AuthContext> 
}

export default MyApp
