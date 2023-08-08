import React, { useContext, useEffect } from "react";
import { JsonServerContext } from "../context/jsonServer/jsonServerContext";
import { Loader } from "../components/Loader";
import { UsersTable } from "../components/UsersTable";
import { NewUserForm } from "../components/NewUserForm";

export const Home = () => {
  const { loading, users, fetchUsers } = useContext(JsonServerContext);

  useEffect(() => {
    fetchUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {loading
        ? <Loader />
        : (
            <>
              <NewUserForm />
              <UsersTable users={users} />
            </>
          )
      }
    </>
  );
};
