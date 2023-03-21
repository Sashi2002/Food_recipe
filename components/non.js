import Link from "next/link";
import Image from "next/image";

const Non = () => {
  return (
    <div className="flex ">
      <Link href="">
        <div className="flex items-center justify-center w-64 h-64 duration-500 bg-[#A4036F] rounded-lg hover:items-start hover:pt-10 hover:h-96 hover:w-72">
          <div className="relative inline-block transition duration-500 ease-in-out group delay-10 hover:-translate-y-3 hover:scale-110">
            <div className="h-60 w-60">
              <img src="/images/ahh.jpg" className="w-full h-full" alt="" />
            </div>

            <div className="absolute hidden mt-4 font-semibold text-white text-m group-hover:block px-14">
              <span className="">Chicken Kabab</span>
              {/*<p className="mx-2 mt-2">Capacity: 3000</p>*/}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default Non;
