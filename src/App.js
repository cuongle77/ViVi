import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import About from "./pages/About";
import Cart from "./pages/Cart";
import HomePages from "./pages/Home/HomePages";
import PortfolioColumnsFour from "./pages/PortfolioColumnsFour/PortfolioColumnsFour";
import PortfolioColumnsThree from "./pages/PortfolioColumnsThree/PortfolioColumnsThree";
import PortfolioColumnsTwo from "./pages/PortfolioColumnsTwo";
import Testimonials from "./pages/Testimonials";
import "./root.css";
import "./assets/css/grid.css";
import AboutTemplate from "./templates/AboutTemplate";
import HomeTemPlate from "./templates/HomeTemPlate";

const mainVivi = () => {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Switch>
          <AboutTemplate exact path="/about" Component={About} />
          <HomeTemPlate exact path="/testimonials" Component={Testimonials} />
          <HomeTemPlate
            exact
            path="/portfolio-columns-two"
            Component={PortfolioColumnsTwo}
          />
          <HomeTemPlate
            exact
            path="/portfolio-columns-three"
            Component={PortfolioColumnsThree}
          />
          <HomeTemPlate
            exact
            path="/portfolio-columns-four"
            Component={PortfolioColumnsFour}
          />
          <HomeTemPlate exact path="/cart" Component={Cart} />
          <Route exact path="/" component={HomePages} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default mainVivi;
