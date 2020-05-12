import React, { Component } from 'react';
import Button from '@material-ui/core/Button'

const styles = ({
  selectedButton: {
    backgroundColor: 'white',
    color: '#1F1F55',
    boxShadow: '0px 0px 4px #ffffff',
    borderRadius: 20,
    borderTop: '5px solid #4DFAFA',
    borderBottom: '5px solid #4DFAFA',
    borderLeft: '5px solid #4DFAFA',
    borderRight: '5px solid #4DFAFA',
    width: 332,
    height: 78,
    fontFamily: 'Kontakt'
  }
})

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
