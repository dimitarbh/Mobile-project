import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import Brands from '../brands/Brands.jsx';
import TopNews from '../topNews/TopNews.jsx';
import TopRated from '../topRatedSmartphones/TopRated.jsx';
import BattleOfTheWeek from '../battleOfTheWeek/BattleOfTheWeek.jsx';
import BrandModels from '../brandModels/brandModels.jsx';
import './mainContent.css';

const MainContent = () => {
    return (
        <Container className="main-content">
            <Row className="content-row mb-4">
                <Col sm={8} className="content-col">
                    <Routes>
                        <Route exact path="/" element={<Brands />} />
                        <Route path="/brands/allBrandModels/:brandId" element={<BrandModels />} />
                    </Routes>
                </Col>
                <Col sm={4} className="content-col">
                    <TopNews />
                </Col>
            </Row>
            <Row className="content-row">
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
