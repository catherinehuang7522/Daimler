import React, { Component } from 'react';
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
const Entities = require('html-entities').AllHtmlEntities
import { styles } from '../stylesheet.js'

const entities = new Entities();


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

    return <Grid columnGrid
    direction="column"
    justify="center"
    alignItems="center"
    spacing={2}>

      <Grid rowGrid spacing={1}>
        <p style={styles.feedbackHeaderText}>{headerText}</p>
      </Grid>

      <p style={styles.feedbackBodyText}>{bodyText}</p>


    </Grid>


  }
}
export default FeedbackComponent;
