import React, { useState } from "react";
import { buscarNameEnApi } from "../redux/users";
import { useDispatch } from "react-redux";
import MostrarUsuario from "./MostrarUsuario";

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
    <div className="container">
      <form onSubmit={submithandle}>
        <div className="row">
          <div className="col 1 md-6">
            <input
              type="text"
              name="input"
              onChange={inputHandle}
              className="form-control"
              placeholder="Nombre de Usuario segun lista superior"
            />
          </div>
          <div className="col 1 md-6">
            <button type="submit" className="btn btn-primary">
              Obtener Datos del Usuario
            </button>
          </div>
        </div>
      </form>

      <MostrarUsuario />
    </div>
  );
}

export default BuscarNombre;
