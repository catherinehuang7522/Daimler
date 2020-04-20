import React, { Component } from "react";
import StartComponent from "./components/Start";
import QuestionsComponent from "./components/Questions";
import CategoriesComponent from "./components/Categories";
import DifficultyComponent from "./components/Difficulty";
import Firebase from "./components/firebase"

const styles = {};

export default class IndexPage extends Component {
  constructor(props) {
    super(props);

    let firebase = Firebase.sharedInstance
    let data = {
      name: 'Los Angeles',
      state: 'CA',
      country: 'USA'
    };

    // Add a new document in collection "cities" with ID 'LA'
    let setDoc = firebase.db.collection('cities').doc('LA').set(data);

    // initialize the game state
    this.state = {
      gameState: "START",
      catArray: [],
      gameDifficulty: "",
      numQuestions: 10,
    };

    this.renderSwitch = this.renderSwitch.bind(this);
    this.backHome = this.backHome.bind(this);
    this.setNumQuestions = this.setNumQuestions.bind(this)
    this.fromDifficultyToQuestions = this.fromDifficultyToQuestions.bind(this);
    this.fromCategoriestoDifficulty = this.fromCategoriestoDifficulty.bind(this);
  }

  fromCategoriestoDifficulty(nextActions, updatedArray) {
    this.setState({ catArray: updatedArray });
    this.setState({ gameState: nextActions });
  }

  fromDifficultyToQuestions(nextActions, difficulty) {
    this.setState({ gameDifficulty: difficulty });
    this.setState({ gameState: nextActions });
  }

  // changes the state of the game to whatever is passed as "nextActions". Can be e.g. START or QUESTIONS
  backHome(nextActions) {
    this.setState({ gameState: nextActions });
  }

  // sets the number of questions
  setNumQuestions(numQuestions) {
    this.setState({ numQuestions: numQuestions });
  }

  // reder the desired componenent based on the state
  renderSwitch(gameState) {
    switch (gameState) {
      case "START":
        return <StartComponent callback={this.backHome} setNumQuestionsCallback={this.setNumQuestions}></StartComponent>;
      case "CATEGORIES":
        return (
          <CategoriesComponent
            callback={this.fromCategoriestoDifficulty}
          ></CategoriesComponent>
        );
      case "QUESTIONS":
        return (
          <QuestionsComponent
            callback={this.backHome}
            numQuestions={this.state.numQuestions}
            cat={this.state.catArray}
            diff={this.state.gameDifficulty}
          >
            {" "}
          </QuestionsComponent>
        );
      case "DIFFICULTY":
        return (
          <DifficultyComponent
            callback={this.fromDifficultyToQuestions}
          ></DifficultyComponent>
        );
      default:
        return <StartComponent></StartComponent>;
    }
  }

  render() {
    return <> {this.renderSwitch(this.state.gameState)}</>;
  }
}
