import React, { Component } from 'react';
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
const Entities = require('html-entities').AllHtmlEntities

const entities = new Entities();


const useStyles = makeStyles(theme => ({
  container: {
    display: 'grid',
    direction: 'column'
  },
  minicontainer: {
    display: 'grid',
    direction: 'row'
  }
}));



class AnswersComponent extends Component {

  constructor(props) {
    super(props)
    this.onPressAnswer = this.onPressAnswer.bind(this)

  }

  onPressAnswer(answerObj){
    this.props.callback(answerObj.correct)

  }

  render() {

    const answer1  =  this.props.answers == null? "Answer 1" : this.props.answers[0]
    const answer2  =  this.props.answers == null? "Answer 2" :this.props.answers[1]
    const answer3  =  this.props.answers == null? "Answer 3" :this.props.answers[2]
    const answer4  =  this.props.answers == null? "Answer 4" :this.props.answers[3]
    

    return <Grid container
    direction="column"
    justify="center"
    alignItems="center" 
    spacing={2}>

      <Grid minicontainer spacing={1}>
        <Button  onClick={()=> this.onPressAnswer(answer1)}>{entities.decode(answer1.text)} </Button>
        <Button  onClick={()=> this.onPressAnswer(answer2)}>{entities.decode(answer2.text)}</Button>
      </Grid>

      <Grid minicontainer spacing={1}>
        <Button  onClick={()=> this.onPressAnswer(answer3)}>{entities.decode(answer3.text)} </Button>
        <Button  onClick={()=> this.onPressAnswer(answer4)}>{entities.decode(answer4.text)}</Button>
      </Grid>


    </Grid>


  }
}
export default AnswersComponent;
