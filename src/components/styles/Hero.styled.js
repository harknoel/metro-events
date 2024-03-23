import styled from "styled-components";

export const StyledHero = styled.div`
  margin: 50px;
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Image = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1500px;
  height: 400px;
`;

export const Text = styled.div`
  display: flex;
  justify: center;
  align-item: center;
  flex-direction: column;
  gap: 30px;

  h1 {
    font-family: "Titan One", sans-serif;
    color: #6462f1;
    font-size: 50px;
  }

  p {
    font-family: "Poppins", sans-serif;
    font-size: 1.15em;
    color: #2c2c2c;
  }
`;
