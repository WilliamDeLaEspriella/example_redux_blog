import axios from "axios";
import { TRAER_TODOS } from "../types/usuariosTypes";
export const traerTodos = () => async dispatch => {
  try {
    const result = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    dispatch({ type: TRAER_TODOS, payload: result.data });
  } catch (error) {
    console.log({"error:": error.message});
  }
};
