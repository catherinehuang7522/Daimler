import { styles } from "../stylesheet";
import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Firebase from "./firebase"
import CharacterButtonSimple from "./CharacterButtonSimple";
import { imageIndex } from "../components/ImageIndex";


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
    this.renderPlayers = this.renderPlayers.bind(this);

  }

  async submitScore() {
    let firebase = Firebase.sharedInstance
    console.log("got the instance: ");
    console.log(firebase);


    var date = new Date()
    let timestamp = date.getTime()

    for (let username in this.props.score) {
      let data = {
        [timestamp]: this.props.score[username]
      };
      //set the data in Firebase
      await firebase.db.collection('users').doc(username).set(data, { merge: true });
    }

  }

  // calls the callback function from questions
  onGoHome() {
    //  this.setState({ startGame: !this.state.startGame })
    this.analytics.logEvent('back_to_home');
    this.props.callback("LANDING");
  }

  goToLeaderboard() {
    // const analytics = Firebase.sharedInstance.analytics
    this.analytics.logEvent('show_leaderboard');
    this.props.callback("LEADERBOARD");
  }

    //This is on Game Over
    //loops through all plaers to create a CharacterButton and display score
    //can you pass as a prop
    renderPlayers() {
      return this.props.playersChosen.map((player, index) => (
        <div style={styles.playerWrapperCol}>
          <CharacterButtonSimple
            unSelectedImage={imageIndex.getImage(player["avatar"])}
            name={player["username"]}
            key={index}
          />
          <div style={styles.scoreVertical}> {this.props.score[player["username"]]} </div>
        </div>
      ));
    }

  render() {
    let winner = "";
    let topScore = 0;
    for (let username in this.props.score) {
      let score = this.props.score[username]
      if (score >= topScore) {
        winner = username
        topScore = score
      }
    }

    return (
      <Grid container direction="column" justify="center" alignItems="center">
        <div style={styles.title}>
          Congratulations, {winner}!
        </div>
          <div style={styles.avatarSection}>
                {this.renderPlayers()}
          </div>
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
