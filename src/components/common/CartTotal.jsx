import React from 'react';

const CartTotal = ({totalPrice}) => {
    return (
        <div>
             <div className="mx-2 space-y-3">
            <h1 className="h4 text-center">Total Price</h1>
            <div className="flex justify-between">
              <p className="">SubTotal</p>
              <p className=""> ${totalPrice}</p>
            </div>
            <hr />
            <div className="flex justify-between">
              <p>Shopping Fee </p>
              <p className=""> $00</p>
            </div>
            <hr />
            <div className="flex justify-between">
              <p>Total </p>
              <p>${totalPrice}</p>
            </div>
          </div>
        </div>
    );
};

export default CartTotal;