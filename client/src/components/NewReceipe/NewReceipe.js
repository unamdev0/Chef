import React from 'react'
import Enter from '../../UI/Enter/Enter'
import './NewReceipe.css'
import Modal from '../../UI/Modal/Modal'
import Cus_Button from '../../UI/Cus_Button/Cus_Button'

const NewReceipe=props=>{
    return(
        <Modal isVisible={true}>
        <form
          name="newReceipe"
         
        >
          <div className="NewReceipe">
            <h1>New Receipe</h1>
            <div className="cred">Ingredients
            <Enter name="username" width="60%" />
            <Cus_Button/>
            </div>
            <div className="cred">Instructions</div>
            <Enter name="password" type="password" width="90%" />
            <input className="submitButton" type="submit" />
          </div>
        </form>
      </Modal>
    )
    
}


export default NewReceipe