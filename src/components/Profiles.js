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

const select = new UIFx(selectAudio,
  {
    volume: 0.4, // number between 0.0 ~ 1.0
    throttleMs: 100
  })

class ProfileComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numOfPlayers: 0,
      playersChosen: [],

      funnyFox: false,
      patientPanda: false,
      trustyTiger: false,
      newPlayer: false,
      isReadyToStart: false,
    };

    this.onClickFunnyFox = this.onClickFunnyFox.bind(this);
    this.onClickPatientPanda = this.onClickPatientPanda.bind(this);
    this.onClickTrustyTiger = this.onClickTrustyTiger.bind(this);
    this.onClickNewPlayer = this.onClickNewPlayer.bind(this);
    this.onClickShowStartScreen = this.onClickShowStartScreen.bind(this);
    this.addPlayer = this.addPlayer.bind(this);
    this.removePlayer = this.removePlayer.bind(this);

  }

  onClickFunnyFox() {
    select.play()
    this.setState({ funnyFox: !this.state.funnyFox });
    !this.state.funnyFox
      ? this.addPlayer("patientPanda")
      : this.removePlayer("patientPanda");

    if (this.state.numOfPlayers == 1 && !this.state.funnyFox) {
      console.log("Single Player is only supported");
      return;
    }
    // this.setState({ funnyFox: !this.state.funnyFox });
    // !this.state.funnyFox
    //   ? this.addPlayer("patientPanda")
    //   : this.removePlayer("patientPanda");
  }

  onClickPatientPanda() {
    select.play()
    if (this.state.numOfPlayers == 1 && !this.state.patientPanda) {
      console.log("Single Player is only supported");
      return;
    }
    this.setState({ patientPanda: !this.state.patientPanda });
    !this.state.patientPanda
      ? this.addPlayer("patientPanda")
      : this.removePlayer("patientPanda");
  }

  onClickTrustyTiger() {
    select.play()
    if (this.state.numOfPlayers == 1 && !this.state.trustyTiger) {
      console.log("Single Player is only supported");
      return;
    }
    this.setState({ trustyTiger: !this.state.trustyTiger });
    !this.state.trustyTiger
      ? this.addPlayer("trustyTiger")
      : this.removePlayer("trustyTiger");
  }

  onClickNewPlayer() {
    select.play()
    if (this.state.numOfPlayers == 1 && !this.state.newPlayer) {
      console.log("Single Player is only supported");
      return;
    }
    this.setState({ newPlayer: !this.state.newPlayer });
    !this.state.newPlayer
      ? this.addPlayer("newPlayer")
      : this.removePlayer("newPlayer");
  }

  addPlayer(playerName) {
    this.setState({ numOfPlayers: this.state.numOfPlayers + 1 });
    //Add player to playersChosen
    var input = this.state.playersChosen.concat(playerName);
    this.setState({ playersChosen: input });
  }

  removePlayer(index) {
    this.setState({ numOfPlayers: this.state.numOfPlayers - 1 });

    //Remove a player
    var currPlayer = this.state.playersChosen;
    var unwantedPlayer = currPlayer.indexOf(index);
    currPlayer.splice(unwantedPlayer, 1);
    this.setState({ playersChosen: currPlayer });
  }

  onClickShowStartScreen() {
    select.play()
    const currNumPlayers = this.state.numOfPlayers;
    if (currNumPlayers === 1) this.props.callback("START");
    else{
      console.log("Select only 1 player.");
    }
  }

  render() {

    const funnyFoxButton = this.state.funnyFox ? (
      <DangerButton text="Funny Fox" onClick={this.onClickFunnyFox} />
    ) : (
      <CategoriesButton text="Funny Fox" onClick={this.onClickFunnyFox} />
    );

    const patientPandaButton = this.state.patientPanda ? (
      <DangerButton text="Patient Panda" onClick={this.onClickPatientPanda} />
    ) : (
      <CategoriesButton text="Patient Panda" onClick={this.onClickPatientPanda} />
    );

    const trustyTigerButton = this.state.trustyTiger ? (
      <DangerButton text="Trusty Tiger" onClick={this.onClickTrustyTiger} />
    ) : (
      <CategoriesButton text="trustyTiger" onClick={this.onClickTrustyTiger} />
    );

    const newPlayerButton = this.state.newPlayer ? (
      <DangerButton text=" + " onClick={this.onClickNewPlayer} />
    ) : (
      <CategoriesButton text=" + " onClick={this.onClickNewPlayer} />
    );

    const nextButton = this.state.numOfPlayers == 1 ? (
      <IconButton
        style={styles.nextButton}
        onClick={this.onClickShowStartScreen}
      >
        <DoubleArrowIcon fontSize="large" />
      </IconButton>
    ) : (
      <div></div>
    );

    return (
      <div style={styles.root}>
        <Grid style={styles.title}> CHOOSE A CHARACTER </Grid>

        <Grid style={styles.row} spacing={4}>
          {funnyFoxButton}
          {patientPandaButton}
          {trustyTigerButton}
          {newPlayerButton}
        </Grid>

        <Grid style={styles.row} spacing={3}>
          {nextButton}
        </Grid>
      </div>
    );
  }
}
export default ProfileComponent;
