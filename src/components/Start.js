import { styles } from "../stylesheet";
import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import DangerButton from "./DangerButton";
import CategoriesButton from "./CategoriesButton";
import Grid from "@material-ui/core/Grid";
import UIFx from "uifx";
import selectAudio from "../res/select.mp3"
import { IconButton } from "@material-ui/core";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";

const NUM_QUESTIONS_PER_MINUTE = 5;
const select = new UIFx(selectAudio,
  {
    volume: 0.4, // number between 0.0 ~ 1.0
    throttleMs: 100
  })

/* shown when user first starts playing - they can choose what type of game they want to play
initializes the state
*/
class StartComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      randomvar: "",
      startGame: true,
      singlePlayer: true,
      duration: 1,
      chosenDifficulty: "easy",
      easy: true,
      medium: false,
      hard: false,
      startGame: false,
    };

    this.onClickShowCharactersScreen = this.onClickShowCharactersScreen.bind(this);
    this.onClickSingle = this.onClickSingle.bind(this);
    this.onClickMulti = this.onClickMulti.bind(this);
    this.onClickEasy = this.onClickEasy.bind(this);
    this.onClickMedium = this.onClickMedium.bind(this);
    this.onClickHard = this.onClickHard.bind(this);
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

  // sets up the state to play a game for the prototype. Calls a callback function that will call the backhome function
  onClickShowCharactersScreen() {
    if (
      this.state.easy === false &&
      this.state.medium === false &&
      this.state.hard === false
    ) {
      // add a pop-up/message etc. to select difficulty
    } else {
      this.setState({ startGame: !this.state.startGame });
      console.log("chosen diff: ");
      console.log(this.state.chosenDifficulty);
      
      
      this.props.setDifficultyCallback(this.state.chosenDifficulty);
      this.props.callback("CATEGORIES");
      select.play()
    }
  }

  onClickSingle() {
    this.setState({ singlePlayer: true });
    select.play()
  }

  onClickMulti() {
    this.setState({ singlePlayer: false });
    select.play()
  }

  onSelectDuration(dur) {
    this.setState({ duration: dur });
    this.props.setNumQuestionsCallback(dur * NUM_QUESTIONS_PER_MINUTE)
    select.play()
  }

  render() {
    const nextButton = (
      <IconButton
        style={styles.nextButton}
        onClick={this.onClickShowCharactersScreen}
      >
        NEXT
        <DoubleArrowIcon fontSize="large" />
      </IconButton>
    );

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
    )

    const shortDurationSelector =
      this.state.duration === 1 ? (
        <DangerButton text="Short Game [10 min]" />
      ) : (
          <Button
            style={styles.unselectedButton}
            variant="contained"
            onClick={() => this.onSelectDuration(1)}
          >
            Short Game [10 min]
          </Button>
        );

    const medDurationSelector =
      this.state.duration === 2 ? (
        <DangerButton text="Medium Game [20 min]" />
      ) : (
          <Button
            style={styles.unselectedButton}
            variant="contained"
            onClick={() => this.onSelectDuration(2)}
          >
            Medium Game [20 min]
          </Button>
        );

    const longDurationSelector =
      this.state.duration === 3 ? (
        <DangerButton text="Long Game [30 min]" />
      ) : (
          <Button
            style={styles.unselectedButton}
            variant="contained"
            onClick={() => this.onSelectDuration(3)}
          >
            Long Game [30 min]
          </Button>
        );

    return (
      <div style={styles.root}>
        <Grid style={styles.title}> TRIVIA </Grid>

        <Grid style={styles.row} spacing={3}>
          {easyButton}
          {mediumButton}
          {hardButton}
        </Grid>

        <Grid style={styles.row} spacing={3}>
          {shortDurationSelector}
          {medDurationSelector}
          {longDurationSelector}
        </Grid>

        <Grid style={styles.row} spacing={3}>
          {nextButton}
        </Grid>
      </div>
    );
  }
}
export default StartComponent;
