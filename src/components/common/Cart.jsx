import React from 'react';

const Cart = ({products}) => {
    // const product = products.;
    return (
        <div className='grid grid-cols-2 md:grid-cols-5  gap-4 '>
            {products.slice(0,10).map((item) => 
            <div key={item._id} className=" rounded-sm space-y-3 shadow p-2">
                <img className='h-60' src={item.image[0]} alt="" />
                <h1>{item.name}</h1>
                <div className="flex justify-between items-center ">
                    <p className='text-secondary'>{item.category}</p>
                    <p className='text-secondary'>${item.price}</p>
                </div>
                <p>{item.description.slice(0,50)}...</p>
            </div>
            )}
        </div>
    );
};

export default Cart;