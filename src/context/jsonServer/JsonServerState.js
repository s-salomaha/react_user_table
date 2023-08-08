import React, { useContext, useReducer } from "react";
import axios from "axios";
import { JsonServerContext } from "./jsonServerContext";
import { jsonServerReducer } from "./jsonServerReducer";
import { AlertContext } from "../alert/alertContext";

export const JsonServerState = ({children}) => {
  const alert = useContext(AlertContext);
  const IS_DEV = process.env.NODE_ENV === "development";
  const url = IS_DEV ? "//localhost:5000" : "https://react-user-table-chi.vercel.app";

  const fetchUsers = async () => {
    try {
      showLoader();
      const res = await axios.get(`${url}/users/`);

      if (!res.data) res.data = {};

      const payload = res.data;

      dispatch({type: "FETCH_USERS", payload});
    } catch (error) {
      console.error(error);
    }
  };

  const removeUser = async (id, name) => {
    try {
      await axios.delete(`${url}/users/${id}`);

      dispatch({
        type: 'REMOVE_USER',
        payload: id
      });

      if (name) alert.show(`User "${name}" was deleted`, 'success');
    } catch (error) {
      console.error(error);
    }
  }

  const resetUserTableToDefault = async (users) => {
    await Promise.all(users.map(user => removeUser(user.id)));

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

    await Promise.all(newUsers.map(user => addUser(user, true)));
    alert.show(`The table was reset to default`, 'success');
  }

  const addUser = async (userData, withoutAlert = false) => {
    try {
      const res = await axios.post(`${url}/users/`, userData);
      const payload = {
        ...userData,
        id: res.data.id
      };

      dispatch({type: 'ADD_USER', payload});
      if (!withoutAlert) alert.show(`User "${userData.name}" was added`, 'success');
    } catch (e) {
      console.error(e);
    }
  }

  const updateUser = async (userData) => {
    try {
      await axios.put(`${url}/users/${userData.id}`, userData);
      const payload = {
        ...userData
      };

      dispatch({type: 'UPDATE_USER', payload});
      alert.show(`User "${userData.name}" was updated`, 'success');
    } catch (e) {
      console.error(e);
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
      updateUser,
      loading: state.loading,
      users: state.users
    }}>
      {children}
    </JsonServerContext.Provider>
  );
};
