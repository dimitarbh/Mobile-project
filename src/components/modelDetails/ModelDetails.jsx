import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchModelById } from "../redux/slices/modelSlice";
import { Container, Card, Row, Col } from "react-bootstrap";
import './modelDetails.css'

const ModelDetails = () => {
  const dispatch = useDispatch();
  const { modelId } = useParams();
  const { selectedModel, isLoading, error } = useSelector((state) => state.models);

  useEffect(() => {
    if (modelId) {
      dispatch(fetchModelById(modelId));
    }
  }, [dispatch, modelId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!selectedModel) {
    return <div>No model found</div>;
  }

  return (
    <Container className="phone">
      <Card className="mt-4">
        <Row >
          <Col md={4} className="d-flex justify-content-center align-items-center">
            <Card.Img src={selectedModel.images[0]} alt={selectedModel.model} className="img-thumbnail custom-img" />
          </Col>
          <Col md={8} className="d-flex align-items-center">
            <Card.Body className="text-right">
              <Card.Title className="title">{selectedModel.model}</Card.Title>
              <Card.Text>
                <p>Price: {selectedModel.price}</p>
                <p>Release Date: {new Date(selectedModel.releaseDate).toLocaleDateString()}</p>
                <p>Display Size: {selectedModel.displaySize}</p>
                <p>RAM: {selectedModel.RAM}</p>
                <p>Storage: {selectedModel.storage}</p>
                <p>Camera Resolution: {selectedModel.cameraResolution}</p>
                <p>Battery Capacity: {selectedModel.batteryCapacity}</p>
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default ModelDetails;