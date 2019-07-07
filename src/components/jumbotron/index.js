import React from 'react';

class Jumbotron extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        jumbotronText: '---This will be where notifications go.---'
      }
    }
    updateText = (newText) => {
        this.setState({
            jumbotronText: newText
        })
    }    
    
    render() {
        return(
            <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4">ReactRPG!</h1>
                <p class="lead">{this.state.jumbotronText}</p>
                <br></br>
                <br></br>
            </div>
            </div>
    )}
}
export default Jumbotron;
