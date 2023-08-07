import React, { useContext, useEffect } from "react";
import { JsonServerContext } from "../context/jsonServer/jsonServerContext";
import { Loader } from "../components/Loader";
import { UsersTable } from "../components/UsersTable";

export const Home = () => {
  const { loading, users, fetchUsers } = useContext(JsonServerContext);

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <h1 className="mb-5">Users:</h1>
      {loading
        ? <Loader />
        : users.length
          ? <UsersTable users={users} />
          : <div>Еhe list of users is empty</div>
      }
    </>
  );
};
