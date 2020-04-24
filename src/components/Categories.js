import React, { Component } from "react";
import DangerButton from "./DangerButton";
import CategoriesButton from "./CategoriesButton";
import Grid from "@material-ui/core/Grid";
import { styles } from "../stylesheet.js";
import { IconButton } from "@material-ui/core";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import { CATEGORIES_MAP } from "../constants";
import UIFx from "uifx";
import selectAudio from "../res/select.mp3"

const select = new UIFx(selectAudio,
  {
    volume: 0.4, // number between 0.0 ~ 1.0
    throttleMs: 100
  })
/* shown when user first starts playing - they can choose what type of game they want to play
initializes the state
*/
class CategoriesComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      categoriesChosen: [],

      //PREVIOUSLY:
      generalKnowledge: false,
      film: false,
      scienceNature: false,
      sports: false,
      history: false,
      tv: false,
      books: false,
      music: false,
      mythology: false,
      geography: false,
      art: false,
      videoGames: false,
    };

    this.onClickGeneralKnowledge = this.onClickGeneralKnowledge.bind(this);
    this.onClickFilm = this.onClickFilm.bind(this);
    this.onClickScienceNature = this.onClickScienceNature.bind(this);
    this.onClickSports = this.onClickSports.bind(this);
    this.onClickHistory = this.onClickHistory.bind(this);
    this.onClickTV = this.onClickTV.bind(this);
    this.onClickBooks = this.onClickBooks.bind(this);
    this.onClickMusic = this.onClickMusic.bind(this);
    this.onClickMythology = this.onClickMythology.bind(this);
    this.onClickGeography = this.onClickGeography.bind(this);
    this.onClickArt = this.onClickArt.bind(this);
    this.onClickVideoGames = this.onClickVideoGames.bind(this);
    this.incrementCount = this.incrementCount.bind(this);
    this.decrementCount = this.decrementCount.bind(this);
    this.onClickShowDifficultyScreen = this.onClickShowDifficultyScreen.bind(
      this
    );
  }

  onClickShowDifficultyScreen() {
    select.play()
    //Checks if user has selected at least one category
    const currentCount = this.state.count;
    if (currentCount === 1 || currentCount === 2 || currentCount === 3) {
      this.props.callback("DIFFICULTY", this.state.categoriesChosen);
      console.log("Ready to start");
    } else {
      console.log("Select 3 categories or less");
    }
  }

  onClickGeneralKnowledge() {
    this.setState({ generalKnowledge: !this.state.generalKnowledge });
    !this.state.generalKnowledge
      ? this.incrementCount("GENERAL_KNOWLEDGE")
      : this.decrementCount("GENERAL_KNOWLEDGE");
  }

  onClickFilm() {
    this.setState({ film: !this.state.film });
    !this.state.film
      ? this.incrementCount("FILM")
      : this.decrementCount("FILM");
  }

  onClickScienceNature() {
    this.setState({ scienceNature: !this.state.scienceNature });
    !this.state.scienceNature
      ? this.incrementCount("SCIENCE_NATURE")
      : this.decrementCount("SCIENCE_NATURE");
  }

  onClickSports() {
    this.setState({ sports: !this.state.sports });
    !this.state.sports
      ? this.incrementCount("SPORTS")
      : this.decrementCount("SPORTS");
  }

  onClickHistory() {
    this.setState({ history: !this.state.history });
    !this.state.history
      ? this.incrementCount("HISTORY")
      : this.decrementCount("HISTORY");
  }

  onClickTV() {
    this.setState({ tv: !this.state.tv });
    !this.state.tv
      ? this.incrementCount("TELEVISION")
      : this.decrementCount("TELEVISION");
  }

  onClickBooks() {
    this.setState({ books: !this.state.books });
    !this.state.books
      ? this.incrementCount("BOOKS")
      : this.decrementCount("BOOKS");
  }

  onClickMusic() {
    this.setState({ music: !this.state.music });
    !this.state.music
      ? this.incrementCount("MUSIC")
      : this.decrementCount("MUSIC");
  }

  onClickMythology() {
    this.setState({ mythology: !this.state.mythology });
    !this.state.music
      ? this.incrementCount("MYTHOLOGY")
      : this.decrementCount("MYTHOLOGY");
  }

  onClickGeography() {
    this.setState({ geography: !this.state.geography });
    !this.state.geography
      ? this.incrementCount("GEOGRAPHY")
      : this.decrementCount("GEOGRAPHY");
  }

  onClickArt() {
    this.setState({ art: !this.state.art });
    !this.state.art ? this.incrementCount("ART") : this.decrementCount("ART");
  }

  onClickVideoGames() {
    this.setState({ videoGames: !this.state.videoGames });
    !this.state.videoGames
      ? this.incrementCount("VIDEO_GAMES")
      : this.decrementCount("VIDEO_GAMES");
  }

  incrementCount(catName) {
    this.setState({ count: this.state.count + 1 });

    //Add category to array
    var input = this.state.categoriesChosen.concat(catName);
    this.setState({ categoriesChosen: input });
  }

  decrementCount(index) {
    this.setState({ count: this.state.count - 1 });

    //Remove a category
    var currentCategories = this.state.categoriesChosen;
    var unwantedCategory = currentCategories.indexOf(index);
    currentCategories.splice(unwantedCategory, 1);
    this.setState({ categoriesChosen: currentCategories });
  }

  render() {
    //By default, our categoty buttons are all unselected. When selected, the button looks selected

    //DEBUGGING PURPOSES, DELETE ME
    const myEmptyArray = this.state.categoriesChosen;
    const emptyArraySize = this.state.categoriesChosen.length;

    //DEBUGGING PURPOSES, DELETE ME
    console.log("Array of current categories content  " + myEmptyArray);
    console.log("Array of current categories size " + emptyArraySize);

    const generalKnowledgeButton = this.state.generalKnowledge ? (
      <DangerButton
        text="General Knowledge"
        onClick={this.onClickGeneralKnowledge}
      />
    ) : (
      <CategoriesButton
        text="General Knowledge"
        onClick={this.onClickGeneralKnowledge}
      />
    );

    const filmButton = this.state.film ? (
      <DangerButton text="Film" onClick={this.onClickFilm} />
    ) : (
      <CategoriesButton text="Film" onClick={this.onClickFilm} />
    );

    const scienceNatureButton = this.state.scienceNature ? (
      <DangerButton
        text="Science and Nature"
        onClick={this.onClickScienceNature}
      />
    ) : (
      <CategoriesButton
        text="Science and Nature"
        onClick={this.onClickScienceNature}
      />
    );

    const sportsButton = this.state.sports ? (
      <DangerButton text="Sports" onClick={this.onClickSports} />
    ) : (
      <CategoriesButton text="Sports" onClick={this.onClickSports} />
    );

    const historyButton = this.state.history ? (
      <DangerButton text="History" onClick={this.onClickHistory} />
    ) : (
      <CategoriesButton text="History" onClick={this.onClickHistory} />
    );

    const tvButton = this.state.tv ? (
      <DangerButton text="Television" onClick={this.onClickTV} />
    ) : (
      <CategoriesButton text="Television" onClick={this.onClickTV} />
    );

    const booksButton = this.state.books ? (
      <DangerButton text="Books" onClick={this.onClickBooks} />
    ) : (
      <CategoriesButton text="Books" onClick={this.onClickBooks} />
    );

    const musicButton = this.state.music ? (
      <DangerButton text="Music" onClick={this.onClickMusic} />
    ) : (
      <CategoriesButton text="Music" onClick={this.onClickMusic} />
    );

    const mythologyButton = this.state.mythology ? (
      <DangerButton text="Mythology" onClick={this.onClickMythology} />
    ) : (
      <CategoriesButton text="Mythology" onClick={this.onClickMythology} />
    );

    const geographyButton = this.state.geography ? (
      <DangerButton text="Geography" onClick={this.onClickGeography} />
    ) : (
      <CategoriesButton text="Geography" onClick={this.onClickGeography} />
    );

    const artButton = this.state.art ? (
      <DangerButton text="Art" onClick={this.onClickArt} />
    ) : (
      <CategoriesButton text="Art" onClick={this.onClickArt} />
    );

    const videoGamesButton = this.state.videoGames ? (
      <DangerButton text="Video Games" onClick={this.onClickVideoGames} />
    ) : (
      <CategoriesButton text="Video Games" onClick={this.onClickVideoGames} />
    );

    // TODO: Add arrow button that would mean "Next".
    // TODO: Limit selection to three categories.
    // TODO: Keep track of which categories were selected for future API calls
    return (
      <div style={styles.root}>
        <Grid style={styles.title}> SELECT UP TO 3 CATEGORIES </Grid>
        <div style={styles.categoryButtonsContainer}>
          <Grid style={styles.categoryRow} spacing={3}>
            {generalKnowledgeButton}
            {filmButton}
          </Grid>
          <Grid style={styles.categoryRow} spacing={3}>
            {scienceNatureButton}
            {sportsButton}
          </Grid>
          <Grid style={styles.categoryRow} spacing={3}>
            {historyButton}
            {tvButton}
          </Grid>
          <Grid style={styles.categoryRow} spacing={3}>
            {booksButton}
            {musicButton}
          </Grid>
          <Grid style={styles.categoryRow} spacing={3}>
            {mythologyButton}
            {geographyButton}
          </Grid>
          <Grid style={styles.categoryRow} spacing={3}>
            {artButton}
            {videoGamesButton}
          </Grid>
        </div>
        <IconButton
          style={styles.nextButton}
          onClick={this.onClickShowDifficultyScreen}
        >
          <DoubleArrowIcon fontSize="large" />
        </IconButton>
      </div>
    );
  }
}
export default CategoriesComponent;
