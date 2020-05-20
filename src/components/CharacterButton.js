import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { styles } from "../stylesheet.js";

class CharacterButton extends Component {
  render() {
    let avatar = this.props.selected ? <img style={styles.characterButtonImage} src={this.props.selectedImage} /> : <img style={styles.characterButtonImage} src={this.props.unSelectedImage} />;
    let label = <div style={styles.characterButtonText}> {this.props.name} </div>;
    let style = this.props.selected ? styles.selectedCharacterButton : styles.unselectedCharacterButton;
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
