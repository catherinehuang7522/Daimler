import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { styles } from "../stylesheet.js";
import AvTimerIcon from '@material-ui/icons/AvTimer';
// import { faLandmark } from "@fortawesome/free-solid-svg-icons";
// import { faRebel } from "@fortawesome/free-brands-svg-icons";
// import { faBrain } from "@fortawesome/free-solid-svg-icons";

//Recycle Category Button, by default the button is unselected
class DifficultyButton extends Component {
  render() {
    let icon;
  //  if (this.props.text === "Short"){ icon = <FontAwesomeIcon icon={faBrain} />;}
  if (this.props.text === "Short"){ icon = <AvTimerIcon fontSize="medium" />;}
    if (this.props.text === "Medium"){ icon = <AvTimerIcon fontSize="medium" />;}
    if (this.props.text === "Long"){ icon = <AvTimerIcon fontSize="medium" />;}


    let style = this.props.selected ? styles.selectedCategoryButton : styles.unselectedCategoryButton;

    return (
      <Button
        style={style}
        variant="contained"
        color="secondary"
        onClick={this.props.onClick}
      >
        {this.props.text}
        {icon}
      </Button>
    );
  }
}
export default DifficultyButton;
