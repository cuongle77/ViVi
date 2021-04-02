import { combineReducers, createStore } from "redux";
import { heroSlideReducer } from "./reducers/HeroSlideReducer";

const rootReducers = combineReducers({
  heroSlideReducer,
});

export const store = createStore(rootReducers);
