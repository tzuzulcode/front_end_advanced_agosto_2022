import {Formik, Form} from "formik"

export default function CustomForm({children, initialValues,onSubmit, buttonText}) {
  
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({isSubmitting,status})=>(
        <>
          <Form className="flex flex-col gap-5 w-1/2 mx-auto bg-white dark:bg-gray-800 shadow-md p-5 rounded-md">
            {children}
            <button className="bg-sky-300 text-sky-900 px-5 py-3 rounded-md disabled:bg-gray-500 disabled:text-white" disabled={isSubmitting}>{buttonText}</button>
          </Form>
          {status?.success&&<div className="bg-green-300 text-green-900 w-1/2 mx-auto mt-10 p-3 rounded-md">{status?.message}</div>}
        </>
      )}
    </Formik>
  )
}
