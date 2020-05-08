import { styles } from "../stylesheet";
import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import DangerButton from "./DangerButton";
import CategoriesButton from "./CategoriesButton";
import Grid from "@material-ui/core/Grid";
import UIFx from "uifx";
import selectAudio from "../res/select.mp3";
import { IconButton } from "@material-ui/core";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import foxImageUnselected from '../assets/avatar_fox_unselected.png';
import pandaImageUnselected from '../assets/avatar_panda_unselected.png';
import tigerImageUnselected from '../assets/avatar_tiger_unselected.png';
import foxImageSelected from '../assets/avatar_fox_selected.png';
import pandaImageSelected from '../assets/avatar_panda_selected.png';
import tigerImageSelected from '../assets/avatar_tiger_selected.png';
import CharacterButton from "./CharacterButton";
import Firebase from "../components/firebase"

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
      playersToShow: [],

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
    this.getPlayersFromBackend = this.getPlayersFromBackend.bind(this);
    this.updatePlayersToShow = this.updatePlayersToShow.bind(this);

    this.getPlayersFromBackend();

  }

  getPlayersFromBackend() {
    let firebase = Firebase.sharedInstance
    let readUsers = firebase.db.collection('users').get().then(snapshot => {
      snapshot.forEach(doc => {
        var players = this.state.playersToShow;
        players.push(doc.id);
        this.setState({ playersToShow: players})
      });
      this.updatePlayersToShow();
    });
  }

  updatePlayersToShow() {
    // TODO: Insert the logic to only show the player profiles from this.state.playersToShow
  }


  //TODO: FIX LOGIC
  //If you click trust tiger, you're still able to select funny foxImageSelected
  //Similar with Patient panda
  //I believe it has to do with the order of the if Stataments

  onClickFunnyFox() {
    select.play()
    this.setState({ funnyFox: !this.state.funnyFox });
    !this.state.funnyFox
      ? this.addPlayer("funnyFox")
      : this.removePlayer("funnyFox");

    if (this.state.numOfPlayers == 1 && !this.state.funnyFox) {
      console.log("Single Player is only supported");
      return;
    }

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

    this.props.callback("NEW_PROFILE");

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
    if (currNumPlayers === 1) {
      this.props.callback("START");
      this.props.setPlayer(this.state.playersChosen[0])
    } else {
      console.log("Select only 1 player.");
    }

  }

  render() {

    const funnyFoxButton = this.state.funnyFox ?
    <CharacterButton image={foxImageSelected}
      name="Funny Fox"
      selected={this.state.funnyFox}
      onClick={this.onClickFunnyFox}
    />
    :
    <CharacterButton image={foxImageUnselected}
      name="Funny Fox"
      selected={this.state.funnyFox}
      onClick={this.onClickFunnyFox}
    />;

    const patientPandaButton = this.state.patientPanda ?
    <CharacterButton image={pandaImageSelected}
      name="Patient Panda"
      selected={this.state.patientPanda}
      onClick={this.onClickPatientPanda}
    />
    :
    <CharacterButton image={pandaImageUnselected}
      name="Patient Panda"
      selected={this.state.patientPanda}
      onClick={this.onClickPatientPanda}
    />
    ;

    const trustyTigerButton = this.state.trustyTiger ?
    <CharacterButton image={tigerImageSelected}
      name="Trusty Tiger"
      selected={this.state.trustyTiger}
      onClick={this.onClickTrustyTiger}
    />
    :
    <CharacterButton image={tigerImageUnselected}
      name="Trusty Tiger"
      selected={this.state.trustyTiger}
      onClick={this.onClickTrustyTiger}
    />
    ;

    const newPlayerButton = this.state.newPlayer ?
      <CharacterButton
        name="+"
        selected={this.state.newPlayer}
        onClick={this.onClickNewPlayer}
      />
      :
      <CharacterButton
        name="+"
        selected={this.state.newPlayer}
        onClick={this.onClickNewPlayer}
      />

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
