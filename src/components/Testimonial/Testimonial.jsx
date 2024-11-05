import img1 from "../../assets/testimonial1.png";
import img2 from "../../assets/testimonial2.png";

function Testimonial() {
  return (
    <>
      <div className="mt-20 px-10 mb-20">
        <div className="text-center">
          <h1 className="font-bold text-3xl mb-2">Testimonial</h1>
          <p className="text-2xl ">
            What Our <span className="text-red-600"> Customers </span>are Saying
          </p>
        </div>
        <div className="flex mt-10">
          <div className="flex flex-col justify-center items-center px-5">
            <img src={img1} alt="" className="w-20 mb-5" />
            <p>
              Edison bulb retro cloud bread echo park, helvetica stumptown
              taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
              ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
              adaptogen squid fanny pack vaporware.
            </p>
            <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
            <h1 className="font-bold">Kamal Nayan Upadhyay</h1>
            <h1>Senior Product Designer</h1>
          </div>
          <div className="flex flex-col justify-center items-center px-5">
            <img src={img2} alt="" className="w-20 mb-5" />
            <p>
              Edison bulb retro cloud bread echo park, helvetica stumptown
              taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
              ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
              adaptogen squid fanny pack vaporware.
            </p>
            <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
            <h1 className="font-bold">S Mishra</h1>
            <h1>UI Develeoper</h1>
          </div>
          <div className="flex flex-col justify-center items-center px-5">
            <img src={img1} alt="" className="w-20 mb-5" />
            <p>
              Edison bulb retro cloud bread echo park, helvetica stumptown
              taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
              ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
              adaptogen squid fanny pack vaporware.
            </p>
            <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
            <h1 className="font-bold">XYZ</h1>
            <h1>CTO</h1>
          </div>
        </div>
      </div>
    </>
  );
}
export default Testimonial;
