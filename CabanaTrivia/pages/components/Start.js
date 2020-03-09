import React, { Component } from 'react';
import Button from '@material-ui/core/Button'
import DangerButton from './DangerButton'
import Grid from '@material-ui/core/Grid'

const styles = ({
  root: {
    flexGrow: 1,
    backgroundColor: '#07142B',
    width: 1062,
    height: 484,
    fontFamily: 'Kontakt'
  },
  row: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 20
  },
  title: {
    color: 'white',
    fontSize: 48,
    display: 'flex',
    justifyContent: 'center'
  },
  unselectedButton: {
    backgroundColor: '#205B82',
    color: 'white',
    borderRadius: 20,
    width: 332,
    height: 78,
    fontFamily: 'Kontakt'
  },
})

class StartComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      startGame: true,
      singlePlayer: true,
      duration: 1
    };

    this.onClickStartGame = this.onClickStartGame.bind(this)
    this.onClickSingle = this.onClickSingle.bind(this)
    this.onClickMulti  = this.onClickMulti.bind(this)
  }


  onClickStartGame() {
    this.setState({ startGame: !this.state.startGame })
    this.props.callback("QUESTIONS")
  }

  onClickSingle() {
    this.setState({ singlePlayer: true })

  }

  onClickMulti() {
    this.setState({ singlePlayer: false })
  }

  onSelectDuration(dur) {
    this.setState({ duration: dur })
  }

  render() {
    const startButton =
      <Button style={styles.unselectedButton} variant="contained" onClick={this.onClickStartGame} >
        Start Game
      </Button>

    const singlePlayerSelector = this.state.singlePlayer ?
      <DangerButton text="Single Player"/>
      :
      <Button style={styles.unselectedButton} variant="contained" onClick={this.onClickSingle} >
        Single Player
      </Button>

    const multiPlayerSelector = this.state.singlePlayer ?
      <Button style={styles.unselectedButton} variant="contained" onClick={this.onClickMulti} >
        Multi Player
      </Button>
      :
      <DangerButton text="Multi Player"/>

    const shortDurationSelector = this.state.duration === 1 ?
      <DangerButton text="Short Game [10 min]"/>
      :
      <Button style={styles.unselectedButton}  variant="contained" onClick={() => this.onSelectDuration(1)} >
        Short Game [10 min]
      </Button>

    const medDurationSelector = this.state.duration === 2 ?
      <DangerButton text="Medium Game [20 min]"/>
      :
      <Button style={styles.unselectedButton}  variant="contained" onClick={() => this.onSelectDuration(2)} >
        Medium Game [20 min]
      </Button>

    const longDurationSelector = this.state.duration === 3 ?
      <DangerButton text="Long Game [30 min]"/>
      :
      <Button style={styles.unselectedButton} variant="contained" onClick={() => this.onSelectDuration(3)} >
        Long Game [30 min]
      </Button>

    return (
      <div style={styles.root}>
        <Grid style={styles.title}> TRIVIA </Grid>

        <Grid style={styles.row} spacing={3}>
          {singlePlayerSelector}
          {multiPlayerSelector}
        </Grid>

        <Grid style={styles.row} spacing={3}>
          {shortDurationSelector}
          {medDurationSelector}
          {longDurationSelector}
        </Grid>

        <Grid style={styles.row} spacing={3}>
          {startButton}
        </Grid>
      </div>
    );
  }

}
export default StartComponent;
