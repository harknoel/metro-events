// NotificationPopup.styled.js
import styled from "styled-components";

export const NotificationBox = styled.div`
  background-color: #ffffff;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  max-height: 200px;
  overflow-y: auto;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: 5px;
  }

  p {
    margin: 0;
    padding: 10px;
  }
`;
