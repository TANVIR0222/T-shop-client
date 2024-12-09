import { useFeatchAllProductQuery } from "@/app/feature/productApi/productApi";
import CollectionCart from "@/components/common/CollectionCart";
import Title from "@/components/common/Title";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Helmet } from "react-helmet";

const Collection = () => {
  const [search, setSearchQuery] = useState("");
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState([]);
  const [page, setPage] = useState(1);

  const queryParameters = {
    category, // or 'alll' for all categories
    subCategory,
    search,
    page,
    limit: 10,
  };
  const { data } = useFeatchAllProductQuery(queryParameters);

  const handleNext = () => {
    setPage(page + 1);
  };
  const handlePrevious = () => {
    if (page === 1) {
      return toast.success("First Page");
    }
    setPage(page - 1);
  };

  return (
    <section className="">
       <Helmet>
          <meta charSet="utf-8" />
          <title>Collection page  || T-shop</title>
        </Helmet>
      <div className="mt-20 flex flex-col sm:flex-row gap-8">
        {/* filter options  */}
        <div className="min-w-[200px]  md:h-screen bg-white p-4 shadow-2xl rounded-2xl">
          {/* search bar */}
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <label htmlFor="text">Search</label>
            <Input
              onChange={(e) => setSearchQuery(e.target.value)}
              type="text"
              id="text"
              placeholder="search"
            />
          </div>
          {/* category filter */}
          <div className=" bg-primary ring-1 ring-slate-900/5 pl-5 py-3 mt-6 rounded-xl">
            <h5>Categories</h5>
            <div className="flex flex-col gap-2 text-sm font-light">
              {["Man", "Women", "Kids"].map((cat) => (
                <label key={cat} className="flex gap-2 medium-14 text-gray-30">
                  <input
                    onChange={(e) => setCategory(e.target.value)}
                    type="checkbox"
                    value={cat}
                    className="w-3"
                  />
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
                  <input
                    onChange={(e) => setSubCategory(e.target.value)}
                    type="checkbox"
                    value={subCat}
                    className="w-3"
                  />
                  {subCat}
                </label>
              ))}
            </div>
          </div>

          {/* sort by */}
          <select className="medium-14 h-8 w-full border border-slate-900/5 bg-primary text-gray-30 rounded-lg px-2 outline-none mt-6">
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
            {data?.product?.length > 0 ? (
              data?.product?.map((product) => (
                <div key={product._id} className="">
                  <CollectionCart item={product} />
                </div>
              ))
            ) : (
              <p>No product found for seleted filters.</p>
            )}
          </div>
          {/*  */}
          <div className="flex mx-auto justify-center items-center gap-5 my-8">
            <button
              className="bg-secondary px-3 py-[6px] rounded "
              onClick={handlePrevious}
              disabled={page === 1 && !data?.product?.length}
            >
              Previous
            </button>
            <p className=" border-black border-2 rounded px-2">
              {page}/{data?.totalPage}
            </p>
            <button
              className="bg-secondary px-3 py-[6px] rounded  "
              onClick={handleNext}
              disabled={data?.currentPage === data?.totalPage ? ' hidden' : ''}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collection;
