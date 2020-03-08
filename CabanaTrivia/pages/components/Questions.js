import React, { Component } from 'react';
import Button from '@material-ui/core/Button'
import DangerButton from './DangerButton'
import Grid from '@material-ui/core/Grid'
import AnswersComponent from './Answers'


const styles = ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  root: {
    flexGrow: 1
  }
})

class QuestionsComponent extends Component {

  constructor(props) {
    super(props)

    this.state = {
      startGame: true,
      singlePlayer: true,
      duration: 1
    };
  }

  componentWillMount(){
    this.onGetQuestions()
  }


  async onGetQuestions(category) {
    const finalCateg = category == null ? "entertainment-music" : category

    console.log("Starting out");
    //fetch questions
    const response = await fetch("https://cocktail-trivia-api.herokuapp.com/api/category/" + finalCateg)
    console.log("response is: ");
    console.log(response);


    const allData = await response.json()
    console.log("All Data: ");
    console.log(allData);


    this.setState({ questionsArr: allData })
    this.setState({ currentQ: allData[0].text })
    this.setState({ currentAnswers: allData[0].answers })
    console.log("The State:")
    console.log(this.state)
  }





  render() {
    
    return(
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
    >
      <p>{this.state.currentQ}</p>
      <AnswersComponent answers={this.state.currentAnswers}></AnswersComponent></Grid> )
  }

}
export default QuestionsComponent;



// import React, { Component } from 'react';
// import Button from '@material-ui/core/Button'
// import Grid from '@material-ui/core/Grid';

// class QuestionsComponent extends Component {

//   constructor(props) {
//     super(props);
//     this.state = { questionsArr: [] };

//     this.onGetQuestions = this.onGetQuestions.bind(this);
//     this.onClickAnswer = this.onClickAnswer.bind(this);
//   }


//   async onGetQuestions(category) {
//     const finalCateg = category == null ? category : "entertainment-music";

//     console.log("Starting out");


//     //fetch questions
//     //https://cocktail-trivia-api.herokuapp.com/api/category/entertainment-music
//     // const response = await fetch("https://cocktail-trivia-api.herokuapp.com/api/category/" + finalCateg)
//     // const allData = await response.json()
//     const allData = []
//     this.setState({ questionsArr: allData })
//     this.setState({ currentQ: allData[0].text })
//     this.setState({ currentAnswers: allData[0].answers })



//     console.log("Got the data:")
//     console.log(allData)





//   }

//   onClickAnswer() {

//   }

//   async render() {
//    // await this.onGetQuestions()

//     // <AnswersComponent answers={this.state.currentAnswers}></AnswersComponent>
//     return  <p>First Question</p>
//   }
// }
// export default QuestionsComponent;
