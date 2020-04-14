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
    <div>
      <div className="container-fluid mt-5">
        <h2 className="text-center ">Use API with React & Redux</h2>

        <div className="container align-content-center align-self-center mt-5">
          <h4>
            <b>API Data</b>{" "}
          </h4>
          <div className="row ">
            <div className="col-sm-6">
              {isLoading ? (
                <h4>Loading data</h4>
              ) : (
                nombre.map((u, index) => (
                  <ul key={index}>
                    <li>{u.name}</li>
                  </ul>
                ))
              )}
            </div>

            <div className="col-sm-6">
              <BuscarNombre />
            </div>
          </div>
        </div>
        <hr />
      </div>
      <div></div>
    </div>
  );
}

export default Users;
