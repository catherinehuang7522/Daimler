import { styles } from "../stylesheet";
import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table"
import TableRow from "@material-ui/core/TableRow"
import TableCell from "@material-ui/core/TableCell"
import TableBody from "@material-ui/core/TableBody"
import Firebase from "./firebase"



class Leaderboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstPlayer: "",
            secondPlayer: "",
            thirdPlayer: "",
            firstScore: "",
            secondScore: "",
            thirdScore: "",
            maxScores: {},
        };

        this.getData = this.getData.bind(this);
        this.getMarker = this.getMarker.bind(this);
        this.onGoHome = this.onGoHome.bind(this);

    }

    async getMarker() {
        let firebase = Firebase.sharedInstance;
        const snapshot = await firebase.db.collection("users").get()
        return snapshot.docs.map(doc => doc.data());
    }

    async componentWillMount() {
        const data = await this.getData();
        console.log(data);
        this.setState({
            firstPlayer: data[data.length - 1].player,
            firstScore: data[data.length - 1].maxScore,
            secondPlayer: data[data.length - 2].player,
            secondScore: data[data.length - 2].maxScore,
            thirdPlayer: data[data.length - 3].player,
            thirdScore: data[data.length - 3].maxScore,
        });
    }

    async getData() {
        const res = await this.getMarker()
        const maxScores = []
        let counter = 0;
        for (let item of res) {
            let max = 0;
            for (let i in item) {
                max = Math.max(max, item[i]);
            }
            maxScores.push({ player: counter, maxScore: max });
            counter++;
        }
        // sort the object with max scores and the players
        maxScores.sort(function (a, b) {
            var keyA = a.maxScore,
                keyB = b.maxScore;
            if (keyA < keyB) return -1;
            if (keyA > keyB) return 1;
            return 0;
        });
        return maxScores;
    }

    onGoHome() {
        this.props.callback("START");
    };

    render() {
        return (
            <div style={styles.root}>
                <Grid style={styles.title}> LEADERBOARD {}
                </Grid>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell style={styles.leaderBoardText}>{this.state.firstPlayer}</TableCell>
                            <TableCell style={styles.leaderBoardText} align="right">{this.state.firstScore}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell style={styles.leaderBoardText}>{this.state.secondPlayer}</TableCell>
                            <TableCell style={styles.leaderBoardText} align="right">{this.state.secondScore}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell style={styles.leaderBoardText}>{this.state.thirdPlayer}</TableCell>
                            <TableCell style={styles.leaderBoardText} align="right">{this.state.thirdScore}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                <Button style={styles.unselectedButton} onClick={this.onGoHome}>
                    Back to Home
                </Button>
            </div>
        );
    }
}
export default Leaderboard;
