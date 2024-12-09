import blogs from  "../../assets/blogs";

const Blogs = () => {

  return (
    <section className="section__container blog__container">
      <h2 className="section__header">Latest From Blogs</h2>
      <p className="section__subheader">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
        cupiditate iste dolorem natus.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12">
        {
            blogs.map((items, index) => (
                <div key={index} className="blog__card cursor-pointer hover:scale-105 transition-all duration-300">
                    <img src={items.imageUrl} alt="" />
                    <div className="blog__card__content">
                        <h6>{items.subtitle}</h6>
                        <h4>{items.title}</h4>
                        <p>{items.date}</p>
                    </div>
                </div>
            ))
        }
      </div>
    </section>
  );
};

export default Blogs;
