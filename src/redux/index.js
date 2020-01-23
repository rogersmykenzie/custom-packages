let reducer;
let state;
let subscriptions = [];

export function createStore(fn) {
  reducer = fn;
  state = reducer(undefined, { type: "__INIT__" });
  return {
    getState: function() {
      return { ...state };
    },
    dispatch: function(action) {
      state = reducer(state, action);
      subscriptions.forEach(val => val());
    },
    subscribe: function(fn) {
      subscriptions.push(fn);
    }
  };
}
