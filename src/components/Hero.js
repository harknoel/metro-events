import React from "react";
import { StyledHero, Flex, Image, Text } from "./styles/Hero.styled";
import Button from "./styles/Button.styled";
import Container from "./styles/Container.styled";
import Lottie from "lottie-react";
import animationData from "../assets/community.json";

const Hero = () => {
  return (
    <StyledHero>
      <Container>
        <Flex>
          <Text>
            <h1>ORGANIZE. CONNECT. ENGAGE.</h1>
            <p>
              Plan events effortlessly - birthdays, meetups, or corporate
              gatherings. Join us to revolutionize how you organize, connect,
              and engage.
            </p>
            <div>
              <Button
                style={{ backgroundColor: "#484554" }}
                onClick={() => {
                  window.location.href = "/signin";
                }}
              >
                Create an Event
              </Button>
            </div>
          </Text>
          <Image>
            <Lottie animationData={animationData} />
          </Image>
        </Flex>
      </Container>
    </StyledHero>
  );
};

export default Hero;
