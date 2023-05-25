import daySun from "../../src/images/daySun.png";
import { StyledLink, Text, Wrap } from "./Detals.styled";

const Home = () => {
  return (
    <Wrap>
      <Text>Welcome! Nice to meet you! </Text>
      <img src={daySun} alt="Sun" width={800} />
      <Text>
        Soo...Let`s go to ~ <StyledLink to="/tweets">Tweets</StyledLink>
      </Text>
    </Wrap>
  );
};

export default Home;
