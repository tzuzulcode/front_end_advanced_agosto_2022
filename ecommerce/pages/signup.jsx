import {
    createUserWithEmailAndPassword,
    updateProfile
} from "firebase/auth"
import { useRouter } from "next/router"

import CustomForm from "../components/forms/CustomForm"
import Input from "../components/forms/Input"
import { auth } from "../libs/firebase"

export default function SignUp() {
    const router = useRouter()
    const handleSignUp = (data,{setSubmitting,setStatus})=>{
        createUserWithEmailAndPassword(auth,data.email,data.password)
        .then(result=>updateProfile(result.user,{
            displayName:data.name
        }))
        .then(result=>{
            setSubmitting(false)
            router.push('/login')
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
                name:"",
                email:"",
                password:""
            }}
            onSubmit={handleSignUp}
            buttonText="Registrarme"
        >
            <Input type="text" placeholder="Name..." name="name"/>
            <Input type="email" placeholder="Email..." name="email"/>
            <Input type="password" placeholder="Password..." name="password"/>
        </CustomForm>
    </div>
  )
}
