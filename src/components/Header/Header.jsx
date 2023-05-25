import { Container, StyledLink } from "./Header.styled";

const Header = () => {
  return (
    <Container>
      <nav>
        <StyledLink to="/">Home</StyledLink>

        <StyledLink to="/tweets">Tweets</StyledLink>
      </nav>
    </Container>
  );
};

export default Header;
