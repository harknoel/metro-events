import React, { useState } from "react";
import {
  Typography,
  Button,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";

const GuestRequest = ({ name, email, onAccept, onDecline }) => {
  return (
    <Card
      variant="outlined"
      sx={{ display: "flex", justifyContent: "space-between" }}
    >
      <CardContent>
        <Typography variant="h6" component="h2" sx={{ marginBottom: 1 }}>
          {name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={onAccept}>
          Accept
        </Button>
        <Button size="small" color="error" onClick={onDecline}>
          Decline
        </Button>
      </CardActions>
    </Card>
  );
};

export default GuestRequest;
