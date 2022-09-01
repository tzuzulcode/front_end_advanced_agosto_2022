import React from 'react'
import CustomForm from '../../../components/forms/CustomForm'
import Input from '../../../components/forms/Input'
import {addDoc, collection} from "firebase/firestore"
import { database } from '../../../libs/firebase'

export default function create() {

    const createProduct = (data,{setSubmitting,setStatus,...api})=>{
        console.log(api)

        addDoc(collection(database, "products"),data)
        .then(res=>{
            console.log(res.id)
            setSubmitting(false)
            setStatus({
                success:true,
                message:"Creado correctamente"
            })
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
                    price:0,
                    image:""
                }}
                onSubmit={createProduct}
                buttonText="Crear item"
            >
                <Input type="text" name="name" placeholder="Name..."/>
                <Input type="number" name="price"/>
                <Input type="text" name="image" placeholder={"Image..."}/>
            </CustomForm>
        </div>
    )
}
