import React from 'react';
import './App.css';
import Character from './components/character'
import AttackButton from './components/atkbutton'
import Jumbotron from './components/jumbotron'
import Velocity from 'velocity-animate';

class App extends React.Component{
  constructor(props){
    super(props)
    this.charactersRef = React.createRef()
    this.state = {
    gameState: 0,
    selectedChar: 0,
    selectedEnemy: 0,
    playerAttack: 0,
    playerHealth: 0,
    atkGrow: 0,
    enemyAttack: 0,
    enemyHealth: 0,
    enemiesKilled: 0,
    disableAttackButton: 1,
    renderProp: 0,
    testprop: [{
      id: 1,
      charName: "Squidward",
      charImg: "/assets/images/squidward.gif",
      atk: 25,
      def: 20,
      health: 190,
      atkGrow: 2
    }, {
    id: 2,
    charName: "King",
    charImg: "/assets/images/king.gif",
    atk: 20,
    def: 25,
    health: 125,
    atkGrow: 1
  }, {
      id: 3,
      charName: "Negative",
      charImg: "/assets/images/negman.gif",
      atk: 5,
      def: 17,
      health: 80,
      atkGrow: 8
    },{
      id: 4,
      charName: "Trump",
      charImg: "/assets/images/trump.gif",
      atk: 1,
      def: 1,
      health: 350,
      atkGrow: 10
    }
    ]
  }}
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
      this.updatejumbotext('Select your enemy!')
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
      this.state.enemyAttack = this.state.testprop[id-1].def
      this.state.disableAttackButton = 0
      this.updatejumbotext('Attack!')
      this.state.gameState++
      //TODO --- Animate Chars to correct position after selection
      //
      //
    }

    else if (this.state.gameState == 3 || this.state.gameState == 5) {
      this.state.selectedEnemy = id
      this.state.enemyHealth = this.state.testprop[id-1].health
      this.state.enemyAttack = this.state.testprop[id-1].def
      this.state.disableAttackButton = 0
      this.updatejumbotext('Attack!')
      this.state.gameState++
      //TODO --- Animate Chars to correct position after selection
      //
      //
    }
    
    else if (this.state.gameState == 6) {
      // character1.hide()
      // character1.animate({top: '2000px', right: '2000px'})
      // playcharsound("king", "die")
      // winGame()
    }
    




  }

  atkButton = () => {
    if (this.state.disableAttackButton == 0){
      this.state.disableAttackButton = 1
      setTimeout(() => {this.state.disableAttackButton=0}, 3000)
      this.state.playerHealth -= this.state.enemyAttack
      this.state.enemyHealth -= this.state.playerAttack
      this.state.playerAttack += this.state.atkGrow
      
      this.state.testprop[this.state.selectedChar-1].health = this.state.playerHealth
      this.state.testprop[this.state.selectedEnemy-1].health = this.state.enemyHealth
      this.state.testprop[this.state.selectedChar-1].atk = this.state.playerAttack
      
      this.charactersRef.current.updateStats(this.state.selectedChar, this.state.playerAttack, this.state.playerHealth)
      this.charactersRef.current.updateStats(this.state.selectedEnemy, this.state.enemyAttack, this.state.enemyHealth)
      console.log("Here is state after attackbtn click:  ")
      console.log(this.state)
      if(this.state.enemyHealth < 1) {
        console.log("here is state after enemy defeated:  ")
        console.log(this.state)
        this.charactersRef.current.hideCharacter(this.state.selectedEnemy)
        this.state.gameState++
        this.state.disableAttackButton = 1
        setTimeout(() => {this.state.disableAttackButton=1}, 3015)
        if(this.state.gameState == 7) {
          this.updatejumbotext("You Win!")
        } else {
        this.updatejumbotext("Select next Enemy!")
        }
      }
      else if (this.state.playerHealth < 1) {
        this.updatejumbotext("You Lose!")
        this.charactersRef.current.hideCharacter(this.state.selectedChar)
      }
  }}

  updatejumbotext = (text) => {
    this.refs['jumbotronRef'].updateText(text)
  }

  render() {
    return(
    <>
      <Jumbotron 
        ref='jumbotronRef'
      />
      <Character 
        characters={this.state.testprop}
        clickTrack={this.clickTrack} 
        renderProp={this.state.renderProp}
        ref={this.charactersRef}
      />
      <AttackButton
        atkButton={this.atkButton.bind(this)}
        />
    </>)
  }
}




export default App;
