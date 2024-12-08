import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({products}) => {
    // const product = products.;
    return (
        <div className='grid grid-cols-2 md:grid-cols-5  gap-4 '>
            {products.map((item) => 
            <div key={item._id} className=" rounded-sm space-y-3 shadow p-2">
                <Link to={'/collection'} >
                <img className='h-60' src={item.image[0]} alt="" />
                <h1>{item.name}</h1>
                <div className="flex justify-between items-center ">
                    <p className='text-secondary'>{item.category}</p>
                    <p className='text-secondary'>${item.price}</p>
                </div>
                <p>{item.description.slice(0,50)}...</p>
                </Link>
            </div>
            )}
        </div>
    );
};

export default Cart;