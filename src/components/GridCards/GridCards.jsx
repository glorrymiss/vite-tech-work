import { useEffect, useState } from "react";
import { Card } from "../Card/Card";
import { FetchApiUsers } from "../../Api/Api";
import { List } from "./GridCards.styled";
import { BtnLoadMore } from "../BtnLoadMore/BtnLoadMore";

export const GridCards = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [limit] = useState(3);
  const [hasBtn, setHasBtn] = useState(false);
  //   const pages = users.length / limit;

  useEffect(() => {
    if (users === []) {
      return;
    }
    FetchApiUsers({ page, limit })
      .then((data) => {
        return (
          setUsers((prevState) => [...prevState, ...data]), setHasBtn(true)
        );
      })
      .catch((error) => console.log(error));
  }, [limit, page]);

  const hendleLoad = () => {
    setPage((prevState) => prevState + 1);
  };

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
      {hasBtn && <BtnLoadMore onClick={hendleLoad} />}
    </List>
  );
};
