import { useEffect, useState } from "react";
import { Card } from "../Card/Card";
import { FetchApiUsers } from "../../Api/Api";
import { List } from "./GridCards.styled";
import { BtnLoadMore } from "../BtnLoadMore/BtnLoadMore";
import Loader from "../Loader/Loader";

export const GridCards = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [hasBtn, setHasBtn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [limit] = useState(3);
  const pages = users.length / limit;
  //   const lastUsersIndex = page * limit;
  //   const firstUsersIndex = lastUsersIndex - limit;
  //   const currentUser = users.slice(firstUsersIndex, lastUsersIndex);

  useEffect(() => {
    setLoading(true);
    FetchApiUsers({ page, limit })
      .then((data) => {
        setHasBtn(true);
        setUsers(data);
        if (page === pages) {
          setHasBtn(false);
        }
        // setUsers((prevUsers) => [...prevUsers], ...data),
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [limit, page, pages]);

  const handleLoad = () => {
    if (page === pages) {
      setHasBtn(false);
    }
    console.log("click");
    setPage((prevState) => prevState + 1);
  };

  return (
    <>
      {loading && <Loader />}
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
      {hasBtn && <BtnLoadMore onChange={handleLoad} />}
    </>
  );
};
