import { useRelatedProductQuery } from "@/app/feature/productApi/productApi";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Link } from "react-router-dom";

const RelativeScrolling = ({ id }) => {
  const { data: relatedProduct } = useRelatedProductQuery(id);

  return (
    <div>
      <ScrollArea className="w-full whitespace-nowrap rounded-md border">
        <div className="flex w-max space-x-4 p-4">
          {relatedProduct?.map((item) => (
            <figure key={item._id} className="shrink-0">
              <Link to={`/product/${item._id}`}>
                <div className="overflow-hidden rounded-md">
                  <img
                    src={item.image[0]}
                    alt={`Photo by ${item.artist}`}
                    className="aspect-[3/4] h-fit w-fit object-cover"
                    width={300}
                    height={400}
                  />
                </div>
                <figcaption className="pt-2 text-xs text-muted-foreground">
                  <span className="font-semibold text-foreground">
                    {item.name}
                  </span>
                </figcaption>
              </Link>
            </figure>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

export default RelativeScrolling;

{
  /* <ScrollArea className="w-full whitespace-nowrap rounded-md border">
      <div className="flex  space-x-4 p-4">
          {relatedProduct?.map((item) => (
            <Link key={item._id}  to={`/product/${item._id}`}>
              <img className="" src={item.image} alt="" />
            </Link>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea> */
}
