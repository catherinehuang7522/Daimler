import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { styles } from "../stylesheet.js";

class CharacterButtonSimple extends Component {
  render() {
    let avatar =  <img style={styles.characterButtonImage} src={this.props.unSelectedImage} />;
    let label = this.props.name ? <div style={styles.characterButtonText}> {this.props.name} </div> : <div />;
    let style = styles.unselectedCharacterButton;
  //Display score below text
    let score = this.props.score;


    return (
      <Button
        style={style}
      >
        <div style={styles.characterButtonContent}>
          {avatar}
          {label}
          {score}
        </div>
      </Button>
    );
  }
}
export default CharacterButtonSimple;
