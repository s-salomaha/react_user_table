import React from 'react';
import { UserForm } from "./UserForm";

export const NewUserForm = () => {
  return (
    <>
      <h2 className="mb-4">Add a new user:</h2>
      <div className="table-responsive border secondary-subtle rounded-1 px-4 py-3">
        <UserForm newUser="true" />
      </div>
    </>
  );
};
