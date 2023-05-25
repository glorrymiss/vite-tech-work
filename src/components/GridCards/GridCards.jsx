import { useEffect, useState } from "react";
import { Card } from "../Card/Card";
import { FetchApiUsers } from "../../Api/Api";
import { List } from "./GridCards.styled";

export const GridCards = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    FetchApiUsers()
      .then((data) => setUsers(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <List>
      {users.length &&
        users.map(({ id, tweets, followers, avatar, user }) => {
          return (
            <Card
              key={id}
              avatar={avatar}
              tweets={tweets}
              followers={followers}
              user={user}
            />
          );
        })}
    </List>
  );
};
