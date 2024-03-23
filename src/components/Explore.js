import { StyledExplore } from "./styles/Explore.styled";
import UserNav from "./UserNav";
import Container from "./styles/Container.styled";

const Explore = () => {
  return (
    <StyledExplore>
      <UserNav />
      <Container>
        <h1>Explore</h1>
      </Container>
    </StyledExplore>
  );
};

export default Explore;
