import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { styles } from "../stylesheet.js";
import AvTimerIcon from '@material-ui/icons/AvTimer';

class SmallDangerButtonTimer extends Component {
  render() {
    return (
      <Button
      style={styles.smallSelectedButton}
      variant="contained"
      onClick={this.props.onClick} >
      startIcon={
        <AvTimerIcon
        style= {{fontSize: 40}}
        ></AvTimerIcon>
      }
        {this.props.text}
      </Button>
    );
  }
}
export default SmallDangerButtonTimer;
