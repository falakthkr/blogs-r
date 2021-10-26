import React from "react"
import {Route} from "react-router-dom"
import Login from "../pages/Auth/Login/Login"
import PrivateRoutes from "./PrivateRoutes"

const PublicRoutes = () =>{
    return(
        <div>
            <Route path="/" exact render={()=><Login />} />
            <Route path="/home"  render={()=><PrivateRoutes />} />
        </div>
    )
}

export default PublicRoutes