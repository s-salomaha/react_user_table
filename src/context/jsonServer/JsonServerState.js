import React, { useReducer } from "react";
import axios from "axios";
import { JsonServerContext } from "./jsonServerContext";
import { jsonServerReducer } from "./jsonServerReducer";

export const JsonServerState = ({children}) => {
  const fetchUsers = async () => {
    showLoader();
    const res = await axios.get('//localhost:5000/users/');

    if (!res.data) res.data = {};

    const payload = Object.keys(res.data).map(key => {
      return {
        ...res.data[key],
        id: key
      }
    });

    dispatch({type: "FETCH_USERS", payload});
  };

  const removeUser = async (id, name) => {
    await axios.delete(`//localhost:5000/users/${id}`);

    dispatch({
      type: 'REMOVE_USER',
      payload: id
    });

    alert.show(`User "${name}" was deleted`, 'success');
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
      loading: state.loading,
      users: state.users
    }}>
      {children}
    </JsonServerContext.Provider>
  );
};
