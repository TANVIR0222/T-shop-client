const  blogs = [
  {
    "id": 1,
    "title": "Mastering the Art of Capsule Wardrobes",
    "subtitle": "Timeless Elegance",
    "date": "12th August 2022",
    "imageUrl": "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "id": 2,
    "title": "Unveiling the Hottest Beachwear Trends",
    "subtitle": "Summer Breeze",
    "date": "18th January 2023",
    "imageUrl": "https://images.unsplash.com/photo-1700159017572-de76bb0c5719?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "id": 3,
    "title": "Navigating the World of Women's Tailoring",
    "subtitle": "Power Dressing",
    "date": "5th January 2025",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1682142715511-27bfbfdc044f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
      "id": 4,
      "title": "The World's Best Fashion Fair 2025",
      "subtitle": "New York Times",
      "date": "25th May 2025",
      "imageUrl": "https://plus.unsplash.com/premium_photo-1713720663924-4e3fe8f20f79?q=80&w=1948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
]


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
