import React from 'react';
import './App.css';
import Character from './components/character'
import { isTSParameterProperty } from '@babel/types';

var testprop = [{
  charName: "Squidward",
  charImg: "/assets/images/squidward.gif"
}, {
charName: "King",
charImg: "/assets/images/king.gif"
}, {
  charName: "Negative",
  charImg: "/assets/images/negman.gif"
},{
  charName: "Trump",
  charImg: "/assets/images/trump.gif"
}
]


function App() {
    return(
        testprop.map(function(testprop) {return(
        <Character 
          charName={testprop.charName} 
          charImg={testprop.charImg}
        />)}
      ))
  }


export default App;
