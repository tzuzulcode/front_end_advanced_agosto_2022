import {initializeApp,getApps, getApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"

// Singleton
let app
if(!getApps.length){
    app = initializeApp({
        apiKey: process.env.NEXT_PUBLIC_API_KEY,
        authDomain:process.env.NEXT_PUBLIC_AUTH_DOMAIN,
        projectId:process.env.NEXT_PUBLIC_PROJECT_ID,
        appId:process.env.NEXT_PUBLIC_APP_ID
    })
}else{
    app = getApp()
}

export const database = getFirestore(app)