import React from "react";
// import {Database} from "../database/database.jsx";

// import components
import Nav from "../components/navbar/index";
import Introduction from "../components/homeIntroduction/index";
import Feature from "../components/landingFeature/index";

const Home = () => {
  return (
    <>
      <Nav />
      <Introduction />
      <Feature />
    </>
  );
};

export default Home;
