import daySun from "../../src/images/daySun.png";
import { StyledLink, Text } from "./Detals.styled";

const Home = () => {
  return (
    <div>
      <Text>Welcome! Nice to meet you! Have a nice day!</Text>
      <img src={daySun} alt="Sun" width={800} />
      <Text>
        Soo...Let`s go to ~ <StyledLink to="/tweets">Tweets</StyledLink>
      </Text>
    </div>
  );
};

export default Home;
