import { useContext } from "react";
import myContext from "../context/myContext";

function OrderDetail() {
  const context = useContext(myContext);
  const { orderproduct, deleteorderfunction } = context;
  return (
    <>
      <div className="mt-10  text-pink-500 ">
        <div className="flex justify-between px-20">
          <h1 className=" text-3xl font-bold">All orders</h1>
        </div>
        <div className="  border-2 border-pink-100 mx-[2em] inline-block mt-10 mb-10 text-left">
          <tabel className="text-left ">
            <tbody>
              <tr className="">
                <th
                  scope="col"
                  className="h-[4em] border-b px-6 border-r border-pink-100 font-bold text-pink-600"
                >
                  S.no
                </th>
                <th
                  scope="col"
                  className="h-[4em]  border-b px-6 border-r border-pink-100 font-bold text-pink-600"
                >
                  Order Id
                </th>
                <th
                  scope="col"
                  className="h-[4em]  border-b px-6 border-r border-pink-100 font-bold text-pink-600"
                >
                  Product Image
                </th>
                <th
                  scope="col"
                  className="h-[4em]  border-b px-6 border-r border-pink-100 font-bold text-pink-600"
                >
                  Product Title
                </th>
                <th
                  scope="col"
                  className="h-[4em]  border-b px-6 border-r border-pink-100 font-bold text-pink-600"
                >
                  Product Price
                </th>
                <th
                  scope="col"
                  className="h-[4em]  border-b border-r px-6 border-pink-100 font-bold text-pink-600"
                >
                  Product Category
                </th>
                <th
                  scope="col"
                  className="h-[4em]  border-b border-r px-6 border-pink-100 font-bold text-pink-600"
                >
                  Product Quantity
                </th>
                <th
                  scope="col"
                  className="h-[4em] border-b border-r px-6 border-pink-100 font-bold text-pink-600"
                >
                  Total Price
                </th>
                <th
                  scope="col"
                  className="h-[4em] border-b px-6 border-r border-pink-100 font-bold text-pink-600"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="h-[4em] border-b px-6 border-r border-pink-100 font-bold text-pink-600"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="h-[4em] border-b px-6 border-r border-pink-100 font-bold text-pink-600"
                >
                  Address
                </th>
                <th
                  scope="col"
                  className="h-[4em]  border-b px-6 border-r border-pink-100 font-bold text-pink-600"
                >
                  Pincode
                </th>
                <th
                  scope="col"
                  className="h-[4em]  border-b px-6 border-r border-pink-100 font-bold text-pink-600"
                >
                  Phone Number
                </th>
                <th
                  scope="col"
                  className="h-[4em]  border-b px-6 border-r border-pink-100 font-bold text-pink-600"
                >
                  Email
                </th>
                <th
                  scope="col"
                  className="h-[4em]  border-b px-6 border-r border-pink-100 font-bold text-pink-600"
                >
                  Date
                </th>
                <th
                  scope="col"
                  className="h-[4em]  border-b px-6  border-pink-100 font-bold text-pink-600"
                >
                  Action
                </th>
              </tr>
              {orderproduct.map((order) => {
                const {
                  userid,
                  status,
                  Name,
                  Address,
                  email,
                  mobile,
                  Pincode,
                  date,
                } = order;

                return (
                  <>
                    {order.cartItems.map((item, index) => {
                      return (
                        <>
                          <tr key={index} className="text-center">
                            <td className="h-[5em] px-6 border-r border-pink-100 border-b ">
                              {index + 1}
                            </td>
                            <td className="h-[5em] px-6 border-r border-pink-100 border-b ">
                              {userid}
                            </td>
                            <td className="h-[5em] px-6 border-r border-pink-100 border-b ">
                              <img
                                src={item.productURL}
                                alt=""
                                className="w-20"
                              />
                            </td>
                            <td className="h-[5em]  border-r border-pink-100 border-b ">
                              {item.title}
                            </td>
                            <td className="h-[5em]  border-r border-pink-100 border-b ">
                              ₹ {item.price}
                            </td>
                            <td className="h-[5em]  border-r border-pink-100 border-b ">
                              {item.category}
                            </td>
                            <td className="h-[5em]  border-r border-pink-100 border-b ">
                              {item.quantity}
                            </td>
                            <td className="h-[5em]  border-r border-pink-100 border-b ">
                              ₹ {item.quantity * item.price}
                            </td>
                            <td className="h-[5em]  border-r border-pink-100 border-b ">
                              {status}
                            </td>
                            <td className="h-[5em]  border-r border-pink-100 border-b ">
                              {Name}
                            </td>
                            <td className="h-[5em]  border-r border-pink-100 border-b ">
                              {Address}
                            </td>
                            <td className="h-[5em]  border-r border-pink-100 border-b ">
                              {Pincode}
                            </td>
                            <td className="h-[5em] border-r border-pink-100 border-b ">
                              {mobile}
                            </td>
                            <td className="h-[5em]  border-r border-pink-100 border-b ">
                              {email}
                            </td>
                            <td className="h-[4em]  border-r border-pink-100 stroke-slate-500 text-slate-500 text-green-500 cursor-pointer text-md transition duration-300 border-b  ">
                              {date}
                            </td>
                            <td
                              onClick={() => deleteorderfunction(item.id)}
                              className="h-[4em] border-pink-100 border-b cursor-pointer"
                            >
                              Delete
                            </td>
                          </tr>
                        </>
                      );
                    })}
                  </>
                );
              })}
            </tbody>
          </tabel>
        </div>
      </div>
    </>
  );
}
export default OrderDetail;
