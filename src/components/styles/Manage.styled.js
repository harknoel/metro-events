import styled from "styled-components";

export const CancelButton = styled.button`
  background-color: #f44336;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  margin-top: 20px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: background-color 0.3s;
  &:hover {
    background-color: #d32f2f;
  }
`;
