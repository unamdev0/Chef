import "./Backdrop.css";
import React from "react";
import { connect} from 'react-redux'

const Backdrop = props => {
  return props.isVisible ? (
    <div className="Backdrop" onClick={()=>{props.onclick({
      isSelected: false,
      index: -1,
      receipeData: {}
    })}}></div>
  ) : null;
};

const mapStateToProps=state=>{
  return{Selected:state.selectedReceipe}
}


const mapDispatchToProps=dispatch=>{
  return{
    onclick:state=>
      dispatch({type:"backDropClicked",payload:state})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Backdrop);
