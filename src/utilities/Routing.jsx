import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Favourite from "../pages/Favourite";
const Routing = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Home />}></Route>
      <Route path={"/favourite"} element={<Favourite />}></Route>
    </Routes>
  );
};

export default Routing;
