import baseImg from "../../images/baseImg.png";
import logoImg from "../../images/logoImg.png";
import person from "../../images/person.png";
import PropTypes from "prop-types";
export const Card = ({ tweets, followers, avatar, user }) => {
  return (
    <div>
      <img src={logoImg} alt={user} />
      <img src={baseImg} alt={user} />
      <div></div>
      <img src={avatar ? avatar : person} alt={user} />
      <div>
        <p>{tweets} tweets</p>
        <p>{followers} Followers</p>
      </div>
      <button>Follow</button>
    </div>
  );
};

Card.propTypes = {
  tweets: PropTypes.number.isRequired,
  followers: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
};
