import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { styles } from "../stylesheet.js";

class DangerButton extends Component {
  render() {
    return (
      <Button style={styles.selectedButton} variant="contained" color="secondary" onClick={this.props.onClick}>
        {this.props.text}
      </Button>
    );
  }
}
export default DangerButton;
