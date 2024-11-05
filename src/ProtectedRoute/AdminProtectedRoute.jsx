import { Navigate } from "react-router-dom";

function AdminProtectedRoute({ children }) {
  const user = JSON.parse(localStorage.getItem("users"));
  if (user?.role === "admin") {
    return children;
  } else {
    return <Navigate to={"/loginpage"}></Navigate>;
  }
}
export default AdminProtectedRoute;
