import {
    signInWithEmailAndPassword
} from "firebase/auth"

import CustomForm from "../components/forms/CustomForm"
import Input from "../components/forms/Input"
import { auth } from "../libs/firebase"

export default function Login() {
    const handleLogin = (data,{setSubmitting,setStatus})=>{
        signInWithEmailAndPassword(auth,data.email,data.password)
        .then(result=>{
            console.log(result)
            setSubmitting(false)
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
