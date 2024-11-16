import { products } from "@/assets/data";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

// export const works = [
//   {
//     artist: "Ornella Binni",
//     art: "https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80",
//   },
//   {
//     artist: "Tom Byrom",
//     art: "https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80",
//   },
//   {
//     artist: "Vladimir Malyavko",
//     art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
//   },
// ];

const RelativeScrolling = () => {

  return (
    <div>
      <ScrollArea className="w-full whitespace-nowrap rounded-md border">
        <div className="flex w-max space-x-4 p-4">
          {products.map((item) => (
            <img src={item.image} alt="" />
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

export default RelativeScrolling;
