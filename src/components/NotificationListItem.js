import React from "react";
import { ListItem, ListItemText } from "@mui/material";

const NotificationListItem = ({ notification, onDelete }) => {
  return (
    <ListItem>
      <ListItemText
        primary={notification.title}
        secondary={notification.content}
      />
    </ListItem>
  );
};

export default NotificationListItem;
