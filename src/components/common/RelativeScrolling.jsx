import { products } from "@/assets/data";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";


const RelativeScrolling = () => {

  return (
    <div>
      <ScrollArea className="w-full whitespace-nowrap rounded-md border">
        <div className="flex w-max space-x-4 p-4">
          {products.map((item) => (
            <img key={item._id} src={item.image} alt="" />
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

export default RelativeScrolling;
