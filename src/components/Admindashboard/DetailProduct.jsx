import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import myContext from "../context/myContext";
import { deleteDoc, doc } from "firebase/firestore";
import { fireDB } from "../../Firebase/FirebaseConfig";
import toast from "react-hot-toast";

function DetailProduct() {
  const context = useContext(myContext);
  const { addproduct, getadminaddproduct } = context;
  const navigate = useNavigate();

  const deleteproductfunction = async (id) => {
    try {
      await deleteDoc(doc(fireDB, "product", id));
      toast.success("product delete successfuly");
      getadminaddproduct();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {" "}
      <div className="mt-10  text-pink-500">
        <div className="flex justify-between px-20">
          <h1 className=" text-3xl font-bold">All Products</h1>
          <Link
            to="/addproductpage"
            className="px-5 py-2 bg-pink-50 border border-pink-100 rounded-lg"
          >
            Add Product
          </Link>
        </div>
        <div className="  border-2 border-pink-100 mx-[9em] inline-block mt-10 mb-10 text-left">
          <tabel className="text-left ">
            <tbody>
              <tr className="">
                <th
                  scope="col"
                  className="h-[4em] w-[8em] px-6 border-b border-r border-pink-100 font-bold text-pink-600"
                >
                  S.no
                </th>
                <th
                  scope="col"
                  className="h-[4em] w-[20em] px-6 border-b border-r border-pink-100 font-bold text-pink-600"
                >
                  Product Image
                </th>
                <th
                  scope="col"
                  className="h-[4em] w-[20em] px-6 border-b border-r border-pink-100 font-bold text-pink-600"
                >
                  Product Title
                </th>
                <th
                  scope="col"
                  className="h-[4em] w-[20em] px-6 border-b border-r border-pink-100 font-bold text-pink-600"
                >
                  Product Price
                </th>
                <th
                  scope="col"
                  className="h-[4em] w-[20em] px-6 border-b border-r border-pink-100 font-bold text-pink-600"
                >
                  Product Category
                </th>
                <th
                  scope="col"
                  className="h-[4em] w-[20em] px-6 border-b border-r border-pink-100 font-bold text-pink-600"
                >
                  Product date
                </th>
                <th
                  scope="col"
                  className="h-[4em] w-[20em] px-6 border-b border-r border-pink-100 font-bold text-pink-600"
                >
                  Action
                </th>
                <th
                  scope="col"
                  className="h-[4em] w-[20em] px-6 border-b  border-pink-100 font-bold text-pink-600"
                >
                  Action
                </th>
              </tr>
              {addproduct.map((item, index) => {
                return (
                  <>
                    <tr key={index}>
                      <td className="h-[5em] px-6 border-r border-pink-100 border-b ">
                        {index + 1}
                      </td>
                      <td className="h-[5em] px-6 border-r border-pink-100 border-b ">
                        <img src={item.productURL} alt="" className="w-20" />
                      </td>
                      <td className="h-[5em] px-6 border-r border-pink-100 border-b ">
                        {item.title}
                      </td>
                      <td className="h-[5em] px-6 border-r border-pink-100 border-b ">
                        ₹ {item.price}
                      </td>
                      <td className="h-[5em] px-6 border-r border-pink-100 border-b ">
                        {item.category}
                      </td>
                      <td className="h-[5em] px-6 border-r border-pink-100 border-b ">
                        {item.date}
                      </td>
                      <td
                        onClick={() =>
                          navigate(`/updateproductpage/${item.id}`)
                        }
                        className="h-[4em] px-6 border-r border-pink-100 stroke-slate-500 text-slate-500 text-green-500 cursor-pointer text-md transition duration-300 border-b  "
                      >
                        Edit
                      </td>
                      <td
                        onClick={() => deleteproductfunction(item.id)}
                        className="h-[4em] px-6  border-pink-100 border-b cursor-pointer"
                      >
                        Delete
                      </td>
                    </tr>
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
export default DetailProduct;
