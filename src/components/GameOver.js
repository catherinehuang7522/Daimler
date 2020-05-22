import { styles } from "../stylesheet";
import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Firebase from "./firebase"

// component shown when the game is over
class GameOverComponent extends Component {
  constructor(props) {
    super(props);

    //init analytics
    this.analytics = Firebase.sharedInstance.analytics
    this.analytics.logEvent('page_view', { final_page: 1 });
    this.analytics.logEvent('final_page', { final_page: 1 });

    this.state = {};
    this.submitScore()

    this.onGoHome = this.onGoHome.bind(this);
    this.goToLeaderboard = this.goToLeaderboard.bind(this);

  }

  async submitScore() {
    let firebase = Firebase.sharedInstance
    console.log("got the instance: ");
    console.log(firebase);


    var date = new Date()
    let timestamp = date.getTime()

    let data = {
      [timestamp]: this.props.score
    };
    let userID = this.props.player

    //set the data in Firebase
    let setDoc = await firebase.db.collection('users').doc(userID).set(data, { merge: true });

  }

  // calls the callback function from questions
  onGoHome() {
    //  this.setState({ startGame: !this.state.startGame })
    this.analytics.logEvent('back_to_home');
    this.props.callback("START");
  }

  goToLeaderboard() {
    // const analytics = Firebase.sharedInstance.analytics
    this.analytics.logEvent('show_leaderboard');
    this.props.callback("LEADERBOARD");
  }

  render() {
    return (
      <Grid container direction="column" justify="center" alignItems="center">
        <p style={styles.questionText}>
          Game Over. You scored: {this.props.score}
        </p>


        <Grid style={styles.column} spacing={3}>
          <Button style={styles.unselectedButton} onClick={this.onGoHome}>
            Back to Home
        </Button>
          <Button style={styles.unselectedButton} m={5} onClick={this.goToLeaderboard}>
            Go to Leaderboard
        </Button>
        </Grid>

      </Grid>
    );
  }
}
export default GameOverComponent;
