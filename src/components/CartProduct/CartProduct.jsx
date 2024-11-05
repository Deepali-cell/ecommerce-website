import { useDispatch, useSelector } from "react-redux";
import {
  decrementQuantity,
  deleteFromCart,
  incrementQuantity,
} from "../../Redux/cartSlice";
import toast from "react-hot-toast";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";

import BuyNow from "../BuyNow/BuyNow";

function CartProduct() {
  const cartItems = useSelector((state) => state.cart);
  const user = JSON.parse(localStorage.getItem("users"));

  const dispatch = useDispatch();

  const deleteCart = (item) => {
    dispatch(deleteFromCart(item));
    toast.success("Delete cart");
  };
  const handleincreament = (id) => {
    dispatch(incrementQuantity(id));
    toast.success("increase product successfuly");
  };
  const handledecreament = (id) => {
    dispatch(decrementQuantity(id));
    toast.success("decrease product successfuly");
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const carttotalitem = cartItems
    .map((item) => item.quantity)
    .reduce((prevalue, currentval) => prevalue + currentval, 0);
  const carttotalprice = cartItems
    .map((item) => item.quantity * item.price)
    .reduce((prevalue, currentval) => prevalue + currentval, 0);

  return (
    <>
      <div className="px-40 py-10 flex justify-between">
        <div>
          {cartItems.map((item) => {
            return (
              <>
                <div key={item.id} className=" mb-5 left flex gap-4">
                  <div>
                    <img src={item.productURL} alt="" className="w-40 h-40" />

                    <div className="flex justify-center">
                      <button
                        type="button"
                        className="h-7 w-7"
                        onClick={() => handledecreament(item.id)}
                      >
                        -
                      </button>
                      <input
                        type="text"
                        className="mx-1 h-7 w-9 rounded-md border text-center"
                        value={item.quantity}
                      />
                      <button
                        type="button"
                        className="flex h-7 w-7 items-center justify-center"
                        onClick={() => handleincreament(item.id)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <h1 className="font-bold">{item.title}</h1>
                    <div className="flex">
                      <p>Category : {item.category}</p>
                    </div>
                    <div>
                      <h1>
                        <span className="px-2">₹ {item.price} </span>
                        <span className="px-2">{item.quantity} </span>
                      </h1>
                    </div>
                    <div>
                      <button
                        onClick={() => deleteCart(item)}
                        className=" bg-red-700 hover:bg-pink-600 w-full text-white py-[4px] rounded-lg font-bold mt-10 px-10"
                      >
                        Delete From Cart
                      </button>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>

        <div className="right w-100 border-2 h-72 p-4">
          <h1 className="font-bold border-b-2 mb-2 mt-2">Price Details</h1>
          <div className="flex flex-col">
            <div className="flex justify-between gap-40 py-2">
              <h1>Price ({carttotalitem} items)</h1> <p>₹ {carttotalprice}</p>
            </div>
            <div className="flex justify-between gap-40 py-2">
              <h1>Delivery Charges</h1> <p>Free</p>
            </div>
            <div className="flex justify-between gap-40 py-2 font-bold">
              <h1>Total Amount</h1> <p>₹ {carttotalprice}</p>
            </div>
          </div>
          <div className="mx-2 my-5 ">
            {user ? (
              <BuyNow cartItems={cartItems} />
            ) : (
              <Navigate to={"/loginpage"} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
export default CartProduct;
