import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import './topNews.css';
import { useTopNewsData } from './topNewsData';

const TopNews = () => {
    const { news, seeEntireDescription, expandedIndex } = useTopNewsData();

    return (
        <Container className="topNews-container">
            <h1 className="display-7 text-center title">Top news</h1>
            <Row xs={1} md={1} className="g-4">
                {news.map((item, index) => (
                    <Col key={index}>
                        <Card className="card">
                            <Card.Body className="card-body">
                                <Row>
                                    <Col xs={4}>
                                        <Card.Img src={item.imageUrl} alt="News Image" style={{ width: '120px', height: '80px' }} />
                                    </Col>
                                    <Col xs={8}>
                                        <Card.Title>{item.title}</Card.Title>
                                    </Col>
                                </Row>
                                <Card.Text>
                                    {expandedIndex === index
                                        ? item.description
                                        : item.description.split(' ').slice(0, 7).join(' ') + '...'}
                                </Card.Text>
                                <Button
                                    variant="primary"
                                    onClick={() => seeEntireDescription(index)}
                                    className="mx-auto d-grid gap-2"
                                >
                                    {expandedIndex === index ? 'See Less' : 'Expand'}
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default TopNews;
