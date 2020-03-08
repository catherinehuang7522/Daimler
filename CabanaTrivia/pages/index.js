import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import DangerButton from './components/DangerButton'
import Grid from '@material-ui/core/Grid'
import StartComponent from './components/Start'
import QuestionsComponent from './components/Questions'


const styles = ({

})

export default class IndexPage extends Component {

  constructor(props) {
    super(props)

    this.state = {
      gameState: "START"
    };

    this.renderSwitch = this.renderSwitch.bind(this)

  }

  renderSwitch(gameState) {
    console.log("State is: ");
    console.log(gameState);


    switch (gameState) {
      case 'START':
        return <StartComponent></StartComponent>
      case 'QUESTIONS':
        return <QuestionsComponent></QuestionsComponent>
      default:
        return <StartComponent></StartComponent>
    }
  }



  render() {
    return <> {this.renderSwitch(this.state.gameState)}</>
  }
}
