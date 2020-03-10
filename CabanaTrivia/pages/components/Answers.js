import React, { Component } from 'react';
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
const Entities = require('html-entities').AllHtmlEntities
import { styles } from '../stylesheet.js'

const entities = new Entities();

class AnswersComponent extends Component {

  constructor(props) {
    super(props)
    this.onPressAnswer = this.onPressAnswer.bind(this)

  }

  onPressAnswer(answerObj){
    let correctAnswer;
    for (let i in this.props.answers) {
      let currAnswerObj = this.props.answers[i]
      if (currAnswerObj.correct) {
        correctAnswer = entities.decode(currAnswerObj.text)
        break
      }
    }

    this.props.callback(answerObj.correct, correctAnswer)

  }

  render() {

    const answer1  =  this.props.answers == null? "Answer 1" : this.props.answers[0]
    const answer2  =  this.props.answers == null? "Answer 2" :this.props.answers[1]
    const answer3  =  this.props.answers == null? "Answer 3" :this.props.answers[2]
    const answer4  =  this.props.answers == null? "Answer 4" :this.props.answers[3]


    return <Grid columnGrid
    direction="column"
    justify="center"
    alignItems="center"
    spacing={2}>

      <Grid rowGrid spacing={1}>
        <Button  style={styles.unselectedButton} onClick={()=> this.onPressAnswer(answer1)}>{entities.decode(answer1.text)} </Button>
        <Button  style={styles.unselectedButton} onClick={()=> this.onPressAnswer(answer2)}>{entities.decode(answer2.text)}</Button>
      </Grid>

      <Grid rowGrid spacing={1}>
        <Button  style={styles.unselectedButton} onClick={()=> this.onPressAnswer(answer3)}>{entities.decode(answer3.text)} </Button>
        <Button   style={styles.unselectedButton}onClick={()=> this.onPressAnswer(answer4)}>{entities.decode(answer4.text)}</Button>
      </Grid>


    </Grid>


  }
}
export default AnswersComponent;
