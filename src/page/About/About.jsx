import { Helmet } from "react-helmet";
import { RiDoubleQuotesL } from "react-icons/ri";

const statistics = [
  { label: "Satisfied Customers", value: 90 },
  { label: "Exclusive Products", value: 12 },
  { label: "New Products", value: 5 },
];

const About = () => {
  return (
    <div className=" ">
       <Helmet>
          <meta charSet="utf-8" />
          <title>About page  || T-shop</title>
        </Helmet>
      <div className="grid grid-cols-1 md:grid-cols-2 mx-4 gap-4">
        {/* left side */}
        <div className="mt-20">
          <div className="bg-secondary rounded-tr-[100px] md:rounded-tr-[145px]   rounded-tl-3xl rounded-br-3xl">
            <img className="" src="/about1.png" alt="" />
          </div>
          <div className="mx-auto text-center flex items-center justify-center -mt-10 ">
            <div className="w-[250px] md:w-[300ox] text-center bg-white shadow-xl rounded">
              <RiDoubleQuotesL className="text-center flex text-4xl bg-secondary rounded-full -mt-4 mx-auto " />
              <p className=" leading-2 md:leading-6 text-sm">
                Discover fashion that speaks to your style. Elevate your
                wardrobe with exclusive collections!
              </p>
            </div>
          </div>
        </div>
        {/* right side */}
        <div className="mt-10 md:mt-20 space-y-10">
          <span className="text-xl capitalize text-secondary">Unveiling Our Journey</span>
          <h2 className=" text-3xl md:text-4xl font-semibold">Our Commitment to Crafting Individualized Fashion Experiences</h2>
          <p>
            Discover the essence of style, where each piece is crafted with care
            and precision. We bring fashion that speaks to individuality and
            quality. From the latest trends to timeless classics, we are
            dedicated to elevating your wardrobe with exceptional designs that
            fit every occasion, personality, and season, making fashion a true
            expression of self.
          </p>
          {/*  */}
          <div className="flex flex-row gap-4 justify-between items-center">
            {statistics.map((item, index) => (
              <div key={index} className="bg-gray-100 rounded-xl p-4 space-y-2 rounded w-48 h-24 hover:shadow-2xl hover:shadow-secondary">
                <div className="flex">
                  <h3 className="text-2xl text-secondary">{item.value}k</h3>
                  <h4>+</h4>
                </div>
                <p className="text-sm" >{item.label}</p>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default About;
