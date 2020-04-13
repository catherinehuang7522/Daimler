import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import DangerButton from './components/DangerButton'
import Grid from '@material-ui/core/Grid'
import StartComponent from './components/Start'
import QuestionsComponent from './components/Questions'
import CategoriesComponent from './components/Categories'
import DifficultyComponent from './components/Difficulty'


const styles = ({

})

export default class IndexPage extends Component {

  constructor(props) {
    super(props)

    // initialize the game state
    this.state = {
      gameState: "START"
    };

    this.renderSwitch = this.renderSwitch.bind(this)
    this.backHome = this.backHome.bind(this)
  }

  // changes the state of the game to whatever is passed as "nextActions". Can be e.g. START or QUESTIONS
  backHome(nextActions){
    this.setState({gameState:nextActions})
  }

  // reder the desired componenent based on the state
  renderSwitch(gameState) {
    switch (gameState) {
      case 'START':
        return <StartComponent callback={this.backHome}></StartComponent>
      case 'CATEGORIES':
        return <CategoriesComponent callback={this.backHome}></CategoriesComponent>
      case 'QUESTIONS':
        return <QuestionsComponent callback={this.backHome}></QuestionsComponent>
      default:
        return <StartComponent></StartComponent>
    }
  }



  render() {
    return <> {this.renderSwitch(this.state.gameState)}</>
  }
}
