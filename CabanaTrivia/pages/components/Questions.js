import React, { Component } from 'react';
import Button from '@material-ui/core/Button'
import DangerButton from './DangerButton'
import Grid from '@material-ui/core/Grid'
import AnswersComponent from './Answers'
import GameOverComponent from './GameOver'
const Entities = require('html-entities').AllHtmlEntities

const entities = new Entities();

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

const MAX_NUM_QUESTIONS = 3

class QuestionsComponent extends Component {

  constructor(props) {
    super(props)

    this.state = {
      startGame: true,
      singlePlayer: true,
      duration: 1,
      questionIndex: 0,
      currentScore: 0,
    };

    this.nextQuestion = this.nextQuestion.bind(this)
  }

  componentWillMount() {
    this.onGetQuestions()
  }


  async onGetQuestions(category) {
    const finalCateg = category == null ? "entertainment-music" : category

    //fetch questions
    const response = await fetch("https://cocktail-trivia-api.herokuapp.com/api/category/" + finalCateg)
    const allData = await response.json()

    this.setState({ questionsArr: allData })

  }

  nextQuestion(isCorrect) {
    const score = isCorrect ? this.state.currentScore + 1 : this.state.currentScore
    const nextQIndex = this.state.questionIndex + 1

    this.setState({ currentScore: score })
    this.setState({ questionIndex: nextQIndex })
  }

  render() {
    return (
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
      >

        {this.state.questionIndex < MAX_NUM_QUESTIONS && <>
        <p>{this.state.questionsArr && entities.decode( this.state.questionsArr[this.state.questionIndex].text) }   </p>
        <AnswersComponent answers={this.state.questionsArr && this.state.questionsArr[this.state.questionIndex].answers} callback={this.nextQuestion}></AnswersComponent>
        </>}


        {this.state.questionIndex >= MAX_NUM_QUESTIONS && <>

        <GameOverComponent score={this.state.currentScore} callback={this.props.callback}></GameOverComponent>
        
        </>}

        </Grid>)
  }

}
export default QuestionsComponent