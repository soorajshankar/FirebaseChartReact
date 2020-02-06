import React, { useContext, useState, useReducer } from "react";
const ThemeContext = React.createContext("light");
const initialState = {
  count: 0
};

const Test = () => {
  const [val, setVal] = useState("Î");
  const [state, dispatch] = useStore(initialState);
  setTimeout(() => {
    setVal("TESTTT");
  }, 1000);
  return (
    <div>
      <button onClick={() => dispatch({ type: "increment" })}></button>
      <ThemeContext.Provider value={{ state, dispatch }}>
        <T2 />
      </ThemeContext.Provider>
    </div>
  );
};

export default Test;

export const T2 = () => {
  return (
    <div>
      <ThemeContext.Consumer>
        {({ state }) => <div> state : {state.count}</div>}
      </ThemeContext.Consumer>
    </div>
  );
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
};

const useStore = initialState => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return [state, dispatch];
};
