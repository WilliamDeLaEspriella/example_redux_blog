import axios from "axios";
import { TRAER_TODOS, CARGANDO, ERROR } from "../types/publicacionesType";
export const traerPublicaciones = () => async dispatch => {
  dispatch({ type: CARGANDO });
  try {
    const result = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    dispatch({ type: TRAER_TODOS, payload: result.data });
  } catch (error) {
    dispatch({ type: ERROR, error: error.message });
  }
};

export const traerPorUsuario = key => async (dispatch, getState) => {
  const { usuarios } = getState().usuarioReducer;
  const usuarios_id = usuarios[key].id;
  dispatch({ type: CARGANDO });
  try {
    const result = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?userId=${usuarios_id}`
    );
    dispatch({ type: TRAER_TODOS, payload: result.data });
  } catch (error) {
    dispatch({ type: ERROR, error: error.message });
  }
};
