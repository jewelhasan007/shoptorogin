
import Books from "./Books";
import Hero from "./Hero";
import { Helmet } from "react-helmet";
const Home = () => {
    return (
        <div className="m-5">
            <Helmet><title>Home || shoptoronginmon</title></Helmet>
        <Hero></Hero>
        <Books></Books>
        </div>
    );
};

export default Home;