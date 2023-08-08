import React, { useContext, useReducer } from "react";
import axios from "axios";
import { JsonServerContext } from "./jsonServerContext";
import { jsonServerReducer } from "./jsonServerReducer";
import { AlertContext } from "../alert/alertContext";

export const JsonServerState = ({children}) => {
  const alert = useContext(AlertContext);

  const fetchUsers = async () => {
    showLoader();
    const res = await axios.get('//localhost:5000/users/');

    if (!res.data) res.data = {};

    const payload = res.data;

    dispatch({type: "FETCH_USERS", payload});
  };

  const removeUser = async (id, name) => {
    await axios.delete(`//localhost:5000/users/${id}`);

    dispatch({
      type: 'REMOVE_USER',
      payload: id
    });

    if (name) alert.show(`User "${name}" was deleted`, 'success');
  }

  const resetUserTableToDefault = (users) => {
    users.map(user => removeUser(user.id));

    const newUsers = [
      {
        "name": "Otto",
        "email": "otto@gmail.com",
        "birthdate": "2003-07-01",
        "phone": "+1 999 000 00 01"
      },
      {
        "name": "Jacob",
        "email": "thornton@gmail.com",
        "birthdate": "2001-05-02",
        "phone": "+1 999 000 00 02"
      },
      {
        "name": "Larry the Bird",
        "email": "larry_bird@gmail.com",
        "birthdate": "2004-11-03",
        "phone": "+1 999 000 00 03"
      }
    ];

    newUsers.map(user => addUser(user, true));
    alert.show(`The table was reset to default`, 'success');
  }

  const addUser = async (userData, withoutAlert = false) => {
    try {
      const res = await axios.post(`//localhost:5000/users/`, userData);
      const payload = {
        ...userData,
        id: res.data.id
      };

      dispatch({type: 'ADD_USER', payload});
      if (!withoutAlert) alert.show(`User "${userData.name}" was added`, 'success');
    } catch (e) {
      throw new Error(e.message);
    }
  }

  const initialState = {
    users: [],
    loading: false,
    fetchUsers
  };

  const [state, dispatch] = useReducer(jsonServerReducer, initialState);

  const showLoader = () => dispatch({type: "SHOW_LOADER"});

  return (
    <JsonServerContext.Provider value={{
      showLoader,
      fetchUsers,
      removeUser,
      resetUserTableToDefault,
      addUser,
      loading: state.loading,
      users: state.users
    }}>
      {children}
    </JsonServerContext.Provider>
  );
};
