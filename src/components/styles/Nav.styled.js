import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNavLink = styled(NavLink)`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	text-decoration: none;
	color: #6462f1;
	padding: 5px;
	transition: box-shadow 0.3s ease;

	&:hover {
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
	}
`;

export const PopupContainer = styled.div`
	display: flex;
`;

export const NavPage = styled.div`
	display: flex;
`;
