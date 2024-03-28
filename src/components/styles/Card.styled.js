import styled from "styled-components";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";

export const StyledCard = styled(Card)`
  width: 313px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2);
  }
`;

export const Title = styled(Typography)`
  font-weight: bold;
`;

export const Description = styled(Typography)`
  margin-top: 10px;
`;

//Style
