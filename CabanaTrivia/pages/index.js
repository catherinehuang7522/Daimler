import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import DangerButton from './components/DangerButton'
import Grid from '@material-ui/core/Grid';


const styles = ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  root: {
    flexGrow: 1
  }
})

export default class IndexPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      startGame: true,
      singlePlayer: true,
      duration: 1
    };

    this.onClickStartGame = this.onClickStartGame.bind(this)
    this.onClickSingle = this.onClickSingle.bind(this)
    this.onClickMulti = this.onClickMulti.bind(this)
    this.onSelectDuration = this.onSelectDuration.bind(this)
  }

  onClickStartGame() {
    //change the state when the user clicks start game
    if(this.state.startGame === true){
      this.setState({startGame: false})
    }else{
      this.setState({startGame: true})
    }
  }

  onClickSingle() {
    this.setState({singlePlayer: true})
  }

  onClickMulti() {
    this.setState({singlePlayer: false})
  }

  onSelectDuration(dur) {
    this.setState({duration: dur})
  }

  render() {

    const startButton = this.state.startGame ?
      <Button variant="contained" onClick={this.onClickStartGame} >
        Start Game
      </Button> :
      <DangerButton text="End Game" onClick={this.onClickStartGame}>
      </DangerButton>

    const singlePlayerSelector = this.state.singlePlayer ?
      <DangerButton text="Single Player">
      </DangerButton> :
      <Button variant="contained" onClick={this.onClickSingle} >
        Single Player
      </Button>

    const multiPlayerSelector = this.state.singlePlayer ?
      <Button variant="contained" onClick={this.onClickMulti} >
        Multi Player
      </Button> :
      <DangerButton text="Multi Player">
      </DangerButton>

    const shortDurationSelector = this.state.duration === 1 ?
      <DangerButton text="Short Game [10 min]">
      </DangerButton> :
      <Button variant="contained" onClick={() => this.onSelectDuration(1)} >
        Short Game [10 min]
      </Button>

    const medDurationSelector = this.state.duration === 2 ?
      <DangerButton text="Medium Game [20 min]">
      </DangerButton> :
      <Button variant="contained" onClick={() => this.onSelectDuration(2)} >
        Medium Game [20 min]
      </Button>

    const longDurationSelector = this.state.duration === 3 ?
      <DangerButton text="Long Game [30 min]">
      </DangerButton> :
      <Button variant="contained" onClick={() => this.onSelectDuration(3)} >
        Long Game [30 min]
      </Button>



    return (
      <div style={styles.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            {singlePlayerSelector}
          </Grid>
          <Grid item xs={12} sm={6}>
            {multiPlayerSelector}
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            {shortDurationSelector}
          </Grid>
          <Grid item xs={12} sm={4}>
            {medDurationSelector}
          </Grid>
          <Grid item xs={12} sm={4}>
            {longDurationSelector}
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item>
            {startButton}
          </Grid>
        </Grid>
      </div>
    )
  }
}
