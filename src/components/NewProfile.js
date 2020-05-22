import { styles } from "../stylesheet";
import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import UIFx from "uifx";
import selectAudio from "../res/select.mp3";
import CharacterButton from "./CharacterButton";
import { imageIndex } from "../components/ImageIndex";
import Button from "@material-ui/core/Button";
import Firebase from "./firebase"

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
    if (this.state.newName === "") { return }
    if (this.state.newAvatar === null) { return }

    let data = {
      username: this.state.newName,
      avatar: this.state.newAvatar
    }

    let firebase = Firebase.sharedInstance
    let setDoc = firebase.db.collection('users').doc(this.state.newName).set(data, {merge: true});

    select.play()
    this.props.callback("PROFILES");
  }


  //Returns Characterbutton objets for all avatars. The avatars are retrieved from ImageIndex
  // TODO: only render avatars that haven't been used yet
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
      <Button onClick={this.addPlayer} style={styles.newPlayerButton}>
       Add Player
       </Button>
    ) : (
        <div></div>
      );

    return (
      <div style={styles.root}>
        <Grid style={styles.title}> CREATE YOUR PLAYER </Grid>
        <div style={styles.profileComponentWrapper}>
          <div style={styles.avatarSection}>
            {this.renderAvatars()}
          </div>
          <form style ={styles.inputSection}>
            <div>
              <div> Input Player Name </div>
              <input type="text" value={this.state.newName} onChange={this.handleChange} />
            </div>
            {addButton}
          </form>
        </div>
      </div>
    );
  }
}
export default NewProfileComponent;
