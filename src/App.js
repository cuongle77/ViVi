import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Cart from "./pages/Cart";
import HomePages from "./pages/Home/HomePages";
import PortfolioColumnsTwo from "./pages/PortfolioColumnsTwo";
import Testimonials from "./pages/Testimonials";

import "./root.css";
import AboutTemplate from "./templates/AboutTemplate";
import HomeTemPlate from "./templates/HomeTemPlate";

function mainVivi() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <AboutTemplate exact path="/about" Component={About} />
          <HomeTemPlate exact path="/testimonials" Component={Testimonials} />
          <HomeTemPlate
            exact
            path="/portfolio-columns-two"
            Component={PortfolioColumnsTwo}
          />
          <HomeTemPlate exact path="/cart" Component={Cart} />
          <Route exact path="/" component={HomePages} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default mainVivi;
