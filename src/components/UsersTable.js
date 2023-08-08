import { UserForm } from "./UserForm";
import React, { useContext } from "react";
import { JsonServerContext } from "../context/jsonServer/jsonServerContext";

export const UsersTable = ({ users }) => {
  const { resetUserTableToDefault } = useContext(JsonServerContext);

  return (
    <>
      <div className="row my-4">
        <div className="col-12">
          <h2>Users:</h2>
        </div>
        <div className="col-12">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => resetUserTableToDefault(users)}
          >
            Reset the user table to default
          </button>
        </div>
      </div>

      {users.length
        ? (
            <div className="table-responsive border secondary-subtle rounded-1 p-3">
              <table className="table table-striped align-middle mb-0">
                <thead>
                <tr>
                  <th>
                    <div className="row">
                      <div className="col-1">id</div>
                      <div className="col-2">User name</div>
                      <div className="col-3">User email</div>
                      <div className="col-2">Birthdate</div>
                      <div className="col-2">Phone number</div>
                      <div className="col-2">Action</div>
                    </div>
                  </th>
                </tr>
                </thead>
                <tbody>
                {users.map(user => (
                  <tr key={user.id}>
                    <td>
                      <UserForm user={user} />
                    </td>
                  </tr>
                ))}
                </tbody>
              </table>
            </div>
          )
        : <div>The list of users is empty</div>
      }
    </>
  )
};
