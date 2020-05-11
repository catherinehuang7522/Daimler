import { styles } from "../stylesheet";
import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Firebase from "./firebase"

// component shown when the game is over
class GameOverComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.submitScore()

    this.onGoHome = this.onGoHome.bind(this);
    this.goToLeaderboard = this.goToLeaderboard.bind(this);

  }

  submitScore() {
    let firebase = Firebase.sharedInstance
    var date = new Date()
    let timestamp = date.getTime()

    let data = {
      [timestamp]: this.props.score
    };
    let userID = this.props.player

    // console.log("Getting the user id: ");
    // console.log(userID);





    //set the data in Firebase
    let setDoc = firebase.db.collection('users').doc(userID).set(data, {merge: true});
  }

  // calls the callback function from questions
  onGoHome() {
    //  this.setState({ startGame: !this.state.startGame })
    const analytics = Firebase.sharedInstance.analytics
    analytics.logEvent('back_to_home', { user: this.props.player });
    this.props.callback("START");
  }

  goToLeaderboard() {
    const analytics = Firebase.sharedInstance.analytics
    analytics.logEvent('back_to_home', { user: this.props.player });
    this.props.callback("LEADERBOARD");
  }

  render() {
    return (
      <Grid container direction="column" justify="center" alignItems="center">
        <p style={styles.questionText}>
          Game Over. You scored: {this.props.score}
        </p>
        <Button style={styles.unselectedButton} onClick={this.onGoHome}>
          Back to Home
        </Button>
        <Button style={styles.unselectedButton} onClick={this.goToLeaderboard}>
          Go to Leaderboard
        </Button>
      </Grid>
    );
  }
}
export default GameOverComponent;
