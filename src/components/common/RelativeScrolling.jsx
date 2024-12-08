import { useRelatedProductQuery } from "@/app/feature/productApi/productApi";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Link } from "react-router-dom";

const RelativeScrolling = ({ id }) => {
  const { data: relatedProduct } = useRelatedProductQuery(id);

  const works = [
    {
      artist: "Ornella Binni",
      art: "https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80",
    },
    {
      artist: "Tom Byrom",
      art: "https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80",
    },
    {
      artist: "Vladimir Malyavko",
      art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
    },
  ];
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
