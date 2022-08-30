import { database } from "../libs/firebase"
import {collection,getDocs, query} from "firebase/firestore"

export async function getServerSideProps(){
    const col = collection(database, "products")
    const querySnapshot = await getDocs(col)
    const products = []

    querySnapshot.forEach(doc=>{
        products.push({
            id:doc.id,
            data:doc.data()
        })
    })

    return {
        props:{
            products
        }
    }
}

export default function Products({products}) {
  return (
    <div>
        {products.map(({id,data:product})=><article key={id}>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
        </article>)}
    </div>
  )
}
