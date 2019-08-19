const INITAL_STATE = {
  usuarios: []
};

export default (state = INITAL_STATE, action) => {
  switch (action.type) {
    case "traer_usuarios":
      return { ...state, usuarios: action.payload };
    default:
      return state;
  }
};
