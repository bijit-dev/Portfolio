import { Outlet } from "react-router";
import Navber from "./components/Navber/Navber";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <Navber />
      <Outlet/>
      <Footer/>
    </>
  );
};

export default App;