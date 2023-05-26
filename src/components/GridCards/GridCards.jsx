import { useEffect, useState } from "react";

import { Card } from "../Card/Card";
import { FetchApiUsers, FetchUsersAll } from "../../Api/Api";
import { List } from "./GridCards.styled";
import { BtnLoadMore } from "../BtnLoadMore/BtnLoadMore";
import Loader from "../Loader/Loader";
import Notiflix from "notiflix";

export const GridCards = () => {
  const [users, setUsers] = useState([]);
  const [perUsers, setPerUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [hasBtn, setHasBtn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [limit] = useState(3);
  const pages = Math.ceil(users.length / limit);

  useEffect(() => {
    FetchUsersAll().then((data) => setUsers(data));
  }, []);

  useEffect(() => {
    setLoading(true);

    FetchApiUsers({ page, limit })
      .then((data) => {
        if (data.length === 0) {
          Notiflix.Notify.failure(
            "Sorry...There are nothing...Please repeate again"
          );
        }
        setHasBtn(true);

        if (page !== pages + 1) {
          setPerUsers((prev) => [...prev, ...data]);
        }

        if (page === pages) {
          setHasBtn(false);
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [limit, page, pages]);

  const handleLoad = () => {
    if (page === pages) {
      setHasBtn(false);
    }

    setPage((prevState) => prevState + 1);
  };

  return (
    <>
      {loading && <Loader />}
      <List>
        {perUsers.length &&
          perUsers.map(
            ({ id, tweets, followers, avatar, user, isFollowing }) => {
              return (
                <Card
                  key={id}
                  id={id}
                  avatar={avatar}
                  tweets={tweets}
                  followers={followers}
                  user={user}
                  isFollowing={isFollowing}
                />
              );
            }
          )}
      </List>
      {hasBtn && <BtnLoadMore onChange={handleLoad} />}
    </>
  );
};
