import React, { useState } from "react";
import UserNav from "./UserNav";
import {
  StyledUserEvents,
  CardContainer,
  StyledCard,
  Title,
  Description,
  ButtonContainer,
} from "./styles/UserEvents.styled";
import Container from "./styles/Container.styled";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

const UserEvents = () => {
  const [open, setOpen] = useState(false); // State for managing modal open/close

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const maxWidth = 300;

  return (
    <StyledUserEvents>
      <UserNav />
      <Container>
        <Typography mt={2} gutterBottom variant="h4" component="div">
          Events
        </Typography>
        <CardContainer>
          <StyledCard>
            <CardContent>
              <Title gutterBottom variant="h5" component="div">
                Event Name
              </Title>
              <Typography variant="body2" color="text.secondary">
                <strong>Organizer:</strong> John Doe
                <br />
                <strong>Date Started:</strong> March 23, 2024
                <br />
                <strong>Time Started:</strong> 10:00 AM
                <br />
              </Typography>
              <Description variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere tellus ac efficitur. Aliquam erat volutpat. Nulla
              </Description>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={handleOpen}>
                Learn More
              </Button>
            </CardActions>
          </StyledCard>
        </CardContainer>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 400,
              bgcolor: "background.paper",
              border: "2px solid #000",
              boxShadow: 24,
              p: 4,
            }}
          >
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Event Details
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
              <strong>Event Name:</strong> Event Name
              <br />
              <strong>Date Started:</strong> March 23, 2024
              <br />
              <strong>Date Will End:</strong> March 25, 2024
              <br />
              <strong>Time Started:</strong> 10:00 AM
              <br />
              <strong>Time Will End:</strong> 5:00 PM
              <br />
              <strong>Description:</strong> Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Integer posuere tellus ac efficitur.
              Aliquam erat volutpat. Nulla
            </Typography>
            <ButtonContainer>
              <Button
                variant="contained"
                color="primary"
                onClick={handleClose}
                sx={{ mt: 2 }}
              >
                Join Event
              </Button>
            </ButtonContainer>
          </Box>
        </Modal>
      </Container>
    </StyledUserEvents>
  );
};

export default UserEvents;
