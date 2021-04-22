import { applyMiddleware, combineReducers, createStore } from "redux";
import { heroSlideReducer } from "./reducers/HeroSlideReducer";
import { productReducer } from "./reducers/ProductReducer";
import { latestTrailerReducer } from "./reducers/LatestTrailerReducer";
import { exclusiveHopReducer } from "./reducers/ExclusiveHopReducer";
import { teamReducer } from "./reducers/TeamReducer";
import { partnerReducer } from "./reducers/PartnerReducer";
import { blogReducer } from "./reducers/BlogReducer";
import { cartReducer } from "./reducers/CartReducer";
import { aboutPageReducer } from "./reducers/AboutPageReducer";
import { testimonialReducer } from "./reducers/TestmonialReducer";
import { portfolioColumnsReducer } from "./reducers/PortfolioColumnsReducer";
import { solutionsReducer } from "./reducers/SolutionsReducer";
import reduxThunk from "redux-thunk";

const rootReducers = combineReducers({
  heroSlideReducer,
  productReducer,
  latestTrailerReducer,
  exclusiveHopReducer,
  teamReducer,
  partnerReducer,
  blogReducer,
  portfolioColumnsReducer,
  cartReducer,
  aboutPageReducer,
  testimonialReducer,
  solutionsReducer,
});

export const store = createStore(rootReducers, applyMiddleware(reduxThunk));
