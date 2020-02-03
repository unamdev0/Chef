import React,{Component} from 'react'
import {connect} from 'react-redux'
import Receipe from '../components/receipes/receipe'


class ReceipeHOC extends Component{
    render(){
        return(
            this.props.receipes.map(receipe=>{
               return <Receipe receipeData={receipe}/>
            })
        )
    }
}


const mapStateToProps=state=>{
    return {receipes:state.receipes}
}

export default connect(mapStateToProps)(ReceipeHOC)