import { styles } from "../stylesheet";
import React, { Component } from "react";
import Button from "@material-ui/core/Button";


class LandingPage extends Component {
  render() {
    return (
      <Button
        style={styles.answerButton}
        onClick={() => this.props.callback("PROFILES")}
      >Start Game</Button>
    )
  }
}

export default LandingPage;
