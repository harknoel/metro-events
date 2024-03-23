import UserNav from "./UserNav";
import { StyledUserEvents, CardContainer } from "./styles/UserEvents.styled";
import Container from "./styles/Container.styled";
import Card from "./Card";
import CustomModal from "./CustomModal";

const Event = (props) => {
  const { event, open, setOpen, showButton } = props;

  return (
    <StyledUserEvents>
      <UserNav />
      <Container>
        <h1>My Joined Events</h1>
        <CardContainer>
          <Card event={event} setOpen={setOpen} />
        </CardContainer>
      </Container>
      <CustomModal
        event={event}
        open={open}
        setOpen={setOpen}
        showButton={showButton}
      />
    </StyledUserEvents>
  );
};

export default Event;
