import React, { Component } from 'react';
import Button from '@material-ui/core/Button'
import DangerButton from './DangerButton'
import Grid from '@material-ui/core/Grid'
import AnswersComponent from './Answers'


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


class GameOverComponent extends Component {

  constructor(props) {
    super(props)

    this.state = {
      
    };

    this.onGoHome = this.onGoHome.bind(this)
  }

  onGoHome(){
    this.props.callback("START")
  }

  render() {

    return (
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <p>Game Over. You scored: {this.props.score}</p>
        <Button onClick={this.onGoHome}>Back to Home</Button>
        </Grid> )
  }

}
export default GameOverComponent