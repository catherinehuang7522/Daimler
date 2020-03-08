import React, { Component } from 'react';
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'



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

  }

  render() {

    const answer1  =  this.props.answers == null? "Answer 1" : this.props.answers[0].text
    const answer2  =  this.props.answers == null? "Answer 2" :this.props.answers[1].text
    const answer3  =  this.props.answers == null? "Answer 3" :this.props.answers[2].text;
    const answer4  =  this.props.answers == null? "Answer 4" :this.props.answers[3].text;

    return <Grid container spacing={2}>

      <Grid minicontainer spacing={1}>
        <Button>{answer1} </Button>
        <Button>{answer2}</Button>
      </Grid>

      <Grid minicontainer spacing={1}>
        <Button>{answer3} </Button>
        <Button>{answer4}</Button>
      </Grid>


    </Grid>


  }
}
export default AnswersComponent;
