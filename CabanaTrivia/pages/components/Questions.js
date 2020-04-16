import { styles } from "../stylesheet";
import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Backdrop from "@material-ui/core/Backdrop";
import AnswersComponent from "./Answers";
import CategoriesComponent from "./Categories";
import GameOverComponent from "./GameOver";
import FeedbackComponent from "./Feedback";
import IndexPage from '../index';
import {CATEGORIES_MAP} from '../constants'

const Entities = require("html-entities").AllHtmlEntities;

const entities = new Entities();

const MAX_NUM_QUESTIONS = 3;
const FEEDBACK_SHOW_TIME_SECS = 2;

// component that displays the questions or the game over component
class QuestionsComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      startGame: true,
      singlePlayer: true,
      duration: 1,
      questionIndex: 0,
      currentScore: 0,
      showFeedback: false,
      lastQuestionCorrect: false,
      lastQuestionAnswer: "",
      urlLinks: [],
    };

    this.nextQuestion = this.nextQuestion.bind(this);
    this.getUrls = this.getUrls.bind(this);
    this.parseQuestionAnswerFormat = this.parseQuestionAnswerFormat.bind(this)
  }

  componentDidMount(){
    this.getUrls();

  }
  // calls function to fetch the questions before the component mounts
  componentWillMount() {
      this.onGetQuestions();
  }


  /*
  function: getUrls
  Iterates over the user's selected categories (stored in this.props.cat)
  Creates a custom URL for each category
  Appends to the CustomID array defined in state

  */
  //TODO:
  // Currently, urlLinks is just holding the URL for the last category chosen, not all of them. How do we fix them?
  //We can't use setState in a for loop, because it only updates the state 1 time, so we need a better way
  getUrls(){
    const numQs = "10"  // change this or pass it into the function
    for(var i = 0; i < this.props.cat.length; i ++) {
      var customURL = "https://opentdb.com/api.php?amount="+numQs+"&category="+CATEGORIES_MAP[this.props.cat[i]]+"&difficulty="+this.props.diff
      //Add URL LINK to array

      //NOT UPDATING because setState can only be updated unce
      var link = this.state.urlLinks.concat(customURL)
      this.setState({urlLinks : link })
  }


  // fetch quesions from cocktail trivia
  async onGetQuestions(category) {
    const finalCateg = category == null ? "MUSIC" : category;  // pass in the category as you wish
    const difficulty = this.props.diff
    const numQs = "10"  // change this or pass it into the function

    const response = await fetch(
      "https://opentdb.com/api.php?amount="+numQs+"&category="+CATEGORIES_MAP[finalCateg]+"&difficulty="+difficulty
    )

    //TODO: Use a Promise so that we can process multiple urls rather than just one.
    // const response = Promise.all(urlLinks.map(url =>fetch(url)))

    let allData = await response.json();
    // parse the question to the same format
    allData = this.parseQuestionAnswerFormat(allData.results)
    this.setState({ questionsArr: allData });
  }

// shuffles the array of answers for randomness
  shuffleArray(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

/*This function parses the result from the API to the same format that was used in the previous API*/
  parseQuestionAnswerFormat(arr){
    const finalArr = []
    for (const item of arr){
      const questionObj = {}
      questionObj.text = item.question
      const answers = [{ text: item.correct_answer, correct: true}]
      for (const answerObj of item.incorrect_answers){
        answers.push({text: answerObj, correct: false})
      }
      this.shuffleArray(answers)
      questionObj.answers = answers
      finalArr.push(questionObj)
    }
    return finalArr
  }

  //changes to the next question. isCorrect ia a bool for if the previous value was correct. correctAnswer is the correct answer
  nextQuestion(isCorrect, correctAnswer) {
    const score = isCorrect
      ? this.state.currentScore + 1
      : this.state.currentScore;
    const nextQIndex = this.state.questionIndex + 1;

    this.setState({ lastQuestionCorrect: isCorrect });
    this.setState({ lastQuestionAnswer: correctAnswer });
    this.setState({ showFeedback: true });
    setTimeout(() => {
      this.setState({ showFeedback: false });
    }, FEEDBACK_SHOW_TIME_SECS * 1000);

    this.setState({ currentScore: score });
    this.setState({ questionIndex: nextQIndex });
  }

  render() {
    console.log("THESE WERE THE CATEGORIES CHOSEN " + this.props.cat)

    console.log("THIS WAS THE DIFFICULTY CHOSEN " + this.props.diff)

    console.log("THESE ARE THE URLS " + this.state.urlLinks)



    return (
      <div style={styles.root}>
        <Backdrop open={this.state.showFeedback}>
          <FeedbackComponent
            wasCorrect={this.state.lastQuestionCorrect}
            correctAnswer={this.state.lastQuestionAnswer}
          />
        </Backdrop>

        <Grid container direction="column" justify="center" alignItems="center">
          {this.state.questionIndex < MAX_NUM_QUESTIONS && (
            <>
              <p style={styles.questionText}>
                {this.state.questionsArr &&
                  entities.decode(
                    this.state.questionsArr[this.state.questionIndex].text
                  )}{" "}
              </p>
              <AnswersComponent
                answers={
                  this.state.questionsArr &&
                  this.state.questionsArr[this.state.questionIndex].answers
                }
                callback={this.nextQuestion}
              ></AnswersComponent>
            </>
          )}

          {this.state.questionIndex >= MAX_NUM_QUESTIONS && (
            <>
              <GameOverComponent
                score={this.state.currentScore}
                callback={this.props.callback}
              ></GameOverComponent>
            </>
          )}
        </Grid>
      </div>
    );
  }
}
export default QuestionsComponent;
