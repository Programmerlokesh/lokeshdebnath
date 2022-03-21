import React from "react";
import styled from "styled-components";
import "../styles/main.css";

const BackGroundAnimation = () => {
  return (
    <Container className="night">
      <div className="shooting_star"></div>
      <div className="shooting_star"></div>
      <div className="shooting_star"></div>
      <div className="shooting_star"></div>
      <div className="shooting_star"></div>
      <div className="shooting_star"></div>
      <div className="shooting_star"></div>
      <div className="shooting_star"></div>
      <div className="shooting_star"></div>
      <div className="shooting_star"></div>
      <div className="shooting_star"></div>
      <div className="shooting_star"></div>
      <div className="shooting_star"></div>
      <div className="shooting_star"></div>
      <div className="shooting_star"></div>
      <div className="shooting_star"></div>
    </Container>
  );
};

const Container = styled.div`
  z-index: -1;
`;

export default BackGroundAnimation;
