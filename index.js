const redux = require("redux");

//importing middelware redux logger

const reduxLogger = require("redux-logger");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;

//creating a logger

const logger = reduxLogger.createLogger();

const BUY_CAKE = "BUY_CAKE"; // string constant
const BUY_ICECREAM = "BUY_ICECREAM";

//Action Creator
function buyCake() {
  return {
    type: BUY_CAKE,
    info: "first redux  app",
  };
}

function buyIceCream() {
  return {
    type: BUY_ICECREAM,
    info: "second product in store",
  };
}
//reducer
//(previousState,action) => newState

//creating a initial state of application
// const initialState = {
//   numOfCakes: 10,
//   numOfIceCream: 20,
// };

//creating separate initial state of particular application

const initialStateCake = {
  numOfCakes: 10,
};

const initialStateIceCream = {
  numOfIceCream: 20,
};

//craeting a reducer which take initialState and action as an argument

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case BUY_CAKE:
//       return {
//         ...state, //create the copy of state if there is another properties it will remain the same
//         numOfCakes: state.numOfCakes - 1,
//       };
//     case BUY_ICECREAM:
//       return {
//         ...state, //create the copy of state if there is another properties it will remain the same
//         numOfIceCream: state.numOfIceCream - 1,
//       };
//     default:
//       return state;
//   }
// };

// creating separate reducer for different products

const cakeReducer = (state = initialStateCake, action) => {
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

const iceCreamReducer = (state = initialStateIceCream, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state, //create the copy of state if there is another properties it will remain the same
        numOfIceCream: state.numOfIceCream - 1,
      };
    default:
      return state;
  }
};

//creating a multiple reducer and reducer take an object

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger));
// console.log("initial State ", store.getState());
const unsubscribe = store.subscribe(() =>
  console.log("updated state", store.getState())
);

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());

unsubscribe();
