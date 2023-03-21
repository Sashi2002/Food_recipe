import Recipe from "../../components/recipies";
import Image from "next/image";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
const Req = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center flex-col text-2xl">
        <div className="flex w-full">
          <div className="w-3/5 my-10 mx-10 p-4  border-4 border-black border-solid">
            <div className="mb-6">
              <b>Which Dish Do you Want :-</b>
              <div>
                <hr className="w-full mt-2" />
              </div>
            </div>

            <div>
              <form className="ml-4">
                <div className="mb-10 h-10">
                  <div className="w-full flex items-center justify-between text-lg">
                    <label htmlFor="name">
                      <b>Dish Name</b>
                    </label>
                  </div>
                  <input
                    type="text"
                    className="h-10 border-[#e3e3e3] border-2 border-solid w-96 mt-1.5"
                  />
                </div>
                <div className="mb-10 h-10">
                  <div className="w-full flex items-center justify-between text-lg ">
                    <label htmlFor="email">
                      <b>E-Mail to Notify</b>
                    </label>
                  </div>
                  <input
                    type="email"
                    className="h-10 border-[#e3e3e3] border-2 border-solid w-96 mt-1.5"
                  />
                </div>
                <div className="mb-10 h-10">
                  <div className="w-full flex items-center justify-between text-lg">
                    <label htmlFor="subject">
                      <b>Specific Ingredients to Add</b>
                    </label>
                  </div>
                  <input
                    type="text"
                    className="h-10 border-[#e3e3e3] border-2 border-solid w-96 mt-1.5"
                  />
                </div>

                <div className="mb-10 h-10">
                  <div className="w-full flex items-center justify-between text-lg">
                    <label htmlFor="subject">
                      <b>Specific Ingredients not to Add</b>
                    </label>
                  </div>
                  <input
                    type="text"
                    className="h-10 border-[#e3e3e3] border-2 border-solid w-96 mt-1.5"
                  />
                </div>
                <div className="text-lg text-center">
                  <button className="bg-[#04aa6d] mt-5 mb-2 border-white rounded-lg border-none decoration-white w-1/5 h-10 text-white">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="w-2/5 my-10 p-4  mx-10 border-4 border-solid">
            <div className="mb-6">
              <b>Things to add On :-</b>
              <div>
                <hr className="w-full mt-2" />
              </div>
            </div>
            <div>
              <form className="ml-4">
                <div className="mb-20 h-10">
                  <div className="w-full flex items-center justify-between text-lg">
                    <label htmlFor="name">
                      <b>Suffering from any medical issue</b>
                    </label>
                  </div>
                  <input
                    type="text"
                    className="h-10 px-2 border-[#e3e3e3] border-2 border-solid w-96 mt-1.5 "
                    placeholder="YES/NO"
                  />
                </div>
                <div className="mb-20  h-10">
                  <div className="w-full flex items-center justify-between text-lg ">
                    <label htmlFor="text">
                      <b>Mention Issue</b>
                    </label>
                  </div>
                  <input
                    type="text"
                    className="h-10 px-2 border-[#e3e3e3] border-2 border-solid w-96 mt-1.5"
                    placeholder="Sugar, High-Bp"
                  />
                </div>
                <div className="mb-10 h-10">
                  <div className="w-full flex items-center justify-between text-lg">
                    <label htmlFor="subject">
                      <b>Sweet/Spicy</b>
                    </label>
                  </div>
                  <input
                    type="text"
                    className="h-10 px-2 border-[#e3e3e3] border-2 border-solid w-96 mt-1.5"
                    placeholder="enter your choice"
                  />
                </div>

                <div className="text-lg text-center  ">
                  <button className="bg-[#04aa6d] mt-5  mb-2 border-white rounded-lg border-none decoration-white w-1/5 h-10 text-white">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Req;
