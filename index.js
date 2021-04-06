const redux = require("redux");
const createStore = redux.createStore;

const BUY_CAKE = "BUY_CAKE"; // string constant

//Action Creator
function buyCake() {
  return {
    type: BUY_CAKE,
    info: "first redux  app",
  };
}

//reducer
//(previousState,action) => newState

//creating a initial state of application
const initialState = {
  numOfCakes: 10,
};

//craeting a reducer which take initialState and action as an argument

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state, //create the copy of state if there is another properties it will remain the same
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);
console.log("initial State ", store.getState());
const unsubscribe = store.subscribe(() =>
  console.log("updated state", store.getState())
);

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());

unsubscribe();
