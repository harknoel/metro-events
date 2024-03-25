import { Divider, List, ListItem, ListItemText } from "@mui/material";
import React from "react";
import Popper from "@mui/material/Popper";
import Fade from "@mui/material/Fade";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { StyledNotificationPopup } from "./styles/NotificationPopup.styled";

const NotificationPopup = (props) => {
  const { notifications, bindToggle, bindPopper, popupState } = props;

  return (
    <div>
      <span className="material-symbols-outlined" {...bindToggle(popupState)}>
        notifications
      </span>
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
