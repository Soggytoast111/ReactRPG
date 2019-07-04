import React from "react";
import "./style.css";
import Velocity from 'velocity-animate';


function animateDiv() {
    Velocity(document.getElementById("Trump"), { opacity: 0.5 }, 1000)
    console.log(this) 
}


function character(props){
  return (
<div className="character" id={props.charName} onClick={animateDiv}>
    <div className="title">{props.charName}</div>
    <img src={props.charImg} className="characterFullImage"></img>
    <div className="iconbox"><img className="icon" src="/assets/images/sword.png"></img></div>
    <div className="iconboxT" id={props.charName + "Atk"}>-</div>
    <div className="iconbox2"><img className="icon" src="/assets/images/defense.png"></img></div>
    <div className="iconbox2T" id={props.charName + "Def"}>-</div>
    <div className="iconbox3"><img className="icon" src="/assets/images/heart.png"></img></div>
    <div className="iconbox3T" id={props.charName + "Health"}>-</div>
</div>
  );
}

export default character;
