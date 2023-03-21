import { useState } from "react";
import QRCode from "react-qr-code";
import window from "global/window";
import { useRouter } from "next/router";

// const { asPath } = useRouter();

const Navbar = () => {
  const [state, changeState] = useState(false);
  const router = useRouter();

  // const origin =
  //   typeof window !== 'undefined' && window.location.origin
  //     ? window.location.origin
  //     : '';

  // const URL = `${origin}${router.asPath}`;
  // console.log(URL);

  const [url, setUrl] = useState("sarthak");

  const changeHandler = () => {
    changeState(!state);
  };
  return (
    <>
      {state ? (
        <div className="absolute w-screen h-screen z-50 bg-white/75 flex justify-center items-center">
          <QRCode size={256} value="shareRecipe.com" viewBox={`0 0 256 256`} />
        </div>
      ) : (
        ""
      )}
      <nav className="flex items-center justify-between flex-wrap bg-white py-4 lg:px-12 shadow border-solid border-t-2 border-blue-700">
        <div className="flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 border-solid border-b-2 border-gray-300 pb-5 lg:pb-0">
          <div className="flex items-center flex-shrink-0 text-gray-800 mr-16">
            <a
              href="/shareRecipie"
              className="font-semibold text-xl tracking-tight"
            >
              Share Your Recipe Today
            </a>
          </div>
          <div className="block lg:hidden ">
            <button
              id="nav"
              className="flex items-center px-3 py-2 border-2 rounded text-blue-700 border-blue-700 hover:text-blue-700 hover:border-blue-700"
            >
              <svg
                className="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
        </div>

        <div className="menu w-full flex-grow lg:flex lg:items-center lg:w-auto lg:px-3 px-8">
          <div className="text-md font-bold text-blue-700 lg:flex-grow">
            <a
              href="/veg"
              className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2"
            >
              Veg
            </a>
            <a
              href="/nonVeg"
              className=" block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2"
            >
              Non-Veg
            </a>
            <a
              href="/egg"
              className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2"
            >
              Egg
            </a>
          </div>
          <div className="relative mx-auto text-gray-600 lg:block hidden">
            <input
              className="border-2 border-gray-300 bg-white h-10 pl-2 pr-8 rounded-lg text-sm focus:outline-none"
              type="search"
              name="search"
              placeholder="Search"
            />
          </div>
          <div class="flex ">
            <a
              href="/"
              className="block text-md px-4 py-2 rounded text-blue-700 ml-2 font-bold hover:text-white mt-4 hover:bg-blue-700 lg:mt-0"
            >
              Home
            </a>
            <a
              href="/request"
              className="block text-md px-4 py-2 rounded text-blue-700 ml-2 font-bold hover:text-white mt-4 hover:bg-blue-700 lg:mt-0"
            >
              Request
            </a>
            <a
              href="#"
              className="block text-md px-4 py-2 rounded text-blue-700 ml-2 font-bold hover:text-white mt-4 hover:bg-blue-700 lg:mt-0"
              onClick={changeHandler}
            >
              Share
            </a>

            <a
              href="#"
              className=" block text-md px-4  ml-2 py-2 rounded text-blue-700 font-bold hover:text-white mt-4 hover:bg-blue-700 lg:mt-0"
            >
              login
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
