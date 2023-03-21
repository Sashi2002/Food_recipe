import Non from "../../components/non";
import Image from "next/image";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

const nonVeg = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-evenly items-center my-8">
        <Non />
        <Non />
        <Non />
        <Non />
      </div>
      <div className="flex justify-evenly items-center my-8">
        <Non />
        <Non />
        <Non />
        <Non />
      </div>
      <Footer />
    </div>
  );
};
export default nonVeg;
