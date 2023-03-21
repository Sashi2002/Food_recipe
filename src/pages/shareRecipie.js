import Image from "next/image";
import Navbar from "../../components/navbar";
import Item from "../../components/item";
import Footer from "../../components/footer";
const Sr = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex justify-between align-items h-full w-full p-6 gap-8">
        <div className="w-8/12 h-[500px] border-4 flex flex-col justify-between text-3xl">
          <span className="p-3  ">Upload Photos/Videos</span>
          <hr></hr>
          <div className="flex justify-between h-full text-3xl"></div>
        </div>
        <div className="w-4/12 h-[500px] border-black border-4 ">
          <form className="flex justify-around items-center my-4">
            <label className=" text-[#30449e] text-xl">Recipe Name</label>
            <input className="p-3 border-solid w-64  border-2 rounded-full" />
          </form>

          <hr className="my-2"></hr>
          <div className="flex justify-between h-96 text-3xl">
            <form className="flex flex-col px-2 w-full">
              <label className=" text-[#30449e] text-xl">Steps to follow</label>
              <input className="mt-2 h-full  border-solid border-2 " />
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
export default Sr;
