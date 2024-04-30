import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchModelsByBrand } from "../redux/slices/brandSlice";
import { useParams } from "react-router-dom";

const BrandModels = () => {
  const { brandId } = useParams();
  const dispatch = useDispatch();
  const models = useSelector((state) => state.brands.models);
  const isLoading = useSelector((state) => state.brands.isLoading);

  useEffect(() => {
    if (brandId) {
      dispatch(fetchModelsByBrand(brandId));
    }
  }, [dispatch, brandId]);

  if (!brandId) {
    return <div>No brand selected</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!models || models.length === 0) {
    return <div>No models found for brand {brandId}</div>;
  }

  return (
    <div>
      <h2>Models for Brand {brandId}</h2>
      {models.map((model) => (
        <div key={model.id}>
          <img src={model.image} alt={model.name} />
          <p>{model.name}</p>
        </div>
      ))}
    </div>
  );
};

export default BrandModels;
