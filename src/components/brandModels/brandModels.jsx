import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchModelsByBrand } from "../redux/slices/brandSlice";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./brandModels.css";

const BrandModels = () => {
  const dispatch = useDispatch();
  const { brandId } = useParams();
  const models = useSelector((state) => state.brands.models);
  const isLoading = useSelector((state) => state.brands.isLoading);
  const error = useSelector((state) => state.brands.error);
  const [selectedModelId, setSelectedModelId] = useState(null);

  useEffect(() => {
    if (brandId) {
      dispatch(fetchModelsByBrand(brandId));
    }
  }, [dispatch, brandId]);

  const handleModelClick = (modelId) => {
    setSelectedModelId(modelId);
  };

  return (
    <Container className="brands-container">
      <h1 className="display-7 text-center">Models</h1>
      {isLoading ? (
        <div>Loading ...</div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : (
        <section className="models-grid">
          {models.length > 0 ? (
            models.map((model) => (
              <div className="model-item" key={model._id}>
                <Link
                  to={`/brands/allBrandModels/${brandId}/${model._id}`}
                  className="model-link"
                  onClick={() => handleModelClick(model._id)}
                >
                  <div className="logo">
                    <img src={model.images[0]} alt={model.model} />
                  </div>
                  <p>{model.model}</p>
                </Link>
              </div>
            ))
          ) : (
            <div>No models found for brand {brandId}</div>
          )}
        </section>
      )}
      {selectedModelId && <div>Selected Model ID: {selectedModelId}</div>}
    </Container>
  );
};

export default BrandModels;
