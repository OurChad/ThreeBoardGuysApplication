import React, { PureComponent } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import Header from '../common/Header/Header';
import ProfileImg from '../common/ProfileImg/ProfileImg';
import Thumbnail from '../common/Thumbnail/Thumbnail';

class BoardGameDetails extends PureComponent {

    componentDidMount() {
        const $log = document.getElementById( "description" );
        $log.innerHTML = this.props.boardGame.description;
    }

    render() {

        const {boardGame} = this.props;
        const rowStyle = {
            "backgroundColor": "var(--primary-theme-color)",
            "paddingTop":"20px"
        };

        const ratingStyle = {
            "textAlign": "center"
        };

        return (
            <Grid>
                <Row>
                    <Col xs={12} md={2}>
                        <Grid>
                            <Row>
                                <Col md={2} className="align-center-horizontal">
                                    <ProfileImg image={boardGame.thumbnail}/>
                                </Col>
                            </Row>
                            <Row style={ratingStyle}>
                                <Col xs={12} md={2}>
                                    <h3>Rating</h3>
                                </Col>
                            </Row>
                            <Row style={ratingStyle}>
                                <Col xs={12} md={2}>
                                    <h4>{boardGame.rating}</h4>
                                </Col>
                            </Row>
                        </Grid>
                    </Col>
                    <Grid>
                        <Row>
                            <Col xs={12} md={10}><Header header={boardGame.name} /></Col>
                            <Col xs={12} md={10} >
                                <div className="well" id="description" />
                            </Col>
                        </Row>
                    </Grid>
                </Row>
                <Row style={rowStyle}>
                    <Col xs={6} md={3}>
                        <Thumbnail
                            icon="users"
                            title="Players"
                            description={`${boardGame.minPlayers} - ${boardGame.maxPlayers}`}
                        />
                    </Col>
                    <Col xs={6} md={3}>
                        <Thumbnail
                            icon="clock-o"
                            title="Time"
                            description={`${boardGame.minPlayTime} - ${boardGame.maxPlayTime} mins.`}
                        />
                    </Col>
                    <Col xs={6} md={3}>
                        <Thumbnail
                            icon="child"
                            title="Age"
                            description={`${boardGame.minAge}+`}
                        />
                    </Col>
                    <Col xs={6} md={3}>
                        <Thumbnail
                            icon="question"
                            title="Complexity"
                            description={boardGame.complexity}
                        />
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default BoardGameDetails;