import React, { Component } from "react";
import StartComponent from "./components/Start";
import QuestionsComponent from "./components/Questions";
import CategoriesComponent from "./components/Categories";
import DifficultyComponent from "./components/Difficulty";
import ProfileComponent from "./components/Profiles"
import LeaderboardComponent from './components/Leaderboard';
import Firebase from "./components/firebase"




export default class IndexPage extends Component {
  constructor(props) {
    super(props);

    // initialize the game state
    this.state = {
      gameState: "PROFILES",
      catArray: [],
      gameDifficulty: "",
      numQuestions: 1, //This is manually set for easier debugging 
      player: ""
    };

    this.renderSwitch = this.renderSwitch.bind(this);
    this.backHome = this.backHome.bind(this);
    this.setPlayer = this.setPlayer.bind(this);
    this.setNumQuestions = this.setNumQuestions.bind(this)
    this.fromDifficultyToQuestions = this.fromDifficultyToQuestions.bind(this);
    this.fromCategoriestoDifficulty = this.fromCategoriestoDifficulty.bind(this);
  }

  fromCategoriestoDifficulty(nextActions, updatedArray) {
    this.setState({ catArray: updatedArray });
    this.setState({ gameState: nextActions });
  }

  fromDifficultyToQuestions(nextActions, difficulty) {

    //await analytics.setUserId("patientPanda")
    const analytics = Firebase.sharedInstance.analytics
    analytics.logEvent('difficulty', { level: difficulty });

    this.setState({ gameDifficulty: difficulty });
    this.setState({ gameState: nextActions });
  }

  // changes the state of the game to whatever is passed as "nextActions". Can be e.g. START or QUESTIONS
  backHome(nextActions) {
    this.setState({ gameState: nextActions });
  }

  setPlayer(player) {
    this.setState({ player: player });
    console.log("player is: " + player)
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
      case "PROFILES":
        return (
          <ProfileComponent
            callback={this.backHome}
            setPlayer={this.setPlayer}
          ></ProfileComponent>

        );
      case "QUESTIONS":
        return (
          <QuestionsComponent
            callback={this.backHome}
            numQuestions={this.state.numQuestions}
            cat={this.state.catArray}
            diff={this.state.gameDifficulty}
            player={this.state.player}
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
      case "LEADERBOARD":
        return (
          <LeaderboardComponent callback={this.backHome}>
          </LeaderboardComponent>
        )
      default:
        return <StartComponent></StartComponent>;
    }
  }

  render() {
    return <> {this.renderSwitch(this.state.gameState)}</>;
  }
}
