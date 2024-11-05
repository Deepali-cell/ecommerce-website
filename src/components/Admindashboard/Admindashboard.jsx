import img1 from "../../assets/testimonial1.png";
import { BsBasket2 } from "react-icons/bs";
import { GrUnorderedList } from "react-icons/gr";
import { HiOutlineUsers } from "react-icons/hi";
import { TabList, Tabs, Tab, TabPanel } from "react-tabs";
import OrderDetail from "./OrderDetail";
import UserDetail from "./UserDetail";
import DetailProduct from "./DetailProduct";
import { useContext } from "react";
import myContext from "../context/myContext";

function Admindashboard() {
  const user = JSON.parse(localStorage.getItem("users"));
  const context = useContext(myContext);
  const { addproduct, orderproduct, alluser } = context;
  return (
    <>
      <div className="flex justify-center flex-col px-20">
        <div className="top mt-10 px-[30em] py-[1em] rounded-2xl border-pink-100 bg-pink-100 flex flex-col  items-center">
          <h1 className="text-red-800 font-bold text-2xl">Admin Dashboard</h1>
        </div>
      </div>
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
      </div>
      <Tabs>
        <TabList className="flex px-20 gap-20 justify-center">
          <Tab className="flex justify-center flex-col outline-none ">
            <div className="top mt-10 rounded-2xl border bg-pink-50 hover:bg-pink-100 border-pink-100  flex flex-col  items-center px-[6em] py-[1em]">
              <BsBasket2 className=" text-red-800 text-[3em] mb-2" />
              <h1 className="text-red-800 font-bold text-2xl">
                {addproduct.length}
              </h1>
              <h1 className="text-red-800 font-bold">Total Product</h1>
            </div>
          </Tab>
          <Tab className="flex justify-center flex-col outline-none">
            <div className="top mt-10  rounded-2xl border bg-pink-50 hover:bg-pink-100 border-pink-100  flex flex-col  items-center px-[6em] py-[1em]">
              <GrUnorderedList className=" text-red-800 text-[3em] mb-2" />
              <h1 className="text-red-800 font-bold text-2xl">
                {orderproduct.length}
              </h1>
              <h1 className="text-red-800 font-bold">Total Order</h1>
            </div>
          </Tab>
          <Tab className="flex justify-center flex-col outline-none">
            <div className="top mt-10  rounded-2xl border bg-pink-50 hover:bg-pink-100 border-pink-100  flex flex-col  items-center px-[6em] py-[1em]">
              <HiOutlineUsers className=" text-red-800 text-[3em] mb-2" />
              <h1 className="text-red-800 font-bold text-2xl">
                {alluser.length}
              </h1>
              <h1 className="text-red-800 font-bold">Total Users</h1>
            </div>
          </Tab>
        </TabList>
        <TabPanel>
          <DetailProduct />
        </TabPanel>
        <TabPanel>
          <OrderDetail />
        </TabPanel>
        <TabPanel>
          <UserDetail />
        </TabPanel>
      </Tabs>
    </>
  );
}
export default Admindashboard;
