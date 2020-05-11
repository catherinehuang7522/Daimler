import { styles } from "../stylesheet";
import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import DangerButton from "./DangerButton";
import Grid from "@material-ui/core/Grid";
import UIFx from "uifx";
import selectAudio from "../res/select.mp3"
import { IconButton } from "@material-ui/core";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";

const NUM_QUESTIONS_PER_MINUTE = 0;
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
    };

    this.onClickShowCharactersScreen = this.onClickShowCharactersScreen.bind(this);
    this.onClickSingle = this.onClickSingle.bind(this);
    this.onClickMulti = this.onClickMulti.bind(this);
  }

  // sets up the state to play a game for the prototype. Calls a callback function that will call the backhome function
  onClickShowCharactersScreen() {
    this.setState({ startGame: !this.state.startGame });
    this.props.callback("PROFILES");
    select.play()
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
    const startButton = (
      <IconButton
        style={styles.nextButton}
        onClick={this.onClickShowCharactersScreen}
      >
        <DoubleArrowIcon fontSize="large" />
      </IconButton>
    );

    const singlePlayerSelector = this.state.singlePlayer ? (
      <DangerButton text="Single Player" />
    ) : (
        <Button
          style={styles.unselectedButton}
          variant="contained"
          onClick={this.onClickSingle}
        >
          Single Player
        </Button>
      );

    const multiPlayerSelector = this.state.singlePlayer ? (
      <Button
        style={styles.unselectedButton}
        variant="contained"
        onClick={this.onClickMulti}
      >
        Multi Player
      </Button>
    ) : (
        <DangerButton text="Multi Player" />
      );

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
          {singlePlayerSelector}
          {multiPlayerSelector}
        </Grid>

        <Grid style={styles.row} spacing={3}>
          {shortDurationSelector}
          {medDurationSelector}
          {longDurationSelector}
        </Grid>

        <Grid style={styles.row} spacing={3}>
          {startButton}
        </Grid>
      </div>
    );
  }
}
export default StartComponent;
