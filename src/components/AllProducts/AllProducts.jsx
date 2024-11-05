import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import myContext from "../context/myContext";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../../Redux/cartSlice";
import toast from "react-hot-toast";

function AllProducts() {
  const navigate = useNavigate();
  const context = useContext(myContext);
  const { addproduct } = context;

  const cartItems = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const addCart = (item) => {
    dispatch(addToCart(item));
    toast.success("Added to cart");
  };
  const deleteCart = (item) => {
    dispatch(deleteFromCart(item));
    toast.success("Delete cart");
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);
  return (
    <>
      <div className="mt-2">
        <h1 className=" text-center mt-10 text-2xl font-semibold">
          All Products
        </h1>
        <div className="grid grid-cols-3 mt-10 px-20 w-full">
          {addproduct.map((item) => {
            return (
              <>
                {" "}
                <div key={item.id} className="m-10 cursor-pointer">
                  <div className="h-100 border border-gray-300 rounded-xl shadow-md">
                    <img
                      src={item.productURL}
                      alt=""
                      className="h-60 w-80 rounded-xl"
                      onClick={() => navigate(`/productInfo/${item.id}`)}
                    />
                    <div className="m-3">
                      <h2 className="my-2 font-bold">{item.title}</h2>
                      <h1>₹{item.price}</h1>
                    </div>
                    <div className="mx-2 my-5 ">
                      {cartItems.some((p) => p.id === item.id) ? (
                        <button
                          onClick={() => deleteCart(item)}
                          className=" bg-red-700 hover:bg-pink-600 w-full text-white py-[4px] rounded-lg font-bold"
                        >
                          Delete From Cart
                        </button>
                      ) : (
                        <button
                          onClick={() => addCart(item)}
                          className=" bg-pink-500 hover:bg-pink-600 w-full text-white py-[4px] rounded-lg font-bold"
                        >
                          Add To cart
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default AllProducts;
