import React,{Component} from 'react'
import {connect} from 'react-redux'
import Receipe from '../components/receipes/receipe'


class ReceipeHOC extends Component{
    render(){
        if(this.props.ingredientSearch!=null){
        return(
            this.props.ingredientSearch.map((receipe,index)=>{
               return <Receipe type="ingredientSearch" index={index} receipeData={receipe}/>
            })
        )
    }else{
        return(
            this.props.receipeSearch.results.map((receipe,index)=>{
               return <Receipe type="receipeSearch" index={index} imageUrl={this.props.receipeSearch.baseUri} receipeData={receipe}/>
            })
        )
    }}
}


const mapStateToProps=state=>{
    return {ingredientSearch:state.ingredientSearch,receipeSearch:state.receipeSearch}
}

export default connect(mapStateToProps)(ReceipeHOC)