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
import Notiflix from "notiflix";
import { UpdateUsersAll } from "../../Api/Api";
export const Card = ({ id, tweets, followers, avatar, user, isFollowing }) => {
  const [isAllFollowing, setIsAllFollowing] = useState(isFollowing);
  const [totalFollowers, setTotalFollowers] = useState(followers);

  const handleClick = () => {
    if (!isAllFollowing) {
      UpdateUsersAll(id, {
        isFollowing: !isFollowing,
        followers: followers + 1,
      });
      setIsAllFollowing(true);
      Notiflix.Notify.success("Add success");
      setTotalFollowers(totalFollowers + 1);
    } else {
      setIsAllFollowing(id, {
        isFollowing: !isFollowing,
        followers: followers - 1,
      });
      setIsAllFollowing(false);
      setTotalFollowers(totalFollowers - 1);
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
        <Text> {totalFollowers.toLocaleString()} Followers</Text>
      </WrapText>
      <Button
        style={
          isFollowing
            ? { backgroundColor: "#5CD3A8" }
            : { backgroundColor: "#EBD8FF" }
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
  id: PropTypes.string.isRequired,
  tweets: PropTypes.number.isRequired,
  followers: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  isFollowing: PropTypes.bool.isRequired,
};
