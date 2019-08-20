import axios from "axios";
import { TRAER_TODOS, CARGANDO, ERROR } from "../types/publicacionesType";
export const traerPublicaciones = () => async dispatch => {
    dispatch({ type: CARGANDO});
  try {
    const result = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    dispatch({ type: TRAER_TODOS, payload: result.data });
  } catch (error) {
    dispatch({ type: ERROR, error: error.message });
  }
};