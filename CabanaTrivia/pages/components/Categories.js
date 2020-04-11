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
      isUnselected: true,

      generalKnowledge: false,
      film: false,
      switchcienceNature: false,
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
    this.onClickCat = this.onClickCat.bind(this)
  }

  //Set the value of the category chosen as true
  onClickCat(someCategory) {
    this.setState({ someCategory: true })
  }

  render() {
    //By default, our categoty buttons are all unselected. When selected, the button looks selected
    //TODO: Pass a function that will change the boolen of individual category
    //Example is given on General Knowledge
    const generalKnowledgeButton = this.state.isUnselected ?
      <CategoriesButton text="General Knowledge" hasChosenCategory= this.onClickCat(generalKnowledge) /> : <DangerButton text="General Knowledge"/>

    const filmButton = this.state.isUnselected ?
      <CategoriesButton text="Film"/> : <DangerButton text="Film"/>

    const scienceNatureButton = this.state.isUnselected ?
      <CategoriesButton text="Science and Nature"/> : <DangerButton text="Science and Nature"/>

    const sportsButton = this.state.isUnselected ?
      <CategoriesButton text="Sports"/> : <DangerButton text="Sports"/>

    const historyButton = this.state.isUnselected ?
      <CategoriesButton text="History"/> : <DangerButton text="History"/>

    const tvButton = this.state.isUnselected ?
      <CategoriesButton text="Television"/> : <DangerButton text="Television"/>

    const booksButton = this.state.isUnselected ?
      <CategoriesButton text="Books"/> : <DangerButton text="Books"/>

    const musicButton = this.state.isUnselected ?
      <CategoriesButton text="Books"/> : <DangerButton text="Books"/>

    const mythologyButton = this.state.isUnselected ?
      <CategoriesButton text="Mythology"/> : <DangerButton text="Mythology"/>

    const geographyButton = this.state.isUnselected ?
      <CategoriesButton text="Geography"/> : <DangerButton text="Geography"/>

    const artButton = this.state.isUnselected ?
      <CategoriesButton text="Art"/> : <DangerButton text="Art"/>

    const videoGamesButton = this.state.isUnselected ?
      <CategoriesButton text="Art"/> : <DangerButton text="Art"/>


    return (

      //TODO: Make sure that styles.column does actually style to 2 columns. Check the stylesheet.js file
      <div style={styles.root}>
        <Grid style={styles.title}> SELECT UP TO 3 CATEGORIES </Grid>


        //Column 1
        <Grid style={styles.column} spacing={3}>
          {generalKnowledgeButton}
          {filmButton}
          {scienceNatureButton}
          {sportsButton}
          {historyButton}
          {tvButton}
        </Grid>

        //Column 2
        <Grid style={styles.column} spacing={3}>
          {booksButton}
          {musicButton}
          {mythologyButton}
          {geographyButton}
          {artButton}
          {videoGamesButton}
        </Grid>

        //TODO:
        //Add some arrow button that would mean "Next".
        //Not yet implemented

      </div>
    );
  }

}
export default CategoriesComponent;
