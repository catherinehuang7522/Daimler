import { styles } from "../stylesheet";
import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import DangerButton from "./DangerButton";
import SmallDangerButton from "./SmallDangerButton";
import SmallDangerButtonTimer from "./SmallDangerButton";

import DurationButton from "./DurationButton";
import Grid from "@material-ui/core/Grid";
import AvTimerIcon from '@material-ui/icons/AvTimer';

import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';

import UIFx from "uifx";
import selectAudio from "../res/select.mp3"
import { IconButton } from "@material-ui/core";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

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
      short: false,
    };

    this.onClickShowCharactersScreen = this.onClickShowCharactersScreen.bind(this);
    this.onClickSingle = this.onClickSingle.bind(this);
    this.onClickMulti = this.onClickMulti.bind(this);
    this.onClickEasy = this.onClickEasy.bind(this);
    this.onClickMedium = this.onClickMedium.bind(this);
    this.onClickHard = this.onClickHard.bind(this);
    this.showPreviousScreen = this.showPreviousScreen.bind(this);
  }

  showPreviousScreen() {
    this.props.callback("PROFILES");
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
    const previousScreenButton = (
      <IconButton
        style={styles.previousButton}
        onClick={this.showPreviousScreen}
      >
        <ArrowBackIcon fontSize="small" />
        BACK
      </IconButton>
    );

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
      <SmallDangerButton text="Easy" onClick={this.onClickEasy} />
    ) : (
      <Button
        style={styles.smallUnselectedButton}
        variant="contained"
        onClick={this.onClickEasy}
      >
        Easy
      </Button>
    );

    const mediumButton = this.state.medium ? (
      <SmallDangerButton text="Medium" onClick={this.onClickMedium} />
    ) : (
      <Button
        style={styles.smallUnselectedButton}
        variant="contained"
        onClick={this.onClickMedium}
      >
        Medium
      </Button>
    );

    const hardButton = this.state.hard ? (
      <SmallDangerButton text="Hard" onClick={this.onClickHard} />
    ) : (
      <Button
        style={styles.smallUnselectedButton}
        variant="contained"
        onClick={this.onClickHard}
      >
        Hard
      </Button>
    )

    const shortDurationSelector =
      this.state.duration === 1 ? (
        <Button
          style={styles.smallSelectedButtonTimer}
          variant="contained"
          startIcon={
            <AvTimerIcon
            style= {{fontSize: 50}}
            ></AvTimerIcon>
          }
          >
            10 min
          </Button>
      ) : (
          <Button
            style={styles.smallUnselectedButton}
            variant="contained"
            startIcon={
              <AvTimerIcon
              style= {{fontSize: 50}}
              ></AvTimerIcon>
            }

            onClick={() => this.onSelectDuration(1)}
          >
            10 min

          </Button>
        );


    const medDurationSelector =
      this.state.duration === 2 ? (
        <Button
          style={styles.smallSelectedButtonTimer}
          variant="contained"
          startIcon={
            <AvTimerIcon
            style= {{fontSize: 50}}
            ></AvTimerIcon>
          }
          >
            20 min
          </Button>
      ) : (
          <Button
            style={styles.smallUnselectedButton}
            variant="contained"
            startIcon={
              <AvTimerIcon
              style= {{fontSize: 50}}
              ></AvTimerIcon>
            }

            onClick={() => this.onSelectDuration(2)}
          >
            20 min

          </Button>
        );
    const longDurationSelector =
      this.state.duration === 3 ? (
        <Button
          style={styles.smallSelectedButtonTimer}
          variant="contained"
          startIcon={
            <AvTimerIcon
            style= {{fontSize: 50}}
            ></AvTimerIcon>
          }
          >
            30 min
          </Button>
      ) : (
          <Button
            style={styles.smallUnselectedButton}
            variant="contained"
            startIcon={
              <AvTimerIcon
              style= {{fontSize: 50}}
              ></AvTimerIcon>
            }

            onClick={() => this.onSelectDuration(3)}
          >
            30 min

          </Button>
        );



    return (
      <div style={styles.root}>
        {previousScreenButton}
        <Grid style={styles.title}> TRIVIA </Grid>
        <Grid style={styles.selectionText}> Choose a difficulty</Grid>

        <Grid style={styles.row} spacing={3}>

          {easyButton}
          {mediumButton}
          {hardButton}
        </Grid>

        <Grid style={styles.selectionText}> Choose a duration </Grid>


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
