import { styles } from "../stylesheet";
import React, { Component } from "react";
import Button from "@material-ui/core/Button";


class LandingPage extends Component {
  render() {
    return (
      <div style={styles.root}>
        <Button
          style={styles.answerButton}
          onClick={() => this.props.callback("PROFILES")}
        >Start Game</Button>
      </div>
    )
  }
}

export default LandingPage;
