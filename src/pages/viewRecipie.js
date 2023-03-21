import Image from "next/image";
import Navbar from "../../components/navbar";
import Item from "../../components/item";
import Footer from "../../components/footer";
const Vr = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex justify-between align-items h-full w-full p-6 gap-8">
        <div className="w-8/12 h-[500px] border-4 flex flex-col justify-between text-3xl">
          <span className="p-4 ">Upload Photos/Videos</span>
          <div className="flex justify-between text-3xl">
            <img
              src="https://veggiedesserts.com/wp-content/uploads/2021/04/paneer-butter-masala-sq.jpg"
              className="w-full h-[400px] object-cover object-center"
              alt=""
            />
          </div>
        </div>
        <div className="w-4/12 h-[500px] border-black border-4 ">
          <form className="flex justify-around items-center text-xl my-4">
            <label className=" text-[#30449e] text-xl">Recipe Name</label>
            <span className="p-2 px-4 border-solid w-64  border-2 rounded-full">
              Shahi Panner
            </span>
          </form>

          <hr className="my-2"></hr>
          <div className="flex justify-between h-96 text-3xl">
            <form className="flex flex-col px-2 w-full">
              <label className=" text-[#30449e] text-xl">Description</label>
              <span className="mt-2 p-2 h-full  border-solid border-2 text-[#07C731] text-2xl">
                Shahi paneer is very popular in northern India and originated
                from the Mughlai cuisine. This north Indian dish is liked by
                most of the people as it is a rich dish filled with spices,
                paneer and cream that makes it thick creamy and spicy to taste.
                The word Shahi means “Royalty
              </span>
            </form>
          </div>
        </div>
      </div>
      <div className=" my-10 mx-10 p-4  border-4 border-black border-solid">
        <form className="ml-4 flex justify-evenly my-4 ">
          <Item />
          <Item />
          <Item />
        </form>
        <div className="text-lg text-center">
          <button className="bg-[#04aa6d] mt-5 mb-2 border-white rounded-lg border-none decoration-white w-1/5 h-10 text-white">
            Submit
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Vr;
