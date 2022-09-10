import {
    signInWithEmailAndPassword
} from "firebase/auth"
import {useRouter} from 'next/router'
import CustomForm from "../components/forms/CustomForm"
import Input from "../components/forms/Input"
import { auth } from "../libs/firebase"
import {providerLogin,signInMethods} from "../libs/auth"

export default function Login() {
    const router = useRouter()
    const handleLogin = (data,{setSubmitting,setStatus})=>{
        signInWithEmailAndPassword(auth,data.email,data.password)
        .then(result=>{
            setSubmitting(false)
            router.push('/')
        })
        .catch(error=>{
            console.log(error)
            setSubmitting(false)
        })
    }

    const loginWithProvider = (id)=>{
        providerLogin(id)
        .then(result=>{
            console.log(result)
        })
        .catch(error=>{
            console.log(error)
        })
    }

  return (
    <div>
        <button onClick={()=>loginWithProvider(signInMethods.google)}>
            Google
        </button>
        <button onClick={()=>loginWithProvider(signInMethods.facebook)}>
            Facebook
        </button>
        {/* Implementar inicio de sesión con GitHub */}
        <CustomForm
            initialValues={{
                email:"",
                password:""
            }}
            onSubmit={handleLogin}
            buttonText="Iniciar sesión"
        >
            <Input type="email" placeholder="Email..." name="email"/>
            <Input type="password" placeholder="Password..." name="password"/>
        </CustomForm>
    </div>
  )
}
