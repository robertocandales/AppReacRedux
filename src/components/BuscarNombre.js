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
    <div>
      <form onSubmit={submithandle} className="text-center">
        <div className="container text-center align-content-center">
          <div className="row">
            <div className="sm-3">
              <input
                type="text"
                name="input"
                onChange={inputHandle}
                className="form-control"
                placeholder="Nombre de Usuario"
              />
            </div>
            <div className="sm-3">
              <button type="submit" className="btn btn-primary">
                Enviar
              </button>
            </div>
          </div>
        </div>
      </form>

      <MostrarUsuario />
    </div>
  );
}

export default BuscarNombre;
