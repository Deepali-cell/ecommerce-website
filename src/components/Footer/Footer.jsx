import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="flex justify-between items-center px-3 py-3 sticky top-0 bg-red-600 text-white  ">
        <div className="flex items-center justify-center">
          <h1 className="text-bold text-2xl">Deepali-Store</h1>
          <span className="inline-block h-10 w-1 rounded mx-3 bg-white " />
          <p>&copy; 2024 store - @deepaliStore</p>
        </div>{" "}
        <div className="flex gap-5 text-2xl">
          <FaFacebook /> <FaTwitter /> <FaInstagramSquare /> <FaLinkedinIn />
        </div>
      </div>
    </>
  );
}
export default Footer;
