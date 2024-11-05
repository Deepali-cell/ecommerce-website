import { useEffect, useState } from "react";
import { CiStar } from "react-icons/ci";
import { doc, getDoc } from "firebase/firestore";
import { fireDB } from "../../Firebase/FirebaseConfig";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../../Redux/cartSlice";
import toast from "react-hot-toast";

function ProductDetail() {
  const [product, setproduct] = useState("");
  const { id } = useParams();

  const getsingleproductfunction = async () => {
    try {
      const producttemp = await getDoc(doc(fireDB, "product", id));
      setproduct({
        ...producttemp.data(),
        id: producttemp.id,
      });
    } catch (error) {
      console.log(error);
    }
  };
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

  useEffect(() => {
    getsingleproductfunction();
  }, []);

  return (
    <>
      <div className="flex justify-center py-10 px-40">
        <div className="left">
          <img src={product?.productURL} alt="" className="h-[29em] w-[29em]" />
        </div>
        <div className="right px-20 ">
          <h1 className="font-bold text-2xl">{product?.title}</h1>
          <div className="flex mt-4 mb-4">
            <CiStar className="text-3xl" />
            <CiStar className="text-3xl" />
            <CiStar className="text-3xl" />
            <CiStar className="text-3xl" />
          </div>
          <h1 className=" mb-3 text-2xl">₹ {product?.price}.00 </h1>{" "}
          <span>Description : </span>
          <p className="mt-4 w-[29em]">{product?.description}</p>
          <div className="mx-2 my-5 ">
            {cartItems.some((p) => p.id === product.id) ? (
              <button
                onClick={() => deleteCart(product)}
                className=" bg-red-700 hover:bg-pink-600 w-full text-white py-[4px] rounded-lg font-bold"
              >
                Delete From Cart
              </button>
            ) : (
              <button
                onClick={() => addCart(product)}
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
}
export default ProductDetail;
