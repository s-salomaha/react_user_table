import React, { useContext, useEffect } from "react";
import { JsonServerContext } from "../context/jsonServer/jsonServerContext";
import { Loader } from "../components/Loader";
import { UsersTable } from "../components/UsersTable";
import { NewUserForm } from "../components/NewUserForm";

export const Home = () => {
  const { loading, users, fetchUsers } = useContext(JsonServerContext);

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      {loading
        ? <Loader />
        : users.length
          ? (
              <>
                <h2 className="mb-4">Add a new user:</h2>
                <NewUserForm />
                <h2 className="my-4">Users:</h2>
                <UsersTable users={users} />
              </>
            )
          : <div>Еhe list of users is empty</div>
      }
    </>
  );
};
