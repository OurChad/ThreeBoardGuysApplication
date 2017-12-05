import React, { PureComponent } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Thumbnail from '../common/Thumbnail/Thumbnail';
import Button from '../common/Button/Button';

class BoardGameList extends PureComponent {

    createBoardGameThumbnails = (boardGames) => {
        return boardGames.map( (boardGame) => {
            return  <Col key={boardGame.id} xs={6} md={3}>
                        <Thumbnail                             
                            thumbnail={boardGame.thumbnail}
                            title={boardGame.name}                                                                            
                        >
                            <Link to={`/boardgame/${boardGame.id}`}><Button flavour="primary" label="View Game" /></Link>
                        </Thumbnail>
                    </Col>
        });
    };

    constructor(props) {
        super(props);
        this.boardGames = this.createBoardGameThumbnails(this.props.boardGames);
    }

    render() {
        const rowStyle = {
            "backgroundColor": "#222",
            "paddingTop":"20px"
        };

        return (
            <Grid>
                <Row style={rowStyle}>
                    {this.boardGames}
                </Row>
            </Grid>
        );
    }
}

export default BoardGameList;