import { styles } from "../stylesheet";
import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";


class LandingPage extends Component {
  render() {
    return (
      <div style={styles.root}>
        <Grid style={styles.title}> Cabana Trivia  </Grid>
        <p>PUT SOME INFO HERE </p>
        <Button
          style={styles.answerButton}
          onClick={() => this.props.callback("PROFILES")}
        >Start Game</Button>
      </div>
    )
  }
}

export default LandingPage;
