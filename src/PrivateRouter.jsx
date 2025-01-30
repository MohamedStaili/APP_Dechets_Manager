import { Navigate  } from "react-router-dom"
import {useContext } from "react"
import AuthContext from "./contexteAPI/AuthContext/AuthContext"
const PrivateRouter = ({children}) => {

  const {loading , user , isLogeds} = useContext(AuthContext)

  if (loading){
    return <div><img src="loading.gif" alt="Laoding ...." /></div>
  } 
  return user ? children : <Navigate to="/login"/>
}
export default PrivateRouter