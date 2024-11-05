import { useNavigate } from "react-router-dom";

const category = [
  {
    image: "https://cdn-icons-png.flaticon.com/256/4359/4359963.png",
    name: "fashion",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/256/11833/11833323.png",
    name: "shirt",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/256/8174/8174424.png",
    name: "jacket",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/256/7648/7648246.png",
    name: "mobile",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/256/12142/12142416.png",
    name: "laptop",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/256/10686/10686553.png",
    name: "shoes",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/256/12114/12114279.png",
    name: "home",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/256/11946/11946316.png",
    name: "books",
  },
];

function Category() {
  const navigate = useNavigate();
  return (
    <>
      <div className="px-10 py-5">
        <div className="flex gap-20 justify-center">
          {category.map((item, index) => {
            return (
              <>
                <div
                  onClick={() => {
                    navigate(`/categorypage/${item.name}`);
                  }}
                  key={index}
                  className=" w-24 h-24  border-black rounded-full bg-pink-500 flex  items-center flex-col"
                >
                  <img src={item.image} alt="" />
                  <h1 className=" mt-3 text-1xl font-bold">{item.name}</h1>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default Category;
