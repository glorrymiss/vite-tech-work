import baseImg from "../../images/baseImg.png";
import logoImg from "../../images/logoImg.png";
import person from "../../images/person.png";
import PropTypes from "prop-types";
import {
  Button,
  ImgLogo,
  ImgPerson,
  Line,
  Text,
  Wrap,
  WrapText,
} from "./Card.styled";
export const Card = ({ tweets, followers, avatar, user }) => {
  return (
    <Wrap>
      <ImgLogo src={logoImg} alt={user} width={76} />
      <img src={baseImg} alt={user} width={308} />
      <Line />
      <ImgPerson src={avatar ? avatar : person} alt={user} width={62} />
      <WrapText>
        <Text>{tweets} tweets</Text>
        <Text>{followers} Followers</Text>
      </WrapText>
      <Button type="button">Follow</Button>
    </Wrap>
  );
};

Card.propTypes = {
  tweets: PropTypes.number.isRequired,
  followers: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
};
