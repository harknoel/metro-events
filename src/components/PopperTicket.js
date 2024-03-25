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
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";

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
								<Container maxWidth="sm">
									<Box>
										<Typography variant="h5" gutterBottom>
											Request to be an organizer.
										</Typography>
										<Grid item xs={2}>
											<Button size="small" color="primary">
												Request
											</Button>
										</Grid>
									</Box>
								</Container>
							</StyledPopperContent>
						</Fade>
					</ClickAwayListener>
				)}
			</Popper>
		</div>
	);
};

export default PopperTicket;
