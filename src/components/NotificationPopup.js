import { Divider, List, ListItem, ListItemText } from "@mui/material";
import React from "react";
import Popper from "@mui/material/Popper";
import Fade from "@mui/material/Fade";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { StyledNotificationPopup } from "./styles/NotificationPopup.styled";
import NotificationsIcon from "@mui/icons-material/Notifications";
const NotificationPopup = (props) => {
  const { notifications, bindToggle, bindPopper, popupState } = props;

  return (
    <div>
      <NotificationsIcon
        style={{ color: "#6462F1" }}
        {...bindToggle(popupState)}
      />
      <Popper {...bindPopper(popupState)} transition>
        {({ TransitionProps }) => (
          <ClickAwayListener onClickAway={popupState.close}>
            <Fade {...TransitionProps} timeout={350}>
              <StyledNotificationPopup>
                <List sx={{ p: 2, maxWidth: 200 }}>
                  {notifications.map((notification) => (
                    <ListItem key={notification.id}>
                      <ListItemText primary={notification.message} />
                    </ListItem>
                  ))}
                </List>
              </StyledNotificationPopup>
            </Fade>
          </ClickAwayListener>
        )}
      </Popper>
    </div>
  );
};

export default NotificationPopup;
