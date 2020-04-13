import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { eliminarNombre } from "../redux/users";

function MostrarUsuario() {
  const { nombre } = useSelector((store) => store.users);
  const dispatch = useDispatch();
  //console.log(nombre);

  const onSubmit = (usuario) => {
    dispatch(eliminarNombre(usuario));
    // console.log(usuario);
  };
  return (
    <div>
      <h4>Los datos del usuario son: </h4>

      {nombre.map((u, index) => (
        <ul key={index}>
          <hr />
          <li>Nombre: {u.name} </li>
          <li>Phone: {u.phone} -</li>
          <li>Username: {u.username}</li>
          <li> Email: {u.email} </li>
          <li> Website: {u.website}</li>
          <li>
            Company: {u.company.name} - {u.company.catchPhrase} - {u.company.bs}
          </li>
          <li>Address: {u.address.city}</li>
          <button
            type="text"
            className="btn btn-danger"
            onClick={() => onSubmit(u)}
          >
            X
          </button>
          <hr />
        </ul>
      ))}
    </div>
  );
}

export default MostrarUsuario;
