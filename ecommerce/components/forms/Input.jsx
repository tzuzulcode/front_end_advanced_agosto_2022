import {Field} from "formik"

export default function Input({type,name, placeholder}) {
  return (
    <Field className="bg-gray-100 dark:bg-gray-700 p-3" type={type} name={name} placeholder={placeholder}/>
  )
}
