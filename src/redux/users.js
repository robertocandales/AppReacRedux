import axios from "axios";

// Action Types
const OBTENER_USER_API = "OBTENER_USER_API";
const BUSCAR_NAME_EN_API = "BUSCAR_NAME_EN_API";
const ELIMINAR_NOMBRE = "ELIMINAR_NOMBRE";

// Reducers

const initialState = {
  arrayUsers: [],
  nombre: [],
};
export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case OBTENER_USER_API:
      return { ...state, arrayUsers: action.payload };
    case BUSCAR_NAME_EN_API:
      return { ...state, nombre: [...state.nombre, ...action.payload] };

    case ELIMINAR_NOMBRE:
      return {
        ...state,
        nombre: state.nombre.filter((u) => u.id !== action.payload.id),
      };

    default:
      return state;
  }
}

//actions
export const usersAction = () => async (dispatch, getState) => {
  try {
    const api = await axios.get("https://jsonplaceholder.typicode.com/users");
    dispatch({
      type: OBTENER_USER_API,
      payload: api.data,
    });
  } catch (error) {
    console.log("error");
  }
};

export const buscarNameEnApi = (nombre) => (dispatch, getState) => {
  const user = getState().users.arrayUsers.filter((u) => u.name === nombre);

  try {
    dispatch({
      type: BUSCAR_NAME_EN_API,
      payload: user,
    });
  } catch (error) {}
};

export const eliminarNombre = (usuario) => (dispatch, getState) => {
  console.log(usuario);
  try {
    dispatch({
      type: ELIMINAR_NOMBRE,
      payload: usuario,
    });
  } catch (error) {}
};
