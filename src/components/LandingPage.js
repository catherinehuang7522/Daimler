import { styles } from "../stylesheet";
import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

class LandingPage extends Component {
  render() {
    return (
      <div style={styles.rootBackgroundColor}>
        <Grid style={styles.titleLandingPage}>
          CABANA <br />
          TRIVIA
            </Grid>
        <Button
          style={styles.startButtonTrial}
          onClick={() => this.props.callback("PROFILES")}
        >
          START
        </Button>
      </div>
    )
  }
}

export default LandingPage;
