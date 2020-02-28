import React,{Component} from 'react'
import Modal from '../../UI/Modal/Modal'
import { connect } from 'react-redux'
import Receipe from '../receipes/receipe'
import './Profile.css'

class Profile extends Component{
    userReceipes(){
        if(this.props.userInfo.receipes===[]){
            return(<div></div>)
        }else{
            return(
            this.props.userInfo.receipes.map((receipe,index)=>{
                return(<Receipe type="ingredientSearch" index={index} imageUrl={receipe.imageLink} receipeData={receipe}/>
            )}))
        }
    }
    render(){
        if(this.props.userInfo.username===null){
            this.props.history.push('/login');
        }
    return(
        <Modal isVisible={true}>
        <div className="profile">
            <h1>{this.props.userInfo.username?this.props.userInfo.username:"fdsafdas"}</h1>
            Name:<h3>{this.props.userInfo.name?this.props.userInfo.name:"fdsafdas"}</h3>
            Email:<h3>{this.props.userInfo.email?this.props.userInfo.email:"fdsafdas"}</h3>
            Receipes:
            {this.userReceipes()}
        </div>
        </Modal>
    )
}}

const mapStateToProps=state=>{
    return{
        userInfo:state.userInfo
    }
}


export default connect(mapStateToProps)(Profile);