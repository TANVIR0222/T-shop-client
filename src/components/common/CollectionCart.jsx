import React from 'react';
import { Link } from 'react-router-dom';

const CollectionCart = ({item}) => {
    return (
        <div>
            <Link to={`/product/${item._id}`}>
            <div key={item._id} className=" rounded-sm space-y-3 shadow p-2  h-[420px] ">
                <img className='h-60 w-full px-2 md:px-10' src={item.image[0]} alt="" />
                <h1>{item.name}</h1>
                <div className="flex justify-between items-center ">
                    <p className='text-secondary'>{item.category}</p>
                    <p className='text-secondary'>${item.price}</p>
                </div>
                <p>{item.description.slice(0,50)}...</p>
            </div> 
            </Link>
        </div>
    );
};

export default CollectionCart;