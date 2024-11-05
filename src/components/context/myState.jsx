import { useEffect, useState } from "react";
import MyContext from "./myContext";
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { fireDB } from "../../Firebase/FirebaseConfig";
import toast from "react-hot-toast";

function MyState({ children }) {
  const [loading, setLoading] = useState(false);
  const [addproduct, setaddproduct] = useState([]);

  const getadminaddproduct = async () => {
    try {
      const q = query(collection(fireDB, "product"), orderBy("time"));
      const data = onSnapshot(q, (QuerySnapshot) => {
        let productarray = [];
        QuerySnapshot.forEach((doc) => {
          productarray.push({ ...doc.data(), id: doc.id });
        });
        setaddproduct(productarray);
      });
      return () => data;
    } catch (error) {
      console.log(error);
    }
  };

  const [orderproduct, setorderproduct] = useState([]);

  const getorderproduct = async () => {
    try {
      const q = query(collection(fireDB, "order"), orderBy("time"));
      const data = onSnapshot(q, (QuerySnapshot) => {
        let orderproductarray = [];
        QuerySnapshot.forEach((doc) => {
          orderproductarray.push({ ...doc.data(), id: doc.id });
        });
        setorderproduct(orderproductarray);
      });
      return () => data;
    } catch (error) {
      console.log(error);
    }
  };

  const deleteorderfunction = async (id) => {
    try {
      await deleteDoc(doc(fireDB, "order", id));
      toast.success("Order delete successfuly");
      getorderproduct();
    } catch (error) {
      console.log(error);
    }
  };

  const [alluser, setalluser] = useState([]);

  const getalluser = async () => {
    try {
      const q = query(collection(fireDB, "user"), orderBy("time"));
      const data = onSnapshot(q, (QuerySnapshot) => {
        let alluserarray = [];
        QuerySnapshot.forEach((doc) => {
          alluserarray.push({ ...doc.data(), id: doc.id });
        });
        setalluser(alluserarray);
      });
      return () => data;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getadminaddproduct();
    getorderproduct();
    getalluser();
  }, []);
  return (
    <MyContext.Provider
      value={{
        loading,
        setLoading,
        addproduct,
        getadminaddproduct,
        orderproduct,
        deleteorderfunction,
        alluser,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}

export default MyState;
