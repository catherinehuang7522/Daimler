import { styles } from "../stylesheet";
import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import UIFx from "uifx";
import selectAudio from "../res/select.mp3";
import { IconButton } from "@material-ui/core";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import CharacterButton from "./CharacterButton";
import Firebase from "../components/firebase";
import { imageIndex } from "../components/ImageIndex";
import Button from "@material-ui/core/Button";

const select = new UIFx(selectAudio,
  {
    volume: 0.4, // number between 0.0 ~ 1.0
    throttleMs: 100
  })

class ProfileComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playersChosen: [],
      playersToShow: [],

    };

    this.onClickNewPlayer = this.onClickNewPlayer.bind(this);
    this.onClickExistingPlayer = this.onClickExistingPlayer.bind(this);
    this.onClickNext = this.onClickNext.bind(this);
    this.renderPlayers = this.renderPlayers.bind(this);

    this.getPlayersFromBackend();

  }

  //loops through all plaers in playersToShow and create a CharacterButton for them
  renderPlayers() {
    return this.state.playersToShow.map((player, index) => (
      <CharacterButton
        selectedImage={imageIndex.getImage(player["avatar"], true)}
        unSelectedImage={imageIndex.getImage(player["avatar"], false)}
        name={player["username"]}
        selected={this.state.playersChosen.includes(player)}
        onClick={() => this.onClickExistingPlayer(player)}
      />
    ));
  }

  //stores all players in playersToShow from firbase
  getPlayersFromBackend() {
    let firebase = Firebase.sharedInstance
    let readUsers = firebase.db.collection('users').get().then(snapshot => {
      var players = [];
      snapshot.forEach(doc => {
        players.push(doc.data());
      });
      this.setState({ playersToShow: players })
    });
  }


  onClickExistingPlayer(player) {
    select.play()
    if (this.state.playersChosen.includes(player)) {
      //un-select a player
      var currPlayer = this.state.playersChosen;
      var unwantedPlayer = currPlayer.indexOf(player);
      currPlayer.splice(unwantedPlayer, 1);
      this.setState({ playersChosen: currPlayer });
    } else {
      //Add player to playersChosen
      var input = this.state.playersChosen.concat(player);
      this.setState({ playersChosen: input });
    }
  }


  onClickNewPlayer() {
    select.play()
    this.props.callback("NEW_PROFILE");

  }


  onClickNext() {
    select.play()
    const currNumPlayers = this.state.numOfPlayers;
    if (this.state.playersChosen.length < 5) {
      this.props.callback("START");
      this.props.setPlayer(this.state.playersChosen)
    } else {
      console.log("Select only 1 player.");
    }

  }

  render() {
    const newPlayerButton =
      <Button style={styles.addPlayerButton} onClick={this.onClickNewPlayer}>
        +
      </Button>

    const nextButton = this.state.playersChosen.length !== 0 ? (
      <IconButton
        style={styles.nextButton}
        onClick={this.onClickNext}
      >
        <DoubleArrowIcon fontSize="large" />
      </IconButton>
    ) : (
        <div></div>
      );

    return (
      <div style={styles.root}>
        <Grid style={styles.title}> CHOOSE A CHARACTER </Grid>
        <div style={styles.profileComponentWrapper}>
          <div style={styles.avatarSection}>
            {this.renderPlayers()}
          </div>
          <div style={styles.addPlayerSection}>
            {newPlayerButton}
          </div>
        </div>
        <Grid style={styles.row} spacing={3}>
          {nextButton}
        </Grid>
      </div>
    );
  }
}
export default ProfileComponent;
