import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { styles } from "../stylesheet.js";

class CharacterButton extends Component {
  render() {
    let avatar = this.props.selected ? <img style={styles.characterButtonImage} src={this.props.selectedImage} /> : <img style={styles.characterButtonImage} src={this.props.unSelectedImage} />;
    let label = this.props.name ? <div style={styles.characterButtonText}> {this.props.name} </div> : <div/>;
    let style = this.props.selected ? styles.selectedCharacterButton : styles.unselectedCharacterButton;
    if (!this.props.name) {
      style = this.props.selected ? styles.selectedAvatarButton : styles.unselectedAvatarButton;
    }

    return (
      <Button
        style={style}
        onClick={this.props.onClick}
      >
        <div style={styles.characterButtonContent}>
          {avatar}
          {label}
        </div>
      </Button>
    );
  }
}
export default CharacterButton;
