import React from "react";
import "./style.css";
import Velocity from 'velocity-animate';

class SingleCharacter extends React.Component {
    animateDiv(e) {
        Velocity(document.getElementById(this.props.id), { opacity: 0.5 }, 1000)
        console.log(this.props) 
    }   
   
render () {
    console.log("props below (singlechar):")
    console.log(this.props)
    return (
    <div className="character" id={this.props.id} onClick={this.animateDiv.bind(this)}>
    <div className="title">{this.props.charName}</div>
    <img src={this.props.charImg} className="characterFullImage"></img>
    <div className="iconbox"><img className="icon" src="/assets/images/sword.png"></img></div>
    <div className="iconboxT" id={this.props.charName + "Atk"}>-</div>
    <div className="iconbox2"><img className="icon" src="/assets/images/defense.png"></img></div>
    <div className="iconbox2T" id={this.props.charName + "Def"}>-</div>
    <div className="iconbox3"><img className="icon" src="/assets/images/heart.png"></img></div>
    <div className="iconbox3T" id={this.props.charName + "Health"}>-</div>
  </div>
  )
}}

export default SingleCharacter;