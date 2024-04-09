import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import "./topRated.css";

const TopRated = () => {
    const smartphones = [
        {
            id: 1,
            imageUrl:
                "https://th.bing.com/th/id/OIP.eVHvVU7_ZM8_WbpBANyBFQHaHa?w=169&h=180&c=7&r=0&o=5&dpr=2.5&pid=1.7",
            title: "IPhone 15 Pro Max",
        },
        {
            id: 2,
            imageUrl:
                "https://th.bing.com/th/id/OIP.2DZXzpr_ru25KHI-aVDhPgHaHa?w=165&h=180&c=7&r=0&o=5&dpr=2.5&pid=1.7",
            title: "Samsung S23 Ultra",
        },
        {
            id: 3,
            imageUrl:
                "https://th.bing.com/th/id/OIP.5ZqTLR4wJ2_H2C4UXD_7cwHaHa?w=184&h=185&c=7&r=0&o=5&dpr=2.5&pid=1.7",
            title: "Xiaomi 15 Pro",
        },
    ];

    return (
        <Container className="topRated-container">
            <h1 className="text-center">Top rated smartphones</h1>
            <Row>
                <Col md={6}>
                    {smartphones.map((phone, index) => (
                        <Row key={phone.id} className="phone-row">
                            <Col md={12} className="phone-card">
                                <Card>
                                    <Card.Body className="d-flex align-items-center">
                                        <div className="phone-number">{index + 1}.</div>
                                        <img
                                            src={phone.imageUrl}
                                            alt={phone.title}
                                            className="phone-image"
                                        />
                                        <div className="phone-details">
                                            <div className="phone-title">{phone.title}</div>
                                        </div>
                                    </Card.Body>
                                    <Card.Footer className="d-flex justify-content-between">
                                        <Button variant="primary" className="like-button">
                                            Like
                                        </Button>
                                        <Button variant="danger" className="dislike-button">
                                            Dislike
                                        </Button>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        </Row>
                    ))}
                </Col>
                <Col md={6}>
                    <Card>
                        <Card.Body>
                            <h5>Comments</h5>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default TopRated;