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

    // initialize the game state
    this.state = {
      gameState: "START",
      numQuestions: 10,
    };

    this.renderSwitch = this.renderSwitch.bind(this)
    this.backHome = this.backHome.bind(this)
    this.setNumQuestions = this.setNumQuestions.bind(this)
  }

  // changes the state of the game to whatever is passed as "nextActions". Can be e.g. START or QUESTIONS
  backHome(nextActions) {
    this.setState({gameState:nextActions})
  }

  // sets the number of questions
  setNumQuestions(numQuestions) {
    this.setState({numQuestions: numQuestions})
  }

  // reder the desired componenent based on the state
  renderSwitch(gameState) {
    switch (gameState) {
      case 'START':
        return <StartComponent callback={this.backHome} setNumQuestionsCallback={this.setNumQuestions}></StartComponent>
      case 'QUESTIONS':
        return <QuestionsComponent callback={this.backHome} numQuestions={this.state.numQuestions}></QuestionsComponent>
      default:
        return <StartComponent></StartComponent>
    }
  }



  render() {
    return <> {this.renderSwitch(this.state.gameState)}</>
  }
}
