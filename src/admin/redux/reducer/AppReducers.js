const ThemeReducer = (state = {}, action) => {
  switch (action.type) {
    case "SHOW_MENU":
      return {
        ...state,
        isOpenMenu: !state.isOpenMenu,
      };

    default:
      return state;
  }
};

export default ThemeReducer;
