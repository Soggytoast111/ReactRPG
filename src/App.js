import React from 'react';
import './App.css';
import Character from './components/character'

class App extends React.Component{
  state = {
    testprop: [{
      id: 1,
      charName: "Squidward",
      charImg: "/assets/images/squidward.gif"
    }, {
    id: 2,
    charName: "King",
    charImg: "/assets/images/king.gif"
    }, {
      id: 3,
      charName: "Negative",
      charImg: "/assets/images/negman.gif"
    },{
      id: 4,
      charName: "Trump",
      charImg: "/assets/images/trump.gif"
    }
    ]
  }

  render() {
    console.log(this.state)
    return(
        <Character 
          characters={this.state.testprop} 
        />)
  }
}




export default App;
