import { Outlet } from "react-router";
import Navber from "./components/Navber/Navber";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <Navber />
      <Outlet/>
      <Footer/>
    </div>
  );
};

export default App;