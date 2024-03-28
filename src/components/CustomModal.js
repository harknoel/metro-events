import React, { useState, useEffect } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {
  ButtonContainer,
  StyledInput,
  ModalContainer,
  Image,
  ContentContainer,
  ParentContainer,
  EventContainer,
  ParentButtonContainer,
} from "./styles/Modal.styled";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import axiosInstance from "../config/axiosInstance";

const CustomModal = (props) => {
  const { event, open, setOpen, showJoin, showManage } = props;
  const [userReview, setUserReview] = useState("");
  const [reviews, setReviews] = useState(event.reviewList);

  const handleClose = () => {
    setOpen(false);
  };

  const handleReviewChange = (event) => {
    setUserReview(event.target.value);
  };

  const addUserReview = async () => {
    try {
      const response = await axiosInstance.post(
        `/users/event/${event.eventId}/review`,
        {
          username: localStorage.getItem("username"),
          comment: userReview,
        }
      );
      setReviews(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = () => {
    if (!userReview.trim()) {
      alert("Invalid comment.");
      return;
    }
    addUserReview();
  };

  const joinEvent = async () => {
    const username = localStorage.getItem("username");
    try {
      const response = await axiosInstance.post(
        `/users/join/${username}/${event.eventId}`
      );
      const responseDataString = JSON.stringify(response.data);
      if (responseDataString === "0") {
        alert("Failed to request");
      } else if (responseDataString === "1") {
        alert("Request to join the event.");
      } else {
        alert("You already requested. Waiting for approval...");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    upvoteEvent();
  };

  const upvoteEvent = async () => {
    try {
      const response = await axiosInstance.post(
        `users/${event.eventId}/upvote`,
        localStorage.getItem("username")
      );
      const result = parseInt(response.data);
      setLiked(result);
    } catch (error) {}
  };

  useEffect(() => {
    const isUserUpvoteEvent = async () => {
      try {
        const response = await axiosInstance.get(
          `/users/upvote/check/${event.eventId}/${localStorage.getItem(
            "username"
          )}`
        );
        const result = JSON.parse(response.data);
        setLiked(result);
      } catch (error) {}
    };
    isUserUpvoteEvent();
  }, [event.eventId]);

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
          <ParentContainer>
            <h4>Event Details</h4>
            <ContentContainer>
              <Image src="./images/join-event.svg" />
              <div>
                <EventContainer>
                  <Typography variant="h3" gutterBottom>
                    {event.title}
                  </Typography>
                  <Typography variant="body1">
                    <strong>Organizer:</strong>{" "}
                    <span style={{ color: "blue" }}>{event.owner}</span>
                  </Typography>
                  <Typography variant="body1">
                    <strong>Date Started:</strong> {event.dateStart}
                  </Typography>
                  <Typography variant="body1">
                    <strong>Date Will End:</strong> {event.dateEnd}
                  </Typography>
                  <Typography variant="body1">
                    <strong>Time Started:</strong> {event.timeStart}
                  </Typography>
                  <Typography variant="body1">
                    <strong>Time Will End:</strong> {event.timeEnd}
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <IconButton onClick={handleClick}>
                      {liked ? <Favorite color="error" /> : <FavoriteBorder />}
                    </IconButton>
                    <Typography variant="body1">
                      {/* Made changes because of error*/}
                      {/* Test Final najd*/}
                      {/* <strong>{event.upvoteList.length} </strong>Upvote */}
                    </Typography>
                  </Box>
                </EventContainer>
                <ParentButtonContainer>
                  {showJoin && (
                    <ButtonContainer>
                      <Button
                        variant="contained"
                        color="primary"
                        sx={{
                          width: "150px",
                          height: "50px",
                          backgroundColor: "#6462F1",
                          "&:hover": { backgroundColor: "#94A6F2" },
                        }}
                        onClick={joinEvent}
                      >
                        Join
                      </Button>
                    </ButtonContainer>
                  )}
                  {showManage && (
                    <ButtonContainer>
                      <Link to={`/manage/${event.eventId}`}>
                        <Button
                          variant="contained"
                          color="primary"
                          sx={{
                            width: "150px",
                            height: "50px",
                            backgroundColor: "#6462F1",
                            "&:hover": { backgroundColor: "#94A6F2" },
                          }}
                          onClick={handleClose}
                        >
                          Manage
                        </Button>
                      </Link>
                    </ButtonContainer>
                  )}
                </ParentButtonContainer>
              </div>
            </ContentContainer>
            <Card
              variant="outlined"
              sx={{
                mt: 3,
                maxWidth: 900,
                boxShadow: "0px 4px 12px rgba(100, 98, 241, 0.5)",
              }}
            >
              <CardContent>
                <Typography variant="h6" component="div" gutterBottom>
                  Description
                </Typography>
                <Typography variant="body1">{event.description}</Typography>
              </CardContent>
            </Card>
            <Typography variant="h5" sx={{ mt: 3 }}>
              Review
            </Typography>
            <StyledInput
              type="text"
              placeholder="Write your review here..."
              value={userReview}
              onChange={handleReviewChange}
            />
            <Button
              sx={{
                mt: 2,
                height: "40px",
                backgroundColor: "#6462F1",
                "&:hover": { backgroundColor: "#94A6F2" },
              }}
              variant="contained"
              color="primary"
              onClick={handleSubmit}
            >
              Submit Review
            </Button>
            <br />
            <strong>User Reviews:</strong>
            <ul>
              {reviews.map((review, index) => (
                <li key={index}>
                  <strong>{review.username}:</strong> {review.comment}
                </li>
              ))}
            </ul>
          </ParentContainer>
        </ModalContainer>
      </Box>
    </Modal>
  );
};

export default CustomModal;
