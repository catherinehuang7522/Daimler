import { styles } from "../stylesheet";
import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
const Entities = require("html-entities").AllHtmlEntities;

const entities = new Entities();

// component that displays the answers
class AnswersComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      correctAnswer: 0,
      selectedAnswer: 0,
      blockReclicking: false
    }

    this.onPressAnswer = this.onPressAnswer.bind(this);
  }

  // executed when answer is pressed
  onPressAnswer(index, answerObj) {
    if (this.state.blockReclicking) { return }

    this.setState({ blockReclicking: true });

    let correctAnswer;
    this.setState({selectedAnswer : index});
    for (let i in this.props.answers) {
      let currAnswerObj = this.props.answers[i];

      if (currAnswerObj.correct) {
        let correctAnswerIndex = parseInt(i) + 1
        console.log("correct answer index: ", correctAnswerIndex);
        this.setState({correctAnswer : String(correctAnswerIndex)})
        correctAnswer = entities.decode(currAnswerObj.text); // decoding because some of the questions and answers have HTML entities e.g. &quot;
        break;
      }
    }

    console.log("correct answer set to: ", this.state.correctAnswer);

    this.props.callback(answerObj.correct, correctAnswer);

    setTimeout(() => {
      this.setState({ correctAnswer: 0 });
      this.setState({ blockReclicking: false });
    }, 2 * 1000);
  }

  render() {
    //did the null check because it may take time for the API to return the values
    if( !this.props.answers ) return null

    const answer1 = this.props.answers[0];
    const answer2 = this.props.answers[1];

    // initialize these and set  when we have 4 choice multiple choice questions rather than true/false questions
    let answer3 = null;
    let answer4 = null;
    if (this.props.answers.length ===  4){
      answer3 = this.props.answers[2];
      answer4 = this.props.answers[3];
    }

    const button1 = this.state.correctAnswer === "1" ?
      (<Button
          style={styles.answerButtonCorrect}
          onClick={() => this.onPressAnswer(1, answer1)}
        >
          {entities.decode(answer1.text)}{" "}
        </Button>)
    :
      (<Button
          style={styles.answerButton}
          onClick={() => this.onPressAnswer(1, answer1)}
        >
          {entities.decode(answer1.text)}{" "}
        </Button>)

    const button2 = this.state.correctAnswer === "2" ?
      (<Button
        style={styles.answerButtonCorrect}
        onClick={() => this.onPressAnswer(2, answer2)}
      >
        {entities.decode(answer2.text)}
      </Button>)
    :
      (<Button
        style={styles.answerButton}
        onClick={() => this.onPressAnswer(2, answer2)}
      >
        {entities.decode(answer2.text)}
      </Button>)


    const button3 = (this.props.answers.length === 4) ? (
      this.state.correctAnswer === "3" ?
        (<Button
          style={styles.answerButtonCorrect}
          onClick={() => this.onPressAnswer(3, answer3)}
        >
          {entities.decode(answer3.text)}{" "}
        </Button>)
      :
        (<Button
          style={styles.answerButton}
          onClick={() => this.onPressAnswer(3, answer3)}
        >
          {entities.decode(answer3.text)}{" "}
        </Button>)
      ) : null

    const button4 = (this.props.answers.length === 4) ? (
      this.state.correctAnswer === "4" ?
        (<Button
          style={styles.answerButtonCorrect}
          onClick={() => this.onPressAnswer(4, answer4)}
        >
          {entities.decode(answer4.text)}
        </Button> )
      :
        (<Button
          style={styles.answerButton}
          onClick={() => this.onPressAnswer(4, answer4)}
        >
          {entities.decode(answer4.text)}
        </Button> )
      ) : null

    return (
      <Grid
        columnGrid
        direction="column"
        justify="center"
        alignItems="center"
        spacing={2}
      >


        <Grid rowGrid spacing={1}>
          {button1}
          {button2}
        </Grid>

        <Grid rowGrid spacing={1}>
          { (this.props.answers.length === 4) && button3}
          { (this.props.answers.length === 4) && button4 }
        </Grid>
      </Grid>
    );
  }
}
export default AnswersComponent;
