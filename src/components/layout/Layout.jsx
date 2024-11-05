import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className="main-content min-h-screen">{children}</div>
      <Footer />
    </>
  );
}
export default Layout;
