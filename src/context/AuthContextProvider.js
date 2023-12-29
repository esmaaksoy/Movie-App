import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth"
import { createContext, useContext } from "react"
import {auth} from "../auth/firebase"
import { useNavigate } from "react-router-dom"
import { toastSuccessNotify } from "../helpers/ToastNotify"
export const AuthContext = createContext()
export const useAuthContext = ()=>{
    return useContext(AuthContext)
}
const AuthContextProvider = ({children}) => {
    const navigate = useNavigate()
    const values = {
        createUser,
        signIn,
        logOut,
        currentUser,
        signUpProvider,
        forgotPassword,
    }
    const createUser = async (email,password,displayName)=>{
        try {
           const userCredential = await createUserWithEmailAndPassword(auth, email,password) 
           await updateProfile(auth.currentUser, {
            displayName:displayName
           })
           navigate("/")
           toastSuccessNotify("Registered successfully!");
        } catch (error) {
            toastErrorNotify(error.message);
        }
    }
    const signIn = async(email,password)=>{
        try {
           const userCredential = await signInWithEmailAndPassword(auth,email,password)
           navigate("/")
        } catch (error) {
            
        }
    }
  return (

        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
   
  )
}

export default AuthContextProvider