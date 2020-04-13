import axios from "axios";

// actions Type/Tipo de acciones  //  esto va en una carpeta
const OBTENER_POKEMONES_EXITO = "OBTENER_POKEMONES_EXITO";


// normalmente constantes y reducers van en un mismo archivo
// constantes // esto va en otra carpeta
const dataInicial = {
  array: [],
  
};
// reducers ok
export default function pokeReducer(state = dataInicial, action) {
  switch (action.type) {
    case OBTENER_POKEMONES_EXITO:
      return { ...state, array: action.payload };
    default:
      return state;
  }
}

//actions --> actions creators o creador de acciones // esto va en otra carpeta
        //accion de llamar la API
export const obtenerPokemonesAccion = () => async (dispatch, getState) => {
  try {
    const res = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20"
    );
    dispatch({
      type: OBTENER_POKEMONES_EXITO,
      payload: res.data.results,
    });
  } catch (error) {
    console.log("error");
  }
};

