import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { styles } from "../stylesheet.js";
import cheerAudio from "../res/cheer.mp3"
import sadAudio from "../res/sad.mp3"
import UIFx from "uifx";

const Entities = require("html-entities").AllHtmlEntities;

const entities = new Entities();
const cheer = new UIFx(cheerAudio,
  {
    volume: 0.4, // number between 0.0 ~ 1.0
    throttleMs: 100
  })
const sad = new UIFx(sadAudio,
  {
    volume: 0.4, // number between 0.0 ~ 1.0
    throttleMs: 100
  })

class FeedbackComponent extends Component {
  constructor(props) {
    super(props);
    this.questionsSeen = new Set()
    this.onPressDismiss = this.onPressDismiss.bind(this);
  }

  onPressDismiss() {
    this.props.callback();
  }

  render() {
    let headerText;
    let bodyText;
    
    const seenBefore = this.questionsSeen.has(this.props.questionIndex)
    this.questionsSeen.add(this.props.questionIndex)
    if (this.props.questionIndex) {  // Render only if the question index is set
      if (this.props.wasCorrect) {
        if (!seenBefore) cheer.play()
        headerText = <p style={styles.feedbackHeaderTextCorrect}>Correct!</p>;
        bodyText =
          "Way to go! You were right! " +
          this.props.correctAnswer +
          " is correct.";
      } else {
        if (!seenBefore) sad.play()
        headerText = <p style={styles.feedbackHeaderTextIncorrect}>Incorrect</p>;
        bodyText =
          "Oh no, that wasn't right. The correct answer was " +
          this.props.correctAnswer +
          ".";
      }
    }

    return (
      <div style={styles.feedbackContent}>
        <Grid
          columnGrid
          direction="column"
          justify="center"
          alignItems="center"
          spacing={2}
        >
          <Grid rowGrid spacing={1}>
            {headerText}
          </Grid>

          <p style={styles.feedbackBodyText}>{bodyText}</p>
        </Grid>
      </div>
    );
  }
}
export default FeedbackComponent;
