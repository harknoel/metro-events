import { StyledCard, Title, Description } from "./styles/Card.styled";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
const Card = (props) => {
  const { event, setOpen } = props; // Destructure setOpen from props

  const handleOpen = () => {
    setOpen(true); // Open modal when button is clicked
  };

  return (
    <div>
      <StyledCard>
        <CardContent>
          <Title gutterBottom variant="h5" component="div">
            {event.title}
          </Title>
          <Typography variant="body2" color="text.secondary">
            <strong>Organizer:</strong> {event.organizer}
            <br />
            <strong>Date Started:</strong> {event.dateStarted}
            <br />
            <strong>Time Started:</strong> {event.timeStarted}
            <br />
          </Typography>
          <Description variant="body2" color="text.secondary">
            {event.description}
          </Description>
        </CardContent>
        <CardActions>
          <Button onClick={handleOpen} size="small">
            Learn More
          </Button>{" "}
          {/* Call handleOpen on button click */}
        </CardActions>
      </StyledCard>
    </div>
  );
};

export default Card;
