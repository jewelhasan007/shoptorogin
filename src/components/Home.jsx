import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Hero from "./Hero";


const Home = () => {
    return (
        <div className="m-5">
      <Header></Header>
      <Hero></Hero>
      <Outlet></Outlet>
      <Footer></Footer>
        </div>
    );
};

export default Home;