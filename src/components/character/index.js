import React from "react";
import "./style.css";
import SingleCharacter from "./SingleCharacter"
import Velocity from 'velocity-animate';

class Character extends React.Component {
  render(){
    console.log("props below (allchars):")
    console.log(this.props)
    return this.props.characters.map((character) => (
      <SingleCharacter 
        id={character.id}
        charName={character.charName}
        charImg={character.charImg}
      />
    ))
  }
}
export default Character;
