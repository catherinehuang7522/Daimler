import React, { Component } from 'react';
import Button from '@material-ui/core/Button'
import DangerButton from './DangerButton'
import Grid from '@material-ui/core/Grid'
import Backdrop from '@material-ui/core/Backdrop'
import AnswersComponent from './Answers'
import GameOverComponent from './GameOver'
import FeedbackComponent from './Feedback'
const Entities = require('html-entities').AllHtmlEntities
import { styles } from '../stylesheet.js'

const entities = new Entities();

const MAX_NUM_QUESTIONS = 3
const FEEDBACK_SHOW_TIME_SECS = 2

// component that displays the questions or the game over component
class QuestionsComponent extends Component {

  constructor(props) {
    super(props)

    this.state = {
      startGame: true,
      singlePlayer: true,
      duration: 1,
      questionIndex: 0,
      currentScore: 0,
      showFeedback: false,
      lastQuestionCorrect: false,
      lastQuestionAnswer: "",
    };

    this.nextQuestion = this.nextQuestion.bind(this)
  }

  // calls function to fetch the questions before the component mounts
  componentWillMount() {
    this.onGetQuestions()
  }

  // fetch quesions from cocktail trivia
  async onGetQuestions(category) {
    const finalCateg = category == null ? "entertainment-music" : category

    //fetch questions
    const response = await fetch("https://cocktail-trivia-api.herokuapp.com/api/category/" + finalCateg)
    const allData = await response.json()

    this.setState({ questionsArr: allData })

  }

  //changes to the next question. isCorrect ia a bool for if the previous value was correct. correctAnswer is the correct answer
  nextQuestion(isCorrect, correctAnswer) {
    const score = isCorrect ? this.state.currentScore + 1 : this.state.currentScore
    const nextQIndex = this.state.questionIndex + 1

    this.setState({ lastQuestionCorrect: isCorrect})
    this.setState({ lastQuestionAnswer: correctAnswer})
    this.setState({ showFeedback: true})
    setTimeout(() => {
      this.setState({ showFeedback: false})
    }, FEEDBACK_SHOW_TIME_SECS * 1000)

    this.setState({ currentScore: score })
    this.setState({ questionIndex: nextQIndex })
  }

  render() {
    return (
      <div style={styles.root}>

      <Backdrop open={this.state.showFeedback}>
        <FeedbackComponent
          wasCorrect={this.state.lastQuestionCorrect}
          correctAnswer={this.state.lastQuestionAnswer}
        />
      </Backdrop>

      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
      >

        {this.state.questionIndex < MAX_NUM_QUESTIONS && <>
        <p style={styles.questionText}>{this.state.questionsArr && entities.decode( this.state.questionsArr[this.state.questionIndex].text) }   </p>
        <AnswersComponent answers={this.state.questionsArr && this.state.questionsArr[this.state.questionIndex].answers} callback={this.nextQuestion}></AnswersComponent>
        </>}


        {this.state.questionIndex >= MAX_NUM_QUESTIONS && <>

        <GameOverComponent score={this.state.currentScore} callback={this.props.callback}></GameOverComponent>

        </>}

        </Grid>

      </div>)
  }

}
export default QuestionsComponent
