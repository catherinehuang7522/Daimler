import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { styles } from "../stylesheet.js";
import MovieIcon from '@material-ui/icons/Movie';
import EcoIcon from '@material-ui/icons/Eco';
import SportsFootballIcon from '@material-ui/icons/SportsFootball';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import TvIcon from '@material-ui/icons/Tv';
import AlbumIcon from '@material-ui/icons/Album';
import LanguageIcon from '@material-ui/icons/Language';
import BrushIcon from '@material-ui/icons/Brush';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLandmark } from "@fortawesome/free-solid-svg-icons";
import { faRebel } from "@fortawesome/free-brands-svg-icons";
import { faBrain } from "@fortawesome/free-solid-svg-icons";

//Recycle Category Button, by default the button is unselected
class CategoriesButton extends Component {
  render() {
    let icon;
    if (this.props.text === "General Knowledge"){ icon = <FontAwesomeIcon icon={faBrain} />;}
    if (this.props.text === "Film"){ icon = <MovieIcon fontSize="medium" />;}
    if (this.props.text === "Science and Nature"){ icon = <EcoIcon fontSize="medium" />;}
    if (this.props.text === "Sports"){ icon = <SportsFootballIcon fontSize="medium" />;}
    if (this.props.text === "History"){ icon = <FontAwesomeIcon icon={faLandmark} />;}
    if (this.props.text === "Television"){ icon = <TvIcon fontSize="medium" />;}
    if (this.props.text === "Books"){ icon = <ImportContactsIcon fontSize="medium" />;}
    if (this.props.text === "Music"){ icon = <AlbumIcon fontSize="medium" />;}
    if (this.props.text === "Mythology"){ icon = <FontAwesomeIcon icon={faRebel} />;}
    if (this.props.text === "Geography"){ icon = <LanguageIcon fontSize="medium" />;}
    if (this.props.text === "Art"){ icon = <BrushIcon fontSize="medium" />;}
    if (this.props.text === "Video Games"){ icon = <SportsEsportsIcon fontSize="medium" />;}
    if (this.props.text === "Location Based"){ icon = <LocationOnIcon fontSize="medium" />;}

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
export default CategoriesButton;
