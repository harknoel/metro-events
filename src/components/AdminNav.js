import { StyledUserNav, Header, Logo, Nav } from "./styles/UserNav.styled";
import Container from "./styles/Container.styled";
import { Link } from "react-router-dom";
import Popper from "@mui/material/Popper";
import PopupState, { bindToggle, bindPopper } from "material-ui-popup-state";
import Fade from "@mui/material/Fade";
import Paper from "@mui/material/Paper";
import { RedButton } from "./styles/Manage.styled";
import ClickAwayListener from "@mui/material/ClickAwayListener";

const AdminNav = () => {
	return (
		<StyledUserNav>
			<Container>
				<Header>
					<Link to="/userevents">
						<Logo src="./images/logo.svg" alt=""></Logo>
					</Link>
					<Nav>
						<PopupState variant="popper" popupId="demo-popup-popper">
							{(popupState) => (
								<div>
									<span
										className="material-symbols-outlined"
										{...bindToggle(popupState)}
									>
										account_circle
									</span>
									<Popper {...bindPopper(popupState)} transition>
										{({ TransitionProps }) => (
											<ClickAwayListener onClickAway={popupState.close}>
												<Fade {...TransitionProps} timeout={350}>
													<Paper
														sx={{
															p: 2,
															maxWidth: 200,
														}}
													>
														<RedButton
															onClick={() => {
																localStorage.clear();
																window.location.href = "/signin";
																popupState.close();
															}}
														>
															Logout
														</RedButton>
													</Paper>
												</Fade>
											</ClickAwayListener>
										)}
									</Popper>
								</div>
							)}
						</PopupState>
					</Nav>
				</Header>
			</Container>
		</StyledUserNav>
	);
};

export default AdminNav;
