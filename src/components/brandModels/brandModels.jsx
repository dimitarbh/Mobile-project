import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchModelsByBrand } from "../redux/slices/brandSlice";
import { useParams } from "react-router-dom";

const BrandModels = () => {
  const { brandId } = useParams();
  const dispatch = useDispatch();
  const models = useSelector((state) => state.brands.models);
  const isLoading = useSelector((state) => state.brands.isLoading);
  console.log("BrandId:", brandId);
  useEffect(() => {
    console.log("BrandId:", brandId);
    if (brandId) {
      dispatch(fetchModelsByBrand(brandId));
    }
  }, [dispatch, brandId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!models) {
    return <div>No models found</div>;
  }

  if (!brandId) {
    return <div>No brand selected</div>;
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
