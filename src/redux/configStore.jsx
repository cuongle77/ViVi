import { combineReducers, createStore } from "redux";
import { heroSlideReducer } from "./reducers/HeroSlideReducer";
import { productReducer } from "./reducers/ProductReducer";
import { latestTrailerReducer } from "./reducers/LatestTrailerReducer";
import { exclusiveHopReducer } from "./reducers/ExclusiveHopReducer";
import { teamReducer } from "./reducers/TeamReducer";
import { partnerReducer } from "./reducers/PartnerReducer";
import { blogReducer } from "./reducers/BlogReducer";
import { cartReducer } from "./reducers/CartReducer";
import { portfolioColumnsTwoReducer } from "./reducers/PortfolioColumnsTwoReducer";

const rootReducers = combineReducers({
  heroSlideReducer,
  productReducer,
  latestTrailerReducer,
  exclusiveHopReducer,
  teamReducer,
  partnerReducer,
  blogReducer,
  cartReducer,
  portfolioColumnsTwoReducer,
});

export const store = createStore(rootReducers);
