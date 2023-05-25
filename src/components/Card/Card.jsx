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
import { useState } from "react";
export const Card = ({ tweets, followers, avatar, user }) => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [totalFollowers, setTotalFollowers] = useState(followers);

  const handleClick = () => {
    if (!isFollowing) {
      setIsFollowing(true);
      setTotalFollowers(totalFollowers + 1);
      console.log(totalFollowers);
      //   setTotalFollowers();
    } else {
      setIsFollowing(false);
      setTotalFollowers(totalFollowers - 1);
      console.log(totalFollowers);
    }
  };
  return (
    <Wrap>
      <ImgLogo src={logoImg} alt={user} width={76} />
      <img src={baseImg} alt={user} width={308} />
      <Line />
      <ImgPerson src={avatar ? avatar : person} alt={user} width={62} />
      <WrapText>
        <Text>{tweets} tweets</Text>
        <Text> {totalFollowers} Followers</Text>
      </WrapText>
      <Button
        style={
          isFollowing
            ? { backgroundColor: "red" }
            : { backgroundColor: "green" }
        }
        type="button"
        onClick={handleClick}
      >
        {isFollowing ? "Following" : "Follow"}
      </Button>
    </Wrap>
  );
};

Card.propTypes = {
  tweets: PropTypes.number.isRequired,
  followers: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
};
