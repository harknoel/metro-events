import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { RedButton } from "./styles/Manage.styled";
import axiosInstance from "../config/axiosInstance";
import { useNavigate } from "react-router-dom";

export const CancelEvent = (props) => {
  const { eventId, eventName } = props;

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const navigate = useNavigate();

  const onSubmitCancelEvent = async (message) => {
    try {
      const response = await axiosInstance.post(
        `users/event/${eventId}/${eventName} IS CANCELLED/${message}/cancel`
      );
      if (response) {
        navigate("/organizer");
        alert(`Successfully deleted ${eventName}.`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <React.Fragment>
      <Button
        onClick={handleClickOpen}
        color="error"
        variant="contained"
        sx={{ mt: 2 }}
      >
        Cancel Event
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const description = formJson.description;
            onSubmitCancelEvent(description);
            handleClose();
          },
        }}
      >
        <DialogTitle>Cancel</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Describe why the event is cancelled, please enter your reason here.
            We will send updates to the participants.
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="description"
            label="Description"
            type="description"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button type="submit">Accept</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};
