import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Brands from '../brands/Brands';
import TopNews from '../topNews/TopNews';
import TopRated from '../topRatedSmartphones/TopRated';
import BattleOfTheWeek from '../battleOfTheWeek/BattleOfTheWeek';


const MainContent = () => {
    return (
        <Container>
            <Row>
                <Col sm={8}>
                    <Brands />
                </Col>
                <Col sm={4}>
                    <TopNews />
                </Col>
            </Row>
            <Row >
                <Col sm={8}>
                    <TopRated />
                </Col>
                <Col sm={4}>
                    <BattleOfTheWeek />
                </Col>
            </Row>
        </Container>
    );
}

export default MainContent;