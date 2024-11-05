import Category from "../../components/Category/Category";
import HeroSection from "../../components/HeroSection/HeroSection";
import HomeProductCard from "../../components/HomeProductCard/HomeProductCard";
import Layout from "../../components/layout/Layout";
import Testimonial from "../../components/Testimonial/Testimonial";
import Track from "../../components/Track/Track";

function Home() {
  return (
    <>
      <Layout>
        <HeroSection />
        <Category />
        <HomeProductCard />
        <Track />
        <Testimonial />
      </Layout>
    </>
  );
}
export default Home;
