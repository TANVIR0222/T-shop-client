import { Helmet } from "react-helmet";
import Blogs from "./Blogs";
import DealsSections from "./DealsSections";
import Feature from "./Feature";
import Hero from "./Hero";
import ShowProduct from "./ShowProduct";
import SubHero from "./SubHero";

const Home = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home page  || T-shop</title>
            </Helmet>
           <Hero /> 
           <SubHero />
           <ShowProduct />
           <DealsSections />
           <Feature />
           <Blogs />
        </div>
    );
};

export default Home;