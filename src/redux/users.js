import axios from "axios";

// Action Types
const OBTENER_USER_API = "OBTENER_USER_API";
const BUSCAR_NAME_EN_API = "BUSCAR_NAME_EN_API";
const ELIMINAR_NOMBRE = "ELIMINAR_NOMBRE";

// New Types
const USERS_FETCHING = "USERS_FETCHING";
const USERS_FETCHED = "USERS_FETCHED";
const USERS_FETCH_FAILED = "USERS_FETCH_FAILED";

// Reducers

const initialState = {
  arrayUsers: [],
  nombre: [],
  isLoading: false,
};
export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case USERS_FETCHING:
      return {
        ...state,
        isLoading: true,
      };
    case USERS_FETCHED:
      return {
        ...state,
        isLoading: false,
        arrayUsers: action.payload,
      };
    case USERS_FETCH_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case OBTENER_USER_API:
      return { ...state, arrayUsers: action.payload };
    case BUSCAR_NAME_EN_API:
      return { ...state, nombre: [...action.payload] };

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
  dispatch({
    type: USERS_FETCHING,
  });
  try {
    const api = await axios.get("https://jsonplaceholder.typicode.com/users");
    dispatch({
      type: USERS_FETCHED,
      payload: api.data,
    });
  } catch (error) {
    dispatch({
      type: USERS_FETCH_FAILED,
      payload: error,
    });
    console.log("error");
  }
};

export const buscarNameEnApi = (text) => (dispatch, getState) => {
  const user = getState().users.arrayUsers.filter((u) => u.name.includes(text));

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
