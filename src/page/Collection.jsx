import { products } from "@/assets/data";
import Cart from "@/components/common/Cart";
import CollectionCart from "@/components/common/CollectionCart";
import Title from "@/components/common/Title";
import { useEffect, useState } from "react";

const Collection = () => {
  const [filterProducts, setFilterProduct] = useState([]);

  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relevant");

  const togolFilters = (value, setState) => {
    setState((prev) => 
        prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    )
  };

  const applyFilters = () => {
    let filtered = [...products];

    if (category.length) {
      filtered = filtered.filter((product) =>
        category.includes(product.category)
      );
    }
    if (subCategory.length) {
      filtered = filtered.filter((product) =>
        subCategory.includes(product.subCategory)
      );
    }
    return filtered;
  };

  const applySort = (productsList) => {
    switch (sortType) {
      case "low":
        return productsList.sort((a, b) => a.price - b.price);
      case "high":
        return productsList.sort((a, b) => b.price - a.price);

      default:
        return productsList;
    }
  };

  useEffect(() => {
    let filtered = applyFilters();
    let sorted = applySort(filtered);

    setFilterProduct(sorted);
  }, [category,subCategory,sortType,products]);

  return (
    <section className="">
      <div className="mt-20 flex flex-col sm:flex-row gap-8">
        {/* filter options  */}
        <div className="min-w-[200px]  md:h-screen bg-white p-4 shadow-2xl rounded-2xl">
          {/* search bar */}

          {/* category filter */}
          <div className=" bg-primary ring-1 ring-slate-900/5 pl-5 py-3 mt-6 rounded-xl">
            <h5>Categories</h5>
            <div className="flex flex-col gap-2 text-sm font-light">
              {["Men", "Women", "Kids"].map((cat) => (
                <label key={cat} className="flex gap-2 medium-14 text-gray-30">
                  <input onChange={(e) => togolFilters(e.target.value,setCategory)} type="checkbox" value={cat} className="w-3" />
                  {cat}
                </label>
              ))}
            </div>
          </div>

          {/* Type filter */}
          <div className=" bg-primary ring-1 ring-slate-900/5 pl-5 py-3 mt-6 rounded-xl">
            <h5>Type</h5>
            <div className="flex flex-col gap-2 text-sm font-light">
              {["Topwear", "Bottomwear", "Winterwear"].map((subCat) => (
                <label
                  key={subCat}
                  className="flex gap-2 medium-14 text-gray-30"
                >
                  <input onChange={(e) => togolFilters(e.target.value,setSubCategory)} type="checkbox" value={subCat} className="w-3" />
                  {subCat}
                </label>
              ))}
            </div>
          </div>

          {/* sort by */}
          <select onChange={(e) => setSortType(e.target.value)} className="medium-14 h-8 w-full border border-slate-900/5 bg-primary text-gray-30 rounded-lg px-2 outline-none mt-6">
            <option className=" font-medium text-sm" value="relevant">
              {" "}
              Sort by : Relevant
            </option>
            <option className=" font-medium text-sm" value="low">
              Sort by : Low
            </option>
            <option className=" font-medium text-sm" value="high">
              Sort by : High
            </option>
          </select>
        </div>
        {/* rigth side bar */}
        <div className="bg-white p-4 rounded-2xl">
          <Title title="Our Collection" />
          <div className=" grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {filterProducts?.length > 0 ? (
              filterProducts?.map((product) => (
                <div key={product._id} className="">
                  <CollectionCart item={product} />
                </div>
              ))
            ) : (
              <p>No product found for seleted filters.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collection;
