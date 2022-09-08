import {
    createUserWithEmailAndPassword,
    updateProfile
} from "firebase/auth"
import { doc, setDoc } from "firebase/firestore";
import { useRouter } from "next/router"
import { useContext } from "react"
import CustomForm from "../components/forms/CustomForm"
import Input from "../components/forms/Input"
import { authContext } from "../context/AuthContext"
import { auth } from "../libs/firebase"
import { database } from "../libs/firebase"

export default function SignUp() {
    const router = useRouter()
    const {setUser} = useContext(authContext)
    const handleSignUp = (data,{setSubmitting,setStatus})=>{
        createUserWithEmailAndPassword(auth,data.email,data.password)
        .then(async (result)=>{
            await updateProfile(result.user,{
                displayName:data.name
            })
            await setDoc(doc(database, "users", result.user.uid),{
                role:"REGULAR"
            })

            return {
                id: result.user.uid
            }
        })
        .then(({id})=>{
            setSubmitting(false)
            setUser({
                name:data.name,
                email:data.email,
                logout:false,
                id
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


// Investigar rules para firestore