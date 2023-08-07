import React, {useState, useContext} from 'react';
import { AlertContext } from '../context/alert/alertContext';
import { JsonServerContext } from "../context/jsonServer/jsonServerContext";
import { UserRow } from "./UserRow";

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
    <UserRow newUser="true" />
  );
};
