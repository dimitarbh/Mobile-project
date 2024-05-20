import React, { useState, useEffect } from "react";
import { Card, Button, Container, Row, Col, Form } from "react-bootstrap";
import "./topRated.css";

const TopRated = () => {
    const smartphones = [
        {
            id: 1,
            imageUrl: "https://th.bing.com/th/id/OIP.eVHvVU7_ZM8_WbpBANyBFQHaHa?w=169&h=180&c=7&r=0&o=5&dpr=2.5&pid=1.7",
            title: "IPhone 15 Pro Max",
        },
        {
            id: 2,
            imageUrl: "https://th.bing.com/th/id/OIP.2DZXzpr_ru25KHI-aVDhPgHaHa?w=165&h=180&c=7&r=0&o=5&dpr=2.5&pid=1.7",
            title: "Samsung S23 Ultra",
        },
        {
            id: 3,
            imageUrl: "https://th.bing.com/th/id/OIP.5ZqTLR4wJ2_H2C4UXD_7cwHaHa?w=184&h=185&c=7&r=0&o=5&dpr=2.5&pid=1.7",
            title: "Xiaomi 15 Pro",
        },
    ];

    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");
    const [likes, setLikes] = useState({});
    const [dislikes, setDislikes] = useState({});
    const isLoggedIn = true; // Replace this with actual authentication logic
    const isAdmin = true; // Replace this with actual admin logic

    // Retrieve data from localStorage when the component mounts
    useEffect(() => {
        const storedLikes = JSON.parse(localStorage.getItem("likes")) || {};
        const storedDislikes = JSON.parse(localStorage.getItem("dislikes")) || {};
        setLikes(storedLikes);
        setDislikes(storedDislikes);
    }, []);

    // Save likes and dislikes to localStorage whenever they are updated
    useEffect(() => {
        localStorage.setItem("likes", JSON.stringify(likes));
        localStorage.setItem("dislikes", JSON.stringify(dislikes));
    }, [likes, dislikes]);

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        if (newComment.trim()) {
            setComments([...comments, { text: newComment, id: comments.length + 1 }]);
            setNewComment("");
        }
    };

    const handleDeleteComment = (commentId) => {
        setComments(comments.filter(comment => comment.id !== commentId));
    };

    const handleLikeClick = (id) => {
        setLikes((prevLikes) => {
            const newLikes = { ...prevLikes, [id]: (prevLikes[id] || 0) + 1 };
            localStorage.setItem("likes", JSON.stringify(newLikes));
            return newLikes;
        });
    };

    const handleDislikeClick = (id) => {
        setDislikes((prevDislikes) => {
            const newDislikes = { ...prevDislikes, [id]: (prevDislikes[id] || 0) + 1 };
            localStorage.setItem("dislikes", JSON.stringify(newDislikes));
            return newDislikes;
        });
    };

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
                                        <div>
                                            <Button
                                                variant={likes[phone.id] ? "primary" : "outline-primary"}
                                                className="like-button"
                                                onClick={() => handleLikeClick(phone.id)}
                                            >
                                                {likes[phone.id] ? "Liked" : "Like"}
                                            </Button>
                                            <span className="like-count">{likes[phone.id] || 0}</span>
                                        </div>
                                        <div>
                                            <Button
                                                variant={dislikes[phone.id] ? "danger" : "outline-danger"}
                                                className="dislike-button"
                                                onClick={() => handleDislikeClick(phone.id)}
                                            >
                                                {dislikes[phone.id] ? "Disliked" : "Dislike"}
                                            </Button>
                                            <span className="dislike-count">{dislikes[phone.id] || 0}</span>
                                        </div>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        </Row>
                    ))}
                </Col>
                <Col md={6} className="d-flex flex-column justify-content-end">
                    <Card className="comment-card mt-4">
                        <Card.Body>
                            <h5>Comments</h5>
                            <div className="mt-3">
                                {comments.map((comment) => (
                                    <Card key={comment.id} className="mb-2 comment-item">
                                        <Card.Body className="d-flex justify-content-between align-items-center">
                                            {comment.text}
                                            {isAdmin && (
                                                <Button
                                                    variant="danger"
                                                    size="sm"
                                                    onClick={() => handleDeleteComment(comment.id)}
                                                >
                                                    Delete
                                                </Button>
                                            )}
                                        </Card.Body>
                                    </Card>
                                ))}
                            </div>
                            {isLoggedIn ? (
                                <Form onSubmit={handleCommentSubmit}>
                                    <Form.Group>
                                        <Form.Control
                                            as="textarea"
                                            rows={3}
                                            value={newComment}
                                            onChange={(e) => setNewComment(e.target.value)}
                                            placeholder="Add a comment..."
                                        />
                                    </Form.Group>
                                    <Button variant="primary" type="submit" className="mt-2">
                                        Submit
                                    </Button>
                                </Form>
                            ) : (
                                <p>Please log in to comment.</p>
                            )}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default TopRated;
