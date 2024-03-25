import React from "react";
import Popper from "@mui/material/Popper";
import Fade from "@mui/material/Fade";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import {
	StyledPopperContent,
	RequestAdminButton,
	RequestOrganizerButton,
} from "./styles/PopperTicket.styled";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";

const PopperTicket = (props) => {
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
							<StyledPopperContent>
								<RequestAdminButton>hello world</RequestAdminButton>
								<RequestOrganizerButton>hello world</RequestOrganizerButton>
							</StyledPopperContent>
						</Fade>
					</ClickAwayListener>
				)}
			</Popper>
		</div>
	);
};

export default PopperTicket;
