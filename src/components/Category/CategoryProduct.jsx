import { useContext, useEffect } from "react";
import myContext from "../context/myContext";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../../Redux/cartSlice";
import toast from "react-hot-toast";

function CategoryProduct({ categoryname }) {
  const context = useContext(myContext);
  const { addproduct } = context;

  const filterproduct = addproduct.filter((obj) =>
    obj.category.includes(categoryname)
  );

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
      <div>
        <h1 className=" text-center first-letter:uppercase mt-10 text-3xl font-semibold">
          {categoryname}
        </h1>
        {filterproduct.length > 0 ? (
          <>
            {filterproduct.map((item, index) => {
              return (
                <>
                  <div className="m-10 cursor-pointer inline-block" key={index}>
                    <div className="h-100 border border-gray-300 rounded-xl shadow-md">
                      <img
                        src={item.productURL}
                        alt=""
                        className="h-60 w-80 rounded-xl"
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
          </>
        ) : (
          <>
            <div className="flex flex-col justify-center items-center mt-10">
              <img
                src="https://cdn-icons-png.flaticon.com/256/2748/2748558.png"
                alt=""
              />
              <h1 className="text-3xl font-bold">No product found</h1>
            </div>
          </>
        )}
      </div>
    </>
  );
}
export default CategoryProduct;
