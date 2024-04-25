import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import Brands from '../brands/Brands';
import TopNews from '../topNews/TopNews';
import TopRated from '../topRatedSmartphones/TopRated';
import BattleOfTheWeek from '../battleOfTheWeek/BattleOfTheWeek';
import BrandsDetails from '../brandDetails/BrandDetails.jsx'; // Import the BrandsDetails component

const MainContent = () => {
    return (
        <Container>
            <Row>
                <Col sm={8}>
                    <Routes>
                        <Route exact path="/" element={<Brands />} />
                        <Route path="/brands/:brandId" element={<BrandsDetails />} />
                    </Routes>
                </Col>
                <Col sm={4}>
                    <TopNews />
                </Col>
            </Row>
            <Row>
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
