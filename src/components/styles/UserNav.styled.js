import styled from "styled-components";
import { Link } from "react-router-dom";
export const StyledUserNav = styled.header`
  background-color: #f7f6fc;
`;

export const Header = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.img`
  width: 100px;
  height: 50px;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 10px;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: #6462f1;
  font-family: "Poppins", sans-serif;
  &:hover {
    text-decoration: underline;
    color: #433dcf;
  }
`;

export const CreateEventButton = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: background-color 0.3s;
  &:hover {
    background-color: #45a049;
  }
`;