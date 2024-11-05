import { Button, Dialog, DialogBody } from "@material-tailwind/react";
import { useState } from "react";
import { Timestamp } from "firebase/firestore";
import { addDoc, collection } from "firebase/firestore";
import { fireDB } from "../../firebase/FirebaseConfig";
import toast from "react-hot-toast";

const BuyNow = ({ cartItems }) => {
  const [open, setOpen] = useState(false);
  const [Name, setname] = useState("");
  const [Address, setaddress] = useState("");
  const [mobile, setmobile] = useState("");
  const [Pincode, setpincode] = useState("");
  const user = JSON.parse(localStorage.getItem("users"));

  const handleOpen = () => {
    setOpen(!open);
  };

  const buyNowFunction = () => {
    if (Name === "" || Address === "" || Pincode === "" || mobile === "") {
      return toast.error("All Fields are required");
    }

    const order = {
      cartItems,
      Name,
      Address,
      Pincode,
      mobile,
      email: user.email,
      userid: user.uid,
      status: "confirmed",
      time: Timestamp.now(),
      date: new Date().toLocaleString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }),
    };
    console.log(order);
    try {
      const orderRef = collection(fireDB, "order");
      addDoc(orderRef, order);
      setname("");
      setaddress("");
      setpincode("");
      setmobile("");
      toast.success("Order Placed Successfull");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Button
        type="button"
        onClick={handleOpen}
        className="w-full px-4 py-3 text-center text-gray-100 bg-pink-600 border border-transparent dark:border-gray-700 hover:border-pink-500 hover:text-pink-700 hover:bg-pink-100 rounded-xl"
      >
        Buy now
      </Button>
      <Dialog open={open} handler={handleOpen} className=" bg-pink-50">
        <DialogBody className="">
          <div className="mb-3">
            <input
              type="text"
              name="Name"
              value={Name}
              onChange={(e) => {
                setname(e.target.value);
              }}
              placeholder="Enter your name"
              className="bg-pink-50 border border-pink-200 px-2 py-2 w-full rounded-md outline-none text-pink-600 placeholder-pink-300"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              name="Address"
              value={Address}
              onChange={(e) => {
                setaddress(e.target.value);
              }}
              placeholder="Enter your address"
              className="bg-pink-50 border border-pink-200 px-2 py-2 w-full rounded-md outline-none text-pink-600 placeholder-pink-300"
            />
          </div>

          <div className="mb-3">
            <input
              type="number"
              name="Pincode"
              value={Pincode}
              onChange={(e) => {
                setpincode(e.target.value);
              }}
              placeholder="Enter your pincode"
              className="bg-pink-50 border border-pink-200 px-2 py-2 w-full rounded-md outline-none text-pink-600 text-pink-600 placeholder-pink-300"
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              name="mobile"
              value={mobile}
              onChange={(e) => {
                setmobile(e.target.value);
              }}
              placeholder="Enter your mobileNumber"
              className="bg-pink-50 border border-pink-200 px-2 py-2 w-full rounded-md outline-none text-pink-600 placeholder-pink-300"
            />
          </div>

          <div className="">
            <Button
              type="button"
              onClick={() => {
                handleOpen();
                buyNowFunction();
              }}
              className="w-full px-4 py-3 text-center text-gray-100 bg-pink-600 border border-transparent dark:border-gray-700 rounded-lg"
            >
              Buy now
            </Button>
          </div>
        </DialogBody>
      </Dialog>
    </>
  );
};

export default BuyNow;
