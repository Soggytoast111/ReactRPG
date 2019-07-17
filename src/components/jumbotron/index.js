import React from 'react';

class Jumbotron extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        jumbotronText: 'Select your character!'
      }
    }
    updateText = (newText) => {
        this.setState({
            jumbotronText: newText
        })
    }    
    
    render() {
        return(
            <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">ReactRPG!</h1>
                <p className="lead">{this.state.jumbotronText}</p>
                <br></br>
                <br></br>
            </div>
            </div>
    )}
}
export default Jumbotron;
