import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { Productcontainer } from "./Components/Productcontainer";
import { Provider } from "react-redux";
import { store } from "./Redux/Product/Store";



function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Provider store={store}>
        <Productcontainer />
      </Provider>
    </>
  );
}

export default App;
