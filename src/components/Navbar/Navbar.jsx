import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import { useSelector } from "react-redux";

function Navbar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("users"));
  const logout = () => {
    localStorage.clear("users");
    navigate("/loginpage");
  };
  const cartItems = useSelector((state) => state.cart);

  return (
    <>
      <div className="flex justify-between items-center px-3 py-3 sticky top-0 bg-red-600 text-white  ">
        <div className="text-bold text-2xl">
          <a href="/">Deepali-Store</a>
        </div>
        <div>
          <ul className="flex gap-8 font-light">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/allproductpage">All Products</Link>
            </li>
            {!user ? (
              <li>
                <Link to="/signuppage">Signup</Link>
              </li>
            ) : (
              ""
            )}
            {!user ? (
              <li>
                <Link to="/loginpage">Login</Link>
              </li>
            ) : (
              ""
            )}
            {user?.role === "user" && (
              <li>
                <Link to="/userdashboard">{user?.name}</Link>
              </li>
            )}
            {user?.role === "admin" && (
              <li>
                <Link to="/admindashboard">Admin</Link>
              </li>
            )}
            {user && <li onClick={logout}>logout</li>}

            <li>
              <Link to="/cartpage">Cart ({cartItems.length})</Link>
            </li>
          </ul>
        </div>
        <div>
          <SearchBar />
        </div>
      </div>
    </>
  );
}
export default Navbar;
