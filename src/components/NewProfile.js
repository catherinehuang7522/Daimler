import { styles } from "../stylesheet";
import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import UIFx from "uifx";
import selectAudio from "../res/select.mp3";
import CharacterButton from "./CharacterButton";
import { imageIndex } from "../components/ImageIndex";
import DangerButton from "./DangerButton";


const select = new UIFx(selectAudio,
  {
    volume: 0.4, // number between 0.0 ~ 1.0
    throttleMs: 100
  })

class NewProfileComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newName: "",
      newAvatar: null,  // newAvatar is just stored as a string like "fox" (See ImageIndex) 
      avatarsToSelectFrom: imageIndex.getAllAvatars(),
    };

    this.renderAvatars = this.renderAvatars.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.addPlayer = this.addPlayer.bind(this);

  }

  addPlayer() {
    // TODO: add player to database and then navigate back to "choose a player"
  }


  //Returns Characterbutton objets for all avatars. The avatars are retrieved from ImageIndex
  renderAvatars() {
    return this.state.avatarsToSelectFrom.map((avatar, index) => (
      <CharacterButton
        selectedImage={imageIndex.getImage(avatar, true)}
        unSelectedImage={imageIndex.getImage(avatar, false)}
        name={''}
        //Checks if the avatar is selected, sets true or fals which triggers image design
        selected={(this.state.newAvatar === avatar) ? true : false}
        onClick={() => this.setState({ newAvatar: avatar })}
      />
    ));
  }

  //this handler sets the state of the new Name which is inputed by the user
  handleChange(event) {
    this.setState({ newName: event.target.value });
  }

  render() {
    //renders button when an avatar is selected and name has been entered 
    const addButton = (this.state.newName !== "" && this.state.newAvatar !== null) ? (
      <DangerButton text={"Add Player"} onClick={this.addPlayer} />
    ) : (
        <div></div>
      );

    return (
      <div style={styles.root}>
        <Grid style={styles.title}> CREATE YOUR PLAYER </Grid>
        <form>
          <label>
            Input Player Name:
          <input type="text" value={this.state.newName} onChange={this.handleChange} />
          </label>
        </form>
        <Grid style={styles.row} spacing={3}>
          {this.renderAvatars()}
        </Grid>
        <Grid style={styles.row} spacing={3}>
          {addButton}
        </Grid>
      </div>
    );
  }
}
export default NewProfileComponent;
