import React from "react";
import Popper from "@mui/material/Popper";
import Fade from "@mui/material/Fade";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { StyledPopperContent } from "./styles/PopperTicket.styled";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import axiosInstance from "../config/axiosInstance";

const PopperTicket = (props) => {
	const { bindToggle, bindPopper, popupState } = props;

	const requestRole = async () => {
		try {
			const response = await axiosInstance.post(
				"users/request",
				localStorage.getItem("username")
			);
			if (parseInt(response.data) === 1) {
				alert("Request sent successfully.");
			} else {
				alert("Already sent request.");
			}
		} catch (error) {
			console.log("error");
		}
	};

	const handleSubmit = () => {
		requestRole();
	};

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
								<Container>
									<Box>
										<Typography variant="h6" gutterBottom>
											Request to be an organizer.
										</Typography>
										<Grid item xs={2}>
											<Button
												onClick={handleSubmit}
												size="small"
												color="primary"
											>
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
