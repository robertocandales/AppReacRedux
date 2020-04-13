import React from "react";
import { Provider } from "react-redux";
import generaStore from "./redux/store";
// import  Pokemones  from './components/Pokemones'
import Users from "./components/Users";

function App() {
  const store = generaStore();

  return (
    <Provider store={store}>
      {/* <Pokemones /> */}
      <Users />
    </Provider>
  );
}

export default App;
