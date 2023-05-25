import { FooterBack, List, StyledLink } from "./Footer.styled";

export const Footer = () => {
  return (
    <FooterBack>
      <List>
        <li>
          <StyledLink to="#">Instagram</StyledLink>
        </li>
        <li>
          <StyledLink to="#">Telegram</StyledLink>
        </li>
        <li>
          <StyledLink to="#">Linkedin</StyledLink>
        </li>
      </List>
    </FooterBack>
  );
};
