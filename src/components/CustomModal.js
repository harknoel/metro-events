import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { ButtonContainer } from "./styles/UserEvents.styled";
import React, { useState } from "react";

const CustomModal = (props) => {
  const { event, open, setOpen } = props; // Destructure 'open' from props

  const handleClose = () => {
    setOpen(false); // Set 'open' state to false to close the modal
  };

  return (
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
          <strong>Event Name:</strong> {event.title}
          <br />
          <strong>Date Started:</strong> {event.dateStarted}
          <br />
          <strong>Date Will End:</strong> {event.dateEnded}
          <br />
          <strong>Time Started:</strong> {event.timeStarted}
          <br />
          <strong>Time Will End:</strong> {event.timeEnded}
          <br />
          <strong>Description:</strong> {event.description}
        </Typography>
        <ButtonContainer>
          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
            onClick={handleClose} // Close modal when button is clicked
          >
            Join
          </Button>
        </ButtonContainer>
      </Box>
    </Modal>
  );
};

export default CustomModal;
