import React, { Component } from 'react';
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
const Entities = require('html-entities').AllHtmlEntities
import { styles } from '../../stylesheet'

const entities = new Entities();

// component that displays the answers
class AnswersComponent extends Component {

  constructor(props) {
    super(props)
    this.onPressAnswer = this.onPressAnswer.bind(this)

  }

  // executed when answer is pressed
  onPressAnswer(answerObj){
    let correctAnswer;
    for (let i in this.props.answers) {
      let currAnswerObj = this.props.answers[i]
      if (currAnswerObj.correct) {
        correctAnswer = entities.decode(currAnswerObj.text)  // decoding because some of the questions and answers have HTML entities e.g. &quot;
        break
      }
    }

    this.props.callback(answerObj.correct, correctAnswer)

  }

  render() {
  
    //did the null check because it takes time for the API to return the values
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
