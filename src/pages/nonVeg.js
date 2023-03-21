import Non from "../../components/non";
import Image from "next/image";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

const nonVeg = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Non />
      </div>
      <Footer />
    </div>
  );
};
export default nonVeg;
