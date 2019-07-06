import React from 'react';
import './App.css';
import Character from './components/character'
import Velocity from 'velocity-animate';

class App extends React.Component{
  state = {
    gameState: 0,
    selectedChar: 0,
    selectedEnemy: 0,
    playerAttack: 0,
    playerHealth: 0,
    atkGrow: 0,
    enemyAttack: 0,
    enemyHealth: 0,
    testprop: [{
      id: 1,
      charName: "Squidward",
      charImg: "/assets/images/squidward.gif",
      atk: 11,
      def: 1,
      health: 22,
      atkGrow: 5
    }, {
    id: 2,
    charName: "King",
    charImg: "/assets/images/king.gif",
    atk: 112,
    def: 1114,
    health: 224,
    atkGrow: 5
  }, {
      id: 3,
      charName: "Negative",
      charImg: "/assets/images/negman.gif",
      atk: 1111,
      def: 1391,
      health: 22443,
      atkGrow: 5
    },{
      id: 4,
      charName: "Trump",
      charImg: "/assets/images/trump.gif",
      atk: 12121,
      def: 2942,
      health: 252312,
      atkGrow: 5
    }
    ]
  }
  clickTrack = (id) => {
    //Velocity(document.getElementById(id), { opacity: 0.5 }, 1000)
    // var advanceGameState = {
    //   initializeCharacter: function(charId, charAtk, charGrow, charHealth) {

    //   },
    //   initializeAttack: function(charId) {
  
  
  
    //   },
    //   advanceClick: function(charId) {
    //       if (this.gameState == 0) {
    //               //TODO:  Animate Characters to correct position w/Velocity.
    //           this.selectedChar = charId
    //           this.gameState++
    //           }    
    //       }
          
      //         else if (state == 1 && selectedchar == 2) {
      //         character3.animate({top: '700px', left: '100px'});
      //         character4.animate({top: '700px', left: '325px'});
      //         writeText("Fight!")
      //         selectedenemy = 1
      //         enemyPoint = charHealth[selectedenemy]
      //         state++
      //         atkshow()
      //         playcharsound("king","chosen")
      //         }
              
      //         else if (state == 1 && selectedchar == 3) {
      //         character2.animate({top: '700px', left: '100px'});
      //         character4.animate({top: '700px', left: '325px'});
      //         character1.animate({left: '407px'});
      //         writeText("Fight!")
      //         selectedenemy = 1
      //         enemyPoint = charHealth[selectedenemy]
      //         state++
      //         atkshow()
      //         playcharsound("king","chosen")
      //         }
              
      //         else if (state == 1 && selectedchar == 4) {
      //         character2.animate({top: '700px', left: '100px'});
      //         character3.animate({top: '700px', left: '325px'});
      //         character1.animate({left: '407px'})
      //         writeText("Fight!")
      //         selectedenemy = 1
      //         enemyPoint = charHealth[selectedenemy]
      //         state++
      //         atkshow()
      //         playcharsound("king","chosen")
      //         }
          
      //         else if (state == 3|| state == 5  && selectedchar != 1) {
      //         character1.animate({top: '400px', left: '407px'});
      //         writeText("Fight!")
      //         selectedenemy = 1
      //         enemyPoint = charHealth[selectedenemy]
      //         state++
      //         atkshow()
      //         playcharsound("king","chosen")
      //         }
      // },
  
  
    if (this.state.gameState == 0) {
      this.state.selectedChar = id
      this.state.playerAttack = this.state.testprop[id-1].atk
      this.state.playerHealth = this.state.testprop[id-1].health
      this.state.atkGrow = this.state.testprop[id-1].atkGrow
      this.state.gameState++
      //TODO --- Animate Chars to correct position after selection
      //
      //
      console.log("HERE IS THE GAMESTATE!")
      console.log(this.state)
      console.log("My Char's Attack is " + this.state.testprop[id-1].atk)
    }

    else if (this.state.gameState == 1 && this.state.selectedChar != id) {
      this.state.selectedEnemy = id
      this.state.enemyHealth = this.state.testprop[id-1].health
      this.state.enemyAttack = this.state.testprop[id-1].atk
      this.state.gameState++
      //TODO --- Animate Chars to correct position after selection
      //
      //
      console.log("HERE IS THE GAMESTATE!")
      console.log(this.state)
      console.log("My Char's Attack is " + this.state.testprop[id-1].atk)
    }

    else if (this.state.gameState == 2 || this.state.gameState == 4) {
      // character1.hide()
      // character1.animate({top: '2000px', right: '2000px'})
      // state++
      // playcharsound("king", "die")
      // writeText("Enemy defeated!  Who to fight next?")
    }
    
    else if (this.state.gameState == 6) {
      // character1.hide()
      // character1.animate({top: '2000px', right: '2000px'})
      // playcharsound("king", "die")
      // winGame()
    }
    




  }

  render() {
    return(
        <Character 
          characters={this.state.testprop}
          clickTrack={this.clickTrack} 
        />)
  }
}




export default App;
