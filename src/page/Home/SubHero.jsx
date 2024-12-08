import Title from "@/components/common/Title";

const cards = [
  {
    id: 1,
    name: "Women s Shirt",
    trend: "2024 Trend",
    image: "/card-1.png",
  },
  {
    id: 2,
    name: "Womens Dresses",
    trend: "2024 Trend",
    image: "/card-2.png",
  },
  {
    id: 3,
    name: "Womens Casuals ",
    trend: "2024 Trend",
    image: "/card-3.png",
  },
];

const SubHero = () => {
  return (
    <>
      {" "}
      <Title title="Trend Item" titleStyle={"text-center"} />
      <section className="grid grid-cols-1 md:flex gap-6 my-14">
        {cards.map((card) => (
          <div key={card.id} className="hero__card">
            <img src={card.image} alt="" />
            <div className="hero__content">
              <p>{card.name}</p>
              <h2>{card.trend}</h2>
              <a href="#">Discover more</a>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default SubHero;
