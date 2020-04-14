import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// importamos la accion
import { usersAction } from "../redux/users";
import BuscarNombre from "./BuscarNombre";

function Users() {
  // declaramos displach para llamar a la acción o acciones
  const dispatch = useDispatch();
  const { arrayUsers: nombre, isLoading } = useSelector((store) => store.users);

  useEffect(() => {
    dispatch(usersAction());
  }, [dispatch, usersAction]);

  return (
    <div className="container mt-5">
      {/* <button onClick={() => dispatch(usersAction())}>Search User</button> */}

      <h1>Ejercicio con React/Redux</h1>
      {isLoading
        ? "Cargando data"
        : nombre.map((u, index) => (
            <ul key={index}>
              <li>{u.name}</li>
            </ul>
          ))}
      <BuscarNombre />
    </div>
  );
}

export default Users;
