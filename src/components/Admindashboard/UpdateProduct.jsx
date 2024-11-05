import { useContext, useEffect, useState } from "react";
import myContext from "../../components/context/myContext";
import { useNavigate, useParams } from "react-router-dom";
import { doc, getDoc, setDoc, Timestamp } from "firebase/firestore";
import { fireDB } from "../../Firebase/FirebaseConfig";
import toast from "react-hot-toast";

function UpdateProduct() {
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

  const context = useContext(myContext);
  const { getadminaddproduct } = context;
  const navigate = useNavigate();
  const { id } = useParams();
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
  const getupdateproduct = async () => {
    try {
      const producttemp = await getDoc(doc(fireDB, "product", id));
      const product = producttemp.data();
      setproduct({
        title: product?.title,
        price: product?.price,
        productURL: product?.productURL,
        category: product?.category,
        description: product?.description,
        quantity: product?.quantity,
        time: product?.time,
        date: product?.date,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const updateproduct = async () => {
    try {
      await setDoc(doc(fireDB, "product", id), product);
      toast.success("Update Product Successfully");
      navigate("/admindashboard");
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getupdateproduct();
  }, []);
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="login_Form bg-pink-50 px-8 py-6 border border-pink-100 rounded-xl shadow-md">
          <div className="mb-5">
            <h2 className="text-center text-2xl font-bold text-pink-500 ">
              Update Product
            </h2>
          </div>

          <div className="mb-3">
            <input
              type="text"
              placeholder="Product Title"
              name="title"
              value={product.title}
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
              name="price"
              value={product.price}
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
              name="productURL"
              value={product.productURL}
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
              name="category"
              value={product.category}
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
              name="description"
              value={product.description}
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
              onClick={updateproduct}
              type="button"
              className="bg-pink-500 hover:bg-pink-600 w-full text-white text-center py-2 font-bold rounded-md "
            >
              Update Product
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default UpdateProduct;
