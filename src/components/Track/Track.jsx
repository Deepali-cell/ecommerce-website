import bag from "../../assets/bag.png";

function Track() {
  return (
    <>
      <div className="m-10">
        <div className="flex flex-wrap justify-center items-center m-2 text-center">
          <div className=" border-gray-200 bg-gray-100 shadow-[inset_0_0_2px_rgba(0,0,0,0.6)] mx-5  rounded-md flex  items-center flex-col justify-center px-10 py-10 hover:shadow-xl hover:shadow-gray-300">
            <img src={bag} alt="" className="w-10 mb-3" />
            <h1>Premium T-Shirts</h1>
            <h1>Our Tshirts are 100% made of cotton.</h1>
          </div>
          <div className="border-gray-200 bg-gray-100 shadow-[inset_0_0_2px_rgba(0,0,0,0.6)] mx-5 rounded-md flex  items-center flex-col justify-center px-10 py-10 hover:shadow-xl hover:shadow-gray-300">
            {" "}
            <img src={bag} alt="" className="w-10 mb-3" />
            <h1>Premium T-Shirts</h1>
            <h1>Our Tshirts are 100% made of cotton.</h1>
          </div>
          <div className="border-gray-200 bg-gray-100 shadow-[inset_0_0_2px_rgba(0,0,0,0.6)] mx-5 rounded-md flex  items-center flex-col justify-center px-10 py-10 hover:shadow-xl hover:shadow-gray-300">
            {" "}
            <img src={bag} alt="" className="w-10 mb-3" />
            <h1>Premium T-Shirts</h1>
            <h1>Our Tshirts are 100% made of cotton.</h1>
          </div>
        </div>
      </div>
    </>
  );
}
export default Track;
