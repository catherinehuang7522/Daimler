import React, { Component } from 'react';
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles(theme => ({
  container: {
    display: 'grid',
    direction: 'column'
  },
  minicontainer: {
    display: 'grid',
    direction: 'row'
  }
}));



class AnswersComponent extends Component {

  constructor(props) {
    super(props)

  }

  render() {

    return <Grid container spacing={2}>

      <Grid minicontainer spacing={1}>
        <Button>Answer 1 </Button>
        <Button>Answer 2 </Button>
      </Grid>

      <Grid minicontainer spacing={1}>
        <Button>Answer 3 </Button>
        <Button>Answer 4 </Button>
      </Grid>


    </Grid>


  }
}
export default AnswersComponent;
