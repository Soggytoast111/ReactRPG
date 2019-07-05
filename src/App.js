import React from 'react';
import './App.css';
import Character from './components/character'
import Velocity from 'velocity-animate';

class App extends React.Component{
  state = {
    testprop: [{
      id: 1,
      charName: "Squidward",
      charImg: "/assets/images/squidward.gif",
      clickCount: 0
    }, {
    id: 2,
    charName: "King",
    charImg: "/assets/images/king.gif",
    clickCount: 0
  }, {
      id: 3,
      charName: "Negative",
      charImg: "/assets/images/negman.gif",
      clickCount: 0
    },{
      id: 4,
      charName: "Trump",
      charImg: "/assets/images/trump.gif",
      clickCount: 0
    }
    ]
  }
  clickTrack = (id) => {
    console.log(id)
    console.log("hello")
    Velocity(document.getElementById(id), { opacity: 0.5 }, 1000)
  }

  render() {
    console.log(this.state)
    return(
        <Character 
          characters={this.state.testprop}
          clickTrack={this.clickTrack} 
        />)
  }
}




export default App;
