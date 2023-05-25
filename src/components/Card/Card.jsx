import baseImg from "../../images/baseImg.png";
import logoImg from "../../images/logoImg.png";
import person from "../../images/person.png";
import PropTypes from "prop-types";
import { ImgLogo, ImgPerson, Line, Wrap } from "./Card.styled";
export const Card = ({ tweets, followers, avatar, user }) => {
  return (
    <Wrap>
      <ImgLogo src={logoImg} alt={user} width={76} />
      <img src={baseImg} alt={user} width={308} />
      <Line />
      <ImgPerson src={avatar ? avatar : person} alt={user} width={62} />
      <div>
        <p>{tweets} tweets</p>
        <p>{followers} Followers</p>
      </div>
      <button>Follow</button>
    </Wrap>
  );
};

Card.propTypes = {
  tweets: PropTypes.number.isRequired,
  followers: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
};
