import React from "react";
import "./style.css";

function character(props) {
  return (
<div className="character" id={props.charName}>
    <div className="title">{props.charName}</div>
    <img src={props.charImg} className="characterFullImage"></img>
    <div className="iconbox"><img className="icon" src="/assets/images/sword.png"></img></div>
    <div className="iconboxT" id={props.charName + "Atk"}>{}</div>
    <div className="iconbox2"><img className="icon" src="/assets/images/defense.png"></img></div>
    <div className="iconbox2T" id={props.charName + "Def"}>{}</div>
    <div className="iconbox3"><img className="icon" src="/assets/images/heart.png"></img></div>
    <div className="iconbox3T" id={props.charName + "Health"}>{}</div>
</div>
  );
}

export default character;
