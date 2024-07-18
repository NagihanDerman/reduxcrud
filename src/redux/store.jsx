import { createStore, combineReducers } from "redux";
import userReducer from "./reducers/userReducer";
import todoReducer from "./reducers/todoReducer";

//birden fazla reducer varsa birlestiririz

const rootReducer = combineReducers({
  todoReducer,
  userReducer,
});
//storu olusturma
const store = createStore(rootReducer);

//projeye tanitma
export default store;
