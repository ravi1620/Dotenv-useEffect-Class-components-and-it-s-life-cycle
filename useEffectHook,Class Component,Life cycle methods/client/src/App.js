import { useState } from "react";
import "./App.css";
import FCCounter from "./component/FCCounter";
import CCCounter from "./component/CCCounter";

function App() {
  let [show, setShow] = useState(true);

  return (
    <div className="App">
          
      <button
        type="button"
        onClick={() => {
          if (show == true) {
            setShow(false);
          } else {
            setShow(true);
          }
        }}
      >
        Show/Hide Component
      </button>
      <br></br>
      {show == true ? <FCCounter></FCCounter> : null}
      {show == true ?<CCCounter/>:null}

      
    </div>
  );
}

export default App;
