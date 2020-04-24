import React, { Component } from "react";
import DangerButton from "./DangerButton";
import CategoriesButton from "./CategoriesButton";
import Grid from "@material-ui/core/Grid";
import { styles } from "../stylesheet.js";
import UIFx from "uifx";
import selectAudio from "../res/select.mp3";

const select = new UIFx(selectAudio,
  {
    volume: 0.4, // number between 0.0 ~ 1.0
    throttleMs: 100
  })

class DifficultyComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chosenDifficulty: "",
      easy: false,
      medium: false,
      hard: false,
      startGame: false,
    };
    this.onClickEasy = this.onClickEasy.bind(this);
    this.onClickMedium = this.onClickMedium.bind(this);
    this.onClickHard = this.onClickHard.bind(this);
    this.onClickStartGame = this.onClickStartGame.bind(this);
  }

  onClickEasy() {
    select.play()
    this.setState({ easy: !this.state.easy });
    this.setState({ chosenDifficulty: "easy" });
    this.setState({ medium: false });
    this.setState({ hard: false });
  }

  onClickMedium() {
    select.play()
    this.setState({ medium: !this.state.medium });
    this.setState({ chosenDifficulty: "medium" });
    this.setState({ easy: false });
    this.setState({ hard: false });
  }

  onClickHard() {
    select.play()
    this.setState({ hard: !this.state.hard });
    this.setState({ chosenDifficulty: "hard" });
    this.setState({ easy: false });
    this.setState({ medium: false });
  }

  onClickStartGame() {
    select.play()
    if (
      this.state.easy === false &&
      this.state.medium === false &&
      this.state.hard === false
    ) {
      // add a pop-up/message etc. to select difficulty
    } else {
      //Send to Questions screen the chosen difficulty
      this.setState({ startGame: !this.state.startGame });

      //Send to Questions screen
      this.props.callback("QUESTIONS", this.state.chosenDifficulty);
      //this.props.callback("QUESTIONS")
    }
  }

  render() {
    const easyButton = this.state.easy ? (
      <DangerButton text="Easy" onClick={this.onClickEasy} />
    ) : (
      <CategoriesButton text="Easy" onClick={this.onClickEasy} />
    );

    const mediumButton = this.state.medium ? (
      <DangerButton text="Medium" onClick={this.onClickMedium} />
    ) : (
      <CategoriesButton text="Medium" onClick={this.onClickMedium} />
    );

    const hardButton = this.state.hard ? (
      <DangerButton text="Hard" onClick={this.onClickHard} />
    ) : (
      <CategoriesButton text="Hard" onClick={this.onClickHard} />
    );

    //Currently the Start Button will look the same as the other buttons
    const startButton = (
      <CategoriesButton text="START" onClick={this.onClickStartGame} />
    );

    return (
      <div style={styles.root}>
        <Grid style={styles.title}> CHOOSE A DIFFICULTY </Grid>

        <Grid style={styles.row} spacing={3}>
          {easyButton}
          {mediumButton}
          {hardButton}
        </Grid>

        <Grid style={styles.row} spacing={3}>
          {startButton}
        </Grid>
      </div>
    );
  }
}
export default DifficultyComponent;
