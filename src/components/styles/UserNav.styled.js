import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledUserNav = styled.header`
  background-color: #f7f6fc;
`;

export const MarginCenter = styled.div`
  width: 1250px;
  // max-width: 100%;
  // padding: 10px 20px;
  // margin: 0 auto;
`;

export const Header = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.img`
  width: 120px;
  height: 60px;
  margin-top: 10px;
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
  transition: box-shadow 0.3s ease; /* Add transition for box-shadow change */
  padding: 3px; /* Add padding for better hover area */

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); /* Add box-shadow effect on hover */
  }
`;

export const CreateEventButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #6462f1;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  decoration: none;
  font-weight: bold;
  transition: background-color 0.3s;
  &:hover {
    background-color: #7c7af5;
  }
`;

// Styled SearchBar component
export const SearchBar = styled.input`
  width: 300px;
  margin: 0 10px;
  padding: 8px 10px; // Add padding for better appearance
  border-radius: 20px;
  border: 1px solid #ccc;
  font-family: "Poppins", sans-serif; // Optional: Apply font family
  font-size: 16px; // Optional: Apply font size
  margin-right: 500px;
`;
