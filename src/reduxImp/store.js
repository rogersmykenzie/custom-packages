import { createStore } from "../redux";

const initialState = {
  name: ""
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_NAME":
      return {
        ...state,
        name: action.payload
      };
    default:
      return state;
  }
}

export default createStore(reducer);
