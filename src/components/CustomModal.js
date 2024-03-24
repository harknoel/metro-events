import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {
  ButtonContainer,
  StyledInput,
  ModalContainer,
} from "./styles/Modal.styled";
import { Link } from "react-router-dom";

const CustomModal = (props) => {
  const { event, open, setOpen, showJoin, showManage } = props;
  const [userReview, setUserReview] = useState("");

  const handleClose = () => {
    setOpen(false);
  };

  const handleReviewChange = (event) => {
    setUserReview(event.target.value);
  };

  const handleSubmit = () => {
    console.log("User Review:", userReview);
    setUserReview("");
    setOpen(false);
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
          width: 800,
          height: 500,
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
          p: 2,
          overflowY: "auto",
        }}
      >
        <ModalContainer>
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
            <br />
            {showJoin && (
              <ButtonContainer>
                <Link to="/join">
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ mt: 2 }}
                    onClick={handleClose}
                  >
                    Join
                  </Button>
                </Link>
              </ButtonContainer>
            )}
            {showManage && (
              <ButtonContainer>
                <Link to="/manage">
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ mt: 2 }}
                    onClick={handleClose}
                  >
                    Manage
                  </Button>
                </Link>
              </ButtonContainer>
            )}
            <StyledInput
              type="text"
              placeholder="Write your review here..."
              value={userReview}
              onChange={handleReviewChange}
            />
            <Button
              sx={{ my: 2 }}
              variant="contained"
              color="primary"
              onClick={handleSubmit}
            >
              Submit Review
            </Button>
            <br />
            <strong>User Reviews:</strong>
            <ul>
              {event.reviews.map((review, index) => (
                <li key={index}>
                  <strong>{review.user}:</strong> {review.comment}
                </li>
              ))}
            </ul>
          </Typography>
        </ModalContainer>
      </Box>
    </Modal>
  );
};

export default CustomModal;
