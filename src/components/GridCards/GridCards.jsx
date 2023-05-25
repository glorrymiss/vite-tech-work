import { useEffect, useState } from "react";
// import { Card } from "../Card/Card";
import { FetchApiUsers } from "../../Api/Api";

export const GridCards = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    FetchApiUsers()
      .then((data) => setUsers(data))
      .catch((error) => console.log(error));
  }, []);

  console.log(users);
};
