import { TRAER_TODOS , CARGANDO, ERROR} from "../types/publicacionesType";
const INITAL_STATE = {
  publicaciones: [],
  cargando: false,
  error: undefined
};

export default (state = INITAL_STATE, action) => {
  switch (action.type) {
    case TRAER_TODOS:
      return { ...state, publicaciones: action.payload, cargando: false, error: undefined };
      case CARGANDO:
      return { ...state, cargando: true };
      case ERROR:
      return { ...state, error: action.error, cargando: false };
    default:
      return state;
  }
};
