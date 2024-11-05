import { useContext } from "react";
import img1 from "../../assets/testimonial1.png";
import myContext from "../context/myContext";

function Userdashboard() {
  const user = JSON.parse(localStorage.getItem("users"));
  const context = useContext(myContext);
  const { orderproduct } = context;

  return (
    <>
      <div className="flex justify-center flex-col px-20">
        <div className="top mt-10 px-[30em] rounded-2xl border-pink-100 bg-pink-100 flex flex-col  items-center">
          <div className="my-4">
            <img src={img1} alt="" className="w-20" />
          </div>
          <div>
            <h1 className="text-1xl text-red-800 font-light">
              <span className="text-red-800 font-bold text-1xl">Name : </span>{" "}
              {user.name}
            </h1>
            <h1 className="text-1xl text-red-800 font-light">
              <span className="text-red-800 font-bold text-1xl">Email :</span>{" "}
              {user.email}
            </h1>
            <h1 className="text-1xl text-red-800 font-light">
              <span className="text-red-800 font-bold text-1xl">Date :</span>{" "}
              {user.date}
            </h1>
            <h1 className="text-1xl text-red-800 font-light">
              <span className="text-red-800 font-bold text-1xl">Role :</span>{" "}
              {user.role}
            </h1>
          </div>
        </div>
        <div className="bottom my-10">
          <h2 className=" text-2xl  font-bold">Order Details</h2>
          {orderproduct
            .filter((obj) => obj.userid === user?.uid)
            .map((order, index) => {
              return (
                <>
                  <div key={index} className="flex border-2 rounded-2xl mt-10 ">
                    {order.cartItems.map((item, index) => {
                      const {
                        id,
                        date,
                        quantity,
                        price,
                        title,
                        productURL,
                        category,
                      } = item;

                      const { status } = order;
                      return (
                        <>
                          <div
                            key={index}
                            className="pr-44 pl-10 bg-pink-100 rounded-l-2xl py-5"
                          >
                            <div>
                              <span className="font-bold">Order Id :</span>
                              <h1 className="mb-3 text-sm font-medium text-gray-900">
                                {id}
                              </h1>
                              <span className="font-bold">Date :</span>
                              <h1 className="mb-3 text-sm font-medium text-gray-900">
                                {date}
                              </h1>
                              <span className="font-bold">Total Amount :</span>
                              <h1 className="mb-3 text-sm font-medium text-gray-900">
                                ₹ {price * quantity}
                              </h1>
                              <span className="font-bold">Order Status :</span>
                              <h1 className="mb-3 text-sm font-medium text-green-800 first-letter:uppercase">
                                {status}
                              </h1>
                            </div>
                          </div>
                          <div className=" mb-5 left flex justify-between py-5 px-5">
                            <div>
                              <img
                                src={productURL}
                                alt=""
                                className="w-[5em]"
                              />
                            </div>
                            <div className="flex gap-20">
                              <div className="pl-4">
                                <h1 className="font-bold">{title}</h1>
                                <h1 className="">{category}</h1>
                              </div>

                              <div>
                                <h1 className="font-bold">{price}</h1>
                              </div>
                            </div>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </>
              );
            })}
        </div>
      </div>
    </>
  );
}
export default Userdashboard;
