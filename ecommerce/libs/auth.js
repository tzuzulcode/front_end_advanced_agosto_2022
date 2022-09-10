import {
    GoogleAuthProvider,
    FacebookAuthProvider, 
    signInWithPopup,
    fetchSignInMethodsForEmail
} from "firebase/auth"

import {auth} from "./firebase"

const supportedSignInMethods = [
    GoogleAuthProvider.PROVIDER_ID,
    FacebookAuthProvider.PROVIDER_ID,
]

function getProvider(id){
    switch(id){
        case GoogleAuthProvider.PROVIDER_ID:
            return new GoogleAuthProvider()
        case FacebookAuthProvider.PROVIDER_ID:
            return new FacebookAuthProvider()
        default:
            throw new Error("No provider accepted: ",id)
    }
}

export const signInMethods = {
    google: GoogleAuthProvider.PROVIDER_ID,
    facebook: FacebookAuthProvider.PROVIDER_ID,
}

export async function providerLogin(id){
    try {
        return await signInWithPopup(auth,getProvider(id))
    } catch (error) {
        const email = error.customData?.email
        console.log(email)
        if(email && error.code === "auth/account-exists-with-different-credential"){
            const providers = await fetchSignInMethodsForEmail(auth,email)

            const method = providers.find(provider=>supportedSignInMethods.includes(provider))

            if(!method){
                throw new Error("Your account is linked with an unsupported provider")
            }

            const linkedProvider = getProvider(method)
            const result = await signInWithPopup(auth, linkedProvider)
            return result
        }
    }
}