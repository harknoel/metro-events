import React from "react";
import { Popper, Fade, Paper, ClickAwayListener } from "@mui/material";
import { Link } from "react-router-dom";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";

const ConfirmationPopup = (props) => {
  const { bindToggle, bindPopper, popupState } = props;

  return (
    <div>
      <ConfirmationNumberIcon
        style={{ color: "#6462F1" }}
        {...bindToggle(popupState)}
      />
      <Popper {...bindPopper(popupState)} transition>
        {({ TransitionProps }) => (
          <ClickAwayListener onClickAway={popupState.close}>
            <Fade {...TransitionProps} timeout={350}>
              <Paper
                sx={{
                  p: 2,
                  maxWidth: 200,
                  backgroundColor: "white",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                  border: "black",
                }}
              >
                <div>
                  <Link
                    to="/request-admin-role"
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                      display: "block",
                      padding: "10px",
                      margin: "5px 0",
                    }}
                  >
                    Request Admin Role
                  </Link>
                </div>
                <div>
                  <Link
                    to="/request-organizer-role"
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                      display: "block",
                      padding: "10px",
                      margin: "5px 0",
                    }}
                  >
                    Request Organizer Role
                  </Link>
                </div>
              </Paper>
            </Fade>
          </ClickAwayListener>
        )}
      </Popper>
    </div>
  );
};

export default ConfirmationPopup;
