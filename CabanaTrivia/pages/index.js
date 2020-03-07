import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import DangerButton from './components/DangerButton'
import Grid from '@material-ui/core/Grid'
import StartComponent from './components/Start'


const styles = ({
 
})

export default class IndexPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      startGame: true,
      singlePlayer: true,
      duration: 1
    };

  }

 
  render() {
    



    return <StartComponent></StartComponent>
      
    
  }
}
