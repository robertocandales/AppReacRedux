import React, { useState } from "react";
import { buscarNameEnApi } from "../redux/users";
import { useDispatch } from "react-redux";
import MostrarUsuario from './MostrarUsuario'

function BuscarNombre() {
  const [input, setinput] = useState("");
  const dispatch = useDispatch();
  //const { nombre } = useSelector((store) => store.users);
  //console.log(arrayUsers);
  //console.log(nombre);

  const submithandle = (e) => {
      
    e.preventDefault();
    
    dispatch(buscarNameEnApi(input));
    e.target.reset();
  };
  const inputHandle = (e) => {
      
    setinput(e.target.value);
    // console.log(input);
  };

  return (
    <div>
      <form onSubmit={submithandle}>
        <input
          type="text"
          name="input"
          onChange={inputHandle}
          className="form-control"
          placeholder="Nombre de Usuario segun lista superior"
        />
        <button type="submit" className="btn btn-primary mt-3">
          Obtener Datos del Usuario
        </button>
      </form>

    <MostrarUsuario />

    </div>
  );
}

export default BuscarNombre;
