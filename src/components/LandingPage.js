import { styles } from "../stylesheet";
import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

class LandingPage extends Component {
  render() {
    return (
      <div style={styles.rootBackgroundColor}>
        <Grid style={styles.titleLandingPage}>
          <div style={styles.landingTitle}>
            <div> CABANA </div>
            <div> TRIVIA </div>
          </div>
          <Button
            style={styles.landingStartButton}
            onClick={() => this.props.callback("PROFILES")}
          >
            START
          </Button>
        </Grid>
      </div>
    )
  }
}

export default LandingPage;
