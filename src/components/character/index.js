import React from "react";
import "./style.css";
import SingleCharacter from "./SingleCharacter"
import Velocity from 'velocity-animate';

class Character extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      renderProp: 0
    }
    this.SingleCharacterRef = React.createRef()
  }
  
  updateStats = (id, newAttack, newHealth) => {
    var characterRef = 'characterDiv' + id
    this.refs[characterRef].updateStats(newAttack, newHealth)
  }

  hideCharacter = (id) => {
    var characterRef = 'characterDiv' + id
    this.refs[characterRef].hideCharacter()
  }

  render(){
    console.log("props below (allchars):")
    console.log(this.props)
    return this.props.characters.map((character) => (
      <SingleCharacter 
        key={character.id}
        id={character.id}
        charName={character.charName}
        charImg={character.charImg}
        clickTrack={this.props.clickTrack}
        character={character}
        health={character.health}
        attack={character.atk}
        defense={character.def}
        ref={"characterDiv" + character.id}
      />
    ))
  }
}
export default Character;
