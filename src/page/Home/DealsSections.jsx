const DealsSections = () => {
    return (
      <div className="my-16">
      <div className=" section__container bg-secondary  grid grid-cols-1 md:grid-cols-2 items-center  gap-4 ">
        <div className=" relative  ">
          <img className="h-[400px] " src="/deals.png" alt="" />
        </div>
        <div className="space-y-4 ">
          <h5 className="text-primary">Get Up to 20% Discount </h5>
          <h4 className=" text-3xl md:text-5xl font-semibold text-primary">Deals of This Monts</h4>
          <p className="text-gray-300">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            voluptates nemo aspernatur? Quas ut, dolore explicabo molestiae
            sapiente consequatur atque similique quam illum, tempore dolorem eum
            libero perferendis neque maiores?
            <div className="deals__countdown flex-wrap mt-4">
              <div className="deals__countdown__card">
                  <h4>14</h4>
                  <p>Days</p>
              </div>
              <div className="deals__countdown__card">
                  <h4>20</h4>
                  <p>Hours</p>
              </div>
              <div className="deals__countdown__card">
                  <h4>15</h4>
                  <p>mins</p>
              </div>
              <div className="deals__countdown__card">
                  <h4>5</h4>
                  <p>secs</p>
              </div>
            </div>
          </p>
        </div>
      </div>
      </div>
    );
  };
  
  export default DealsSections;
  