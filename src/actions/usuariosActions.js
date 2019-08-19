import axios from "axios";
import { TRAER_TODOS, CARGANDO, ERROR } from "../types/usuariosTypes";
export const traerTodos = () => async dispatch => {
    dispatch({ type: CARGANDO});
  try {
    const result = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    dispatch({ type: TRAER_TODOS, payload: result.data });
  } catch (error) {
    dispatch({ type: ERROR, error: error.message });
  }
};
