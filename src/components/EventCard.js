import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const EventCard = ({
  eventName,
  dateStarted,
  dateWillEnd,
  timeStarted,
  timeWillEnd,
  description,
}) => {
  return (
    <div>
      <h1>Event 1</h1>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="body1" color="textSecondary" gutterBottom>
            <strong>Date Started:</strong> {dateStarted}
          </Typography>
          <Typography variant="body1" color="textSecondary" gutterBottom>
            <strong>Date Will End:</strong> {dateWillEnd}
          </Typography>
          <Typography variant="body1" color="textSecondary" gutterBottom>
            <strong>Time Started:</strong> {timeStarted}
          </Typography>
          <Typography variant="body1" color="textSecondary" gutterBottom>
            <strong>Time Will End:</strong> {timeWillEnd}
          </Typography>
          <Typography variant="body2" component="p">
            <strong>Description:</strong> {description}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default EventCard;
