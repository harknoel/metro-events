import styled from "styled-components";

const NavLink = styled(Link)`
  text-decoration: none;
  color: #6462f1;
  font-family: "Poppins", sans-serif;
  &:hover {
    text-decoration: underline;
    color: #433dcf;
  }
`;

export default NavLink;
