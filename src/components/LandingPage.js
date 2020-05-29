import { styles } from "../stylesheet";
import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

class LandingPage extends Component {
  render() {
    return (
      <div style={styles.rootBackgroundColor}>
        <Grid style={styles.titleLandingPage}>
          Cabana <br />
          Trivia
            </Grid>
        <Button
          style={styles.startButtonTrial}
          onClick={() => this.props.callback("PROFILES")}
        >Start Game</Button>

      </div>
    )
  }
}

export default LandingPage;
