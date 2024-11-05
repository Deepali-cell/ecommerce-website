import { addDoc, collection, Timestamp } from "firebase/firestore";
import { useState } from "react";
import toast from "react-hot-toast";
import { fireDB } from "../../firebase/FirebaseConfig";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const categoryList = [
    {
      name: "fashion",
    },
    {
      name: "shirt",
    },
    {
      name: "jacket",
    },
    {
      name: "mobile",
    },
    {
      name: "laptop",
    },
    {
      name: "shoes",
    },
    {
      name: "home",
    },
    {
      name: "books",
    },
  ];
  const [product, setproduct] = useState({
    title: "",
    price: "",
    productURL: "",
    category: "",
    description: "",
    quantity: 1,
    time: Timestamp.now(),
    date: new Date().toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }),
  });

  const navigate = useNavigate();

  const addproductfunction = async () => {
    if (
      product.title === "" ||
      product.price === "" ||
      product.productURL === "" ||
      product.category === "" ||
      product.description === ""
    ) {
      return toast.error("All fields are required");
    }

    try {
      const productRef = collection(fireDB, "product");
      await addDoc(productRef, product);
      toast.success("Product Add successfully");
      navigate("/admindashboard");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="login_Form bg-pink-50 px-8 py-6 border border-pink-100 rounded-xl shadow-md">
          <div className="mb-5">
            <h2 className="text-center text-2xl font-bold text-pink-500 ">
              Add Product
            </h2>
          </div>

          {/* Input One  */}
          <div className="mb-3">
            <input
              type="text"
              placeholder="Product Title"
              name={product.title}
              onChange={(e) => {
                setproduct({
                  ...product,
                  title: e.target.value,
                });
              }}
              className="bg-pink-50 border border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-200"
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              placeholder="Product Price"
              name={product.price}
              onChange={(e) => {
                setproduct({
                  ...product,
                  price: e.target.value,
                });
              }}
              className="bg-pink-50 border border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-200"
            />
          </div>
          <div className="mb-5">
            <input
              type="text"
              placeholder="Product Image URL"
              name={product.productURL}
              onChange={(e) => {
                setproduct({
                  ...product,
                  productURL: e.target.value,
                });
              }}
              className="bg-pink-50 border border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-200"
            />
          </div>
          <div className="mb-5">
            <select
              name={product.category}
              onChange={(e) => {
                setproduct({
                  ...product,
                  category: e.target.value,
                });
              }}
              className="bg-pink-50 border border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-200 text-pink-200"
            >
              <option>Choose Product Category</option>
              {categoryList.map((item, index) => {
                const { name } = item;
                return (
                  <>
                    <option key={index} value={name} className="text-black">
                      {name}
                    </option>
                  </>
                );
              })}
            </select>
          </div>
          <div className="mb-5">
            <input
              type="text"
              placeholder="Product Description"
              name={product.description}
              onChange={(e) => {
                setproduct({
                  ...product,
                  description: e.target.value,
                });
              }}
              className="bg-pink-50 border border-pink-200 px-2 py-2 pb-20 w-96 rounded-md outline-none placeholder-pink-200"
            />
          </div>

          <div className="mb-5">
            <button
              type="button"
              onClick={addproductfunction}
              className="bg-pink-500 hover:bg-pink-600 w-full text-white text-center py-2 font-bold rounded-md "
            >
              Add Product
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default AddProduct;
