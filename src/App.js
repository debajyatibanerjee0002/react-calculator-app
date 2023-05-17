import { useReducer } from "react";
import Button from "./components/Button";
import { formatOperand } from "./formatter/formateOperand";
import { keys } from "./store/keys";
import { reducer } from "./context/AppReducer";

import { initializeApp } from "firebase/app";

import "./styles/styles.css";

/* ----------------- Firebase --------------- */
const firebaseConfig = {
  apiKey: "AIzaSyBsEXau6VNwGyQKoOYcxi29LPm13_sflHs",
  authDomain: "react-http-58a82.firebaseapp.com",
  databaseURL: "https://react-http-58a82-default-rtdb.firebaseio.com",
  projectId: "react-http-58a82",
  storageBucket: "react-http-58a82.appspot.com",
  messagingSenderId: "373365040182",
  appId: "1:373365040182:web:39b8c34a7078cbe7432497"
};
const app = initializeApp(firebaseConfig);

/* ----------------- Firebase Done --------------- */

const App = () => {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    {}
  );
  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">
          {formatOperand(previousOperand)} {operation}
        </div>
        <div className="current-operand">{formatOperand(currentOperand)}</div>
      </div>
      {keys.map((v, i) => (
        <Button
          key={i}
          className={v.style}
          doAction={v.doAction}
          dispatch={dispatch}
          sign={v.sign}
        />
      ))}
    </div>
  );
};

export default App;
