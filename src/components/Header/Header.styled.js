import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  background-color: #333333;
  height: 60px;
  min-width: 100%;
  display: flex;
  align-items: center;
`;

export const StyledLink = styled(NavLink)`
  font-size: 32px;

  color: whitesmoke;
  margin-left: 60px;
  transition: color 250ms linear;

  :hover {
    color: orangered;
  }
`;
