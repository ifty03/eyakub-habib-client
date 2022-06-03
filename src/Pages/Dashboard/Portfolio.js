import React from "react";
import PortfolioItem from "./PortfolioItem";

const Portfolio = () => {
  return (
    <div id="portfolio" className="px-4">
      <h4 className="text-2xl font-semibold text-left my-4">Portfolio</h4>
      <div className="grid grid-cols-3 gap-5">
        <PortfolioItem />
        <PortfolioItem />
        <PortfolioItem />
        <PortfolioItem />
        <PortfolioItem />
        <PortfolioItem />
      </div>
    </div>
  );
};

export default Portfolio;
