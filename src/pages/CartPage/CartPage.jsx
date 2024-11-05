import CartProduct from "../../components/CartProduct/CartProduct";
import Layout from "../../components/layout/Layout";
import ScrollTop from "../../components/ScrollTop/ScrollTop";

function CartPage() {
  return (
    <>
      <Layout>
        <ScrollTop />
        <CartProduct></CartProduct>
      </Layout>
    </>
  );
}
export default CartPage;
