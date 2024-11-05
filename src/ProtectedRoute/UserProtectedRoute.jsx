import { Navigate } from "react-router-dom";

function UserProtectedRoute({ children }) {
  const user = JSON.parse(localStorage.getItem("users"));
  if (user?.role === "user") {
    return children;
  } else {
    return <Navigate to={"/loginpage"}></Navigate>;
  }
}
export default UserProtectedRoute;
