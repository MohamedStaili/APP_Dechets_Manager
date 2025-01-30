import {useReducer , useEffect} from "react";
import Reducer from "./Reducer"
import AuthContext from "./AuthContext"
import { set_Loading,set_User,isLoged ,logout } from "./Reducer";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {app} from "../../services/firebase" // Path to your Firebase config file
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
const initialState={
    user : null ,
    loading : true,
    isloged : false,
}

const AuthState=(props)=>{
    

    const [state , dispatch] = useReducer(Reducer, initialState)
    const navigate=useNavigate()


    useEffect(()=>{
        const auth=getAuth(app)
        const unsubscribe = onAuthStateChanged(auth , (currentUser)=>{
            if (currentUser){
                dispatch({type :set_User ,payload :currentUser})
                dispatch({type:isLoged , payload : null})
            }
            else{
                dispatch({type : set_User , payload:null})
            }
            dispatch({type : set_Loading , payload:false})
            return unsubscribe

        })

    },[])

    const handleLogout = async () => {
        try {
          const auth= getAuth(app)  
          await signOut(auth);
          dispatch({ type: logout });
          localStorage.removeItem("user");
          navigate("/login");
        } catch (error) {
          console.error("Erreur lors de la déconnexion:", error.message);
        }
      };

    return <AuthContext.Provider
    value={{
        user : state.user ,
        loading : state.loading,
        isLoged :state.isLoged,
        logout : handleLogout
    }}
    >
        {props.children}


    </AuthContext.Provider>
}
export default AuthState;