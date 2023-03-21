import Image from "next/image";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Ing from "../../components/ingri";
const Education = () => {
  return (
    <div>
      <Navbar />
      <h1 className="text-center text-4xl text-semibold my-6 text-[#04aa6d]">
        Ingredients
      </h1>
      <Ing />
      <Footer />
    </div>
  );
};
export default Education;
