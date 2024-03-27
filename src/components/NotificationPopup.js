// NotificationPopup.js
import React, { useEffect, useState } from "react";
import Popper from "@mui/material/Popper";
import Fade from "@mui/material/Fade";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { StyledNavLink } from "./styles/Nav.styled";
import {
	NotificationBox,
	NotificationItem,
} from "./styles/NotificationPopup.styled";

const NotificationPopup = ({ bindToggle, bindPopper, popupState }) => {
	const [notifications, setNotifications] = useState([]);
	return (
		<div>
			<StyledNavLink {...bindToggle(popupState)}>
				<NotificationsIcon style={{ color: "#6462F1" }} />
				Notifications
			</StyledNavLink>

			<Popper {...bindPopper(popupState)} transition>
				{({ TransitionProps }) => (
					<ClickAwayListener onClickAway={popupState.close}>
						<Fade {...TransitionProps} timeout={350}>
							<NotificationBox>
								<div className="notification-content">
									<div className="notification-text">test</div>
									<div className="notification-time">time</div>
								</div>
								<div className="notification-content">
									<div className="notification-text">test</div>
									<div className="notification-time">time</div>
								</div>
							</NotificationBox>
						</Fade>
					</ClickAwayListener>
				)}
			</Popper>
		</div>
	);
};

export default NotificationPopup;
