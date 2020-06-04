import { styles } from "../stylesheet";
import React, { Component } from "react";
import TableRow from "@material-ui/core/TableRow"
import TableCell from "@material-ui/core/TableCell"
import { imageIndex } from "./ImageIndex";
import CharacterButton from './CharacterButton'


class BoardRow extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let imageSrc = imageIndex.getImage(this.props.avatar, this.props.isCurrentPlayer)

        let style = this.props.isCurrentPlayer? styles.smallselectedAvatar : styles.smallUnselectedAvatar;
             /* <TableCell style={styles.leaderBoardText}> <div><div style={style}>{avatar} </div>{this.props.username} </div></TableCell> */
           
                    
        let avatar =  <img style={styles.characterButtonImage} src={imageSrc} />;
        return (
                        <TableRow>
                            <CharacterButton name={this.props.username} selectedImage={imageSrc} unSelectedImage={imageSrc} selected={this.props.isCurrentPlayer}/>
                           
                         
                            <TableCell style={styles.leaderBoardText} align="right"> <h2>{this.props.score}</h2></TableCell>
                        </TableRow>
        );
    }
}
export default BoardRow;
