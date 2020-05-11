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

const select = new UIFx(selectAudio,
  {
    volume: 0.4, // number between 0.0 ~ 1.0
    throttleMs: 100
  })

class NewProfileComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numOfPlayers: 0,
      playersChosen: [],

      wittyWalrus: false,
      ecstaticElephant: false,
      proudPenguin: false,

      greatGiraffe: false,
      smartSheep: false,
      boldBear: false,


      isReadyToStart: false,
    };

    this.onClickWittyWalrus = this.onClickWittyWalrus.bind(this);
    this.onClickEstaticElephant = this.onClickEstaticElephant.bind(this);
    this.onClickProudPenguin = this.onClickProudPenguin.bind(this);
    this.onClickGreatGiraffe = this.onClickGreatGiraffe.bind(this);
    this.onClickSmartSheep = this.onClickSmartSheep.bind(this);
    this.onClickBoldBear = this.onClickBoldBear.bind(this);

    this.onClickShowStartScreen = this.onClickShowStartScreen.bind(this);
    this.addPlayer = this.addPlayer.bind(this);
    this.removePlayer = this.removePlayer.bind(this);

  }

  onClickWittyWalrus() {
    select.play()
    this.setState({ wittyWalrus: !this.state.wittyWalrus });
    !this.state.wittyWalrus
      ? this.addPlayer("wittyWalrus")
      : this.removePlayer("wittyWalrus");

    if (this.state.numOfPlayers == 1 && !this.state.wittyWalrus) {
      console.log("Single Player is only supported");
      return;
    }
  }

  onClickEstaticElephant() {
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

    const wittyWalrusButton = this.state.wittyWalrus ?
    <CharacterButton image={foxImageSelected}
      name="Witty Walrus"
      selected={this.state.wittyWalrus}
      onClick={this.onClickWittyWalrus}
    />
    :
    <CharacterButton image={foxImageUnselected}
      name="Witty Walrus"
      selected={this.state.wittyWalrus}
      onClick={this.onClickWittyWalrus}
    />;

    const ecstaticElephantButton = this.state.ecstaticElephant ?
    <CharacterButton image={pandaImageSelected}
      name="Ecstatic Elephant"
      selected={this.state.ecstaticElephant}
      onClick={this.onClickEstaticElephant}
    />
    :
    <CharacterButton image={pandaImageUnselected}
      name="Ecstatic Elephant"
      selected={this.state.ecstaticElephant}
      onClick={this.onClickEstaticElephant}
    />
    ;

    const proudPenguinButton = this.state.proudPenguin ?
    <CharacterButton image={tigerImageSelected}
      name="Proud Penguin"
      selected={this.state.proudPenguin}
      onClick={this.onClickProudPenguin}
    />
    :
    <CharacterButton image={tigerImageUnselected}
      name="Proud Penguin"
      selected={this.state.proudPenguin}
      onClick={this.onClickProudPenguin}
    />
    ;

    const greatGiraffeButton = this.state.greatGiraffe ?
    <CharacterButton image={tigerImageSelected}
      name="Great Giraffe"
      selected={this.state.greatGiraffe}
      onClick={this.onClickGreatGiraffe}
    />
    :
    <CharacterButton image={tigerImageUnselected}
      name="Great Giraffe"
      selected={this.state.greatGiraffe}
      onClick={this.onClickGreatGiraffe}
    />
    ;

    const smartSheepButton = this.state.smartSheep ?
    <CharacterButton image={foxImageSelected}
      name="Smart Sheep"
      selected={this.state.smartSheep}
      onClick={this.onClickSmartSheep}
    />
    :
    <CharacterButton image={foxImageUnselected}
      name="Smart Sheep"
      selected={this.state.smartSheep}
      onClick={this.onClickSmartSheep}
    />;

    const boldBearButton = this.state.boldBear ?
    <CharacterButton image={pandaImageSelected}
      name="Bold Bear"
      selected={this.state.boldBear}
      onClick={this.onClickEstaticElephant}
    />
    :
    <CharacterButton image={pandaImageUnselected}
      name="Bold Bear"
      selected={this.state.boldBear}
      onClick={this.onClickBoldBear}
    />
    ;

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
        <Grid style={styles.title}> NEW PLAYER </Grid>

        <Grid style={styles.row} spacing={3}>
          {wittyWalrusButton}
          {ecstaticElephantButton}
          {proudPenguinButton}
        </Grid>

        <Grid style={styles.row} spacing={3}>
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
export default NewProfileComponent;
