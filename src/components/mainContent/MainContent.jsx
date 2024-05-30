import React from "react";
import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import Brands from "../brands/Brands.jsx";
import TopNews from "../topNews/TopNews.jsx";
import TopRated from "../topRatedSmartphones/TopRated.jsx";
import BattleOfTheWeek from "../battleOfTheWeek/BattleOfTheWeek.jsx";
import BrandModels from "../brandModels/brandModels.jsx";
import ModelDetails from "../modelDetails/ModelDetails.jsx";
import News from "../news/News.jsx";
import Reviews from "../reviews/Reviews.jsx";
import Deals from "../deals/Deals.jsx";
import "./mainContent.css";

const MainContent = () => {
  return (
    <Container className="main-content">
      <div className="left-column">
        <Routes>
          <Route exact path="/" element={<Brands />} />
          <Route path="/brands/allBrandModels/:brandId" element={<BrandModels />} />
          <Route path="/brands/allBrandModels/:brandId/:modelId" element={<ModelDetails />} />
          <Route path="/news" element={<News />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/deals" element={<Deals />} />
        </Routes>
        <TopRated />
      </div>
      <div className="right-column">
        <TopNews />
        <BattleOfTheWeek />
      </div>
    </Container>
  );
};

export default MainContent;
