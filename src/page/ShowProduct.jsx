import { products } from "@/assets/data";
import Cart from "@/components/common/Cart";
import Title from "@/components/common/Title";
import { useEffect, useState } from "react";



const ShowProduct = () => {
    const [populer, setPopuler] = useState([]);
        
        useEffect(() => {
            const data = products.filter((item) => item.popular)
            setPopuler(data.slice(0,5))
        }, []);

        console.log(populer);
        

    return (
        <div className="">
            <Title title="New Arrivals" titleStyle={'text-center'} />
            <Cart products={products}  />
            <Title title="Populer Item" titleStyle={'text-center'} />
            <Cart products={populer}  />
        </div>
    );
};

export default ShowProduct;