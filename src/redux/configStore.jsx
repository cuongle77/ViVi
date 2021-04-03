import { combineReducers, createStore } from "redux";
import { heroSlideReducer } from "./reducers/HeroSlideReducer";
import { productReducer } from "./reducers/ProductReducer";

const rootReducers = combineReducers({
  heroSlideReducer,
  productReducer,
});

export const store = createStore(rootReducers);
