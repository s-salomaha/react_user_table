export const jsonServerReducer = (state, action) => {
  switch (action.type) {
    case "SHOW_LOADER":
      return { ...state, loading: true };
    case "FETCH_USERS":
      return {
        ...state,
        users: action.payload, loading: false
      };
    default:
      return state;
  }
};
