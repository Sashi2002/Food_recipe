import Image from "next/image";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { MdAttachEmail } from "react-icons/md";
import { FcPhone } from "react-icons/fc";
import { ImLocation2 } from "react-icons/im";
const Contest = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center flex-col text-2xl">
        <div className="flex w-full">
          <div className="w-3/5 my-10 mx-10 p-4  border-4 border-black border-solid">
            <div className="mb-6">
              <b>
                Task To Do & <span className="text-[#30449e] ">Earn</span>
              </b>
              <div>
                <hr className="w-full mt-2" />
              </div>
            </div>

            <div>
              <form className="ml-4  text-sm">
                <div className="mb-8 h-10 w-[500px] flex justify-around items-center">
                  <div className="w-full flex items-center justify-between text-lg">
                    <label htmlFor="name">
                      <b>Required Dish :-</b>
                    </label>
                  </div>
                  <span className="h-10 text-4xl w-96 text-[#07C731]">
                    <b>Biryani</b>
                  </span>
                </div>
                <div>
                  <hr className="w-full mt-2" />
                </div>
                <div className="my-2 h-10 flex justify-around items-center">
                  <div className="w-full flex items-center justify-between text-lg">
                    <label htmlFor="name">
                      <b>For :-</b>
                    </label>
                  </div>
                  <span className="nb w-[600px] text-[#30449e]">
                    <b>A Person who is suffering from Low BP</b>
                  </span>
                </div>
                <div>
                  <hr className="w-full mt-2" />
                </div>
                <div className="my-2 h-10 flex justify-around items-center">
                  <div className="w-full flex items-center justify-between text-lg">
                    <label htmlFor="name">
                      <b>Ingredients to add :-</b>
                    </label>
                  </div>
                  <span className="nb w-[600px] text-[#30449e]">
                    <b>
                      Gotta Garam Masala, fried onions, saffron, spiced water
                      for rice
                    </b>
                  </span>
                </div>
                <div>
                  <hr className="w-full mt-2" />
                </div>
                <div className="my-2 h-10 flex justify-around items-center">
                  <div className="w-full flex items-center justify-between text-lg">
                    <label htmlFor="name">
                      <b>Ingredients not to add :-</b>
                    </label>
                  </div>
                  <span className="nb w-[600px] text-[#30449e]">
                    <b>Don't add extra moisture, no overcooking of rice</b>
                  </span>
                </div>
                <div>
                  <hr className="w-full mt-2" />
                </div>
                <div className="my-2 h-10 flex justify-around items-center">
                  <div className="w-full flex items-center justify-between text-lg">
                    <label htmlFor="name">
                      <b>Contest Ends After - </b>
                    </label>
                  </div>
                  <span className="nb w-[600px] text-[#30449e]">
                    <b>Tomorrow at 3'O Clock</b>
                  </span>
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
            <div className="mb-6 text-center">
              <b>
                Upload Task &{" "}
                <span className="text-[#30449e] ">Win Upto 2k</span>
              </b>

              <div>
                <hr className="w-full mt-2" />
              </div>
            </div>
            <div>
              <div class="flex items-center justify-center w-full mt-20">
                <label
                  for="dropzone-file"
                  class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  <div class="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      aria-hidden="true"
                      class="w-10 h-10 mb-3 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      ></path>
                    </svg>
                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span class="font-semibold">Click to upload</span> or drag
                      and drop
                    </p>
                    <p class="text-xs text-gray-500 dark:text-gray-400">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                  <input id="dropzone-file" type="file" class="hidden" />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Contest;
