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



class FeedbackComponent extends Component {

  constructor(props) {
    super(props)
    this.onPressDismiss = this.onPressDismiss.bind(this)
  }

  onPressDismiss() {
    this.props.callback()
  }

  render() {
    let headerText;
    let bodyText;
    if (this.props.wasCorrect) {
      headerText = "Correct!";
      bodyText = "Way to go! You were right! " + this.props.correctAnswer + " is correct."
    } else {
      headerText = "Incorrect";
      bodyText = "Oh no, that wasn't right. The correct answer was " + this.props.correctAnswer + "."
    }

    return <Grid container
    direction="column"
    justify="center"
    alignItems="center"
    spacing={2}>

      <Grid minicontainer spacing={1}>
        <h1>
          {headerText}
        </h1>
      </Grid>

      <p>{bodyText}</p>


    </Grid>


  }
}
export default FeedbackComponent;
