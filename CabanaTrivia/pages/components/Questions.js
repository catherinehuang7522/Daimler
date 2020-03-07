import React, { Component } from 'react';
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid';

class QuestionsComponent extends Component {

  constructor(props) {
    super(props);
    this.state = { questionsArr: [] };

    this.ongetQuestions = this.ongetQuestions.bind(this);
    this.onClickAnswer = this.onClickAnswer.bind(this);
  }


  async ongetQuestions(catergory){
    const finalCateg = category == null? category: "entertainment-music";


    //fetch questions
    //https://cocktail-trivia-api.herokuapp.com/api/category/entertainment-music
    const response = await fetch("https://cocktail-trivia-api.herokuapp.com/api/category/"+finalCateg);
    const allData = await response.json();
    this.setState({questionsArr: allData});
    this.setState({currentQ: allData[0].text});
    this.setState({currentAnswers: allData[0].answers});



    console.log("Got the data:");
    console.log(allData);


    
    
    
  }

  onClickAnswer(){

  }

  render() {
    
    return
    <div>
      <p>First Question</p>
        <AnswersComponent answers={this.state.currentAnswers}></AnswersComponent>
    </div>
  
  }
}
export default QuestionsComponent;
