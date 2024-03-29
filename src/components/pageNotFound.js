import React from "react";
import { StyledHero, Flex, Image, Text } from "./styles/Hero.styled";
import Button from "./styles/Button.styled";
import Container from "./styles/Container.styled";
import Lottie from "lottie-react";
import animationData from "../assets/404.json";
import GoBack from "./GoBack";

const PageNotFound = () => {
  return (
    <StyledHero>
      {/* Add a blank line or spacing here */}
      <div style={{ height: "50px" }}></div>
      <Container>
        <Flex>
          <Image>
            <Lottie animationData={animationData} />
          </Image>
        </Flex>
      </Container>
    </StyledHero>
  );
};

export default PageNotFound;
