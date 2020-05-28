import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { styles } from "../stylesheet.js";

class SmallDangerButton extends Component {
  render() {
    return (
      <Button style={styles.smallSelectedButton} variant="contained" color="secondary" onClick={this.props.onClick}>
        {this.props.text}
      </Button>
    );
  }
}
export default SmallDangerButton;
