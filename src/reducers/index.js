import { combineReducers } from "redux";
import usuarioReducer from "./usuarioReducer";
import publicaionesReducer from "./publicaionesReducer";
export default combineReducers({
  usuarioReducer,
  publicaionesReducer
});
