import styled from "styled-components";

const Button = styled.button`
  padding: 10px 20px;
  background-color: ${({ bg }) => bg || "#6462F1"};
  color: ${({ color }) => color || "#fff"};
  border: none;
  cursor: pointer;
  border-radius: 10px;
  font-weight: ${({ fw }) => fw || "0"};
  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;

export default Button;
