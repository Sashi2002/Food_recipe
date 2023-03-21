import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { ImYoutube } from "react-icons/im";
import { RxDotFilled } from "react-icons/rx";

function Footer() {
  return (
    <footer className=" bg-[#0f171e] w-full h-80">
      <div className="p-2">
        <div className="flex justify-center items-center mt-12 text-[#04aa6d] gap-11">
          <a href="#facebook" className="text-white">
            <FaFacebook size={30} />
          </a>
          <RxDotFilled />
          <a href="#twitter" className="text-white pl-6">
            <AiFillTwitterCircle size={30} />
          </a>
          <RxDotFilled size={30} />
          <a href="#instagram" className="text-white pr-4">
            <BsInstagram size={30} />
          </a>
          <RxDotFilled size={30} />
          <a href="#youtube" className="text-white pl-6">
            <ImYoutube size={30} />
          </a>
        </div>
        <div className="flex flex-col justify-center gap-10 items-center mt-12 w-full text-[#04aa6d]">
          <div className="flex gap-6 items-center">
            <span className="text-white">Login</span>
            <RxDotFilled />
            <span className="text-white">Request</span>
            <RxDotFilled />
            <span className="text-white">Contest</span>
            <RxDotFilled />
            <span className="text-white">Share</span>
          </div>
          <hr className="text-white/25 w-1/2" />
        </div>
      </div>
      <div className="mt-10 text-center ">
        <span className="text-white">
          <b>
            All Rights Reserved ©{" "}
            <span className="text-[#04aa6d]">Team 404</span>
          </b>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
