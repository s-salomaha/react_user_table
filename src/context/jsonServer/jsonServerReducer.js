export const jsonServerReducer = (state, action) => {
  switch (action.type) {
    case "SHOW_LOADER":
      return { ...state, loading: true };
    case "FETCH_USERS":
      return {
        ...state,
        users: action.payload, loading: false
      };
    case 'ADD_USER':
      return {...state, users: [...state.users, action.payload]};
    case 'REMOVE_USER':
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.payload)
      };
    default:
      return state;
  }
};
