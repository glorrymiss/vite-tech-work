import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Wrap = styled.div`
  display: flex;
  gap: 40px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Text = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 38px;
  line-height: 1.36;
  text-transform: uppercase;

  color: #ebd8ff;
`;

export const StyledLink = styled(NavLink)`
  font-size: 38px;

  color: whitesmoke;
  transition: color 250ms linear;

  :hover {
    color: orangered;
  }
`;
