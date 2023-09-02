import { useReducer } from "react";

type InitialState = {
  count: number;
};

type actionState = {
  type: "increment" | "decrement" | "reset";
  payload: number;
};

const initialState = { count: 0 };

function reducer(state: InitialState, action: actionState) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    case "reset":
      return initialState;
    default:
      return state;
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count : {state.count}
      <button onClick={() => dispatch({ type: "increment", payload: 10 })}>
        Increament 10
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 10 })}>
        Increament 10
      </button>
    </>
  );
};

export default Counter;
