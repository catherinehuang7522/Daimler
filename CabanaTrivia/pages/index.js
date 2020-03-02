import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import DangerButton from './components/DangerButton'


const styles = ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  }
})

export default class IndexPage extends Component {
  constructor(props) {
    super(props)

    this.state = { 
      startGame: true 
    };

    this.onClickStartGame = this.onClickStartGame.bind(this)
  }

  onClickStartGame() {
    //change the state when the user clicks start game
    if(this.state.startGame === true){
      this.setState({startGame: false})
    }else{
      this.setState({startGame: true})
    }
  }
  render() {

    //choose the button to display based on the state
    const displayButton = this.state.startGame? <Button variant="contained" onClick={this.onClickStartGame} >
     Start Game</Button>: <DangerButton text="End Game"></DangerButton>

    return (
      <div style={styles.container}>
        {displayButton}
      </div>
    )
  }
}
