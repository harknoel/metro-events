import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";

const style = {
  p: 0,
  width: "100%",
  maxWidth: "100%",
  borderRadius: 2,
  border: "1px solid",
  borderColor: "divider",
  backgroundColor: "background.paper",
};



const handleAccept = (id) => {
  // Handle accepting the request with the given id
};

const handleDecline = (id) => {
  // Handle declining the request with the given id
};

const RequestList = (props) => {
  const { requests } = props;

  return (
    <List sx={style} aria-label="guest requests">
      {requests.map((request) => (
        <React.Fragment key={request.id}>
          <ListItem>
            <ListItemText primary={request.user} />
            <Button
              size="small"
              color="primary"
              onClick={() => handleAccept(request.id)}
            >
              Accept
            </Button>
            <Button
              size="small"
              color="error"
              onClick={() => handleDecline(request.id)}
            >
              Decline
            </Button>
          </ListItem>
          <Divider component="li" />
        </React.Fragment>
      ))}
    </List>
  );
};

export default RequestList;
