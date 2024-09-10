import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router-dom";


const Home = () => {
    return (
        <div>
      <Header></Header>
      <h1>This is homepage</h1>
      <Outlet></Outlet>
      <Footer></Footer>
        </div>
    );
};

export default Home;