import React from "react"
import {Redirect,Route} from "react-router-dom"
import {connect} from "react-redux"
import Dashboard from "../pages/User/Dashboard/Dashboard"

class PrivateRoutes extends React.Component{
    render(){
        const{isAuth} = this.props
        if(isAuth){
            return(
                <Route path="/home" exact component={Dashboard} />
            )
        }
        else{
            alert("Login")
            return <Redirect to ="/" />
        }
    }
}

const mapStateToProps = state => ({
    isAuth : state.isAuth
})

export default connect(
    mapStateToProps,
    null
)(PrivateRoutes)