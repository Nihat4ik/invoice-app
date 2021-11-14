const initialState = {
  darkMode: window.matchMedia("(prefers-color-scheme: dark)").matches,
};

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_DARK_MODE":
      return {
        ...state,
        darkMode: !state.darkMode,
      };
    default:
      return state;
  }
};

export default uiReducer;
