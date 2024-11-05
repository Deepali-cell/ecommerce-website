import { useParams } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import CategoryProduct from "../../components/Category/CategoryProduct";

function Category() {
  const { categoryname } = useParams();
  return (
    <>
      <Layout>
        <CategoryProduct categoryname={categoryname} />
      </Layout>
    </>
  );
}
export default Category;
