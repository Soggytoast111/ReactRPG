import React from "react";
import "./style.css";

class AttackButton extends React.Component {
    render(){
        return(
        <button onClick={this.props.atkButton.bind(this, this.props.id)} id="attackButton">ATTACK!</button>
        )
    }
  }
  export default AttackButton;