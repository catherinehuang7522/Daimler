import React, { Component } from 'react';
import Button from '@material-ui/core/Button'
import DangerButton from './DangerButton'
import CategoriesButton from './CategoriesButton'
import Grid from '@material-ui/core/Grid'
import { styles } from '../stylesheet.js'

/* shown when user first starts playing - they can choose what type of game they want to play
initializes the state
*/
class CategoriesComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
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
  }

  onClickGeneralKnowledge() {
    this.setState({generalKnowledge: !this.state.generalKnowledge});
  }

  onClickFilm() {
    this.setState({film: !this.state.film});
  }

  onClickScienceNature() {
    this.setState({scienceNature: !this.state.scienceNature});
  }

  onClickSports() {
    this.setState({sports: !this.state.sports});
  }

  onClickHistory() {
    this.setState({history: !this.state.history});
  }

  onClickTV() {
    this.setState({tv: !this.state.tv});
  }

  onClickBooks() {
    this.setState({books: !this.state.books});
  }

  onClickMusic() {
    this.setState({music: !this.state.music});
  }

  onClickMythology() {
    this.setState({mythology: !this.state.mythology});
  }

  onClickGeography() {
    this.setState({geography: !this.state.geography});
  }

  onClickArt() {
    this.setState({art: !this.state.art});
  }

  onClickVideoGames() {
    this.setState({videoGames: !this.state.videoGames});
  }

  render() {
    //By default, our categoty buttons are all unselected. When selected, the button looks selected
    const generalKnowledgeButton = this.state.generalKnowledge ?
      <DangerButton text="General Knowledge" onClick={this.onClickGeneralKnowledge}/>
      :
      <CategoriesButton text="General Knowledge" onClick={this.onClickGeneralKnowledge} />

    const filmButton = this.state.film ?
      <DangerButton text="Film" onClick={this.onClickFilm}/>
      :
      <CategoriesButton text="Film" onClick={this.onClickFilm} />

    const scienceNatureButton = this.state.scienceNature ?
      <DangerButton text="Science and Nature" onClick={this.onClickScienceNature}/>
      :
      <CategoriesButton text="Science and Nature" onClick={this.onClickScienceNature} />

    const sportsButton = this.state.sports ?
      <DangerButton text="Sports" onClick={this.onClickSports}/>
      :
      <CategoriesButton text="Sports" onClick={this.onClickSports} />

    const historyButton = this.state.history ?
      <DangerButton text="History" onClick={this.onClickHistory}/>
      :
      <CategoriesButton text="History" onClick={this.onClickHistory} />

    const tvButton = this.state.tv ?
      <DangerButton text="Television" onClick={this.onClickTV}/>
      :
      <CategoriesButton text="Television" onClick={this.onClickTV} />

    const booksButton = this.state.books ?
      <DangerButton text="Books" onClick={this.onClickBooks}/>
      :
      <CategoriesButton text="Books" onClick={this.onClickBooks} />

    const musicButton = this.state.music ?
      <DangerButton text="Music" onClick={this.onClickMusic}/>
      :
      <CategoriesButton text="Music" onClick={this.onClickMusic} />

    const mythologyButton = this.state.mythology ?
      <DangerButton text="Mythology" onClick={this.onClickMythology}/>
      :
      <CategoriesButton text="Mythology" onClick={this.onClickMythology} />

    const geographyButton = this.state.geography ?
      <DangerButton text="Geography" onClick={this.onClickGeography}/>
      :
      <CategoriesButton text="Geography" onClick={this.onClickGeography} />

    const artButton = this.state.art ?
      <DangerButton text="Art" onClick={this.onClickArt}/>
      :
      <CategoriesButton text="Art" onClick={this.onClickArt} />

    const videoGamesButton = this.state.videoGames ?
      <DangerButton text="Video Games" onClick={this.onClickVideoGames}/>
      :
      <CategoriesButton text="Video Games" onClick={this.onClickVideoGames} />

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
      </div>
    );
  }

}
export default CategoriesComponent;
