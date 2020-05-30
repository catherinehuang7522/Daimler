import { styles } from "../stylesheet";
import React, { Component } from "react";
import TableRow from "@material-ui/core/TableRow"
import TableCell from "@material-ui/core/TableCell"
import { imageIndex } from "./ImageIndex";


class BoardRow extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let imageSrc = imageIndex.getImage(this.props.avatar, this.props.isCurrentPlayer)

        let style = this.props.isCurrentPlayer? styles.smallselectedAvatar : styles.smallUnselectedAvatar;
          
                    
        let avatar =  <img style={styles.characterButtonImage} src={imageSrc} />;
        return (
                        <TableRow>
                           
                            <TableCell style={styles.leaderBoardText}> <div><div style={style}>{avatar} </div>{this.props.username} </div></TableCell>
                            <TableCell style={styles.leaderBoardText} align="right">{this.props.score}</TableCell>
                        </TableRow>
        );
    }
}
export default BoardRow;
