import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { ButtonContainer } from "./styles/Modal.styled";
import { Link } from "react-router-dom";

const CustomModal = (props) => {
  const { event, open, setOpen, showJoin, showManage } = props;

  const handleClose = () => {
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
      </Box>
    </Modal>
  );
};

export default CustomModal;
