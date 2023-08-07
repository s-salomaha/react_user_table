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
      loading: state.loading,
      users: state.users
    }}>
      {children}
    </JsonServerContext.Provider>
  );
};
