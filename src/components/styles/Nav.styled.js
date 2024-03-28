import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNavLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-decoration: none;
  color: #6462f1;
  padding: 10px;
  position: relative; /* Add relative positioning */
  transition: transform 0.3s ease; /* Add transition effect */

  &:hover {
    transform: translateY(-2px); /* Adjust the transformation as needed */
  }
`;

export const PopupContainer = styled.div`
  display: flex;
`;

export const NavPage = styled.div`
  display: flex;
`;

export const NotificationCounter = styled.span`
  position: absolute;
  top: -5px;
  right: 25px;
  background-color: red;
  color: white;
  border-radius: 50%;
  padding: 2px 6px;
  font-size: 12px;
`;
