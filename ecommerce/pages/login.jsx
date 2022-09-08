import {
    signInWithEmailAndPassword
} from "firebase/auth"
import {useRouter} from 'next/router'
import { useContext } from "react"

import CustomForm from "../components/forms/CustomForm"
import Input from "../components/forms/Input"
import { authContext } from "../context/AuthContext"
import { auth } from "../libs/firebase"

export default function Login() {
    const {setUser} = useContext(authContext)
    const router = useRouter()
    const handleLogin = (data,{setSubmitting,setStatus})=>{
        signInWithEmailAndPassword(auth,data.email,data.password)
        .then(result=>{
            setSubmitting(false)
            setUser({
                name: result.user.displayName,
                email: result.user.email,
                logout: false
            })
            router.push('/')
        })
        .catch(error=>{
            console.log(error)
            setSubmitting(false)
        })
    }
  return (
    <div>
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
