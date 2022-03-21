import React from "react";
import { BsFillEmojiLaughingFill } from "react-icons/bs";
import styled from "styled-components";
import BackGroundAnimation from "./BackgroundAnimation";

const StyledSection = styled.section`
  overflow: hidden;
  position: relative;
  background-color: var(--bg-dark);
  height: calc(100vh - var(--nav-height));
  isolation: isolate;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const InitialInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 520px) {
    font-size: 3rem;
  }
  @media (max-width: 400px) {
    font-size: 2.5rem;
  }
`;
const P = styled.p`
  color: var(--color-primary);
  font-size: 4rem;
  font-family: "Merriweather", serif;
  text-align: center;

  @media (max-width: 520px) {
    font-size: 3rem;
  }
  @media (max-width: 400px) {
    font-size: 2.5rem;
  }
`;
const Span = styled.span`
  color: var(--color-secondary);
  font-size: 4rem;
  font-family: "Ubuntu", sans-serif;
  text-align: center;

  @media (max-width: 520px) {
    font-size: 3rem;
  }
  @media (max-width: 400px) {
    font-size: 2.5rem;
  }
`;
const Greeting = styled.p`
  color: var(--color-primary);
  font-size: 4rem;
  font-family: "Lato", sans-serif;
  text-align: center;

  @media (max-width: 520px) {
    font-size: 3rem;
  }
  @media (max-width: 400px) {
    font-size: 2.5rem;
  }
`;
const Icon = styled.p`
  color: var(--color-secondary);
  padding-top: 2rem;
  font-size: 5rem;
`;

const ShootingIndex = () => {
  return (
    <>
      <StyledSection>
        <BackGroundAnimation />
        <InitialInfo>
          <P>Hello I am,</P>
          <Span>Lokesh Debnath</Span>
          <Greeting>Hope you are having a great day!!</Greeting>
          <Icon>
            <BsFillEmojiLaughingFill />
          </Icon>
        </InitialInfo>
      </StyledSection>
    </>
  );
};

export default ShootingIndex;
