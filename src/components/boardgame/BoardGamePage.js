import React, { Component } from 'react';
import BoardGameDetails from './BoardGameDetails';
import BoardGameService from './BoardGameService';

class BoardGamePage extends Component {

    componentDidMount() {
        BoardGameService.getBoardGameByID(this.props.boardGameID).then((game) => {
            this.setState({boardGame: game });
        });
    }

    constructor(props) {
        super(props);
        this.state = {
            boardGame: undefined
        };
    }

    render() {
        if (this.state.boardGame) {
            return (
                <BoardGameDetails boardGame={this.state.boardGame} />
            );
        }

        return (
            <h2>No board game found for id: ${this.props.boardGameID}</h2>
        );
    }
}

export default BoardGamePage;