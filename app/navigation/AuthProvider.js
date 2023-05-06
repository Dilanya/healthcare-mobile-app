import React, {createContext, useState} from "react";
import auth from '@react-native-firebase/auth';
import { Alert } from "react-native";
import { GoogleSignin } from '@react-native-google-signin/google-signin';


export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [ user,setUser] = useState(null);
    
    return(
        <AuthContext.Provider
        value={{
            user,
            setUser,
            login : async(email,password) => {
                try{
                    await auth().signInWithEmailAndPassword(email,password)
                }catch(e) {
                    console.log(e);
                    alert(e)
                }
            },
            googleLogin: async () => {
                try{
                // Get the users ID token
                const { idToken } = await GoogleSignin.signIn();
                
                // Create a Google credential with the token
                const googleCredential = auth.GoogleAuthProvider.credential(idToken);
                
                // Sign-in the user with the credential
                return auth().signInWithCredential(googleCredential);
            }catch(e) {
                console.log(e);
                alert(e)
                }
            },

            register: async(email,password,confirmpassword) =>{
              if (password === confirmpassword ) {
                try{
                    await auth().createUserWithEmailAndPassword(email,password)
                }catch(e){
                    console.log(e)
                    alert(e)
                }finally{
                    alert(' Your Account created successfully')
                }
            } else {
                alert('Check your passwords again !')
            }},
            logout: async() => {
                try{
                    await auth().signOut();
                }catch(e){
                    console.log(e);
                    alert(e)
                }
            }
        }}
        >
            {children}
        </AuthContext.Provider>
    )
}