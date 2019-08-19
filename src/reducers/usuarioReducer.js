import { TRAER_TODOS } from "../types/usuariosTypes";
const INITAL_STATE = {
  usuarios: []
};

export default (state = INITAL_STATE, action) => {
  switch (action.type) {
    case TRAER_TODOS:
      return { ...state, usuarios: action.payload };
    default:
      return state;
  }
};
