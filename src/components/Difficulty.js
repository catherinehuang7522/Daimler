import React, { Component } from "react";
import DangerButton from "./DangerButton";
import CategoriesButton from "./CategoriesButton";
import Grid from "@material-ui/core/Grid";
import { styles } from "../stylesheet.js";

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
    this.setState({ easy: !this.state.easy });
    this.setState({ chosenDifficulty: "easy" });
    this.setState({ medium: false });
    this.setState({ hard: false });
  }

  onClickMedium() {
    this.setState({ medium: !this.state.medium });
    this.setState({ chosenDifficulty: "medium" });
    this.setState({ easy: false });
    this.setState({ hard: false });
  }

  onClickHard() {
    this.setState({ hard: !this.state.hard });
    this.setState({ chosenDifficulty: "hard" });
    this.setState({ easy: false });
    this.setState({ medium: false });
  }

  onClickStartGame() {
    //Send to Questions screen the chosen difficulty
    this.setState({ startGame: !this.state.startGame });

    //Send to Questions screen
    this.props.callback("QUESTIONS", this.state.chosenDifficulty);
    //this.props.callback("QUESTIONS")
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
