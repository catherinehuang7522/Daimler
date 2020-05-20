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
import foxImageSelected from '../assets/avatar_fox_selected.png';
import pandaImageUnselected from '../assets/avatar_panda_unselected.png';
import pandaImageSelected from '../assets/avatar_panda_selected.png';
import tigerImageUnselected from '../assets/avatar_tiger_unselected.png';
import tigerImageSelected from '../assets/avatar_tiger_selected.png';
import walrusImageUnselected from '../assets/avatar_walrus_unselected.png';
import walrusImageSelected from '../assets/avatar_walrus_selected.png';
import elephantImageUnselected from '../assets/avatar_elephant_unselected.png';
import elephantImageSelected from '../assets/avatar_elephant_selected.png';
import penguinImageUnselected from '../assets/avatar_penguin_unselected.png';
import penguinImageSelected from '../assets/avatar_penguin_selected.png';
import giraffeImageUnselected from '../assets/avatar_giraffe_unselected.png';
import giraffeImageSelected from '../assets/avatar_giraffe_selected.png';
import sheepImageUnselected from '../assets/avatar_sheep_unselected.png';
import sheepImageSelected from '../assets/avatar_sheep_selected.png';
import bearImageUnselected from '../assets/avatar_bear_unselected.png';
import bearImageSelected from '../assets/avatar_bear_selected.png';
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
      wittyWalrus: false,
      ecstaticElephant: false,
      proudPenguin: false,
      greatGiraffe: false,
      smartSheep: false,
      boldBear: false,
      newPlayer: false,
      isReadyToStart: false,
    };

    this.onClickFunnyFox = this.onClickFunnyFox.bind(this);
    this.onClickPatientPanda = this.onClickPatientPanda.bind(this);
    this.onClickTrustyTiger = this.onClickTrustyTiger.bind(this);
    this.onClickWittyWalrus = this.onClickWittyWalrus.bind(this);
    this.onClickEcstaticElephant = this.onClickEcstaticElephant.bind(this);
    this.onClickProudPenguin = this.onClickProudPenguin.bind(this);
    this.onClickGreatGiraffe = this.onClickGreatGiraffe.bind(this);
    this.onClickSmartSheep = this.onClickSmartSheep.bind(this);
    this.onClickBoldBear = this.onClickBoldBear.bind(this);
    this.onClickNewPlayer = this.onClickNewPlayer.bind(this);
    this.onClickShowCategoriesScreen = this.onClickShowCategoriesScreen.bind(this);
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

  onClickFunnyFox() {
    select.play()
    if (this.state.numOfPlayers == 1 && !this.state.funnyFox) {
      console.log("Single Player is only supported");
      return;
    }
    this.setState({ funnyFox: !this.state.funnyFox });
    !this.state.funnyFox
      ? this.addPlayer("funnyFox")
      : this.removePlayer("funnyFox");
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

  onClickWittyWalrus() {
    select.play()
    if (this.state.numOfPlayers == 1 && !this.state.wittyWalrus) {
      console.log("Single Player is only supported");
      return;
    }
    this.setState({ wittyWalrus: !this.state.wittyWalrus });
    !this.state.wittyWalrus
      ? this.addPlayer("wittyWalrus")
      : this.removePlayer("wittyWalrus");
  }

  onClickEcstaticElephant() {
    select.play()
    if (this.state.numOfPlayers == 1 && !this.state.ecstaticElephant) {
      console.log("Single Player is only supported");
      return;
    }
    this.setState({ ecstaticElephant: !this.state.ecstaticElephant });
    !this.state.ecstaticElephant
      ? this.addPlayer("ecstaticElephant")
      : this.removePlayer("ecstaticElephant");
  }

  onClickProudPenguin() {
    select.play()
    if (this.state.numOfPlayers == 1 && !this.state.proudPenguin) {
      console.log("Single Player is only supported");
      return;
    }
    this.setState({ proudPenguin: !this.state.proudPenguin });
    !this.state.proudPenguin
      ? this.addPlayer("proudPenguin")
      : this.removePlayer("proudPenguin");
  }

  onClickGreatGiraffe() {
    select.play()
    if (this.state.numOfPlayers == 1 && !this.state.greatGiraffe) {
      console.log("Single Player is only supported");
      return;
    }
    this.setState({ greatGiraffe: !this.state.greatGiraffe });
    !this.state.greatGiraffe
      ? this.addPlayer("greatGiraffe")
      : this.removePlayer("greatGiraffe");
  }

  onClickSmartSheep() {
    select.play()
    if (this.state.numOfPlayers == 1 && !this.state.smartSheep) {
      console.log("Single Player is only supported");
      return;
    }
    this.setState({ smartSheep: !this.state.smartSheep });
    !this.state.smartSheep
      ? this.addPlayer("smartSheep")
      : this.removePlayer("smartSheep");
  }

  onClickBoldBear() {
    select.play()
    if (this.state.numOfPlayers == 1 && !this.state.boldBear) {
      console.log("Single Player is only supported");
      return;
    }
    this.setState({ boldBear: !this.state.boldBear });
    !this.state.boldBear
      ? this.addPlayer("boldBear")
      : this.removePlayer("boldBear");
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

  onClickShowCategoriesScreen() {
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

    const wittyWalrusButton = this.state.wittyWalrus ?
    <CharacterButton image={walrusImageSelected}
      name="Witty Walrus"
      selected={this.state.wittyWalrus}
      onClick={this.onClickWittyWalrus}
    />
    :
    <CharacterButton image={walrusImageUnselected}
      name="Witty Walrus"
      selected={this.state.wittyWalrus}
      onClick={this.onClickWittyWalrus}
    />
    ;

    const ecstaticElephantButton = this.state.ecstaticElephant ?
    <CharacterButton image={elephantImageSelected}
      name="Ecstatic Elephant"
      selected={this.state.ecstaticElephant}
      onClick={this.onClickEcstaticElephant}
    />
    :
    <CharacterButton image={elephantImageUnselected}
      name="Ecstatic Elephant"
      selected={this.state.ecstaticElephant}
      onClick={this.onClickEcstaticElephant}
    />
    ;

    const proudPenguinButton = this.state.proudPenguin ?
    <CharacterButton image={penguinImageSelected}
      name="Proud Penguin"
      selected={this.state.proudPenguin}
      onClick={this.onClickProudPenguin}
    />
    :
    <CharacterButton image={penguinImageUnselected}
      name="Proud Penguin"
      selected={this.state.proudPenguin}
      onClick={this.onClickProudPenguin}
    />
    ;

    const greatGiraffeButton = this.state.greatGiraffe ?
    <CharacterButton image={giraffeImageSelected}
      name="Great Giraffe"
      selected={this.state.greatGiraffe}
      onClick={this.onClickGreatGiraffe}
    />
    :
    <CharacterButton image={giraffeImageUnselected}
      name="Great Giraffe"
      selected={this.state.greatGiraffe}
      onClick={this.onClickGreatGiraffe}
    />
    ;

    const smartSheepButton = this.state.smartSheep ?
    <CharacterButton image={sheepImageSelected}
      name="Smart Sheep"
      selected={this.state.smartSheep}
      onClick={this.onClickSmartSheep}
    />
    :
    <CharacterButton image={sheepImageUnselected}
      name="Smart Sheep"
      selected={this.state.smartSheep}
      onClick={this.onClickSmartSheep}
    />
    ;

    const boldBearButton = this.state.boldBear ?
    <CharacterButton image={bearImageSelected}
      name="Bold Bear"
      selected={this.state.boldBear}
      onClick={this.onClickBoldBear}
    />
    :
    <CharacterButton image={bearImageUnselected}
      name="Bold Bear"
      selected={this.state.boldBear}
      onClick={this.onClickBoldBear}
    />
    ;

    // const newPlayerButton = this.state.newPlayer ?
    //   <CharacterButton
    //     name="+"
    //     selected={this.state.newPlayer}
    //     onClick={this.onClickNewPlayer}
    //   />
    //   :
    //   <CharacterButton
    //     name="+"
    //     selected={this.state.newPlayer}
    //     onClick={this.onClickNewPlayer}
    //   />

    const nextButton = this.state.numOfPlayers == 1 ? (
      <IconButton
        style={styles.nextButton}
        onClick={this.onClickShowCategoriesScreen}
      >
        <DoubleArrowIcon fontSize="large" />
      </IconButton>
    ) : (
      <div></div>
    );

    return (
      <div style={styles.root}>
        <Grid style={styles.title}> CHOOSE A CHARACTER </Grid>

        <Grid style={styles.characterRow} spacing={3}>
          {funnyFoxButton}
          {patientPandaButton}
          {trustyTigerButton}
        </Grid>

        <Grid style={styles.characterRow} spacing={3}>
          {wittyWalrusButton}
          {ecstaticElephantButton}
          {proudPenguinButton}
        </Grid>

        <Grid style={styles.characterRow} spacing={3}>
          {greatGiraffeButton}
          {smartSheepButton}
          {boldBearButton}
        </Grid>

        <Grid style={styles.row} spacing={3}>
          {nextButton}
        </Grid>
      </div>
    );
  }
}
export default ProfileComponent;
