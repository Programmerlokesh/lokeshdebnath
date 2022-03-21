import React from "react";
import styled from "styled-components";

const MyDetails = () => {
  const Container = styled.section`
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
    font-size: 2.3rem;
    background-color: rgb(23, 30, 46);
  `;

  const AboutmeSkills = styled.div`
    display: flex;
    border: 2px solid green;
    height: 50%;
    background-color: rgba(133, 133, 133, 0.2);
  `;
  const ImageDiv = styled.div`
    height: 350px;
    border: 2px solid white;
    float: left;
    width: 50%;
    /* box-shadow: 0px 0px 20px 0px #aaa; */

    /* ::after {
      content: "";
      display: block;
      clear: both;
    } */
  `;
  const Lokesh = styled.img`
    height: 100%;
    width: 100%;
    display: inline-block;
    object-fit: cover;

    ::after {
      content: "";
      display: block;
      clear: both;
    }
  `;
  const AboutDetails = styled.div`
    float: right;
    width: 50%;

    ::after {
      content: "";
      display: block;
      clear: both;
    }

    @media (max-width: 520px) {
      font-size: 3rem;
    }
    @media (max-width: 400px) {
      font-size: 2.5rem;
    }
  `;
  const SelfTalk = styled.p`
    padding: 10rem 0;
  `;
  const AboutEmail = styled.div``;
  const AboutPhone = styled.div``;
  //   const AboutResume = styled.div``;
  const AboutIcon = styled.div``;
  const Link = styled.a`
    color: var(--color-primary);
  `;
  return (
    <>
      <Container>
        <AboutmeSkills>
          <ImageDiv>
            <Lokesh src="/me.jpg" alt="" srcset="" />
          </ImageDiv>
          <AboutDetails>
            <SelfTalk>
              I'm a self-taught front-end JavaScript developer from India.
            </SelfTalk>
            <AboutEmail>
              <p>Email:</p>
              <Link href="mailto:lokeshdebnath8@gmail.com"></Link>
            </AboutEmail>
            <AboutPhone>
              <p>
                Phone: <Link href="tel:+91 9733116447"></Link>
              </p>
            </AboutPhone>
            <AboutIcon></AboutIcon>
          </AboutDetails>
        </AboutmeSkills>
      </Container>
    </>
  );
};

export default MyDetails;
