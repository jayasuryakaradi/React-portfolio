import React from "react";
import "./pagenotfound.css";
import { Link } from "react-router-dom";
const PageNotFound = () => {
  return (
    <div className="page-not-found-container">
      <h1 className="title"> 404</h1>
      <h3><span className="text-red">Opps!</span> Page not found.</h3>
      <h4>The page you’re looking for doesn’t exist.</h4>
      <div>
        <Link to="/">
          <button className="project-btn">Go Home</button>
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
