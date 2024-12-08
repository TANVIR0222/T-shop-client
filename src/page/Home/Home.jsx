import Blogs from "./Blogs";
import DealsSections from "./DealsSections";
import Feature from "./Feature";
import Hero from "./Hero";
import ShowProduct from "./ShowProduct";
import SubHero from "./SubHero";

const Home = () => {
    return (
        <div>
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