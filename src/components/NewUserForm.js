import React, {useState, useContext} from 'react';
import { AlertContext } from '../context/alert/alertContext';
import { JsonServerContext } from "../context/jsonServer/jsonServerContext";
import { UserForm } from "./UserForm";

export const NewUserForm = () => {
  const [value, setValue] = useState('');
  const alert = useContext(AlertContext);
  const jsonServer = useContext(JsonServerContext);

  const submitHandler = (event) => {
    event.preventDefault();

    if (value.trim()) {

    } else {
      alert.show('Enter user data');
    }
  };

  return (
    <div className="table-responsive border secondary-subtle rounded-1 px-4 py-3">
      <UserForm newUser="true" />
    </div>
  );
};
