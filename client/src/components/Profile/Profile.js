import React,{Component} from 'react'
import { connect } from 'react-redux'

class Profile extends Component{
    render(){
    return(
        <div className="profile">
            <h1>{this.props.userInfo.name?this.props.userInfo.name:"fdsafdas"}</h1>
            
        </div>
    )
}}

const mapStateToProps=state=>{
    return{
        userInfo:state.userInfo
    }
}


export default connect(mapStateToProps)(Profile);