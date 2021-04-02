import { BrowserRouter, Route, Switch } from "react-router-dom";
import Cart from "./pages/Cart";
import HomePages from "./pages/Home/HomePages";

import "./root.css";
import HomeTemPlate from "./templates/HomeTemPlate";

function mainVivi() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <HomeTemPlate exact path="/cart" Component={Cart} />

          <Route exact path="/" component={HomePages} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default mainVivi;
