import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NoHome from "./pages/NoPage/NoPage";
import ScrollTop from "./components/ScrollTop/ScrollTop";
import CartPage from "./pages/CartPage/CartPage";
import AllProductPage from "./pages/AllProductPage/AllProductPage";
import Home from "./pages/HomePage/Home";
import ProductInfoPage from "./pages/ProductInfoPage/ProductInfoPage";
import UserDashBoard from "./pages/DashBoardsPage/UserDashBoard";
import AdminDashBoard from "./pages/DashBoardsPage/AdminDashBoard";
import AddProductPage from "./pages/DashBoardsPage/AddProductPage";
import UpdateProductPage from "./pages/DashBoardsPage/UpdateProductPage";
import { Toaster } from "react-hot-toast";
import MyState from "./components/context/myState";
import LoginPage from "./pages/RegistrationPage/LoginPage";
import SignUpPage from "./pages/RegistrationPage/SignUpPage";
import AdminProtectedRoute from "./ProtectedRoute/AdminProtectedRoute";
import UserProtectedRoute from "./ProtectedRoute/UserProtectedRoute";
import Category from "./pages/CategoryPage/Category";

function App() {
  return (
    <MyState>
      <Router>
        <ScrollTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<NoHome />} />
          <Route path="/productInfo/:id" element={<ProductInfoPage />} />
          <Route path="/cartpage" element={<CartPage />} />
          <Route path="/allproductpage" element={<AllProductPage />} />
          <Route path="/signuppage" element={<SignUpPage />} />
          <Route path="/loginpage" element={<LoginPage />} />
          <Route path="/categorypage/:categoryname" element={<Category />} />
          <Route
            path="/userdashboard"
            element={
              <UserProtectedRoute>
                <UserDashBoard />
              </UserProtectedRoute>
            }
          />
          <Route
            path="/admindashboard"
            element={
              <AdminProtectedRoute>
                {" "}
                <AdminDashBoard />
              </AdminProtectedRoute>
            }
          />
          <Route
            path="/addproductpage"
            element={
              <AdminProtectedRoute>
                <AddProductPage />
              </AdminProtectedRoute>
            }
          />
          <Route
            path="/updateproductpage/:id"
            element={
              <AdminProtectedRoute>
                <UpdateProductPage />
              </AdminProtectedRoute>
            }
          />
        </Routes>
        <Toaster />
      </Router>
    </MyState>
  );
}
export default App;
