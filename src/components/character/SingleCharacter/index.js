import React from "react";
import "./style.css";
import Velocity from 'velocity-animate';

class SingleCharacter extends React.Component {
    state = {
        id: this.props.id,
        attack: this.props.attack,
        defense: this.props.defense,
        health: this.props.health
    }
    updateStats = (newAttack, newHealth) => {
        this.setState({
            attack: newAttack,
            health: newHealth
        })
    }

    hideCharacter = () => {
        Velocity(document.getElementById(this.props.id), { opacity: 0.15 }, 1000)
    }

    render () {
        return (
        <div className="character" id={this.props.id} onClick={this.props.clickTrack.bind(this, this.props.id)}>
        <div className="title">{this.props.charName}</div>
        <img src={this.props.charImg} className="characterFullImage"></img>
        <div className="iconbox"><img className="icon" src="/assets/images/sword.png"></img></div>
        <div className="iconboxT" id={this.props.charName + "Atk"}>{this.state.attack}</div>
        <div className="iconbox2"><img className="icon" src="/assets/images/defense.png"></img></div>
        <div className="iconbox2T" id={this.props.charName + "Def"}>{this.state.defense}</div>
        <div className="iconbox3"><img className="icon" src="/assets/images/heart.png"></img></div>
        <div className="iconbox3T" id={this.props.charName + "Health"}>{this.state.health}</div>
    </div>
    )
}}

export default SingleCharacter;