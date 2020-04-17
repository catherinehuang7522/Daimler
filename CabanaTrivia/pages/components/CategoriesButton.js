import React, { Component } from 'react';
import Button from '@material-ui/core/Button'
import { styles } from '../stylesheet.js'

//Recycle Category Button, by default the button is unselected
class CategoriesButton extends Component {
  render() {
    return (
      <Button style={styles.unselectedButton} variant="contained" color="secondary" onClick={this.props.onClick}>
        {this.props.text}
      </Button>
    );
  }
}
export default CategoriesButton;
